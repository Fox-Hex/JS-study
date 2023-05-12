export default class Connected {
  connect() {
    throw 'Boom!'
  }
  disconnect() {}
  getCurrentState() {
    return 'connected'
  }
  write(data) {
    this.data = data
  }
}