declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Exception thrown when at least one call to a clustered redis environment fails.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class ClusterCommandExecutionFailureException extends UncategorizedDataAccessException {
                        /**
                         * Creates new {@link ClusterCommandExecutionFailureException}.
                         * @param cause must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(cause: java.lang.Throwable | Error)
                        /**
                         * Creates new {@link ClusterCommandExecutionFailureException}.
                         * @param causes must not be {#literal empty}.
                         */
                        // @ts-ignore
                        constructor(causes: java.util.List<any> | Array<any>)
                        /**
                         * Get the collected errors.
                         * @return never {#literal null}.
                         * @deprecated since 2.0, use {#link #getSuppressed()}.
                         */
                        // @ts-ignore
                        public getCauses(): Array<any>
                    }
                }
            }
        }
    }
}
