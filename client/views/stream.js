Template.stream.events({
  'click [data-action=remove]': function (event, template) {
    if (confirm('Do you really want to remove this status update?')) {
      Status.remove({ _id: this._id });
    }
  }
});

Template.stream.helpers({
  status: () => {
    return Status.find({}, { sort: { createdAt: -1 } });
  },

  formattedCreatedAt: (createdAt) => {
    const ONE_HOUR = 60 * 60 * 1000;
    if (((new Date) - createdAt) < ONE_HOUR) {
      return moment(createdAt).fromNow();
    }
    return moment(createdAt).format('LLL');
  }
});
