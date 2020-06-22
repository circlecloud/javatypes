declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace util {
                        /**
                         * Base implementation for a subscription handling the channel/pattern registration so subclasses only have to deal with
                         * the actual registration/unregistration.
                         * @author Costin Leau
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        abstract class AbstractSubscription extends java.lang.Object implements org.springframework.data.redis.connection.Subscription {
                            // @ts-ignore
                            constructor(listener: org.springframework.data.redis.connection.MessageListener)
                            /**
                             * Constructs a new <code>AbstractSubscription</code> instance. Allows channels and patterns to be added to the
                             * subscription w/o triggering a subscription action (as some clients (Jedis) require an initial call before entering
                             * into listening mode).
                             * @param listener must not be {#literal null}.
                             * @param channels can be {#literal null}.
                             * @param patterns can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(listener: org.springframework.data.redis.connection.MessageListener, channels: number /*byte*/[][], patterns: number /*byte*/[][])
                            /**
                             * Subscribe to the given channels.
                             * @param channels channels to subscribe to
                             */
                            // @ts-ignore
                            abstract doSubscribe(...channels: number /*byte*/[][]): void
                            /**
                             * Channel unsubscribe.
                             * @param all true if all the channels are unsubscribed (used as a hint for the underlying implementation).
                             * @param channels channels to be unsubscribed
                             */
                            // @ts-ignore
                            abstract doUnsubscribe(all: boolean, ...channels: number /*byte*/[][]): void
                            /**
                             * Subscribe to the given patterns
                             * @param patterns patterns to subscribe to
                             */
                            // @ts-ignore
                            abstract doPsubscribe(...patterns: number /*byte*/[][]): void
                            /**
                             * Pattern unsubscribe.
                             * @param all true if all the patterns are unsubscribed (used as a hint for the underlying implementation).
                             * @param patterns patterns to be unsubscribed
                             */
                            // @ts-ignore
                            abstract doPUnsubscribe(all: boolean, ...patterns: number /*byte*/[][]): void
                            // @ts-ignore
                            public close(): void
                            /**
                             * Shutdown the subscription and free any resources held.
                             */
                            // @ts-ignore
                            abstract doClose(): void
                            // @ts-ignore
                            public getListener(): org.springframework.data.redis.connection.MessageListener
                            // @ts-ignore
                            public getChannels(): Array<number /*byte*/[]>
                            // @ts-ignore
                            public getPatterns(): Array<number /*byte*/[]>
                            // @ts-ignore
                            public pSubscribe(...patterns: number /*byte*/[][]): void
                            // @ts-ignore
                            public pUnsubscribe(): void
                            // @ts-ignore
                            public subscribe(...channels: number /*byte*/[][]): void
                            // @ts-ignore
                            public unsubscribe(): void
                            // @ts-ignore
                            public pUnsubscribe(...patts: number /*byte*/[][]): void
                            // @ts-ignore
                            public unsubscribe(...chans: number /*byte*/[][]): void
                            // @ts-ignore
                            public isAlive(): boolean
                        }
                    }
                }
            }
        }
    }
}
