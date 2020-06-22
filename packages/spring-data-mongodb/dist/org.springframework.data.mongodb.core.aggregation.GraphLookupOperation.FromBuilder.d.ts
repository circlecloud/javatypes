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
                            interface FromBuilder {
                                /**
                                 * Set the {@literal collectionName} to apply the {@code $graphLookup} to.
                                 * @param collectionName must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                from(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.StartWithBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
