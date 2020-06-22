declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableFindOperation {
                        /**
                         * Result restrictions. Optional.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface DistinctWithQuery<T> extends org.springframework.data.mongodb.core.ExecutableFindOperation.DistinctWithProjection {
                            /**
                             * Set the filter query to be used.
                             * @param query must not be {#literal null}.
                             * @return new instance of {#link TerminatingDistinct}.
                             * @throws IllegalArgumentException if resultType is {#literal null}.
                             */
                            // @ts-ignore
                            matching(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.ExecutableFindOperation.TerminatingDistinct<T>
                        }
                    }
                }
            }
        }
    }
}
