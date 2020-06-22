declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    /**
                     * Container providing a stream of {@link ChannelMessage} for messages received via Redis Pub/Sub listeners. The stream
                     * is infinite and registers Redis subscriptions. Handles the low level details of listening, converting and message
                     * dispatching.
                     * <p />
                     * Note the container allocates a single connection when it is created and releases the connection on
                     * {@link #destroy()}. Connections are allocated eagerly to not interfere with non-blocking use during application
                     * operations. Using reactive infrastructure allows usage of a single connection due to channel multiplexing.
                     * <p />
                     * This class is thread-safe and allows subscription by multiple concurrent threads.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.1
                     * @see ReactiveSubscription
                     * @see ReactivePubSubCommands
                     */
                    // @ts-ignore
                    class ReactiveRedisMessageListenerContainer extends java.lang.Object {
                        /**
                         * Create a new {@link ReactiveRedisMessageListenerContainer} given {@link ReactiveRedisConnectionFactory}.
                         * @param connectionFactory must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.data.redis.connection.ReactiveRedisConnectionFactory)
                        // @ts-ignore
                        public destroy(): void
                        /**
                         * @return the {#link Mono} signalling container termination.
                         */
                        // @ts-ignore
                        public destroyLater(): object
                        /**
                         * Return the currently active {@link ReactiveSubscription subscriptions}.
                         * @return {#link Set} of active {@link ReactiveSubscription}
                         */
                        // @ts-ignore
                        public getActiveSubscriptions(): Array<org.springframework.data.redis.connection.ReactiveSubscription>
                        /**
                         * Subscribe to one or more {@link ChannelTopic}s and receive a stream of {@link ChannelMessage}. Messages and channel
                         * names are treated as {@link String}. The message stream subscribes lazily to the Redis channels and unsubscribes if
                         * the {@link org.reactivestreams.Subscription} is {@link org.reactivestreams.Subscription#cancel() cancelled}.
                         * @param channelTopics the channels to subscribe.
                         * @return the message stream.
                         * @throws InvalidDataAccessApiUsageException if {#code patternTopics} is empty.
                         * @see #receive(Iterable, SerializationPair, SerializationPair)
                         */
                        // @ts-ignore
                        public receive(...channelTopics: org.springframework.data.redis.listener.ChannelTopic[]): object
                        /**
                         * Subscribe to one or more {@link PatternTopic}s and receive a stream of {@link PatternMessage}. Messages, pattern,
                         * and channel names are treated as {@link String}. The message stream subscribes lazily to the Redis channels and
                         * unsubscribes if the {@link org.reactivestreams.Subscription} is {@link org.reactivestreams.Subscription#cancel()
                         * cancelled}.
                         * @param patternTopics the channels to subscribe.
                         * @return the message stream.
                         * @throws InvalidDataAccessApiUsageException if {#code patternTopics} is empty.
                         * @see #receive(Iterable, SerializationPair, SerializationPair)
                         */
                        // @ts-ignore
                        public receive(...patternTopics: org.springframework.data.redis.listener.PatternTopic[]): object
                        /**
                         * Subscribe to one or more {@link Topic}s and receive a stream of {@link ChannelMessage} The stream may contain
                         * {@link PatternMessage} if subscribed to patterns. Messages, and channel names are serialized/deserialized using the
                         * given {@code channelSerializer} and {@code messageSerializer}. The message stream subscribes lazily to the Redis
                         * channels and unsubscribes if the {@link org.reactivestreams.Subscription} is
                         * {@link org.reactivestreams.Subscription#cancel() cancelled}.
                         * @param topics the channels to subscribe.
                         * @return the message stream.
                         * @see #receive(Iterable, SerializationPair, SerializationPair)
                         * @throws InvalidDataAccessApiUsageException if {#code topics} is empty.
                         */
                        // @ts-ignore
                        public receive<C, B>(topics: java.lang.Iterable<any>, channelSerializer: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<C>, messageSerializer: org.springframework.data.redis.serializer.RedisSerializationContext.SerializationPair<B>): object
                    }
                }
            }
        }
    }
}
