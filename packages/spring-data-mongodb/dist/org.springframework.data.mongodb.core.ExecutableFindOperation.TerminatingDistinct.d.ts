declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableFindOperation {
                        /**
                         * Terminating distinct find operations.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface TerminatingDistinct<T> extends org.springframework.data.mongodb.core.ExecutableFindOperation.DistinctWithQuery<T> {
                            /**
                             * Get all matching distinct field values.
                             * @return empty {#link List} if not match found. Never {@literal null}.
                             * @throws DataAccessException if eg. result cannot be converted correctly which may happen if the document contains
                             *            {#link String} whereas the result type is specified as {@link Long}.
                             */
                            // @ts-ignore
                            all(): Array<T>
                        }
                    }
                }
            }
        }
    }
}
