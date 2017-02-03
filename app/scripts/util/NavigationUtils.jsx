import { appHistory } from 'appHistory';

export function menuLink(item) {
  appHistory.push(item.key);
}

export function rowLink(record) {
  //  console.log('che mi arriva da rowClick:', record, index);
  appHistory.push(`boxes/${record.id.toString()}`);
}
