declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * Trigger findAndModify execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface TerminatingFindAndModify<T> {
                            /**
                             * Find, modify and return the first matching document.
                             * @return {#link Optional#empty()} if nothing found.
                             */
                            // @ts-ignore
                            findAndModify(): java.util.Optional<T>
                            /**
                             * Find, modify and return the first matching document.
                             * @return {#literal null} if nothing found.
                             */
                            // @ts-ignore
                            findAndModifyValue(): T
                        }
                    }
                }
            }
        }
    }
}
