declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ConvertOperators {
                            /**
                             * {@link AggregationExpression} for {@code $convert} that converts a value to a specified type. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @author Christoph Strobl
                             * @see <a href=
                             *  "https://docs.mongodb.com/manual/reference/operator/aggregation/convert/">https://docs.mongodb.com/manual/reference/operator/aggregation/convert/</a>
                             * @since 2.1
                             */
                            // @ts-ignore
                            class Convert extends org.springframework.data.mongodb.core.aggregation.AbstractAggregationExpression {
                                /**
                                 * Creates new {@link Convert} using the given value for the {@literal input} attribute.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public static convertValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Creates new {@link Convert} using the value of the provided {@link Field fieldReference} as {@literal input}
                                 * value.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public static convertValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Creates new {@link Convert} using the result of the provided {@link AggregationExpression expression} as
                                 * {@literal input} value.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public static convertValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Specify the conversion target type via its {@link String} representation.
                                 * <ul>
                                 * <li>double</li>
                                 * <li>string</li>
                                 * <li>objectId</li>
                                 * <li>bool</li>
                                 * <li>date</li>
                                 * <li>int</li>
                                 * <li>long</li>
                                 * <li>decimal</li>
                                 * </ul>
                                 * @param stringTypeIdentifier must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public to(stringTypeIdentifier: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Specify the conversion target type via its numeric representation.
                                 * <dl>
                                 * <dt>1</dt>
                                 * <dd>double</dd>
                                 * <dt>2</dt>
                                 * <dd>string</li>
                                 * <dt>7</dt>
                                 * <dd>objectId</li>
                                 * <dt>8</dt>
                                 * <dd>bool</dd>
                                 * <dt>9</dt>
                                 * <dd>date</dd>
                                 * <dt>16</dt>
                                 * <dd>int</dd>
                                 * <dt>18</dt>
                                 * <dd>long</dd>
                                 * <dt>19</dt>
                                 * <dd>decimal</dd>
                                 * </dl>
                                 * @param numericTypeIdentifier must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public to(numericTypeIdentifier: number /*int*/): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Specify the conversion target type.
                                 * @param type must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public to(type: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Specify the conversion target type via the value of the given field.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public toTypeOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Specify the conversion target type via the value of the given {@link AggregationExpression expression}.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public toTypeOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Optionally specify the value to return on encountering an error during conversion.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public onErrorReturn(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Optionally specify the field holding the value to return on encountering an error during conversion.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public onErrorReturnValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Optionally specify the expression to evaluate and return on encountering an error during conversion.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public onErrorReturnValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Optionally specify the value to return when the input is {@literal null} or missing.
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public onNullReturn(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Optionally specify the field holding the value to return when the input is {@literal null} or missing.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public onNullReturnValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
                                /**
                                 * Optionally specify the expression to evaluate and return when the input is {@literal null} or missing.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Convert}.
                                 */
                                // @ts-ignore
                                public onNullReturnValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ConvertOperators.Convert
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
