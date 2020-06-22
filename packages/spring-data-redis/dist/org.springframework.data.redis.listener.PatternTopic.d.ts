declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    /**
                     * Pattern topic (matching multiple channels).
                     * @author Costin Leau
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class PatternTopic extends java.lang.Object implements org.springframework.data.redis.listener.Topic {
                        /**
                         * Constructs a new {@link PatternTopic} instance.
                         * @param pattern must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(pattern: java.lang.String | string)
                        /**
                         * Create a new {@link PatternTopic} for channel subscriptions based on a {@code pattern}.
                         * @param pattern the channel pattern, must not be {#literal null} or empty.
                         * @return the {#link PatternTopic} for {@code pattern}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static of(pattern: java.lang.String | string): org.springframework.data.redis.listener.PatternTopic
                        /**
                         * @return channel pattern.
                         */
                        // @ts-ignore
                        public getTopic(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
