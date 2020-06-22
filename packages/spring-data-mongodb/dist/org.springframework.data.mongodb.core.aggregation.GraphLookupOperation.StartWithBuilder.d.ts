declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace GraphLookupOperation {
                            /**
                             * @author Mark Paluch
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            interface StartWithBuilder {
                                /**
                                 * Set the startWith {@literal fieldReferences} to apply the {@code $graphLookup} to.
                                 * @param fieldReferences must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                startWith(...fieldReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.ConnectFromBuilder
                                /**
                                 * Set the startWith {@literal expressions} to apply the {@code $graphLookup} to.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                startWith(...expressions: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.ConnectFromBuilder
                                /**
                                 * Set the startWith as either {@literal fieldReferences}, {@link Fields}, {@link Document} or
                                 * {@link AggregationExpression} to apply the {@code $graphLookup} to.
                                 * @param expressions must not be {#literal null}.
                                 * @return 
                                 * @throws IllegalArgumentException
                                 */
                                // @ts-ignore
                                startWith(...expressions: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.ConnectFromBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
