declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * {@link ClusterRedirectException} indicates that a requested slot is not served by the targeted server but can be
                 * obtained on another one.
                 * @author Christoph Strobl
                 * @author Mark Paluch
                 * @since 1.7
                 */
                // @ts-ignore
                class ClusterRedirectException extends DataRetrievalFailureException {
                    /**
                     * Creates new {@link ClusterRedirectException}.
                     * @param slot the slot to redirect to.
                     * @param targetHost the host to redirect to.
                     * @param targetPort the port on the host.
                     * @param e the root cause from the data access API in use.
                     */
                    // @ts-ignore
                    constructor(slot: number /*int*/, targetHost: java.lang.String | string, targetPort: number /*int*/, e: java.lang.Throwable | Error)
                    /**
                     * @return the slot to go for.
                     */
                    // @ts-ignore
                    public getSlot(): number /*int*/
                    /**
                     * @return host serving the slot.
                     */
                    // @ts-ignore
                    public getTargetHost(): string
                    /**
                     * @return port on host serving the slot.
                     */
                    // @ts-ignore
                    public getTargetPort(): number /*int*/
                }
            }
        }
    }
}
