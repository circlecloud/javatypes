declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Value object to capture custom conversion. That is essentially a {@link List} of converters and some additional logic
                         * around them.
                         * @author Mark Paluch
                         * @since 2.0
                         * @see org.springframework.data.convert.CustomConversions
                         * @see SimpleTypeHolder
                         */
                        // @ts-ignore
                        class RedisCustomConversions extends org.springframework.data.convert.CustomConversions {
                            /**
                             * Creates an empty {@link RedisCustomConversions} object.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a new {@link RedisCustomConversions} instance registering the given converters.
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
