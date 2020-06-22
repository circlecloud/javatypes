declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableMapReduceOperation {
                        /**
                         * Trigger mapReduce execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface TerminatingMapReduce<T> {
                            /**
                             * Get the mapReduce results.
                             * @return never {#literal null}.
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
