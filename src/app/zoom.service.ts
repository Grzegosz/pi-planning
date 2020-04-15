import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participants} from './model/participants';

@Injectable()
export class ZoomService {
  constructor(private http: HttpClient) {
  }

  // zoomApiUrl = 'BACKEND_URL_HERE';
  zoomApiUrl = 'http://localhost:3000/v2/';
  participantsPath = 'metrics/meetings/{meetingId}/participants?page_size=300';

  getParticipants(meetingId: string) {
    return this.http.get<Participants>(this.zoomApiUrl + this.participantsPath.replace('{meetingId}', meetingId));
  }
}
