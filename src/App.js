import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {/* Budget component */}
                    <div className='col-sm'>
                        <Budget />
                    </div>       

                    {/* Remaining component */}
                    <div className='col-sm'>
                        <Remaining />
                    </div>        

                    {/* ExpenseTotal component */}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    {/* CurrencyDropdown component */}
                    <div className='col-sm'>
                        <CurrencyDropdown />
                    </div>
                    <h2>Allocation</h2>
                    {/* ExpenseList component */}
                    <ExpenseList />
                    <h2>Change allocations</h2>
                    {/* AllocationForm component */}
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
