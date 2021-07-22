import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const datapointValue = props.datapoints.map( datapoint =>  datapoint.value);
    const totalMaxValue = Math.max(...datapointValue);

   return (<div className="chart">
        {props.datapoints.map(datapoint =>(
            <ChartBar
              key={datapoint.label}
              value={datapoint.value}
              maxValue={totalMaxValue}
              label={datapoint.label}
            />
        ))}     
       
    </div>)

   
}

export default Chart