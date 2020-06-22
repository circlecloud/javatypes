declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketOperationSupport {
                            /**
                             * Base class for {@link Output} builders that result in a {@link BucketOperationSupport} providing the built
                             * {@link Output}.
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            abstract class OutputBuilder<B extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OutputBuilder<B, T>, T extends org.springframework.data.mongodb.core.aggregation.BucketOperationSupport<T, B>> extends java.lang.Object {
                                /**
                                 * Creates a new {@link OutputBuilder} for the given value and {@link BucketOperationSupport}.
                                 * @param value must not be {#literal null}.
                                 * @param operation must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(value: java.lang.Object | any, operation: T)
                                // @ts-ignore
                                readonly value: java.lang.Object | any
                                // @ts-ignore
                                readonly operation: T
                                /**
                                 * Generates a builder for a {@code $sum}-expression. <br />
                                 * Count expressions are emulated via {@code $sum: 1}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public count(): B
                                /**
                                 * Generates a builder for a {@code $sum}-expression for the current value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public sum(): B
                                /**
                                 * Generates a builder for a {@code $sum}-expression for the given {@literal value}.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public sum(value: java.lang.Number): B
                                /**
                                 * Generates a builder for an {@code $last}-expression for the current value..
                                 * @return 
                                 */
                                // @ts-ignore
                                public last(): B
                                /**
                                 * Generates a builder for a {@code $first}-expression the current value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public first(): B
                                /**
                                 * Generates a builder for an {@code $avg}-expression for the current value.
                                 * @param reference
                                 * @return 
                                 */
                                // @ts-ignore
                                public avg(): B
                                /**
                                 * Generates a builder for an {@code $min}-expression for the current value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public min(): B
                                /**
                                 * Generates a builder for an {@code $max}-expression for the current value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public max(): B
                                /**
                                 * Generates a builder for an {@code $push}-expression for the current value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public push(): B
                                /**
                                 * Generates a builder for an {@code $addToSet}-expression for the current value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public addToSet(): B
                                /**
                                 * Apply an operator to the current value.
                                 * @param operation the operation name, must not be {#literal null} or empty.
                                 * @param values must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public apply(operation: java.lang.String | string, ...values: java.lang.Object[] | any[]): B
                                /**
                                 * Apply an {@link OperationOutput} to this output.
                                 * @param operationOutput must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                abstract apply(operationOutput: org.springframework.data.mongodb.core.aggregation.BucketOperationSupport.OperationOutput): B
                                /**
                                 * Returns the finally to be applied {@link BucketOperation} with the given alias.
                                 * @param alias will never be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                public as(alias: java.lang.String | string): T
                            }
                        }
                    }
                }
            }
        }
    }
}
