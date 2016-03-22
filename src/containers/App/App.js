import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { InfoBar } from 'components';
import { routeActions } from 'react-router-redux';
import { Link } from 'react-router';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
	promise: ({store: {dispatch, getState}}) => {
		const promises = [];

		if (!isInfoLoaded(getState())) {
			promises.push(dispatch(loadInfo()));
		}

		return Promise.all(promises);
	}
}])

@connect(
	state => ({state}),
	{pushState: routeActions.push})

export default class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired,
		pushState: PropTypes.func.isRequired
	};

	static contextTypes = {
		store: PropTypes.object.isRequired
	};

	render() {
		// const {user} = this.props;
		const styles = require('./App.scss');

		return (
			<div className={styles.app}>
				<Helmet {...config.app.head}/>
				<div>Header placeholder</div>
				<div className={styles.pagename}>
					<h1>
						<a href="">
							<span className={styles.highlight}>FT</span>
							Alphaville
						</a>
					</h1>
				</div>
				<ul className={styles.nav}>
					<li><Link to={'/'}>Home</Link></li>
					<li><Link to={'/about'}>About</Link></li>
					<li><Link to={'/asdf'}>Not found</Link></li>
				</ul>

				<div className={styles.appContent}>
					{this.props.children}
				</div>
				<InfoBar/>
				<div>Footer Placeholder</div>
			</div>
		);
	}
}
