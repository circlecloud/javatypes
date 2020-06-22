declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ArithmeticOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ArithmeticOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link ArithmeticOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link ArithmeticOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link AggregationExpression} that returns the absolute value of the associated number.
                                 * @return 
                                 */
                                // @ts-ignore
                                public abs(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Abs
                                /**
                                 * Creates new {@link AggregationExpression} that adds the value of {@literal fieldReference} to the associated
                                 * number.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public add(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                /**
                                 * Creates new {@link AggregationExpression} that adds the resulting value of the given
                                 * {@link AggregationExpression} to the associated number.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public add(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                /**
                                 * Creates new {@link AggregationExpression} that adds the given {@literal value} to the associated number.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public add(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Add
                                /**
                                 * Creates new {@link AggregationExpression} that returns the smallest integer greater than or equal to the
                                 * assoicated number.
                                 * @return 
                                 */
                                // @ts-ignore
                                public ceil(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ceil
                                /**
                                 * Creates new {@link AggregationExpression} that ivides the associated number by number referenced via
                                 * {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public divideBy(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated number by number extracted via
                                 * {@literal expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public divideBy(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated number by given {@literal value}.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public divideBy(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Divide
                                /**
                                 * Creates new {@link AggregationExpression} that raises Euler’s number (i.e. e ) on the associated number.
                                 * @return 
                                 */
                                // @ts-ignore
                                public exp(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Exp
                                /**
                                 * Creates new {@link AggregationExpression} that returns the largest integer less than or equal to the associated
                                 * number.
                                 * @return 
                                 */
                                // @ts-ignore
                                public floor(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Floor
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the natural logarithm ln (i.e loge) of the assoicated
                                 * number.
                                 * @return 
                                 */
                                // @ts-ignore
                                public ln(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Ln
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the log of the associated number in the specified base
                                 * referenced via {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public log(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Log
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the log of the associated number in the specified base
                                 * extracted by given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public log(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Log
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the log of a the associated number in the specified
                                 * {@literal base}.
                                 * @param base must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public log(base: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Log
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the log base 10 for the associated number.
                                 * @return 
                                 */
                                // @ts-ignore
                                public log10(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Log10
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated number by another and returns the
                                 * remainder.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public mod(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Mod
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated number by another and returns the
                                 * remainder.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public mod(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Mod
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated number by another and returns the
                                 * remainder.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public mod(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Mod
                                /**
                                 * Creates new {@link AggregationExpression} that multiplies the associated number with another.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public multiplyBy(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Multiply
                                /**
                                 * Creates new {@link AggregationExpression} that multiplies the associated number with another.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public multiplyBy(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Multiply
                                /**
                                 * Creates new {@link AggregationExpression} that multiplies the associated number with another.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public multiplyBy(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Multiply
                                /**
                                 * Creates new {@link AggregationExpression} that raises the associated number to the specified exponent.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public pow(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Pow
                                /**
                                 * Creates new {@link AggregationExpression} that raises the associated number to the specified exponent.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public pow(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Pow
                                /**
                                 * Creates new {@link AggregationExpression} that raises the associated number to the specified exponent.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public pow(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Pow
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the square root of the associated number.
                                 * @return 
                                 */
                                // @ts-ignore
                                public sqrt(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Sqrt
                                /**
                                 * Creates new {@link AggregationExpression} that subtracts value of given from the associated number.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public subtract(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                /**
                                 * Creates new {@link AggregationExpression} that subtracts value of given from the associated number.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public subtract(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                /**
                                 * Creates new {@link AggregationExpression} that subtracts value from the associated number.
                                 * @param value
                                 * @return 
                                 */
                                // @ts-ignore
                                public subtract(value: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Subtract
                                /**
                                 * Creates new {@link AggregationExpression} that truncates a number to its integer.
                                 * @return 
                                 */
                                // @ts-ignore
                                public trunc(): org.springframework.data.mongodb.core.aggregation.ArithmeticOperators.Trunc
                                /**
                                 * Creates new {@link AggregationExpression} that calculates and returns the sum of numeric values.
                                 * @return 
                                 */
                                // @ts-ignore
                                public sum(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Sum
                                /**
                                 * Creates new {@link AggregationExpression} that returns the average value of the numeric values.
                                 * @return 
                                 */
                                // @ts-ignore
                                public avg(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Avg
                                /**
                                 * Creates new {@link AggregationExpression} that returns the maximum value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public max(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Max
                                /**
                                 * Creates new {@link AggregationExpression} that returns the minimum value.
                                 * @return 
                                 */
                                // @ts-ignore
                                public min(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.Min
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the population standard deviation of the input values.
                                 * @return 
                                 */
                                // @ts-ignore
                                public stdDevPop(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevPop
                                /**
                                 * Creates new {@link AggregationExpression} that calculates the sample standard deviation of the input values.
                                 * @return 
                                 */
                                // @ts-ignore
                                public stdDevSamp(): org.springframework.data.mongodb.core.aggregation.AccumulatorOperators.StdDevSamp
                            }
                        }
                    }
                }
            }
        }
    }
}
