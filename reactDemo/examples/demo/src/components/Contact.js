import React, { Component } from 'react'
import { Form, Input, Select, Radio, Button, Modal } from 'antd';
import QueueAnim from 'rc-queue-anim';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import '../style/ant.css'
import '../style/style.css'

class Contact extends Component {
	render() {
		return(
			<div>
				<div className='mainContentTop'>
						
				</div>
				<div className='contactMain'>
					<Form>
						<QueueAnim>
							<Input  key='1' type='input' placeholder='Your Name' />
							 <Select key='2'
							    showSearch
							    style={{ width: '100%',marginTop:'5%',textIndent:10}}
							    placeholder="Select a city"
							    optionFilterProp="children"
							    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							  >
							    <Option value="北京">北京</Option>
							    <Option value="天津">天津</Option>
							    <Option value="上海">上海</Option>
							    <Option value="杭州">杭州</Option>
							    <Option value="深圳">深圳</Option>
							    
							  </Select>
							 <RadioGroup key='3' style={{marginTop:'5%',textAlign:'center'}}>
						      <RadioButton style={{width:100}} value="a">男</RadioButton>
						      <RadioButton style={{width:100}} value="b">女</RadioButton>
						    </RadioGroup>
							<Input key='4' type='textarea' placeholder='Please enter a message.' />
							<p key='5'>
								<Button type="primary">提交</Button>
								<Button type="danger">重置</Button>
							</p>
						</QueueAnim>
					</Form>
					 
				</div>
			</div>
		)
	}
}

export default Contact