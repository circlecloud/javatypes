declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Common interface for processors of all protocols.
             */
            // @ts-ignore
            interface Processor {
                /**
                 * Process a connection. This is called whenever an event occurs (e.g. more
                 * data arrives) that allows processing to continue for a connection that is
                 * not currently being processed.
                 * @param socketWrapper The connection to process
                 * @param status The status of the connection that triggered this additional
                 *                processing
                 * @return The state the caller should put the socket in when this method
                 *          returns
                 * @throws IOException If an I/O error occurs during the processing of the
                 *          request
                 */
                // @ts-ignore
                process(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>, status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                /**
                 * Generate an upgrade token.
                 * @return An upgrade token encapsulating the information required to
                 *          process the upgrade request
                 * @throws IllegalStateException if this is called on a Processor that does
                 *          not support upgrading
                 */
                // @ts-ignore
                getUpgradeToken(): org.apache.coyote.UpgradeToken
                /**
                 * @return {#code true} if the Processor is currently processing an upgrade
                 *          request, otherwise {@code false}
                 */
                // @ts-ignore
                isUpgrade(): boolean
                // @ts-ignore
                isAsync(): boolean
                /**
                 * Check this processor to see if the async timeout has expired and process
                 * a timeout if that is that case.
                 * @param now The time (as returned by {#link System#currentTimeMillis()} to
                 *             use as the current time to determine whether the async timeout
                 *             has expired. If negative, the timeout will always be treated
                 *             as if it has expired.
                 */
                // @ts-ignore
                timeoutAsync(now: number /*long*/): void
                /**
                 * @return The request associated with this processor.
                 */
                // @ts-ignore
                getRequest(): org.apache.coyote.Request
                /**
                 * Recycle the processor, ready for the next request which may be on the
                 * same connection or a different connection.
                 */
                // @ts-ignore
                recycle(): void
                /**
                 * Set the SSL information for this HTTP connection.
                 * @param sslSupport The SSL support object to use for this connection
                 */
                // @ts-ignore
                setSslSupport(sslSupport: org.apache.tomcat.util.net.SSLSupport): void
                /**
                 * Allows retrieving additional input during the upgrade process.
                 * @return leftover bytes
                 * @throws IllegalStateException if this is called on a Processor that does
                 *          not support upgrading
                 */
                // @ts-ignore
                getLeftoverInput(): java.nio.ByteBuffer
                /**
                 * Informs the processor that the underlying I/O layer has stopped accepting
                 * new connections. This is primarily intended to enable processors that
                 * use multiplexed connections to prevent further 'streams' being added to
                 * an existing multiplexed connection.
                 */
                // @ts-ignore
                pause(): void
                /**
                 * Check to see if the async generation (each cycle of async increments the
                 * generation of the AsyncStateMachine) is the same as the generation when
                 * the most recent async timeout was triggered. This is intended to be used
                 * to avoid unnecessary processing.
                 * @return {#code true} If the async generation has not changed since the
                 *          async timeout was triggered
                 */
                // @ts-ignore
                checkAsyncTimeoutGeneration(): boolean
            }
        }
    }
}
