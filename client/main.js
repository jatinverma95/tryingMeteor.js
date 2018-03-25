/*jshint strict:false */
/*jshint esversion: 6*/

import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import App from '../imports/ui/App.js';
import '../imports/startup/accounts-config';

Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});


