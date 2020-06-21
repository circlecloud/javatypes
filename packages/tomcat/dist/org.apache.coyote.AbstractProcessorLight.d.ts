declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * This is a light-weight abstract processor implementation that is intended as
             * a basis for all Processor implementations from the light-weight upgrade
             * processors to the HTTP/AJP processors.
             */
            // @ts-ignore
            abstract class AbstractProcessorLight extends java.lang.Object implements org.apache.coyote.Processor {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public process(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>, status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                // @ts-ignore
                public addDispatch(dispatchType: org.apache.tomcat.util.net.DispatchType): void
                // @ts-ignore
                public getIteratorAndClearDispatches(): java.util.Iterator<org.apache.tomcat.util.net.DispatchType>
                // @ts-ignore
                clearDispatches(): void
                /**
                 * Service a 'standard' HTTP request. This method is called for both new
                 * requests and for requests that have partially read the HTTP request line
                 * or HTTP headers. Once the headers have been fully read this method is not
                 * called again until there is a new HTTP request to process. Note that the
                 * request type may change during processing which may result in one or more
                 * calls to {@link #dispatch(SocketEvent)}. Requests may be pipe-lined.
                 * @param socketWrapper The connection to process
                 * @return The state the caller should put the socket in when this method
                 *          returns
                 * @throws IOException If an I/O error occurs during the processing of the
                 *          request
                 */
                // @ts-ignore
                abstract service(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                /**
                 * Process an in-progress request that is not longer in standard HTTP mode.
                 * Uses currently include Servlet 3.0 Async and HTTP upgrade connections.
                 * Further uses may be added in the future. These will typically start as
                 * HTTP requests.
                 * @param status The event to process
                 * @return the socket state
                 */
                // @ts-ignore
                abstract dispatch(status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                // @ts-ignore
                abstract asyncPostProcess(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                // @ts-ignore
                abstract getLog(): org.apache.juli.logging.Log
            }
        }
    }
}
