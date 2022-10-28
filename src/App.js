import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import OtUiThemeProvider from './components/OtUiThemeProvider';
import PlatformApiProvider from './contexts/PlatformApiProvider';
import client from './client';
import initLocalStorage from './utils/initLocalStorage';
import theme from './theme';
import { globalQuery } from './GlobalQuery';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DiseasePage from './pages/DiseasePage';
import DrugPage from './pages/DrugPage';
import TargetPage from './pages/TargetPage';
import EvidencePage from './pages/EvidencePage';
import APIPage from './pages/APIPage';
import PMTLDocPage from './pages/PMTLDocPage';
import NotFoundPage from './pages/NotFoundPage';
import PMTLPage from './pages/PMTLPage/PMTLPage';
import AboutPage from './pages/AboutPage';
import PedCancerDataNavPage from './pages/PedCancerDataNavPage';
import ChangeLog from './pages/ChangeLogPage';

class App extends Component {
  componentDidMount() {
    initLocalStorage();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <OtUiThemeProvider theme={theme}>
          <PlatformApiProvider query={globalQuery}>
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/disease/:efoId" component={DiseasePage} />
                <Route path="/target/:ensgId" component={TargetPage} />
                <Route path="/drug/:chemblId" component={DrugPage} />
                <Route
                  path="/evidence/:ensgId/:efoId"
                  component={EvidencePage}
                />
                <Route path="/api" component={APIPage} />
                <Route path="/About" component={AboutPage} />
                <Route path="/fda-pmtl" component={PMTLPage} />
                <Route path="/change-log" component={ChangeLog} />
                <Route path="/mtp-pmtl-docs" component={PMTLDocPage} />
                <Route
                  path="/pediatric-cancer-data-navigation"
                  component={PedCancerDataNavPage}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </Router>
          </PlatformApiProvider>
        </OtUiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
