import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
             type="greeting"
             title="Welcome"
             user={loggedIn?.name || "guest"}
             subtext="Access & Manage your Account & Transactions efficiently"
          />

          <TotalBalanceBox 
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={1234.56}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
        <RightSidebar 
           user={loggedIn}
           transactions={[]}
           banks={[{currentBalance: 123.50},{currentBalance: 666.88}]}
        />
    </section>
  )
}

export default Home