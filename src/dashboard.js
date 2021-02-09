import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Dashboard = () => (
    <div>
      <header className="App-header">
          This is the Dashboard
      </header>
      <AmplifySignOut/>
    </div>
  );


export default withAuthenticator(Dashboard);
