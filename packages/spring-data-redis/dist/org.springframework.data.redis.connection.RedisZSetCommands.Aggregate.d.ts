declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisZSetCommands {
                        /**
                         * Sort aggregation operations.
                         */
                        // @ts-ignore
                        class Aggregate extends java.lang.Enum<org.springframework.data.redis.connection.RedisZSetCommands.Aggregate> {
                            // @ts-ignore
                            readonly SUM: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate
                            // @ts-ignore
                            readonly MIN: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate
                            // @ts-ignore
                            readonly MAX: org.springframework.data.redis.connection.RedisZSetCommands.Aggregate
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.RedisZSetCommands.Aggregate[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisZSetCommands.Aggregate
                        }
                    }
                }
            }
        }
    }
}
