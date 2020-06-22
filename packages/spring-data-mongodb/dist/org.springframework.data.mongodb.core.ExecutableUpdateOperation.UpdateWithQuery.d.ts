declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * Define a filter query for the {@link Update}.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface UpdateWithQuery<T> extends org.springframework.data.mongodb.core.ExecutableUpdateOperation.UpdateWithUpdate<T> {
                            /**
                             * Filter documents by given {@literal query}.
                             * @param query must not be {#literal null}.
                             * @return new instance of {#link UpdateWithQuery}.
                             * @throws IllegalArgumentException if query is {#literal null}.
                             */
                            // @ts-ignore
                            matching(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.ExecutableUpdateOperation.UpdateWithUpdate<T>
                        }
                    }
                }
            }
        }
    }
}
