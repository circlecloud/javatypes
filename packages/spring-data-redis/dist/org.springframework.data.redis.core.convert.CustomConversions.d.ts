declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Value object to capture custom conversion. That is essentially a {@link List} of converters and some additional logic
                         * around them.
                         * @author Olivyer Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         * @deprecated since 2.0, use {#link RedisCustomConversions}.
                         */
                        // @ts-ignore
                        class CustomConversions extends org.springframework.data.redis.core.convert.RedisCustomConversions {
                            /**
                             * Creates an empty {@link CustomConversions} object.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a new {@link CustomConversions} instance registering the given converters.
                             * @param converters
                             */
                            // @ts-ignore
                            constructor(converters: java.util.List<any> | Array<any>)
                        }
                    }
                }
            }
        }
    }
}
