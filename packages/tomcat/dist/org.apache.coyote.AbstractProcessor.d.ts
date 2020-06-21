declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Provides functionality and attributes common to all supported protocols
             * (currently HTTP and AJP).
             */
            // @ts-ignore
            abstract class AbstractProcessor extends org.apache.coyote.AbstractProcessorLight implements org.apache.coyote.ActionHook {
                // @ts-ignore
                constructor(adapter: org.apache.coyote.Adapter)
                // @ts-ignore
                constructor(adapter: org.apache.coyote.Adapter, coyoteRequest: org.apache.coyote.Request, coyoteResponse: org.apache.coyote.Response)
                // @ts-ignore
                readonly adapter: org.apache.coyote.Adapter
                // @ts-ignore
                readonly asyncStateMachine: org.apache.coyote.AsyncStateMachine
                // @ts-ignore
                readonly request: org.apache.coyote.Request
                // @ts-ignore
                readonly response: org.apache.coyote.Response
                // @ts-ignore
                socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>
                // @ts-ignore
                sslSupport: org.apache.tomcat.util.net.SSLSupport
                // @ts-ignore
                readonly userDataHelper: org.apache.tomcat.util.log.UserDataHelper
                /**
                 * Update the current error state to the new error state if the new error
                 * state is more severe than the current error state.
                 * @param errorState The error status details
                 * @param t The error which occurred
                 */
                // @ts-ignore
                setErrorState(errorState: org.apache.coyote.ErrorState, t: java.lang.Throwable | Error): void
                // @ts-ignore
                getErrorState(): org.apache.coyote.ErrorState
                // @ts-ignore
                public getRequest(): org.apache.coyote.Request
                /**
                 * Get the associated adapter.
                 * @return the associated adapter
                 */
                // @ts-ignore
                public getAdapter(): org.apache.coyote.Adapter
                /**
                 * Set the socket wrapper being used.
                 * @param socketWrapper The socket wrapper
                 */
                // @ts-ignore
                setSocketWrapper(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>): void
                /**
                 * @return the socket wrapper being used.
                 */
                // @ts-ignore
                getSocketWrapper(): org.apache.tomcat.util.net.SocketWrapperBase<any>
                // @ts-ignore
                public setSslSupport(sslSupport: org.apache.tomcat.util.net.SSLSupport): void
                /**
                 * Provides a mechanism to trigger processing on a container thread.
                 * @param runnable  The task representing the processing that needs to take
                 *                   place on a container thread
                 */
                // @ts-ignore
                execute(runnable: java.lang.Runnable): void
                // @ts-ignore
                public isAsync(): boolean
                // @ts-ignore
                public asyncPostProcess(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                // @ts-ignore
                public dispatch(status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                // @ts-ignore
                parseHost(valueMB: org.apache.tomcat.util.buf.MessageBytes): void
                /**
                 * Called when a host header is not present in the request (e.g. HTTP/1.0).
                 * It populates the server name with appropriate information. The source is
                 * expected to vary by protocol.
                 * <p>
                 * The default implementation is a NO-OP.
                 */
                // @ts-ignore
                populateHost(): void
                /**
                 * Called when a host header is not present or is empty in the request (e.g.
                 * HTTP/1.0). It populates the server port with appropriate information. The
                 * source is expected to vary by protocol.
                 * <p>
                 * The default implementation is a NO-OP.
                 */
                // @ts-ignore
                populatePort(): void
                // @ts-ignore
                public action(actionCode: org.apache.coyote.ActionCode, param: java.lang.Object | any): void
                /**
                 * Perform any necessary processing for a non-blocking read before
                 * dispatching to the adapter.
                 */
                // @ts-ignore
                dispatchNonBlockingRead(): void
                // @ts-ignore
                public timeoutAsync(now: number /*long*/): void
                // @ts-ignore
                public checkAsyncTimeoutGeneration(): boolean
                // @ts-ignore
                public setAsyncTimeout(timeout: number /*long*/): void
                // @ts-ignore
                public getAsyncTimeout(): number /*long*/
                // @ts-ignore
                public recycle(): void
                // @ts-ignore
                abstract prepareResponse(): void
                // @ts-ignore
                abstract finishResponse(): void
                // @ts-ignore
                abstract ack(): void
                // @ts-ignore
                abstract flush(): void
                // @ts-ignore
                abstract available(doRead: boolean): number /*int*/
                // @ts-ignore
                abstract setRequestBody(body: org.apache.tomcat.util.buf.ByteChunk): void
                // @ts-ignore
                abstract setSwallowResponse(): void
                // @ts-ignore
                abstract disableSwallowRequest(): void
                /**
                 * Processors that populate request attributes directly (e.g. AJP) should
                 * over-ride this method and return {@code false}.
                 * @return {#code true} if the SocketWrapper should be used to populate the
                 *          request attributes, otherwise {@code false}.
                 */
                // @ts-ignore
                getPopulateRequestAttributesFromSocket(): boolean
                /**
                 * Populate the remote host request attribute. Processors (e.g. AJP) that
                 * populate this from an alternative source should override this method.
                 */
                // @ts-ignore
                populateRequestAttributeRemoteHost(): void
                /**
                 * Populate the TLS related request attributes from the {@link SSLSupport}
                 * instance associated with this processor. Protocols that populate TLS
                 * attributes from a different source (e.g. AJP) should override this
                 * method.
                 */
                // @ts-ignore
                populateSslRequestAttributes(): void
                /**
                 * Processors that can perform a TLS re-handshake (e.g. HTTP/1.1) should
                 * override this method and implement the re-handshake.
                 * @throws IOException If authentication is required then there will be I/O
                 *                      with the client and this exception will be thrown if
                 *                      that goes wrong
                 */
                // @ts-ignore
                sslReHandShake(): void
                // @ts-ignore
                processSocketEvent(event: org.apache.tomcat.util.net.SocketEvent, dispatch: boolean): void
                // @ts-ignore
                isReadyForRead(): boolean
                // @ts-ignore
                abstract isRequestBodyFullyRead(): boolean
                // @ts-ignore
                abstract registerReadInterest(): void
                // @ts-ignore
                abstract isReadyForWrite(): boolean
                // @ts-ignore
                executeDispatches(): void
                /**
                 * {@inheritDoc}
                 * Processors that implement HTTP upgrade must override this method and
                 * provide the necessary token.
                 */
                // @ts-ignore
                public getUpgradeToken(): org.apache.coyote.UpgradeToken
                /**
                 * Process an HTTP upgrade. Processors that support HTTP upgrade should
                 * override this method and process the provided token.
                 * @param upgradeToken Contains all the information necessary for the
                 *                      Processor to process the upgrade
                 * @throws UnsupportedOperationException if the protocol does not support
                 *          HTTP upgrade
                 */
                // @ts-ignore
                doHttpUpgrade(upgradeToken: org.apache.coyote.UpgradeToken): void
                /**
                 * {@inheritDoc}
                 * Processors that implement HTTP upgrade must override this method.
                 */
                // @ts-ignore
                public getLeftoverInput(): java.nio.ByteBuffer
                /**
                 * {@inheritDoc}
                 * Processors that implement HTTP upgrade must override this method.
                 */
                // @ts-ignore
                public isUpgrade(): boolean
                /**
                 * Protocols that support push should override this method and return {@code
                 * true}.
                 * @return {#code true} if push is supported by this processor, otherwise
                 *          {@code false}.
                 */
                // @ts-ignore
                isPushSupported(): boolean
                /**
                 * Process a push. Processors that support push should override this method
                 * and process the provided token.
                 * @param pushTarget Contains all the information necessary for the Processor
                 *                    to process the push request
                 * @throws UnsupportedOperationException if the protocol does not support
                 *          push
                 */
                // @ts-ignore
                doPush(pushTarget: org.apache.coyote.Request): void
                // @ts-ignore
                abstract isTrailerFieldsReady(): boolean
                /**
                 * Protocols that support trailer fields should override this method and
                 * return {@code true}.
                 * @return {#code true} if trailer fields are supported by this processor,
                 *          otherwise {@code false}.
                 */
                // @ts-ignore
                isTrailerFieldsSupported(): boolean
                /**
                 * Flush any pending writes. Used during non-blocking writes to flush any
                 * remaining data from a previous incomplete write.
                 * @return <code>true</code> if data remains to be flushed at the end of
                 *          method
                 * @throws IOException If an I/O error occurs while attempting to flush the
                 *          data
                 */
                // @ts-ignore
                abstract flushBufferedWrite(): boolean
                /**
                 * Perform any necessary clean-up processing if the dispatch resulted in the
                 * completion of processing for the current request.
                 * @return The state to return for the socket once the clean-up for the
                 *          current request has completed
                 */
                // @ts-ignore
                abstract dispatchEndRequest(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
            }
        }
    }
}
