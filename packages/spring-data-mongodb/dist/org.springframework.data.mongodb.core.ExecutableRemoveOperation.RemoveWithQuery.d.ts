declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableRemoveOperation {
                        /**
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface RemoveWithQuery<T> extends org.springframework.data.mongodb.core.ExecutableRemoveOperation.TerminatingRemove<T> {
                            /**
                             * Define the query filtering elements.
                             * @param query must not be {#literal null}.
                             * @return new instance of {#link TerminatingRemove}.
                             * @throws IllegalArgumentException if query is {#literal null}.
                             */
                            // @ts-ignore
                            matching(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.ExecutableRemoveOperation.TerminatingRemove<T>
                        }
                    }
                }
            }
        }
    }
}
