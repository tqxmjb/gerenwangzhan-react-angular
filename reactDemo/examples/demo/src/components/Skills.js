import React from 'react';
import ReactEcharts from 'echarts-for-react';
import '../style/style.css'

const chartOption = {
  title: { text: '' },
  tooltip: {
  	show:true,
  	formatter :function(data){
  		return data.name + '：' + data.value +'%'
  	},
  	backgroundColor :'#14c8d4'
  },
  xAxis: {
    data: ["html5+css3","Jquery","Angular","React","Mui","Bootstrap","Echarts",'Lodash']
  },
  yAxis: {
  	max:100
  },
  series: [{
      name: '掌握率',
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                color:'#14c8d4'
            }
        },
    barMaxWidth :'60%',
    data: [60, 50, 55, 30, 60, 50,60,30]
  }]
};
export default class Skills extends React.Component{
  constructor(props){
    super(props);
  }
  onResizeChart(){
  }
  componentDidMount(){
  }
  render(){
    return(
    	<div>
    		<div className='mainContentTop'>
				
				</div>
    		 <div className="chartContent">
		        <ReactEcharts option={chartOption} style={{height: '500px', width: '100%'}}>
		        </ReactEcharts>
	      </div>
    	
    	</div>
     
    )
  }
}
