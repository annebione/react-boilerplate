import React from 'react';
import { Route, indexRoute} from 'react-router';
import { render } from 'react-dom';


module.exports = {
	<Route path="/" component={App}>
	  <indexRoute component={Home}/>
	  <Route path="/user" component={User}/>
	    <Route path="/user/profile/:userId" component={User}/>
	  </Route>
	</Route>
}