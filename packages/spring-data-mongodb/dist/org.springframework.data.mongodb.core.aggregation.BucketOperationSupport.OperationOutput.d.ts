declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketOperationSupport {
                            /**
                             * Output field that uses a Mongo operation (expression object) to generate an output field value. <br />
                             * {@link OperationOutput} is used either with a regular field name or an operation keyword (e.g.
                             * {@literal $sum, $count}).
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class OperationOutput extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.Output {
                                /**
                                 * Creates a new {@link Output} for the given field.
                                 * @param operation the actual operation key, must not be {#literal null} or empty.
                                 * @param values the values to pass into the operation, must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(operation: java.lang.String | string, values: java.util.Collection<any> | Array<any>)
                                // @ts-ignore
                                public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                                // @ts-ignore
                                getOperationArguments(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Array<java.lang.Object | any>
                                /**
                                 * Returns the field that holds the {@link ProjectionOperationBuilder.OperationProjection}.
                                 * @return 
                                 */
                                // @ts-ignore
                                getField(): org.springframework.data.mongodb.core.aggregation.Field
                                /**
                                 * Creates a new instance of this {@link OperationOutput} with the given alias.
                                 * @param alias the alias to set
                                 * @return 
                                 */
                                // @ts-ignore
                                public withAlias(alias: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OperationOutput
                            }
                        }
                    }
                }
            }
        }
    }
}
