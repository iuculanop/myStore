import { mystoreWS } from 'util/AppConfig.jsx';
import { checkStatus, parseJSON } from 'util/Ajax/common.jsx';

export function retrieveItems() {
  return (
    fetch(`${mystoreWS}/boxes`)
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

export function insertItem(item) {
  return (
    fetch(`${mystoreWS}/boxes/create`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(item),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

export function retrieveItem(id) {
  return (
    fetch(`${mystoreWS}/boxes/${id}`)
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

