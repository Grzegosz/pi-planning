import {Component, OnInit} from '@angular/core';
import roomsData from './../../assets/room.config.json';
import avatarsData from './../../assets/avatars.config.json';
import {Room} from '../model/room';
import {ZoomService} from '../zoom.service';
import {Avatar} from '../model/avatar';

@Component({
  selector: 'app-welcome',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})

export class PlanComponent implements OnInit {
  constructor(private zoomService: ZoomService) {
  }

  rooms: Array<Room> = roomsData;
  avatars: Array<Avatar> = avatarsData;

  ngOnInit() {
    this.refreshData();
    // Pull data very 60 seconds
    setInterval(() => this.refreshData(), 60 * 1000);
  }

  refreshData() {
    this.rooms.forEach(room => {
      this.zoomService.getParticipants(room.meetingId)
        .subscribe(data => {
            data.participants.forEach(user => {
              const foundAvatar = this.avatars.find(a => a.name === user.user_name);
              if (typeof foundAvatar !== 'undefined') {
                user.avatar = this.resolveAvatarLocation(foundAvatar.avatar);
              }
            });
            room.participants = data.participants;
          },
          error => console.log('Error!', error));
    });
  }

  resolveAvatarLocation(avatar) {
    if (!avatar.includes('http')) {
      return '../../assets/images/avatars/' + avatar;
    }

    return avatar;
  }
}
