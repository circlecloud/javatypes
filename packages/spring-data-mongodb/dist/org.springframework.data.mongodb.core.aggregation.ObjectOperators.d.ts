declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway for
                         * <a href="https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#object-expression-operators">object
                         * expression operators</a>.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ObjectOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the value referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return new instance of {#link ObjectOperatorFactory}.
                             */
                            // @ts-ignore
                            public static valueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectOperatorFactory
                            /**
                             * Take the value provided by the given {@link AggregationExpression}.
                             * @param expression must not be {#literal null}.
                             * @return new instance of {#link ObjectOperatorFactory}.
                             */
                            // @ts-ignore
                            public static valueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectOperatorFactory
                        }
                    }
                }
            }
        }
    }
}
