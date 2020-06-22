declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * Cancelable allows stopping long running tasks and freeing underlying resources.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface Cancelable {
                            /**
                             * Abort and free resources.
                             * @throws DataAccessResourceFailureException
                             */
                            // @ts-ignore
                            cancel(): void
                        }
                    }
                }
            }
        }
    }
}
