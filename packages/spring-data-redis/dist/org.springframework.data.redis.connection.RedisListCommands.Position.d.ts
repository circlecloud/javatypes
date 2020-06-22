declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisListCommands {
                        /**
                         * List insertion position.
                         */
                        // @ts-ignore
                        class Position extends java.lang.Enum<org.springframework.data.redis.connection.RedisListCommands.Position> {
                            // @ts-ignore
                            readonly BEFORE: org.springframework.data.redis.connection.RedisListCommands.Position
                            // @ts-ignore
                            readonly AFTER: org.springframework.data.redis.connection.RedisListCommands.Position
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.RedisListCommands.Position[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisListCommands.Position
                        }
                    }
                }
            }
        }
    }
}
