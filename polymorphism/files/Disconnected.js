export default class Disconnected {
  getCurrentState() {
    return 'disconnected'
  }
  write(data) {
    return 'cant write!'
  }
}