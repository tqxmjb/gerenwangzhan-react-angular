import React, { Component } from 'react'
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import touxiang from '../images/psb.jpg'
import '../style/style.css'

class Links extends Component {
	constructor(props) {
	    super(props);
	    this.animation = {
	      d: 'M60,10L60,90L140,90L140,10Z',
	      yoyo: true, 
	      repeat: -1, 
	      duration: 1000,
	    };
	    this.state = {
	      tweenData: '100%',
	    };
	  }
	render() {
		return(
			<div>
	 			<div className='sideNav'>
	 				<div className="top">
	 						<img src={touxiang} title="This is Eryang" />
	 				</div>
		 			<ul>
			 			 <QueueAnim animConfig={{ translateX: [0, -100] }} type='scaleX'>
							<li key="1"><Link to="/">About</Link></li>
							<li key="2"><Link to="/Experience">Experience</Link></li>
						    <li key="3"><Link to='/Education'>Education</Link></li>
						    <li key="4"><Link to="/Skills">Skills</Link></li>
						    <li key="5"><Link to="/Projects">Projects</Link></li>
						    <li key="6"><Link to='/Contact'>Contact</Link></li>
						  </QueueAnim>
					 </ul>
		 		</div>
		 		<div className='mainContent'>
		 			{this.props.children}
		 		</div>
 			</div>
		)
	}
}

export default Links