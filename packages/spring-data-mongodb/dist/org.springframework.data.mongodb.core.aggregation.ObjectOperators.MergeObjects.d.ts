declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ObjectOperators {
                            /**
                             * {@link AggregationExpression} for {@code $mergeObjects} that combines multiple documents into a single document.
                             * <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/reference/operator/aggregation/mergeObjects/">https://docs.mongodb.com/manual/reference/operator/aggregation/mergeObjects/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class MergeObjects extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} that takes given values and combines them into a single
                                 * document. <br />
                                 * @param values must not be {#literal null}.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public static merge(...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} that takes the given {@link Field field references} and
                                 * combines them into a single document.
                                 * @param fieldReferences must not be {#literal null}.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public static mergeValuesOf(...fieldReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} that takes the result of the given {@link Aggregation
                                 * expressions} and combines them into a single document.
                                 * @param expressions must not be {#literal null}.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public static mergeValuesOf(...expressions: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} by adding the given {@link Field field references}.
                                 * @param fieldReferences must not be {#literal null}.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public mergeWithValuesOf(...fieldReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} by adding the given {@link AggregationExpression
                                 * expressions}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public mergeWithValuesOf(...expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} by adding the given values (documents or mapped objects).
                                 * @param values must not be {#literal null}.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public mergeWith(...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                // @ts-ignore
                                public toDocument(value: java.lang.Object | any, context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                                // @ts-ignore
                                getMongoMethod(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
