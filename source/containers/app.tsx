import * as React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import { AppContentContainer } from './app-content';
import { Main } from '../reducers';
import { IState } from '../interfaces';

export class App extends React.Component<{}, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      store: Redux.createStore(Main, Redux.applyMiddleware(createLogger({ collapsed: true })))
    };
  }

  public render(): JSX.Element {
    return (
      <Provider store={this.state.store}>
        <BrowserRouter>
          <AppContentContainer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export interface IAppState {
  /** Instance of Redux global state */
  readonly store: Redux.Store<IState>;
}
