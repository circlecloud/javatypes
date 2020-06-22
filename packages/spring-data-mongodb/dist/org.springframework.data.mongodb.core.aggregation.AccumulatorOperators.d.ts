declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal accumulator} aggregation operations.
                         * @author Christoph Strobl
                         * @since 1.10
                         * @soundtrack Rage Against The Machine - Killing In The Name
                         */
                        // @ts-ignore
                        class AccumulatorOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the numeric value referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.AccumulatorOperatorFactory
                            /**
                             * Take the numeric value referenced resulting from given {@link AggregationExpression}.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.AccumulatorOperatorFactory
                        }
                    }
                }
            }
        }
    }
}
