//import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({

	model: function() {
		return this.store.findAll('song'); //nepieciešams norādīt return, lai būtu iespējams strādāt ar datiem no datubāzes
	}
	
});
