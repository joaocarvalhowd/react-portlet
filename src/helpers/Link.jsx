import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { createURL } from 'helpers/url';

/**
 * Custom Link component which makes sure the URLs
 * are transformed correctly. Use as you would use the
 * regular react-router Link component with one difference:
 * 'to' must be a string and can not be an object
 */
const Link = ({ children, to, ...rest }) => (
	<RRLink { ...rest } to={ createURL(to) }>{children}</RRLink>
);

export default Link;
