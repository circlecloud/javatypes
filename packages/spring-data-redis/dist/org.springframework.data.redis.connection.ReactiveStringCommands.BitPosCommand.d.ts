declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveStringCommands {
                        /**
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class BitPosCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            // @ts-ignore
                            public in(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveStringCommands.BitPosCommand
                            // @ts-ignore
                            public within(range: object): org.springframework.data.redis.connection.ReactiveStringCommands.BitPosCommand
                            // @ts-ignore
                            public getBit(): boolean
                            // @ts-ignore
                            public getRange(): object
                        }
                    }
                }
            }
        }
    }
}
