import React, { Component } from 'react';
import { CounterButton } from 'components';
import Helmet from 'react-helmet';

export default class Home extends Component {
	render() {
		const styles = require('./Home.scss');
		return (
			<div className={styles.home}>
				<Helmet title="Home"/>

				<div className="container">
					<div className={styles.counterContainer}>
						<CounterButton multireducerKey="counter1"/>
						<CounterButton multireducerKey="counter2"/>
						<CounterButton multireducerKey="counter3"/>
					</div>

					<p>Testing 1 1 1</p>


					<h3>Features demonstrated in this project</h3>

					<dl>
						<dt>Multiple components subscribing to same redux store slice</dt>
						<dd>
							The <code>App.js</code> that wraps all the pages contains an <code>InfoBar</code> component
							that fetches data from the server initially, but allows for the user to refresh the data from
							the client. <code>About.js</code> contains a <code>MiniInfoBar</code> that displays the same
							data.
						</dd>
						<dt>Server-side data loading</dt>
					</dl>

					<h3>From the author</h3>

				</div>
			</div>
		);
	}
}
