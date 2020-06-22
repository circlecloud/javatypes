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
                            interface ConnectToBuilder {
                                /**
                                 * Set the connectTo {@literal fieldName} to apply the {@code $graphLookup} to.
                                 * @param fieldName must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                connectTo(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.GraphLookupOperationBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
