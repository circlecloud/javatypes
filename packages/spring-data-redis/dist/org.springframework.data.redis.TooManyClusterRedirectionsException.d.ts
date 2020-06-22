declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * {@link DataRetrievalFailureException} thrown when following cluster redirects exceeds the max number of edges.
                 * @author Christoph Strobl
                 * @since 1.7
                 */
                // @ts-ignore
                class TooManyClusterRedirectionsException extends DataRetrievalFailureException {
                    /**
                     * Creates new {@link TooManyClusterRedirectionsException}.
                     * @param msg the detail message.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Creates new {@link TooManyClusterRedirectionsException}.
                     * @param msg the detail message.
                     * @param cause the root cause from the data access API in use.
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
