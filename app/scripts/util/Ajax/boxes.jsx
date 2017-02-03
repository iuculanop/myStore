import { mystoreWS } from 'util/AppConfig.jsx';
import { checkStatus, parseJSON } from 'util/Ajax/common.jsx';

export function retrieveBoxes() {
  return (
    fetch(`${mystoreWS}/boxes`)
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

export function insertBox(box) {
  return (
    fetch(`${mystoreWS}/boxes/create`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(box),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

export function retrieveBox(id) {
  return (
    fetch(`${mystoreWS}/boxes/${id}`)
      .then(checkStatus)
      .then(parseJSON)
      .then((response) => response)
  );
}

