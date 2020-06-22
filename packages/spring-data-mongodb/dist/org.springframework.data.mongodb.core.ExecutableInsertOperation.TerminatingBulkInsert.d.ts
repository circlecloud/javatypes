declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableInsertOperation {
                        /**
                         * Trigger bulk insert execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface TerminatingBulkInsert<T> {
                            /**
                             * Bulk write collection of objects.
                             * @param objects must not be {#literal null}.
                             * @return resulting {#link BulkWriteResult}.
                             * @throws IllegalArgumentException if objects is {#literal null}.
                             */
                            // @ts-ignore
                            bulk(objects: java.util.Collection<any> | Array<any>): BulkWriteResult
                        }
                    }
                }
            }
        }
    }
}
