export function validateSize(rule, value, callback) {
  if (value > 0) {
    callback();
    return;
  }
  callback('La dimensione deve essere maggiore di zero!');
}
