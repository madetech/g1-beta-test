import React from 'react';

function Dashboard({user}) {
  if (!user) return (<div>Please log in to see the dashboard</div> )  
  return(

    <div>
      <h1>
          This is the Dashboard<br/>
          You are {user}
      </h1>
    </div>
)
};


export default Dashboard;
