import { atom } from 'recoil';
import { User } from '../types/domain';

export const stateCurrentUser = atom<User | null>({
  key: 'state-currentUser',
  default: null,
});
