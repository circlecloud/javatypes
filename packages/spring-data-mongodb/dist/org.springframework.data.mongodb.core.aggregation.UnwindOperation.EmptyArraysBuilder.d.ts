declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace UnwindOperation {
                            // @ts-ignore
                            interface EmptyArraysBuilder {
                                /**
                                 * Output documents if the array is null or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                preserveNullAndEmptyArrays(): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                                /**
                                 * Do not output documents if the array is null or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                skipNullAndEmptyArrays(): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                            }
                        }
                    }
                }
            }
        }
    }
}
