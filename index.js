let express = require('express'),
	app = express(),
	expressWs = require('express-ws')(app),
	EventAggregator = require('events').EventEmitter,
	eventAggregator = new EventAggregator(),
	Client = require('./client'),
	kafka = require('kafka-node'),
	config = require('./config'),
	uuid = require('uuid/v4');

const clients = []

const kafkaClient = new kafka.Client(config.kafkaConfig.consumerOptions.connectionString);
const kafkaConsumer = new kafka.HighLevelConsumer(kafkaClient, config.kafkaConfig.consumerOptions.topics);

kafkaConsumer.on('message', (message) => {
	//Wire message event to the eventemitter so all clients can access
	eventAggregator.emit('data', JSON.stringify({eventType: 'data', payload: message.value}));
});

app.use(express.static('public'));

// For the nodes we would be monitoring
app.get('/login', (req, res) => {
	let producerOptions = Object.assign({}, config.kafkaConfig.nodeOptions);
	producerOptions['uuid'] = uuid();

	res.json(producerOptions);
});

// For the nodes we would be monitoring
app.get('/logout', (req, res) => {
	res.send('Hello World');
});


app.get('/test', (req, res) => {
	res.send("You found me :-)");
})

//for the web clients
app.ws('/connect', (socket, req) => {
	let client = new Client(socket, eventAggregator);
	// client.push()
	client.bindEvents();
});


app.listen(3000, '0.0.0.0', (err) => {
	if(err)
		throw new Error("unable to start server");
	console.log('Server listening on 3000...');		
});


