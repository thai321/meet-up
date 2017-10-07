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

// Create a meetup and add it to the meetups array in the group
GroupSchema.statics.addMeetup = async function(id, args) {
  // user the same name as Meetup model
  const Meetup = mongoose.model('Meetup');
  // console.log(id, args);

  // We add the group id to the meetup group element
  // Finally this is the author of the meetup
  const meetup = await new Meetup({ ...args, group: id });
  // console.log('MEETUP', meetup);

  // We found the group with the id provide in the url
  // And we push the meetup id in the meetups element
  const group = await this.findByIdAndUpdate(id, {
    $push: { meetups: meetup.id }
  });
  // console.log(group);
  // console.log(args);
  // group.meetups.push(meetup);

  // const result = await Promise.all([meetup.save(), group.save()]);

  // return result;

  return {
    meetup: await meetup.save(),
    group
  };
};

export default mongoose.model('Group', GroupSchema);
