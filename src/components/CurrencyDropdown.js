import { useContext, useState } from 'react';
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
  const { currency, currencyList, dispatch } = useContext(AppContext);
  const [targetCurrency, setTargetCurrency] = useState(currencyList.find(x => x.currency === currency));
  const [isShow, setIsShow] = useState(false);
  const [menuClass, setMenuClass] = useState(isShow ? 'dropdown-menu show' : 'dropdown-menu')

  const handleToggle = (show) => {
    setIsShow(show);
    setMenuClass(show ? 'dropdown-menu ddl-panel show' : 'dropdown-menu ddl-panel');
  };

  const handleItemClick = (item) => {
    handleToggle(!isShow);
    setTargetCurrency(item);
    dispatch({
      type: 'CHG_CURRENCY',
      payload: item.currency
    });
  };

  return (
    <div className="dropdown">
      <button className="btn dropdown-toggle ddl-btn" onClick={() => handleToggle(!isShow)}>
        Currency({targetCurrency.currency}{targetCurrency.name})
      </button>
      <div className={menuClass}>
        {
          currencyList.map(x => {
            return <a className="dropdown-item" key={x.currency} onClick={() => handleItemClick(x)}>{x.currency}{x.name}</a>
          })
        }
      </div>
    </div>
    
  );
};

export default CurrencyDropdown;