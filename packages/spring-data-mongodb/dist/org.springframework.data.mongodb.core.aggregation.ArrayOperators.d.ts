declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal array} aggregation operations.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.0
                         */
                        // @ts-ignore
                        class ArrayOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the array referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static arrayOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayOperatorFactory
                            /**
                             * Take the array referenced resulting from the given {@link AggregationExpression}.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static arrayOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayOperatorFactory
                        }
                    }
                }
            }
        }
    }
}
