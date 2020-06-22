declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Subscription for Redis channels. Just like the underlying {@link RedisConnection}, it should not be used by multiple
                     * threads. Note that once a subscription died, it cannot accept any more subscriptions.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface Subscription {
                        /**
                         * Adds the given channels to the current subscription.
                         * @param channels channel names. Must not be empty.
                         */
                        // @ts-ignore
                        subscribe(...channels: number /*byte*/[][]): void
                        /**
                         * Adds the given channel patterns to the current subscription.
                         * @param patterns channel patterns. Must not be empty.
                         */
                        // @ts-ignore
                        pSubscribe(...patterns: number /*byte*/[][]): void
                        /**
                         * Cancels the current subscription for all channels given by name.
                         */
                        // @ts-ignore
                        unsubscribe(): void
                        /**
                         * Cancels the current subscription for all given channels.
                         * @param channels channel names. Must not be empty.
                         */
                        // @ts-ignore
                        unsubscribe(...channels: number /*byte*/[][]): void
                        /**
                         * Cancels the subscription for all channels matched by patterns.
                         */
                        // @ts-ignore
                        pUnsubscribe(): void
                        /**
                         * Cancels the subscription for all channels matching the given patterns.
                         * @param patterns must not be empty.
                         */
                        // @ts-ignore
                        pUnsubscribe(...patterns: number /*byte*/[][]): void
                        /**
                         * Returns the (named) channels for this subscription.
                         * @return collection of named channels
                         */
                        // @ts-ignore
                        getChannels(): Array<number /*byte*/[]>
                        /**
                         * Returns the channel patters for this subscription.
                         * @return collection of channel patterns
                         */
                        // @ts-ignore
                        getPatterns(): Array<number /*byte*/[]>
                        /**
                         * Returns the listener used for this subscription.
                         * @return the listener used for this subscription.
                         */
                        // @ts-ignore
                        getListener(): org.springframework.data.redis.connection.MessageListener
                        /**
                         * Indicates whether this subscription is still 'alive' or not.
                         * @return true if the subscription still applies, false otherwise.
                         */
                        // @ts-ignore
                        isAlive(): boolean
                        /**
                         * Shutdown the subscription and free any resources held.
                         * @since 1.8.12
                         */
                        // @ts-ignore
                        close(): void
                    }
                }
            }
        }
    }
}
