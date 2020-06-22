declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisStringCommands {
                        /**
                         * {@code SET} command arguments for {@code NX}, {@code XX}.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class SetOption extends java.lang.Enum<org.springframework.data.redis.connection.RedisStringCommands.SetOption> {
                            /**
                             * Do not set any additional command argument.
                             * @return 
                             */
                            // @ts-ignore
                            readonly UPSERT: org.springframework.data.redis.connection.RedisStringCommands.SetOption
                            /**
                             * {@code NX}
                             * @return 
                             */
                            // @ts-ignore
                            readonly SET_IF_ABSENT: org.springframework.data.redis.connection.RedisStringCommands.SetOption
                            /**
                             * {@code XX}
                             * @return 
                             */
                            // @ts-ignore
                            readonly SET_IF_PRESENT: org.springframework.data.redis.connection.RedisStringCommands.SetOption
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.RedisStringCommands.SetOption[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.RedisStringCommands.SetOption
                            /**
                             * Do not set any additional command argument.
                             * @return 
                             */
                            // @ts-ignore
                            upsert(): org.springframework.data.redis.connection.RedisStringCommands.SetOption
                            /**
                             * {@code XX}
                             * @return 
                             */
                            // @ts-ignore
                            ifPresent(): org.springframework.data.redis.connection.RedisStringCommands.SetOption
                            /**
                             * {@code NX}
                             * @return 
                             */
                            // @ts-ignore
                            ifAbsent(): org.springframework.data.redis.connection.RedisStringCommands.SetOption
                        }
                    }
                }
            }
        }
    }
}
