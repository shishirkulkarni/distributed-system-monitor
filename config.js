
const server = "192.168.43.163",
	zookeeperPort = 2181,
	brokerPort = 9092,
	nodeTopic = "input",
	consumerTopic = "output";

module.exports = {
	"server": server,
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
