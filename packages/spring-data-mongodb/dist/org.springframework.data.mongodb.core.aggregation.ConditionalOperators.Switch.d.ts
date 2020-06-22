declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConditionalOperators {
                            /**
                             * {@link AggregationExpression} for {@code $switch}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class Switch extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                // @ts-ignore
                                getMongoMethod(): string
                                /**
                                 * Creates new {@link Switch}.
                                 * @param conditions must not be {#literal null}.
                                 */
                                // @ts-ignore
                                public static switchCases(...conditions: org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch.CaseOperator[]): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch
                                /**
                                 * Creates new {@link Switch}.
                                 * @param conditions must not be {#literal null}.
                                 */
                                // @ts-ignore
                                public static switchCases(conditions: java.util.List<org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch.CaseOperator> | Array<org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch.CaseOperator>): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch
                                // @ts-ignore
                                public defaultTo(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Switch
                            }
                        }
                    }
                }
            }
        }
    }
}
