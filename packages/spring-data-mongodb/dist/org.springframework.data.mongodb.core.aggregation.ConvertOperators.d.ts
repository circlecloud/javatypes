declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal convert} aggregation operations.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ConvertOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the field referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ConvertOperatorFactory
                            /**
                             * Take the value resulting from the given {@link AggregationExpression}.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ConvertOperatorFactory
                        }
                    }
                }
            }
        }
    }
}
