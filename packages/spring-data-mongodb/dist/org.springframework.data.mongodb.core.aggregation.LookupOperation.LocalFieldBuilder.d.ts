declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace LookupOperation {
                            // @ts-ignore
                            interface LocalFieldBuilder {
                                /**
                                 * @param name the field from the documents input to the {#code $lookup} stage, must not be {@literal null} or
                                 *           empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                localField(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.LookupOperation.ForeignFieldBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
