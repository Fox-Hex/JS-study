export default class Connected {
  getCurrentState() {
    return 'connected'
  }
  write(data) {
    this.data = data
  }
}