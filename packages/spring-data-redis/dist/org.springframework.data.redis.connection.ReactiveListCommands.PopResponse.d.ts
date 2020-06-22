declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveListCommands {
                        /**
                         * Result for {@link PopCommand}/{@link BPopCommand}.
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class PopResponse extends org.springframework.data.redis.connection.ReactiveRedisConnection.CommandResponse<org.springframework.data.redis.connection.ReactiveListCommands.BPopCommand, org.springframework.data.redis.connection.ReactiveListCommands.PopResult> {
                            // @ts-ignore
                            constructor(input: org.springframework.data.redis.connection.ReactiveListCommands.BPopCommand, output: org.springframework.data.redis.connection.ReactiveListCommands.PopResult)
                        }
                    }
                }
            }
        }
    }
}
