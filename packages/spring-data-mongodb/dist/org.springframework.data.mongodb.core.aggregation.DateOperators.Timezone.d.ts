declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace DateOperators {
                            /**
                             * Timezone represents a MongoDB timezone abstraction which can be represented with a timezone ID or offset as a
                             * {@link String}. Also accepts a {@link AggregationExpression} or {@link Field} that resolves to a {@link String} of
                             * either Olson Timezone Identifier or a UTC Offset.<br />
                             * <table valign="top">
                             * <tr>
                             * <th>Format</th>
                             * <th>Example</th>
                             * </tr>
                             * <tr>
                             * <td>Olson Timezone Identifier</td>
                             * <td>"America/New_York"<br />
                             * "Europe/London"<br />
                             * "GMT"</td>
                             * </tr>
                             * <tr>
                             * <td>UTC Offset</td>
                             * <td>+/-[hh]:[mm], e.g. "+04:45"<br />
                             * -[hh][mm], e.g. "-0530"<br />
                             * +/-[hh], e.g. "+03"</td>
                             * </tr>
                             * </table>
                             * <strong>NOTE: </strong>Support for timezones in aggregations Requires MongoDB 3.6 or later.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class Timezone extends java.lang.Object {
                                /**
                                 * Return an empty {@link Timezone}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public static none(): org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone
                                /**
                                 * Create a {@link Timezone} for the given value which must be a valid expression that resolves to a {@link String}
                                 * representing an Olson Timezone Identifier or UTC Offset.
                                 * @param value the plain timezone {#link String}, a {@link Field} holding the timezone or an
                                 *           {@link AggregationExpression} resulting in the timezone.
                                 * @return new instance of {#link Timezone}.
                                 */
                                // @ts-ignore
                                public static valueOf(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone
                                /**
                                 * Create a {@link Timezone} for the {@link Field} reference holding the Olson Timezone Identifier or UTC Offset.
                                 * @param fieldReference the {#link Field} holding the timezone.
                                 * @return new instance of {#link Timezone}.
                                 */
                                // @ts-ignore
                                public static ofField(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone
                                /**
                                 * Create a {@link Timezone} for the {@link AggregationExpression} resulting in the Olson Timezone Identifier or UTC
                                 * Offset.
                                 * @param expression the {#link AggregationExpression} resulting in the timezone.
                                 * @return new instance of {#link Timezone}.
                                 */
                                // @ts-ignore
                                public static ofExpression(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.Timezone
                            }
                        }
                    }
                }
            }
        }
    }
}
