declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArrayOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ArrayOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link ArrayOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link ArrayOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and returns the element at the
                                 * specified array {@literal position}.
                                 * @param position
                                 * @return 
                                 */
                                // @ts-ignore
                                public elementAt(position: number /*int*/): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and returns the element at the position
                                 * resulting form the given {@literal expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public elementAt(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and returns the element at the position
                                 * defined by the referenced {@literal field}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public elementAt(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayElemAt
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and concats the given
                                 * {@literal arrayFieldReference} to it.
                                 * @param arrayFieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public concat(arrayFieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ConcatArrays
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and concats the array resulting form
                                 * the given {@literal expression} to it.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public concat(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ConcatArrays
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and selects a subset of the array to
                                 * return based on the specified condition.
                                 * @return 
                                 */
                                // @ts-ignore
                                public filter(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Filter.AsBuilder
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and an check if its an array.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isArray(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.IsArray
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and retrieves its length.
                                 * @return 
                                 */
                                // @ts-ignore
                                public length(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Size
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated array and selects a subset from it.
                                 * @return 
                                 */
                                // @ts-ignore
                                public slice(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Slice
                                /**
                                 * Creates new {@link AggregationExpression} that searches the associated array for an occurrence of a specified
                                 * value and returns the array index (zero-based) of the first occurrence.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public indexOf(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ArrayOperators.IndexOfArray
                                /**
                                 * Creates new {@link AggregationExpression} that returns an array with the elements in reverse order.
                                 * @return 
                                 */
                                // @ts-ignore
                                public reverse(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ReverseArray
                                /**
                                 * Start creating new {@link AggregationExpression} that applies an {@link AggregationExpression} to each element in
                                 * an array and combines them into a single value.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public reduce(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayOperatorFactory.ReduceInitialValueBuilder
                                /**
                                 * Start creating new {@link AggregationExpression} that applies an {@link AggregationExpression} to each element in
                                 * an array and combines them into a single value.
                                 * @param expressions
                                 * @return 
                                 */
                                // @ts-ignore
                                public reduce(...expressions: org.springframework.data.mongodb.core.aggregation.ArrayOperators.Reduce.PropertyExpression[]): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayOperatorFactory.ReduceInitialValueBuilder
                                /**
                                 * Creates new {@link AggregationExpression} that transposes an array of input arrays so that the first element of
                                 * the output array would be an array containing, the first element of the first input array, the first element of
                                 * the second input array, etc.
                                 * @param arrays must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public zipWith(...arrays: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ArrayOperators.Zip
                                /**
                                 * Creates new {@link AggregationExpression} that returns a boolean indicating whether a specified value is in the
                                 * associated array.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public containsValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ArrayOperators.In
                                /**
                                 * Creates new {@link AggregationExpression} that converts the associated expression into an object.
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @return new instance of {#link ArrayToObject}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public toObject(): org.springframework.data.mongodb.core.aggregation.ArrayOperators.ArrayToObject
                            }
                        }
                    }
                }
            }
        }
    }
}
