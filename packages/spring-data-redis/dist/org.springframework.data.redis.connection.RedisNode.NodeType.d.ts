declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisNode {
                        /**
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class NodeType extends java.lang.Enum<org.springframework.data.redis.connection.RedisNode.NodeType> {
                            // @ts-ignore
                            readonly MASTER: org.springframework.data.redis.connection.RedisNode.NodeType
                            // @ts-ignore
                            readonly SLAVE: org.springframework.data.redis.connection.RedisNode.NodeType
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.RedisNode.NodeType[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisNode.NodeType
                        }
                    }
                }
            }
        }
    }
}
