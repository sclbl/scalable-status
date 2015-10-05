Template.form.events({
  'submit form': function (event, template) {
    event.preventDefault();

    Status.insert({ body: template.find('input[type="Text"]').value, createdAt: new Date() });

    template.find('input[type="Text"]').value = '';
  }
});
