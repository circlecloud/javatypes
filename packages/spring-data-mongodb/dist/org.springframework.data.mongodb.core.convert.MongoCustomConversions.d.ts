declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Value object to capture custom conversion. {@link MongoCustomConversions} also act as factory for
                         * {@link org.springframework.data.mapping.model.SimpleTypeHolder}
                         * @author Mark Paluch
                         * @since 2.0
                         * @see org.springframework.data.convert.CustomConversions
                         * @see org.springframework.data.mapping.model.SimpleTypeHolder
                         * @see MongoSimpleTypes
                         */
                        // @ts-ignore
                        class MongoCustomConversions extends org.springframework.data.convert.CustomConversions {
                            /**
                             * Create a new {@link MongoCustomConversions} instance registering the given converters.
                             * @param converters must not be {#literal null}.
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
