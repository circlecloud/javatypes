declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveFindOperation {
                        /**
                         * Provide a {@link Query} override (optional).
                         */
                        // @ts-ignore
                        interface FindWithQuery<T> extends org.springframework.data.mongodb.core.ReactiveFindOperation.TerminatingFind<T> {
                            /**
                             * Set the filter query to be used.
                             * @param query must not be {#literal null}.
                             * @return new instance of {#link TerminatingFind}.
                             * @throws IllegalArgumentException if query is {#literal null}.
                             */
                            // @ts-ignore
                            matching(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.ReactiveFindOperation.TerminatingFind<T>
                            /**
                             * Set the filter query for the geoNear execution.
                             * @param nearQuery must not be {#literal null}.
                             * @return new instance of {#link TerminatingFindNear}.
                             * @throws IllegalArgumentException if nearQuery is {#literal null}.
                             */
                            // @ts-ignore
                            near(nearQuery: org.springframework.data.mongodb.core.query.NearQuery): org.springframework.data.mongodb.core.ReactiveFindOperation.TerminatingFindNear<T>
                        }
                    }
                }
            }
        }
    }
}
