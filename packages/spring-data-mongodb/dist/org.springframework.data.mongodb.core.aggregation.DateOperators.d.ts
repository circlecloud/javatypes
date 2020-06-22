declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Gateway to {@literal Date} aggregation operations.
                         * @author Christoph Strobl
                         * @author Matt Morrissette
                         * @since 1.10
                         */
                        // @ts-ignore
                        class DateOperators extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Take the date referenced by given {@literal fieldReference}.
                             * @param fieldReference must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static dateOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateOperatorFactory
                            /**
                             * Take the date resulting from the given {@link AggregationExpression}.
                             * @param expression must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static dateOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.DateOperators.DateOperatorFactory
                            /**
                             * Take the given value as date.
                             * <p/>
                             * This can be one of:
                             * <ul>
                             * <li>{@link java.util.Date}</li>
                             * <li>{@link java.util.Calendar}</li>
                             * <li>{@link java.time.Instant}</li>
                             * <li>{@link java.time.ZonedDateTime}</li>
                             * <li>{@link java.lang.Long}</li>
                             * <li>{@link Field}</li>
                             * <li>{@link AggregationExpression}</li>
                             * </ul>
                             * @param value must not be {#literal null}.
                             * @return new instance of {#link DateOperatorFactory}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static dateValue(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.DateOperators.DateOperatorFactory
                            /**
                             * Construct a Date object by providing the date’s constituent properties.<br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @return new instance of {#link DateFromPartsOperatorFactory}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static dateFromParts(): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromPartsOperatorFactory
                            /**
                             * Construct a Date object from the given date {@link String}.<br />
                             * To use a {@link Field field reference} or {@link AggregationExpression} as source of the date string consider
                             * {@link DateOperatorFactory#fromString()} or {@link DateFromString#fromStringOf(AggregationExpression)}.<br />
                             * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                             * @return new instance of {#link DateFromPartsOperatorFactory}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static dateFromString(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.DateOperators.DateFromString
                        }
                    }
                }
            }
        }
    }
}
