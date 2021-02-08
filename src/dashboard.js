import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Dashboard = () => (
    <div>
      <header className="App-header">
          This is the Dashboard
      </header>
    </div>
  );


export default withAuthenticator(Dashboard);
