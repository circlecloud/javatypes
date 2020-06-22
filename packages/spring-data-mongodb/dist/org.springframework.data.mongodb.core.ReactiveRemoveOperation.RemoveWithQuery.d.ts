declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveRemoveOperation {
                        /**
                         * Provide a {@link Query} override (optional).
                         */
                        // @ts-ignore
                        interface RemoveWithQuery<T> extends org.springframework.data.mongodb.core.ReactiveRemoveOperation.TerminatingRemove<T> {
                            /**
                             * Define the query filtering elements.
                             * @param query must not be {#literal null}.
                             * @return new instance of {#link TerminatingRemove}. Never {@literal null}.
                             * @throws IllegalArgumentException if query is {#literal null}.
                             */
                            // @ts-ignore
                            matching(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.ReactiveRemoveOperation.TerminatingRemove<T>
                        }
                    }
                }
            }
        }
    }
}
