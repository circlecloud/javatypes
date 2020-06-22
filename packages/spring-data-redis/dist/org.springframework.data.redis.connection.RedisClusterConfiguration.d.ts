declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Configuration class used for setting up {@link RedisConnection} via {@link RedisConnectionFactory} using connecting
                     * to <a href="https://redis.io/topics/cluster-spec">Redis Cluster</a>. Useful when setting up a high availability Redis
                     * environment.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class RedisClusterConfiguration extends java.lang.Object implements org.springframework.data.redis.connection.RedisConfiguration, org.springframework.data.redis.connection.RedisConfiguration.ClusterConfiguration {
                        /**
                         * Creates new {@link RedisClusterConfiguration}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates {@link RedisClusterConfiguration} for given hostPort combinations.
                         * <pre>
                         * <code>
                         * clusterHostAndPorts[0] = 127.0.0.1:23679
                         * clusterHostAndPorts[1] = 127.0.0.1:23680 ...
                         * </code>
                         * <pre>
                         * @param clusterNodes must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(clusterNodes: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
                        /**
                         * Creates {@link RedisClusterConfiguration} looking up values in given {@link PropertySource}.
                         * <pre>
                         * <code>
                         * spring.redis.cluster.nodes=127.0.0.1:23679,127.0.0.1:23680,127.0.0.1:23681
                         * spring.redis.cluster.max-redirects=3
                         * </code>
                         * </pre>
                         * @param propertySource must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(propertySource: object)
                        /**
                         * Set {@literal cluster nodes} to connect to.
                         * @param nodes must not be {#literal null}.
                         */
                        // @ts-ignore
                        public setClusterNodes(nodes: java.lang.Iterable<org.springframework.data.redis.connection.RedisNode>): void
                        // @ts-ignore
                        public getClusterNodes(): Array<org.springframework.data.redis.connection.RedisNode>
                        /**
                         * Add a cluster node to configuration.
                         * @param node must not be {#literal null}.
                         */
                        // @ts-ignore
                        public addClusterNode(node: org.springframework.data.redis.connection.RedisNode): void
                        /**
                         * @return this.
                         */
                        // @ts-ignore
                        public clusterNode(node: org.springframework.data.redis.connection.RedisNode): org.springframework.data.redis.connection.RedisClusterConfiguration
                        // @ts-ignore
                        public getMaxRedirects(): number
                        /**
                         * @param maxRedirects the max number of redirects to follow.
                         */
                        // @ts-ignore
                        public setMaxRedirects(maxRedirects: number /*int*/): void
                        /**
                         * @param host Redis cluster node host name or ip address.
                         * @param port Redis cluster node port.
                         * @return this.
                         */
                        // @ts-ignore
                        public clusterNode(host: java.lang.String | string, port: java.lang.Integer | number): org.springframework.data.redis.connection.RedisClusterConfiguration
                        // @ts-ignore
                        public getPassword(): org.springframework.data.redis.connection.RedisPassword
                        // @ts-ignore
                        public setPassword(password: org.springframework.data.redis.connection.RedisPassword): void
                    }
                }
            }
        }
    }
}
