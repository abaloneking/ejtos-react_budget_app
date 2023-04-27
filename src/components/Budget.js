
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const changeEvent = (value) => {
        if(value < totalExpenses) {
          alert('You cannot reduce the budget value lower than the spending.');
          return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" value={budget} onChange={(event) => changeEvent(event.target.value)} />
            </span>
        </div>
    );
};
export default Budget;