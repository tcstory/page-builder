export default class BizError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BizError';
  }
}
