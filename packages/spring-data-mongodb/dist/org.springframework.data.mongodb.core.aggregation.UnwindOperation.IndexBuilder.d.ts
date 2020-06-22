declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace UnwindOperation {
                            /**
                             * @author Mark Paluch
                             * @since 1.10
                             */
                            // @ts-ignore
                            interface IndexBuilder {
                                /**
                                 * Exposes the array index as {@code field}.
                                 * @param field field name to expose the field array index, must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                arrayIndex(field: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.UnwindOperation.EmptyArraysBuilder
                                /**
                                 * Do not expose the array index.
                                 * @return 
                                 */
                                // @ts-ignore
                                noArrayIndex(): org.springframework.data.mongodb.core.aggregation.UnwindOperation.EmptyArraysBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
