declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisClusterNode {
                        /**
                         * Builder for creating new {@link RedisClusterNode}.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisClusterNodeBuilder extends org.springframework.data.redis.connection.RedisNode.RedisNodeBuilder {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public listeningAt(host: java.lang.String | string, port: number /*int*/): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            // @ts-ignore
                            public withName(name: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            // @ts-ignore
                            public withId(id: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            // @ts-ignore
                            public promotedAs(nodeType: org.springframework.data.redis.connection.RedisNode.NodeType): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            // @ts-ignore
                            public slaveOf(masterId: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            // @ts-ignore
                            public replicaOf(masterId: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            /**
                             * Set flags for node.
                             * @param flags
                             * @return 
                             */
                            // @ts-ignore
                            public withFlags(flags: java.util.Set<org.springframework.data.redis.connection.RedisClusterNode.Flag> | Array<org.springframework.data.redis.connection.RedisClusterNode.Flag>): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            /**
                             * Set {@link SlotRange}.
                             * @param range
                             * @return 
                             */
                            // @ts-ignore
                            public serving(range: org.springframework.data.redis.connection.RedisClusterNode.SlotRange): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            /**
                             * Set {@link LinkState}.
                             * @param linkState
                             * @return 
                             */
                            // @ts-ignore
                            public linkState(linkState: org.springframework.data.redis.connection.RedisClusterNode.LinkState): org.springframework.data.redis.connection.RedisClusterNode.RedisClusterNodeBuilder
                            // @ts-ignore
                            public build(): org.springframework.data.redis.connection.RedisClusterNode
                        }
                    }
                }
            }
        }
    }
}
