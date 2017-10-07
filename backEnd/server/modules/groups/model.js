import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: [5, 'Name mus tbe 5 characters long']
    },
    description: {
      type: String,
      required: true,
      minLength: [10, 'Description must be 10 characters long']
    },
    categroy: {
      type: String
    },
    meetups: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Meetup'
      }
    ]
  },
  { timestamps: true }
);

GroupSchema.statics.addMeetup = async function(id, args) {
  // user the same name as Meetup model
  const Meetup = mongoose.model('Meetup');
  // console.log(id, args);

  const group = await this.findById(id);
  // console.log(group);
  // console.log(args);

  //
  const meetup = await new Meetup({ ...args, group });
  // console.log('MEETUP', meetup);
  group.meetups.push(meetup);

  const result = await Promise.all([meetup.save(), group.save()]);

  return result;
};

export default mongoose.model('Group', GroupSchema);
