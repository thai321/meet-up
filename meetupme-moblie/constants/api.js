import axios from 'axios';
import { Platform } from 'react-native';

let url;

if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '59d9443f16ea181e3b096ee4';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);

    return data.meetups; //meetups from the model
  }
}

export { MeetupApi };
