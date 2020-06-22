declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Configuration class used for setting up {@link RedisConnection} via {@link RedisConnectionFactory} using the provided
                     * Master / Replica configuration to nodes know to not change address. Eg. when connecting to
                     * <a href="https://aws.amazon.com/documentation/elasticache/">AWS ElastiCache with Read Replicas</a>. <br/>
                     * Note: Redis is undergoing a nomenclature change where the term replica is used synonymously to slave.
                     * Please also note that a Master/Replica connection cannot be used for Pub/Sub operations.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    class RedisStaticMasterReplicaConfiguration extends java.lang.Object implements org.springframework.data.redis.connection.RedisConfiguration, org.springframework.data.redis.connection.RedisConfiguration.StaticMasterReplicaConfiguration {
                        /**
                         * Create a new {@link StaticMasterReplicaConfiguration} given {@code hostName}.
                         * @param hostName must not be {#literal null} or empty.
                         */
                        // @ts-ignore
                        constructor(hostName: java.lang.String | string)
                        /**
                         * Create a new {@link StaticMasterReplicaConfiguration} given {@code hostName} and {@code port}.
                         * @param hostName must not be {#literal null} or empty.
                         * @param port a valid TCP port (1-65535).
                         */
                        // @ts-ignore
                        constructor(hostName: java.lang.String | string, port: number /*int*/)
                        /**
                         * Add a {@link RedisStandaloneConfiguration node} to the list of nodes given {@code hostName}.
                         * @param hostName must not be {#literal null} or empty.
                         * @param port a valid TCP port (1-65535).
                         */
                        // @ts-ignore
                        public addNode(hostName: java.lang.String | string, port: number /*int*/): void
                        /**
                         * Add a {@link RedisStandaloneConfiguration node} to the list of nodes given {@code hostName}.
                         * @param hostName must not be {#literal null} or empty.
                         * @return {#code this} {@link StaticMasterReplicaConfiguration}.
                         */
                        // @ts-ignore
                        public node(hostName: java.lang.String | string): org.springframework.data.redis.connection.RedisConfiguration.StaticMasterReplicaConfiguration
                        /**
                         * Add a {@link RedisStandaloneConfiguration node} to the list of nodes given {@code hostName} and {@code port}.
                         * @param hostName must not be {#literal null} or empty.
                         * @param port a valid TCP port (1-65535).
                         * @return {#code this} {@link StaticMasterReplicaConfiguration}.
                         */
                        // @ts-ignore
                        public node(hostName: java.lang.String | string, port: number /*int*/): org.springframework.data.redis.connection.RedisStaticMasterReplicaConfiguration
                        // @ts-ignore
                        public getDatabase(): number /*int*/
                        // @ts-ignore
                        public setDatabase(index: number /*int*/): void
                        // @ts-ignore
                        public getPassword(): org.springframework.data.redis.connection.RedisPassword
                        // @ts-ignore
                        public setPassword(password: org.springframework.data.redis.connection.RedisPassword): void
                        // @ts-ignore
                        public getNodes(): Array<org.springframework.data.redis.connection.RedisStandaloneConfiguration>
                    }
                }
            }
        }
    }
}
