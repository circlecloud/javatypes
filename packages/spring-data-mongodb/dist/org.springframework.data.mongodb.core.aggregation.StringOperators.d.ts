declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal String} aggregation operations.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.10
                         */
                        // @ts-ignore
                        class StringOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the array referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StringOperatorFactory
                            /**
                             * Take the array referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.StringOperatorFactory
                        }
                    }
                }
            }
        }
    }
}
