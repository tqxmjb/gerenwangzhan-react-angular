import React,{ Component } from 'react'
import { notification   } from 'antd'
import QueueAnim from 'rc-queue-anim';
import '../style/csshake.css'
import project1 from '../images/project3.png'
import project5 from '../images/project5.png'
import project6 from '../images/project6.png'
import project9 from '../images/project9.png'
import project10 from '../images/project10.png'
import project11 from '../images/project11.png'

class Projects extends Component {
	handleClick(){
		notification.open({
		    message: '欢迎光临二羊个人网站',
		    description: '项目链接错误，非常抱歉，给您带来的不便.',
		    duration:4,
		    placement: 'topRight',
		  });
	}
	render(){
		return (
			<div>
				<div className='mainContentTop'>
					
				</div>
				<ul className='projectMain'>
					 <QueueAnim component="ul"  type="scaleY">
				        <li key='1' onClick={this.handleClick}>
							<img  className='shake shake-slow' src={project1} title='This is project1' />
						</li>
						<li key='2' onClick={this.handleClick}>
							<img className='shake shake-slow' src={project5} title='This is project2 '/>
						</li>
						<li key='3' onClick={this.handleClick}>
							<img className='shake shake-slow' src={project6} title='This is project3' />
						</li>
						<li key='4' onClick={this.handleClick}>
							<img className='shake shake-slow' src={project9} title='This is project4' />
						</li>
						<li key='5' onClick={this.handleClick}>
							<img className='shake shake-slow' src={project10} title='This is project5' />
						</li>
						<li key='6' onClick={this.handleClick}>
							<img className='shake shake-slow' src={project11} title='This is project6' />
						</li>
				     </QueueAnim>
				</ul>
			</div>
		)
	}
}


export default Projects