/**
 * If you do not want to use React Router, change the
 * 'Router' here to any component you want to render.
 *
 * Don't forget to do the same thing in
 * both index.dev and index.prod
 */

import React from 'react';
import Router from 'routes/router';

const Index = initProps => (
	<div>Hello world</div>
);

module.exports = {
	reactComponent: Index
};
