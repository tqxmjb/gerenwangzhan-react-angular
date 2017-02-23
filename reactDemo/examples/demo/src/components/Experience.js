import React,{ Component } from 'react'
import taiyue from '../images/taiyue.jpg'

class Experience extends Component {
	render() {
		return (
			<div>
				<div className='mainContentTop'>

				</div>
				<div className='experienceMain'>
					<div className='experienceMainL'>
						<img src={taiyue}  title='This is Taiyue' />
					</div>
					
					<div className='experienceMainR'>
						<p>
							就职公司 : 北京神州泰岳软件股份有限公司
						</p>
						<p>
							现任职位 : web前端工程师
							
						</p>
						<p>
							入职时间 : 2016.07.12 - 至今  
						</p>
						<p>
							公司介绍 : 神州泰岳软件股份有限公司成立于2001年，是首批创业板上市公司（300002），员工总人数逾四千，总资产规模59.07亿元。
						 </p>
						 <p>
							神州泰岳是国内领先的综合类软件产品及服务提供商，着力于用信息技术手段推动行业发展和社会进步，提升人们工作和生活品质。自公司成立以来，始终以市场为导向，深耕细作、创新拓展，形成了以“ICT运营管理”、“手机游戏”、“人工智能与大数据”、“物联网与通讯技术应用”为核心的相关多元化发展格局。
						 </p>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience