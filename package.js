Package.describe({
  name: 'williamledoux:bootstrap-toggle',
  version: '2.2.1',
  summary: 'Bootstrap Toggle Meteor component',
  git: 'https://github.com/williamledoux/meteor-bootstrap-toggle.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use("templating");
  api.versionsFrom('1.0.3.1');
  api.addFiles('bootstrap-toggle/css/bootstrap-toggle.min.css', 'client');
  api.addFiles('bootstrap-toggle/js/bootstrap-toggle.min.js', 'client');
  api.addFiles('component/component.html', 'client');
  api.addFiles('component/component.js', 'client');
});