import { compose } from 'redux';

declare global {
  declare interface Window {
    rmap: {
      alert: dispatchEvent;
    };
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
