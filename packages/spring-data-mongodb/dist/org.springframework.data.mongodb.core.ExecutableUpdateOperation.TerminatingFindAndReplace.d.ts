declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * Trigger
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * execution by calling one of the terminating methods.
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface TerminatingFindAndReplace<T> {
                            /**
                             * Find, replace and return the first matching document.
                             * @return {#link Optional#empty()} if nothing found.
                             */
                            // @ts-ignore
                            findAndReplace(): java.util.Optional<T>
                            /**
                             * Find, replace and return the first matching document.
                             * @return {#literal null} if nothing found.
                             */
                            // @ts-ignore
                            findAndReplaceValue(): T
                        }
                    }
                }
            }
        }
    }
}
