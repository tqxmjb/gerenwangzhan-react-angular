import React,{ Component } from 'react'
import { Tooltip } from 'antd'
import QueueAnim from 'rc-queue-anim';
import '../style/csshake.css'
import touxiang from '../images/psb.jpg'

class About extends Component {
	
	render() {
		return (
			<div>
				
				<div className='mainContentTop'>
					
				</div>
				<div className='aboutMain'>
					<section className='aboutMainContent'>
						<figure>
							<QueueAnim interval={100} delay={200} duration={1000}>
							  <div key="1">
							  	<Tooltip title="This is Eryang." placement='right'>
								<img  className='shake' src={touxiang} width="130" height="130" title="This is Eryang" />
								 </Tooltip>
							  </div>
							  <div key="2">
							  	<figcaption>
									Name : Eryang<br />
									Age　: 25<br />
									Phone : 18332568259<br />
									Email : zhaoyang450@126.com
								</figcaption>
							  </div>
							</QueueAnim>

							
						</figure>
					</section>
				</div>
			</div>
		)
	}
}

export default About