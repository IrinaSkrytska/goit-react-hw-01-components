import propTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
    return (<div className={css.transactions__thumb}>
        <table className={css.transactions__table}>
        <thead className={css.transactions__thead}>
            <tr className={css.transaction__description}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
       </thead>

        {items.map(el =>
  < tbody className={css.transactions__value} key={el.id} >
    <tr>
    <td className={css.transactions__type}>{ el.type}</td>
    <td className={css.transactions__amount}>{ el.amount}</td>
    <td >{ el.currency}</td>
    </tr>
    <tr>
    <td className={css.transactions__type} >{ el.type}</td>
    <td className={css.transactions__amount} >{ el.amount}</td>
    <td className={css.transactions_}>{ el.currency}</td>
    </tr>
  </tbody>)}
           
    </table></div>)
        
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
   }))
}