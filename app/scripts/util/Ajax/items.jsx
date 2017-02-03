import { mystoreWS } from 'util/AppConfig.jsx';
import { checkStatus, parseJSON } from 'util/Ajax/common.jsx';

export function retrieveItems() {
  return (
    fetch(`${mystoreWS}/items`)
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

export function retrieveItemsByBox(boxId) {
  return (
    fetch(`${mystoreWS}/items?box=${boxId}`)
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

export function insertItem(item) {
  return (
    fetch(`${mystoreWS}/items/create`, {
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
    fetch(`${mystoreWS}/items/${id}`)
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

