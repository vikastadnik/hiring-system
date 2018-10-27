import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';
import { AppContent } from './app-content';

export type IAppContentConnectProps = RouteConfigComponentProps<{}> & ReactRedux.DispatchProp<Redux.Action>;
export const AppContentContainer: React.ComponentClass = ReactRedux.connect()(AppContent);
