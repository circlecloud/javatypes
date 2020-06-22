declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveUpdateOperation {
                        /**
                         * Compose findAndModify execution by calling one of the terminating methods.
                         */
                        // @ts-ignore
                        interface TerminatingFindAndModify<T> {
                            /**
                             * Find, modify and return the first matching document.
                             * @return {#link Mono#empty()} if nothing found. Never {@literal null}.
                             */
                            // @ts-ignore
                            findAndModify(): object
                        }
                    }
                }
            }
        }
    }
}
