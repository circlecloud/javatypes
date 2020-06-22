declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * Base interface for Redis commands executed with a reactive infrastructure.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        interface Command {
                            /**
                             * @return the key related to this command.
                             */
                            // @ts-ignore
                            getKey(): java.nio.ByteBuffer
                            /**
                             * @return command name as {#link String}.
                             */
                            // @ts-ignore
                            getName(): string
                        }
                    }
                }
            }
        }
    }
}
