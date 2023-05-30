import { useSelector } from 'react-redux';
import { selectTransaction } from '../../redux/selector';
import css from './TransactionList.module.css';
import clsx from 'clsx';
import sprite from '../../assets/icon/sprite.svg';

const TransactionList = () => {
  const transactions = useSelector(selectTransaction);

  return (
    <div className={css.container}>
      <table className={css.transactionTable}>
        <thead className={css.tableHead}>
          <tr>
            <th className={css.tableHeader}>Date</th>
            <th className={css.tableHeader}>Type</th>
            <th className={css.tableHeader}>Category</th>
            <th className={css.tableHeader}>Comment</th>
            <th className={css.tableHeader}>Sum</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              {Object.keys(transaction).map((key) => {
                if (key !== 'Owner') {
                  return (
                    <td
                      key={key}
                      className={clsx(css.tableData, {
                        [css.plus]: transaction.Type === '+' && key === 'Sum',
                        [css.minus]: transaction.Type === '-' && key === 'Sum',
                      })}
                    >
                      {transaction[key]}
                    </td>
                  );
                }
                return null;
              })}
              <td className={css.tableData}>
                <div className={css.wrapper}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#pen`}></use>
                  </svg>
                  <button className={css.btn}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
