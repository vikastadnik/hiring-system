import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { RouterConfigComponentProps } from 'react-router-config';
import { AppContent } from './app-content';

export type IAppContentConnectProps = RouterConfigComponentProps<{}> & ReactRedux.DispatchProp<Redux.Action>;
export const AppContentContainer: React.ComponentClass = ReactRedux.connect()(AppContent);
