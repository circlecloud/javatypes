declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveUpdateOperation {
                        /**
                         * Compose update execution by calling one of the terminating methods.
                         */
                        // @ts-ignore
                        interface TerminatingUpdate<T> extends org.springframework.data.mongodb.core.ReactiveUpdateOperation.TerminatingFindAndModify<T>, org.springframework.data.mongodb.core.ReactiveUpdateOperation.FindAndModifyWithOptions<T> {
                            /**
                             * Update all matching documents in the collection.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            all(): object
                            /**
                             * Update the first document in the collection.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            first(): object
                            /**
                             * Creates a new document if no documents match the filter query or updates the matching ones.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            upsert(): object
                        }
                    }
                }
            }
        }
    }
}
