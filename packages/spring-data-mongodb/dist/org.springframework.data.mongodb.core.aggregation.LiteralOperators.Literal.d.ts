declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace LiteralOperators {
                            /**
                             * {@link AggregationExpression} for {@code $literal}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Literal extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Literal}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static asLiteral(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.LiteralOperators.Literal
                            }
                        }
                    }
                }
            }
        }
    }
}
