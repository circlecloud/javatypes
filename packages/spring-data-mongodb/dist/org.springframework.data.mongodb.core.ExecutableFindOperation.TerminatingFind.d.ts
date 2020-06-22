declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableFindOperation {
                        /**
                         * Trigger find execution by calling one of the terminating methods.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface TerminatingFind<T> {
                            /**
                             * Get exactly zero or one result.
                             * @return {#link Optional#empty()} if no match found.
                             * @throws org.springframework.dao.IncorrectResultSizeDataAccessException if more than one match found.
                             */
                            // @ts-ignore
                            one(): java.util.Optional<T>
                            /**
                             * Get exactly zero or one result.
                             * @return {#literal null} if no match found.
                             * @throws org.springframework.dao.IncorrectResultSizeDataAccessException if more than one match found.
                             */
                            // @ts-ignore
                            oneValue(): T
                            /**
                             * Get the first or no result.
                             * @return {#link Optional#empty()} if no match found.
                             */
                            // @ts-ignore
                            first(): java.util.Optional<T>
                            /**
                             * Get the first or no result.
                             * @return {#literal null} if no match found.
                             */
                            // @ts-ignore
                            firstValue(): T
                            /**
                             * Get all matching elements.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            all(): Array<T>
                            /**
                             * Stream all matching elements.
                             * @return a {#link Stream} that wraps the a Mongo DB {@link com.mongodb.Cursor} that needs to be closed. Never
                             *          {@literal null}.
                             */
                            // @ts-ignore
                            stream(): java.util.stream.Stream<T>
                            /**
                             * Get the number of matching elements.
                             * @return total number of matching elements.
                             */
                            // @ts-ignore
                            count(): number /*long*/
                            /**
                             * Check for the presence of matching elements.
                             * @return {#literal true} if at least one matching element exists.
                             */
                            // @ts-ignore
                            exists(): boolean
                        }
                    }
                }
            }
        }
    }
}
