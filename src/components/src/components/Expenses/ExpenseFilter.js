import React ,{useState} from 'react';
import './ExpenseFilter.css';
import LiterCombo from '../UI/LiterCombo';


const INITIAL_DATA = {
    year :'',
    qty : ''
};

const ExpenseFilter = (props) =>{
    const comboValue = ["2020","2021","2019","2020"];    
    const [filterData, setFilterData] = useState(props.filterItemData);
    
  
    const onChangeYearFilterHandler =  (event)=>{
        console.log(event.target.value);
         setFilterData({
            year : event.target.value,
         
         });
        /* await setFilterData((prevState) =>{
            return {
                ...prevState,               
                year:event.target.value
            }
         });*/
        console.log(filterData);
         props.onChangeFilter(filterData);
      //  props.onChangeFilter(event.target.value)

    };

    const onselectLiterFilterHanlder =  async (selectedQty) =>{
        await setFilterData((prevState) =>{
            return {
                ...prevState,
                qty:selectedQty
            }
        })
        await props.onChangeFilter(filterData);
    }

  return (
      <div className="filter-control">
            <div className="filter-controls">
                <label>Filter by year</label>
                <LiterCombo onselectLiterFilter={onselectLiterFilterHanlder}></LiterCombo>
                <select name="year" id="year" onChange={onChangeYearFilterHandler}>
                {comboValue.map( (data,index) => <option key={index} value={data}>{data}</option>)}          
                </select>
                <div>{JSON.stringify(filterData)}</div>
            </div>            
      </div>
  )
}

export default ExpenseFilter