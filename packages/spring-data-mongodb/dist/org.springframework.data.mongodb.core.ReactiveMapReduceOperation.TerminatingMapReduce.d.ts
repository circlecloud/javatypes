declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveMapReduceOperation {
                        /**
                         * Trigger mapReduce execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface TerminatingMapReduce<T> {
                            /**
                             * Get the {@link Flux} emitting mapReduce results.
                             * @return a {#link Flux} emitting the already mapped operation results.
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
