declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Value object to capture custom conversion. That is essentially a {@link List} of converters and some additional logic
                         * around them. The converters are pretty much builds up two sets of types which Mongo basic types {@see #MONGO_TYPES}
                         * can be converted into and from. These types will be considered simple ones (which means they neither need deeper
                         * inspection nor nested conversion. Thus the {@link CustomConversions} also act as factory for {@link SimpleTypeHolder}
                         * .
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @deprecated since 2.0, use {#link MongoCustomConversions}.
                         */
                        // @ts-ignore
                        class CustomConversions extends org.springframework.data.mongodb.core.convert.MongoCustomConversions {
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
