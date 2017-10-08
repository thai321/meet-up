import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

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
