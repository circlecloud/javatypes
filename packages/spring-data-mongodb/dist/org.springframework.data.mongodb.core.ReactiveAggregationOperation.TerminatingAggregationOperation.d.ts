declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveAggregationOperation {
                        /**
                         * Trigger execution by calling one of the terminating methods.
                         */
                        // @ts-ignore
                        interface TerminatingAggregationOperation<T> {
                            /**
                             * Apply pipeline operations as specified and stream all matching elements. <br />
                             * @return a {#link Flux} streaming all matching elements. Never {@literal null}.
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
