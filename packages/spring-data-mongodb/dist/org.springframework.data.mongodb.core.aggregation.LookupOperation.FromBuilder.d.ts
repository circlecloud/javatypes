declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace LookupOperation {
                            // @ts-ignore
                            interface FromBuilder {
                                /**
                                 * @param name the collection in the same database to perform the join with, must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                from(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.LookupOperation.LocalFieldBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
