declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace GraphLookupOperation {
                            /**
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            interface ConnectFromBuilder {
                                /**
                                 * Set the connectFrom {@literal fieldName} to apply the {@code $graphLookup} to.
                                 * @param fieldName must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                connectFrom(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.ConnectToBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
