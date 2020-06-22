declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * Trigger update execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface TerminatingUpdate<T> extends org.springframework.data.mongodb.core.ExecutableUpdateOperation.TerminatingFindAndModify<T>, org.springframework.data.mongodb.core.ExecutableUpdateOperation.FindAndModifyWithOptions<T> {
                            /**
                             * Update all matching documents in the collection.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            all(): UpdateResult
                            /**
                             * Update the first document in the collection.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            first(): UpdateResult
                            /**
                             * Creates a new document if no documents match the filter query or updates the matching ones.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            upsert(): UpdateResult
                        }
                    }
                }
            }
        }
    }
}
