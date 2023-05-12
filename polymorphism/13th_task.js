import DisconnectedState from './files/Disconnected.js';
import ConnectedState from './files/Connected.js';

class TcpConnection {
  constructor(ip, port) {
    this.stateTypes = {
      Disconnected: DisconnectedState,
      Connected: ConnectedState
    }
    this.ip = ip
    this.port = port
    this.state = new this.stateTypes.Disconnected
  }

  connect() {
    this.state.connect()
    this.state = new this.stateTypes.Connected
  }

  disconnect() {
    this.state.disconnect()
    this.state = new this.stateTypes.Disconnected
  }

  getCurrentState() {
    return this.state.getCurrentState()
  }

  write(data) {
    this.state.write(data)
  }
}


const connection = new TcpConnection('132.223.243.88', 2342);
connection.connect();
// connection.connect(); // Boom!
console.log(connection.getCurrentState()); // connected
connection.write('data');
connection.disconnect();
console.log(connection.getCurrentState()); // disconnected
// connection.disconnect(); // Boom!