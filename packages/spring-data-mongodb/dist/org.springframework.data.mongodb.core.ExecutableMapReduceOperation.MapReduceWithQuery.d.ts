declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableMapReduceOperation {
                        /**
                         * Input document filter query (Optional).
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface MapReduceWithQuery<T> extends org.springframework.data.mongodb.core.ExecutableMapReduceOperation.TerminatingMapReduce<T> {
                            /**
                             * Set the filter query to be used.
                             * @param query must not be {#literal null}.
                             * @return new instance of {#link TerminatingMapReduce}.
                             * @throws IllegalArgumentException if query is {#literal null}.
                             */
                            // @ts-ignore
                            matching(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.ExecutableMapReduceOperation.TerminatingMapReduce<T>
                        }
                    }
                }
            }
        }
    }
}
