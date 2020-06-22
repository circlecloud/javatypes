declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ProjectionOperation {
                            /**
                             * An {@link ProjectionOperationBuilder} that is used for SpEL expression based projections.
                             * @author Thomas Darimont
                             */
                            // @ts-ignore
                            class ExpressionProjectionOperationBuilder extends org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder {
                                /**
                                 * Creates a new {@link ExpressionProjectionOperationBuilder} for the given value, {@link ProjectionOperation} and
                                 * parameters.
                                 * @param expression must not be {#literal null}.
                                 * @param operation must not be {#literal null}.
                                 * @param parameters
                                 */
                                // @ts-ignore
                                constructor(expression: java.lang.String | string, operation: org.springframework.data.mongodb.core.aggregation.ProjectionOperation, parameters: java.lang.Object[] | any[])
                                // @ts-ignore
                                public project(operation: java.lang.String | string, ...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                // @ts-ignore
                                public as(alias: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                            }
                        }
                    }
                }
            }
        }
    }
}
