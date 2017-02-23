import React from 'react'
import { Router,hashHistory,Route, IndexRoute } from 'react-router'
import SideNav from '../components/SideNav'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'



 class Routes extends React.Component {
 	render(){
 		return (
 			<Router history={hashHistory}>
				<Route path='/' component={SideNav}>
				  <IndexRoute   component={About}/>
				  <Route path='/Experience' component={Experience}/>
				  <Route path='/Education' component={Education}/>
				  <Route path='/Skills' component={Skills}/>
				  <Route path='/Projects' component={Projects}/>
				  <Route path='/Contact' component={Contact}/>
				</Route>
			</Router>
 			
 		)
 	}
 }
export default Routes