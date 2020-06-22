declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableAggregationOperation {
                        /**
                         * Trigger execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface TerminatingAggregation<T> {
                            /**
                             * Apply pipeline operations as specified and get all matching elements.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            all(): org.springframework.data.mongodb.core.aggregation.AggregationResults<T>
                            /**
                             * Apply pipeline operations as specified and stream all matching elements. <br />
                             * Returns a {@link CloseableIterator} that wraps the a Mongo DB {@link com.mongodb.Cursor}
                             * @return a {#link CloseableIterator} that wraps the a Mongo DB {@link com.mongodb.Cursor} that needs to be closed.
                             *          Never {@literal null}.
                             */
                            // @ts-ignore
                            stream(): object
                        }
                    }
                }
            }
        }
    }
}
