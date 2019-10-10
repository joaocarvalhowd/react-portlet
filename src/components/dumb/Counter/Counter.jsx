import React from 'react';

const Counter = ({ counter, add, subtract }) => (
	<div>
		Counter is { counter }
		<button onClick={ add }>Add</button>
		<button onClick={ subtract }>Subtract</button>
	</div>
);

export default Counter;
