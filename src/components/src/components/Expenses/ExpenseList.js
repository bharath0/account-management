import ExpenseItems from './ExpenseItems';
import './ExpenseList.css';

const ExpenseList = (props)=>{
    let  expenseContent = <h2 className='expenses-list__fallback'>Found no expenses.</h2>;

    if(props.expenseList.length> 0){
        expenseContent = props.expenseList.map(expense => <ExpenseItems  key= {expense.id} title= {expense.title} price={expense.price} date={expense.date} qty = {expense.qty}/>);
    }

    return <ul className='expenses-list'>
          {expenseContent}
    </ul>
}

export default ExpenseList