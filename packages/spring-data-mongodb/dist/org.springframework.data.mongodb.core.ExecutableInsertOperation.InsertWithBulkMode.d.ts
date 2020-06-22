declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableInsertOperation {
                        /**
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface InsertWithBulkMode<T> extends org.springframework.data.mongodb.core.ExecutableInsertOperation.TerminatingInsert<T> {
                            /**
                             * Define the {@link BulkMode} to use for bulk insert operation.
                             * @param bulkMode must not be {#literal null}.
                             * @return new instance of {#link TerminatingBulkInsert}.
                             * @throws IllegalArgumentException if bulkMode is {#literal null}.
                             */
                            // @ts-ignore
                            withBulkMode(bulkMode: org.springframework.data.mongodb.core.BulkOperations.BulkMode): org.springframework.data.mongodb.core.ExecutableInsertOperation.TerminatingBulkInsert<T>
                        }
                    }
                }
            }
        }
    }
}
