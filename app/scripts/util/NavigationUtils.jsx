import { appHistory } from 'appHistory';

export function menuLink(item) {
  appHistory.push(item.key);
}
