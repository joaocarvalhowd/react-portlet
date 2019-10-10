import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { urlParts } from 'helpers/url';
import routes from 'routes/routes';

export default () => (
	<Router basename={ urlParts.basename }>
		{ routes }
	</Router>
);
