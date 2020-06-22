declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisNode {
                        /**
                         * Builder for creating new {@link RedisNode}.
                         * @author Christoph Strobl
                         * @since 1.4
                         */
                        // @ts-ignore
                        class RedisNodeBuilder extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Define node name.
                             */
                            // @ts-ignore
                            public withName(name: java.lang.String | string): org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder
                            /**
                             * Set host and port of server.
                             * @param host must not be {#literal null}.
                             * @param port
                             * @return 
                             */
                            // @ts-ignore
                            public listeningAt(host: java.lang.String | string, port: number /*int*/): org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder
                            /**
                             * Set id of server.
                             * @param id
                             * @return 
                             */
                            // @ts-ignore
                            public withId(id: java.lang.String | string): org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder
                            /**
                             * Set server role.
                             * @param type
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public promotedAs(type: org.springframework.data.redis.connection.RedisNode.NodeType): org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder
                            /**
                             * Set the id of the master node.
                             * @param masterId
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public slaveOf(masterId: java.lang.String | string): org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder
                            /**
                             * Set the id of the master node.
                             * @param masterId
                             * @return this.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public replicaOf(masterId: java.lang.String | string): org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder
                            /**
                             * Get the {@link RedisNode}.
                             * @return 
                             */
                            // @ts-ignore
                            public build(): org.springframework.data.redis.connection.RedisNode
                        }
                    }
                }
            }
        }
    }
}
