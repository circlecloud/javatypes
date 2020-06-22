declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Jens Schauder
                         * @since 1.8
                         */
                        // @ts-ignore
                        class MongoRegexCreator extends java.lang.Enum<org.springframework.data.mongodb.core.query.MongoRegexCreator> {
                            // @ts-ignore
                            readonly INSTANCE: org.springframework.data.mongodb.core.query.MongoRegexCreator
                            // @ts-ignore
                            values(): org.springframework.data.mongodb.core.query.MongoRegexCreator[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.query.MongoRegexCreator
                            /**
                             * Creates a regular expression String to be used with {@code $regex}.
                             * @param source the plain String
                             * @param matcherType the type of matching to perform
                             * @return {#literal source} when {@literal source} or {@literal matcherType} is {@literal null}.
                             */
                            // @ts-ignore
                            toRegularExpression(source: java.lang.String | string, matcherType: org.springframework.data.mongodb.core.query.MongoRegexCreator.MatchMode): string
                        }
                    }
                }
            }
        }
    }
}
