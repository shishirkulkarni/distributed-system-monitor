# CS185C-Project

* modify kafka config server's ipaddress
* start kafka cluster
* start spark job: `spark-submit --jars spark-streaming-kafka-0-8-assembly_2.11-2.3.0.jar spark_stream.py localhost:9092 input output 5`
* modify nodejs config server's ipaddress
* start node server: `npm run build; npm start`
* start collector scripts: `python stats.py localhost:3000 3`
* open client







** Initalize **
zkServer start







** Setup **

nano /usr/local/etc/kafka/server.properties
Samkit's IP:  172.20.10.3
Shishir's IP: 192.168.43.163


kafka-server-start /usr/local/etc/kafka/server.properties


pyenv activate kafka2
spark-submit --jars spark-streaming-kafka-0-8-assembly_2.11-2.3.0.jar spark_stream.py localhost:9092 input output 5


npm run build; npm start

pyenv activate kafka2
python stats.py localhost:3000 3