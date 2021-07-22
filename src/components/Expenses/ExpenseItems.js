import React ,{useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItems(props) {

    const [title,  setTitle] = useState(props.title);

    const updateTitle = () =>{    
        setTitle("Updated") ;           
    }

    return (<Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2 className="expense-item h2">{title}</h2>
        </div>
        <div className="expense-item__qty">{props.qty}</div>
        <div className="expense-item__price">Rs.{props.price}</div>
        <button className="expense_actions" onClick={updateTitle}>Change ITEM</button>
    </Card>);
}

export default ExpenseItems