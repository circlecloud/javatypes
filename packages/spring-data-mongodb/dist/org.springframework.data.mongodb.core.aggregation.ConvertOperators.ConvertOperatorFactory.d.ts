declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ConvertOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link ConvertOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link ConvertOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link Convert aggregation expression} that takes the associated value and converts it into the type
                                 * specified by the given {@code stringTypeIdentifier}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param stringTypeIdentifier must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public convertTo(stringTypeIdentifier: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Creates new {@link Convert aggregation expression} that takes the associated value and converts it into the type
                                 * specified by the given {@code numericTypeIdentifier}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param numericTypeIdentifier must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public convertTo(numericTypeIdentifier: number /*int*/): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Creates new {@link Convert aggregation expression} that takes the associated value and converts it into the type
                                 * specified by the given {@link Type}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param type must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public convertTo(type: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Creates new {@link Convert aggregation expression} that takes the associated value and converts it into the type
                                 * specified by the value of the given {@link Field field reference}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public convertToTypeOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Creates new {@link Convert aggregation expression} that takes the associated value and converts it into the type
                                 * specified by the given {@link AggregationExpression expression}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public convertToTypeOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Creates new {@link ToBool aggregation expression} for {@code $toBool} that converts a value to boolean. Shorthand
                                 * for {@link #convertTo(String) #convertTo("bool")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToBool}.
                                 */
                                // @ts-ignore
                                public convertToBoolean(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToBool
                                /**
                                 * Creates new {@link ToDate aggregation expression} for {@code $toDate} that converts a value to a date. Shorthand
                                 * for {@link #convertTo(String) #convertTo("date")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToDate}.
                                 */
                                // @ts-ignore
                                public convertToDate(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToDate
                                /**
                                 * Creates new {@link ToDecimal aggregation expression} for {@code $toDecimal} that converts a value to a decimal.
                                 * Shorthand for {@link #convertTo(String) #convertTo("decimal")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToDecimal}.
                                 */
                                // @ts-ignore
                                public convertToDecimal(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToDecimal
                                /**
                                 * Creates new {@link ToDouble aggregation expression} for {@code $toDouble} that converts a value to a decimal.
                                 * Shorthand for {@link #convertTo(String) #convertTo("double")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToDouble}.
                                 */
                                // @ts-ignore
                                public convertToDouble(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToDouble
                                /**
                                 * Creates new {@link ToInt aggregation expression} for {@code $toInt} that converts a value to an int. Shorthand
                                 * for {@link #convertTo(String) #convertTo("int")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToInt}.
                                 */
                                // @ts-ignore
                                public convertToInt(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToInt
                                /**
                                 * Creates new {@link ToInt aggregation expression} for {@code $toLong} that converts a value to a long. Shorthand
                                 * for {@link #convertTo(String) #convertTo("long")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToInt}.
                                 */
                                // @ts-ignore
                                public convertToLong(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToLong
                                /**
                                 * Creates new {@link ToInt aggregation expression} for {@code $toObjectId} that converts a value to a objectId. Shorthand
                                 * for {@link #convertTo(String) #convertTo("objectId")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToInt}.
                                 */
                                // @ts-ignore
                                public convertToObjectId(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToObjectId
                                /**
                                 * Creates new {@link ToInt aggregation expression} for {@code $toString} that converts a value to a string. Shorthand
                                 * for {@link #convertTo(String) #convertTo("string")}. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link ToInt}.
                                 */
                                // @ts-ignore
                                public convertToString(): org.springframework.data.mongodb.core.aggregation.ConvertOperators.ToString
                            }
                        }
                    }
                }
            }
        }
    }
}
