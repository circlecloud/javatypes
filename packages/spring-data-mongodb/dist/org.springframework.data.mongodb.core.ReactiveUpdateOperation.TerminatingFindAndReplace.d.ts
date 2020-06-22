declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveUpdateOperation {
                        /**
                         * Compose findAndReplace execution by calling one of the terminating methods.
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface TerminatingFindAndReplace<T> {
                            /**
                             * Find, replace and return the first matching document.
                             * @return {#link Mono#empty()} if nothing found. Never {@literal null}.
                             */
                            // @ts-ignore
                            findAndReplace(): object
                        }
                    }
                }
            }
        }
    }
}
