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
                            interface PathBuilder {
                                /**
                                 * @param path the path to unwind, must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                path(path: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.UnwindOperation.IndexBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
