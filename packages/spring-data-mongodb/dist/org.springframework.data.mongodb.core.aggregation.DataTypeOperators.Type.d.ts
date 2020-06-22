declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DataTypeOperators {
                            /**
                             * {@link AggregationExpression} for {@code $type}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Type extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Type}.
                                 * @param field must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public static typeOf(field: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DataTypeOperators.Type
                            }
                        }
                    }
                }
            }
        }
    }
}
