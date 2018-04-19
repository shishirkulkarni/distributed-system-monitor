class Client {
	constructor(socket, eventAggregator) {
		this.eventAggregator = eventAggregator;
		this.socket = socket;
	}

	bindEvents() {
		console.log('binding events...');
		this.eventAggregator.on('data', () => {
			this.socket.send(JSON.stringify({message: 'test'}))
		});
	}
}

module.exports = Client;