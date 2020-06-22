declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace SetOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class SetOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link SetOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link SetOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link AggregationExpression} that compares the previously mentioned field to one or more arrays and
                                 * returns {@literal true} if they have the same distinct elements and {@literal false} otherwise.
                                 * @param arrayReferences must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isEqualTo(...arrayReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetEquals
                                /**
                                 * Creates new {@link AggregationExpression} that compares the previously mentioned field to one or more arrays and
                                 * returns {@literal true} if they have the same distinct elements and {@literal false} otherwise.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isEqualTo(...expressions: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetEquals
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and one or more
                                 * arrays and returns an array that contains the elements that appear in every of those.
                                 * @param arrayReferences must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public intersects(...arrayReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIntersection
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and one or more
                                 * arrays and returns an array that contains the elements that appear in every of those.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public intersects(...expressions: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIntersection
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and one or more
                                 * arrays and returns an array that contains the elements that appear in any of those.
                                 * @param arrayReferences must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public union(...arrayReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetUnion
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and one or more
                                 * arrays and returns an array that contains the elements that appear in any of those.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public union(...expressions: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.SetOperators.SetUnion
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and returns an array
                                 * containing the elements that do not exist in the given {@literal arrayReference}.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public differenceTo(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.SetDifference
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and returns an array
                                 * containing the elements that do not exist in the given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public differenceTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.SetDifference
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and returns
                                 * {@literal true} if it is a subset of the given {@literal arrayReference}.
                                 * @param arrayReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isSubsetOf(arrayReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIsSubset
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and returns
                                 * {@literal true} if it is a subset of the given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isSubsetOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SetOperators.SetIsSubset
                                /**
                                 * Creates new {@link AggregationExpression} that takes array of the previously mentioned field and returns
                                 * {@literal true} if any of the elements are {@literal true} and {@literal false} otherwise.
                                 * @return 
                                 */
                                // @ts-ignore
                                public anyElementTrue(): org.springframework.data.mongodb.core.aggregation.SetOperators.AnyElementTrue
                                /**
                                 * Creates new {@link AggregationExpression} that tkes array of the previously mentioned field and returns
                                 * {@literal true} if no elements is {@literal false}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public allElementsTrue(): org.springframework.data.mongodb.core.aggregation.SetOperators.AllElementsTrue
                            }
                        }
                    }
                }
            }
        }
    }
}
