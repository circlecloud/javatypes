declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveUpdateOperation {
                        /**
                         * Define a filter query for the {@link org.springframework.data.mongodb.core.query.Update} (optional).
                         */
                        // @ts-ignore
                        interface UpdateWithQuery<T> extends org.springframework.data.mongodb.core.ReactiveUpdateOperation.UpdateWithUpdate<T> {
                            /**
                             * Filter documents by given {@literal query}.
                             * @param query must not be {#literal null}.
                             * @return new instance of {#link UpdateWithQuery}. Never {@literal null}.
                             * @throws IllegalArgumentException if query is {#literal null}.
                             */
                            // @ts-ignore
                            matching(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.ReactiveUpdateOperation.UpdateWithUpdate<T>
                        }
                    }
                }
            }
        }
    }
}
