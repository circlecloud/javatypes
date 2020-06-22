declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Adapter for creating synchronous {@link IndexOperations}.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface IndexOperationsAdapter extends org.springframework.data.mongodb.core.index.IndexOperations {
                            /**
                             * Obtain a blocking variant of {@link IndexOperations} wrapping {@link ReactiveIndexOperations}.
                             * @param reactiveIndexOperations must not be {#literal null}.
                             * @return never {#literal null}
                             */
                            // @ts-ignore
                            blocking(reactiveIndexOperations: org.springframework.data.mongodb.core.index.ReactiveIndexOperations): org.springframework.data.mongodb.core.index.IndexOperationsAdapter
                        }
                    }
                }
            }
        }
    }
}
