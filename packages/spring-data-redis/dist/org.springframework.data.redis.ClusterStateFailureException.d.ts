declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * {@link DataAccessResourceFailureException} indicating the current local snapshot of cluster state does no longer
                 * represent the actual remote state. This can happen nodes are removed from cluster, slots get migrated to other nodes
                 * and so on.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @since 1.7
                 */
                // @ts-ignore
                class ClusterStateFailureException extends DataAccessResourceFailureException {
                    /**
                     * Creates new {@link ClusterStateFailureException}.
                     * @param msg the detail message.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Creates new {@link ClusterStateFailureException}.
                     * @param msg the detail message.
                     * @param cause the nested exception.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
