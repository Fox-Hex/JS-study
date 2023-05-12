export default class Disconnected {
  connect() {}
  disconnect() {
    throw 'Boom!'
  }
  getCurrentState() {
    return 'disconnected'
  }
  write(data) {
    throw 'cant write!'
  }
}