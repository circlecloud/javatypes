declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal Arithmetic} aggregation operations that perform math operations on numbers.
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class ArithmeticOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the field referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.ArithmeticOperatorFactory
                            /**
                             * Take the value resulting from the given {@link AggregationExpression}.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.ArithmeticOperatorFactory
                        }
                    }
                }
            }
        }
    }
}
