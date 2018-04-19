
const server = "192.168.1.19",
	zookeeperPort = 2181,
	brokerPort = 9092,
	nodeTopic = "input",
	consumerTopic = "output";

module.exports = {
	"kafkaConfig": {
		"nodeOptions": {
			"bootstrap_servers": server + ":" + brokerPort,
			"topic": nodeTopic
		},
		"consumerOptions": {
			"connectionString": server + ":" + zookeeperPort,
			"topics": [{
				"topic": consumerTopic
			}]
		}
	}
}