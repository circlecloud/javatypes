declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal Set expressions} which perform {@literal set} operation on arrays, treating arrays as sets.
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class SetOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the array referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static arrayAsSet(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.SetOperatorFactory
                            /**
                             * Take the array resulting from the given {@link AggregationExpression}.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static arrayAsSet(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.SetOperatorFactory
                        }
                    }
                }
            }
        }
    }
}
