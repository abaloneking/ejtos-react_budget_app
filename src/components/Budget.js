
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, expenses, dispatch } = useContext(AppContext);
    const [tmpBudget, setTmpBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const changeEvent = (value) => {
        if(value > totalExpenses) {
            setTmpBudget(0);
            alert("The value cannot exceed amount spent £"+totalExpenses);
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        } else if(value > 20000) {

        } else {
            setTmpBudget(value);
        }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" value={tmpBudget} onChange={(event) => changeEvent(event.target.value)} />
            </span>
        </div>
    );
};
export default Budget;