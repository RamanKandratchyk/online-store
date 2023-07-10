import { CallbackType } from './types';

export interface Route {
  path: RegExp;
  cb: CallbackType;
}
