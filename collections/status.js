Status = new Mongo.Collection('status');

Status.allow({
  insert: (userId, document) => {
    if (document.body.length !== 0) {
      return true;
    }
  },

  remove: (userId, document) => {
    return true;
  }
});
