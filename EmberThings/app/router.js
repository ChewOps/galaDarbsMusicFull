
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType, //informācija paņemta no config
  rootURL: config.rootURL
});

Router.map(function() { //nevarēs link-to no template failiem, ja nav minēti šeit
  this.route('song');
  this.route('about');
  this.route('new');
  this.route('search');
  this.route('edit', {
      path: ":song_id"
  });
});

export default Router;
