import user from './Backend/user.json';
import data from './Backend/data.json';
import friends from './Backend/friends.json';
import transactions from './Backend/transactions.json';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/Transactions';



export const App = () => {
  return (
    <div>
      <Portfolio
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="STATISTICS" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

