declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveFindOperation {
                        /**
                         * Terminating distinct find operations.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface TerminatingDistinct<T> extends org.springframework.data.mongodb.core.ReactiveFindOperation.DistinctWithQuery<T> {
                            /**
                             * Get all matching distinct field values.
                             * @return empty {#link Flux} if not match found. Never {@literal null}.
                             */
                            // @ts-ignore
                            all(): object
                        }
                    }
                }
            }
        }
    }
}
