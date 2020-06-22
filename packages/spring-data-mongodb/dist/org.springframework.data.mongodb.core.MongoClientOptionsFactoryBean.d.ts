declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * A factory bean for construction of a {@link MongoClientOptions} instance.
                     * @author Christoph Strobl
                     * @author Oliver Gierke
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class MongoClientOptionsFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the {@link MongoClient} description.
                         * @param description
                         */
                        // @ts-ignore
                        public setDescription(description: java.lang.String | string): void
                        /**
                         * Set the minimum number of connections per host.
                         * @param minConnectionsPerHost
                         */
                        // @ts-ignore
                        public setMinConnectionsPerHost(minConnectionsPerHost: number /*int*/): void
                        /**
                         * Set the number of connections allowed per host. Will block if run out. Default is 10. System property
                         * {@code MONGO.POOLSIZE} can override
                         * @param connectionsPerHost
                         */
                        // @ts-ignore
                        public setConnectionsPerHost(connectionsPerHost: number /*int*/): void
                        /**
                         * Set the multiplier for connectionsPerHost for # of threads that can block. Default is 5. If connectionsPerHost is
                         * 10, and threadsAllowedToBlockForConnectionMultiplier is 5, then 50 threads can block more than that and an
                         * exception will be thrown.
                         * @param threadsAllowedToBlockForConnectionMultiplier
                         */
                        // @ts-ignore
                        public setThreadsAllowedToBlockForConnectionMultiplier(threadsAllowedToBlockForConnectionMultiplier: number /*int*/): void
                        /**
                         * Set the max wait time of a blocking thread for a connection. Default is 12000 ms (2 minutes)
                         * @param maxWaitTime
                         */
                        // @ts-ignore
                        public setMaxWaitTime(maxWaitTime: number /*int*/): void
                        /**
                         * The maximum idle time for a pooled connection.
                         * @param maxConnectionIdleTime
                         */
                        // @ts-ignore
                        public setMaxConnectionIdleTime(maxConnectionIdleTime: number /*int*/): void
                        /**
                         * Set the maximum life time for a pooled connection.
                         * @param maxConnectionLifeTime
                         */
                        // @ts-ignore
                        public setMaxConnectionLifeTime(maxConnectionLifeTime: number /*int*/): void
                        /**
                         * Set the connect timeout in milliseconds. 0 is default and infinite.
                         * @param connectTimeout
                         */
                        // @ts-ignore
                        public setConnectTimeout(connectTimeout: number /*int*/): void
                        /**
                         * Set the socket timeout. 0 is default and infinite.
                         * @param socketTimeout
                         */
                        // @ts-ignore
                        public setSocketTimeout(socketTimeout: number /*int*/): void
                        /**
                         * Set the keep alive flag, controls whether or not to have socket keep alive timeout. Defaults to false.
                         * @param socketKeepAlive
                         */
                        // @ts-ignore
                        public setSocketKeepAlive(socketKeepAlive: boolean): void
                        /**
                         * Set the {@link ReadPreference}.
                         * @param readPreference
                         */
                        // @ts-ignore
                        public setReadPreference(readPreference: ReadPreference): void
                        /**
                         * Set the {@link WriteConcern} that will be the default value used when asking the {@link MongoDbFactory} for a DB
                         * object.
                         * @param writeConcern
                         */
                        // @ts-ignore
                        public setWriteConcern(writeConcern: WriteConcern): void
                        /**
                         * @param socketFactory
                         */
                        // @ts-ignore
                        public setSocketFactory(socketFactory: javax.net.SocketFactory): void
                        /**
                         * Set the frequency that the driver will attempt to determine the current state of each server in the cluster.
                         * @param heartbeatFrequency
                         */
                        // @ts-ignore
                        public setHeartbeatFrequency(heartbeatFrequency: number /*int*/): void
                        /**
                         * In the event that the driver has to frequently re-check a server's availability, it will wait at least this long
                         * since the previous check to avoid wasted effort.
                         * @param minHeartbeatFrequency
                         */
                        // @ts-ignore
                        public setMinHeartbeatFrequency(minHeartbeatFrequency: number /*int*/): void
                        /**
                         * Set the connect timeout for connections used for the cluster heartbeat.
                         * @param heartbeatConnectTimeout
                         */
                        // @ts-ignore
                        public setHeartbeatConnectTimeout(heartbeatConnectTimeout: number /*int*/): void
                        /**
                         * Set the socket timeout for connections used for the cluster heartbeat.
                         * @param heartbeatSocketTimeout
                         */
                        // @ts-ignore
                        public setHeartbeatSocketTimeout(heartbeatSocketTimeout: number /*int*/): void
                        /**
                         * Configures the name of the replica set.
                         * @param requiredReplicaSetName
                         */
                        // @ts-ignore
                        public setRequiredReplicaSetName(requiredReplicaSetName: java.lang.String | string): void
                        /**
                         * This controls if the driver should us an SSL connection. Defaults to |@literal false}.
                         * @param ssl
                         */
                        // @ts-ignore
                        public setSsl(ssl: boolean): void
                        /**
                         * Set the {@link SSLSocketFactory} to use for the {@literal SSL} connection. If none is configured here,
                         * {@link SSLSocketFactory#getDefault()} will be used.
                         * @param sslSocketFactory
                         */
                        // @ts-ignore
                        public setSslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): void
                        /**
                         * Set the {@literal server selection timeout} in msec for a 3.x MongoDB Java driver. If not set the default value of
                         * 30 sec will be used. A value of 0 means that it will timeout immediately if no server is available. A negative
                         * value means to wait indefinitely.
                         * @param serverSelectionTimeout in msec.
                         */
                        // @ts-ignore
                        public setServerSelectionTimeout(serverSelectionTimeout: number /*int*/): void
                        // @ts-ignore
                        createInstance(): MongoClientOptions
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                    }
                }
            }
        }
    }
}
