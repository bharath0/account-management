import React, {useState} from 'react';
import ExpenseItems from './ExpenseItems';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props){
    const [filterYear, setFilterYear] = useState('2020');
    const [filterQty, setFilterQty] = useState('1L');

    const filterData = {
        year: filterYear,
        qty : filterQty
    }

    const filterChangeHandler = (selectedYear) =>{
        setFilterYear(selectedYear.year);
        setFilterQty(selectedYear.qty);
       // setFilterYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
       // return expense.date.getFullYear().toString() === filterYear ; 
        return expense.date.getFullYear().toString() === filterYear  && expense.qty === filterQty; 

      });   

 return (     
     <Card className="expenses">
         <ExpenseFilter  selected = {filterYear} onChangeFilter={filterChangeHandler}  filterItemData ={filterData}/>
         <ExpenseChart expenseItems = {filteredExpenses}/>
         <ExpenseList  expenseList ={filteredExpenses}/>
     </Card>   
        // {filteredExpenses.length === 0 ? <p>No Data found</p> : filteredExpenses.map(expense => <ExpenseItems  key= {expense.id} title= {expense.title} price={expense.price} date={expense.date}/>)}
        // {filteredExpenses.map(expense => <ExpenseItems  key= {expense.id} title= {expense.title} price={expense.price} date={expense.date}/>)}    
 );

/* <ExpenseItems title={props.items[0].title} price={props.items[0].price} date={props.items[0].date}></ExpenseItems>
    <ExpenseItems title={props.items[1].title} price={props.items[1].price} date={props.items[1].date}></ExpenseItems>
    <ExpenseItems title={props.items[2].title} price={props.items[2].price} date={props.items[2].date}></ExpenseItems>
    <ExpenseItems title={props.items[3].title} price={props.items[3].price} date={props.items[3].date}></ExpenseItems>*/
}

export default Expenses