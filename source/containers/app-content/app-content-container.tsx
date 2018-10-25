import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import { AppContent } from './app-content';

export type IAppContentConnectProps =  ReactRedux.DispatchProp<Redux.Action>;
export const AppContentContainer: React.ComponentClass = ReactRedux.connect()(AppContent);
