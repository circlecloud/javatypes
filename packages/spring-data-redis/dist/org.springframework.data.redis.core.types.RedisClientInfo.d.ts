declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace types {
                        /**
                         * {@link RedisClientInfo} provides general and statistical information about client connections.
                         * @author Christoph Strobl
                         * @since 1.3
                         */
                        // @ts-ignore
                        class RedisClientInfo extends java.lang.Object {
                            /**
                             * Create {@link RedisClientInfo} from {@link Properties}.
                             * @param properties must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(properties: java.util.Properties)
                            /**
                             * Get address/port of the client.
                             * @return 
                             */
                            // @ts-ignore
                            public getAddressPort(): string
                            /**
                             * Get file descriptor corresponding to the socket
                             * @return 
                             */
                            // @ts-ignore
                            public getFileDescriptor(): string
                            /**
                             * Get the clients name.
                             * @return 
                             */
                            // @ts-ignore
                            public getName(): string
                            /**
                             * Get total duration of the connection in seconds.
                             * @return 
                             */
                            // @ts-ignore
                            public getAge(): number
                            /**
                             * Get idle time of the connection in seconds.
                             * @return 
                             */
                            // @ts-ignore
                            public getIdle(): number
                            /**
                             * Get client flags.
                             * @return 
                             */
                            // @ts-ignore
                            public getFlags(): string
                            /**
                             * Get current database index.
                             * @return 
                             */
                            // @ts-ignore
                            public getDatabaseId(): number
                            /**
                             * Get number of channel subscriptions.
                             * @return 
                             */
                            // @ts-ignore
                            public getChannelSubscribtions(): number
                            /**
                             * Get number of pattern subscriptions.
                             * @return 
                             */
                            // @ts-ignore
                            public getPatternSubscrbtions(): number
                            /**
                             * Get the number of commands in a MULTI/EXEC context.
                             * @return 
                             */
                            // @ts-ignore
                            public getMultiCommandContext(): number
                            /**
                             * Get the query buffer length.
                             * @return 
                             */
                            // @ts-ignore
                            public getBufferLength(): number
                            /**
                             * Get the free space of the query buffer.
                             * @return 
                             */
                            // @ts-ignore
                            public getBufferFreeSpace(): number
                            /**
                             * Get the output buffer length.
                             * @return 
                             */
                            // @ts-ignore
                            public getOutputBufferLength(): number
                            /**
                             * Get number queued replies in output buffer.
                             * @return 
                             */
                            // @ts-ignore
                            public getOutputListLength(): number
                            /**
                             * Get output buffer memory usage.
                             * @return 
                             */
                            // @ts-ignore
                            public getOutputBufferMemoryUsage(): number
                            /**
                             * Get file descriptor events.
                             * @return 
                             */
                            // @ts-ignore
                            public getEvents(): string
                            /**
                             * Get last command played.
                             * @return 
                             */
                            // @ts-ignore
                            public getLastCommand(): string
                            /**
                             * @param info must not be null
                             * @return {#literal null} if no entry found for requested {@link INFO}.
                             */
                            // @ts-ignore
                            public get(info: org.springframework.data.redis.core.types.RedisClientInfo.INFO): string
                            /**
                             * @param key must not be {#literal null} or {@literal empty}.
                             * @return {#literal null} if no entry found for requested {@code key}.
                             */
                            // @ts-ignore
                            public get(key: java.lang.String | string): string
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
