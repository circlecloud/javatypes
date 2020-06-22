declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace BucketAutoOperation {
                            /**
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            interface Granularity {
                                /**
                                 * @return a String that represents a MongoDB granularity to be used with {#link BucketAutoOperation}. Never
                                 *          {@literal null}.
                                 */
                                // @ts-ignore
                                getMongoRepresentation(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
