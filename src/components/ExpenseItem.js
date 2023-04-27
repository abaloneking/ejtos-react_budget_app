import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button className="add op-btn" onClick={()=> increaseAllocation(props.name)}>
              <TiPlus size='1.5em'></TiPlus>
            </button>
        </td>
        <td>
          <button className="del op-btn" onClick={()=> decreaseAllocation(props.name)}>
            <TiMinus size="1.5em"></TiMinus>
          </button>
          </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;