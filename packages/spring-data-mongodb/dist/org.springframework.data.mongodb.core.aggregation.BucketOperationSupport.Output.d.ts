declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketOperationSupport {
                            /**
                             * Encapsulates an output field in a bucket aggregation stage. <br />
                             * Output fields can be either top-level fields that define a valid field name or nested output fields using
                             * operators.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            abstract class Output extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationExpression {
                                /**
                                 * Creates new {@link Projection} for the given {@link Field}.
                                 * @param field must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(field: org.springframework.data.mongodb.core.aggregation.Field)
                                /**
                                 * Returns the field exposed by the {@link Output}.
                                 * @return will never be {#literal null}.
                                 */
                                // @ts-ignore
                                getExposedField(): org.springframework.data.mongodb.core.aggregation.ExposedFields.ExposedField
                            }
                        }
                    }
                }
            }
        }
    }
}
