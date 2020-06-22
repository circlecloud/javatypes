declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ComparisonOperators {
                            // @ts-ignore
                            class ComparisonOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link ComparisonOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link ComparisonOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public compareTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public compareTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public compareToValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Cmp
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is equal to the value of the referenced field.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public equalTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is equal to the expression result.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public equalTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is equal to the given value.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public equalToValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Eq
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is greater than the value of the referenced field.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThan(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is greater than the expression result.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThan(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is greater than the given value.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThanValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gt
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is greater than or equivalent to the value of the referenced field.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThanEqualTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gte
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is greater than or equivalent to the expression result.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThanEqualTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gte
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is greater than or equivalent to the given value.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public greaterThanEqualToValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Gte
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is less than the value of the referenced field.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThan(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is less than the expression result.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThan(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is less than to the given value.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThanValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lt
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is less than or equivalent to the value of the referenced field.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThanEqualTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lte
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is less than or equivalent to the expression result.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThanEqualTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lte
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the first
                                 * value is less than or equivalent to the given value.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public lessThanEqualToValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Lte
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the values
                                 * are not equivalent.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public notEqualTo(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Ne
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the values
                                 * are not equivalent.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public notEqualTo(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Ne
                                /**
                                 * Creates new {@link AggregationExpression} that compares two values and returns {@literal true} when the values
                                 * are not equivalent.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public notEqualToValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ComparisonOperators.Ne
                            }
                        }
                    }
                }
            }
        }
    }
}
