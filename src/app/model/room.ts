import {Participant} from './participant';

export interface Room {
  id: number;
  name: string;
  zoomUrl: string;
  meetingId: string;
  image: string;
  main?: boolean;
  participants?: Array<Participant>;
}
