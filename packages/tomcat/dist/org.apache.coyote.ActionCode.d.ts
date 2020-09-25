declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * ActionCodes represent callbacks from the servlet container to the coyote
             * connector. Actions are implemented by ProtocolHandler, using the ActionHook
             * interface.
             * @see ProtocolHandler
             * @see ActionHook
             * @author Remy Maucherat
             */
            // @ts-ignore
            class ActionCode extends java.lang.Enum<org.apache.coyote.ActionCode> {
                // @ts-ignore
                public static readonly ACK: org.apache.coyote.ActionCode
                // @ts-ignore
                public static readonly CLOSE: org.apache.coyote.ActionCode
                // @ts-ignore
                public static readonly COMMIT: org.apache.coyote.ActionCode
                /**
                 * A serious error occurred from which it is not possible to recover safely.
                 * Further attempts to write to the response should be ignored and the
                 * connection needs to be closed as soon as possible. This can also be used
                 * to forcibly close a connection if an error occurs after the response has
                 * been committed.
                 */
                // @ts-ignore
                public static readonly CLOSE_NOW: org.apache.coyote.ActionCode
                /**
                 * A flush() operation originated by the client ( i.e. a flush() on the
                 * servlet output stream or writer, called by a servlet ). Argument is the
                 * Response.
                 */
                // @ts-ignore
                public static readonly CLIENT_FLUSH: org.apache.coyote.ActionCode
                /**
                 * Has the processor been placed into the error state? Note that the
                 * response may not have an appropriate error code set.
                 */
                // @ts-ignore
                public static readonly IS_ERROR: org.apache.coyote.ActionCode
                /**
                 * The processor may have been placed into an error state and some error
                 * states do not permit any further I/O. Is I/O currently allowed?
                 */
                // @ts-ignore
                public static readonly IS_IO_ALLOWED: org.apache.coyote.ActionCode
                /**
                 * Hook called if swallowing request input should be disabled.
                 * Example: Cancel a large file upload.
                 */
                // @ts-ignore
                public static readonly DISABLE_SWALLOW_INPUT: org.apache.coyote.ActionCode
                /**
                 * Callback for lazy evaluation - extract the remote host name and address.
                 */
                // @ts-ignore
                public static readonly REQ_HOST_ATTRIBUTE: org.apache.coyote.ActionCode
                /**
                 * Callback for lazy evaluation - extract the remote host address.
                 */
                // @ts-ignore
                public static readonly REQ_HOST_ADDR_ATTRIBUTE: org.apache.coyote.ActionCode
                /**
                 * Callback for lazy evaluation - extract the SSL-related attributes
                 * including the client certificate if present.
                 */
                // @ts-ignore
                public static readonly REQ_SSL_ATTRIBUTE: org.apache.coyote.ActionCode
                /**
                 * Force a TLS re-handshake and make the resulting client certificate (if
                 * any) available as a request attribute.
                 */
                // @ts-ignore
                public static readonly REQ_SSL_CERTIFICATE: org.apache.coyote.ActionCode
                /**
                 * Callback for lazy evaluation - socket remote port.
                 */
                // @ts-ignore
                public static readonly REQ_REMOTEPORT_ATTRIBUTE: org.apache.coyote.ActionCode
                /**
                 * Callback for lazy evaluation - socket local port.
                 */
                // @ts-ignore
                public static readonly REQ_LOCALPORT_ATTRIBUTE: org.apache.coyote.ActionCode
                /**
                 * Callback for lazy evaluation - local address.
                 */
                // @ts-ignore
                public static readonly REQ_LOCAL_ADDR_ATTRIBUTE: org.apache.coyote.ActionCode
                /**
                 * Callback for lazy evaluation - local address.
                 */
                // @ts-ignore
                public static readonly REQ_LOCAL_NAME_ATTRIBUTE: org.apache.coyote.ActionCode
                /**
                 * Callback for setting FORM auth body replay
                 */
                // @ts-ignore
                public static readonly REQ_SET_BODY_REPLAY: org.apache.coyote.ActionCode
                /**
                 * Callback for getting the amount of available bytes.
                 */
                // @ts-ignore
                public static readonly AVAILABLE: org.apache.coyote.ActionCode
                /**
                 * Callback for an async request.
                 */
                // @ts-ignore
                public static readonly ASYNC_START: org.apache.coyote.ActionCode
                /**
                 * Callback for an async call to
                 * {@link javax.servlet.AsyncContext#dispatch()}.
                 */
                // @ts-ignore
                public static readonly ASYNC_DISPATCH: org.apache.coyote.ActionCode
                /**
                 * Callback to indicate the the actual dispatch has started and that the
                 * async state needs change.
                 */
                // @ts-ignore
                public static readonly ASYNC_DISPATCHED: org.apache.coyote.ActionCode
                /**
                 * Callback for an async call to
                 * {@link javax.servlet.AsyncContext#start(Runnable)}.
                 */
                // @ts-ignore
                public static readonly ASYNC_RUN: org.apache.coyote.ActionCode
                /**
                 * Callback for an async call to
                 * {@link javax.servlet.AsyncContext#complete()}.
                 */
                // @ts-ignore
                public static readonly ASYNC_COMPLETE: org.apache.coyote.ActionCode
                /**
                 * Callback to trigger the processing of an async timeout.
                 */
                // @ts-ignore
                public static readonly ASYNC_TIMEOUT: org.apache.coyote.ActionCode
                /**
                 * Callback to trigger the error processing.
                 */
                // @ts-ignore
                public static readonly ASYNC_ERROR: org.apache.coyote.ActionCode
                /**
                 * Callback for an async call to
                 * {@link javax.servlet.AsyncContext#setTimeout(long)}
                 */
                // @ts-ignore
                public static readonly ASYNC_SETTIMEOUT: org.apache.coyote.ActionCode
                /**
                 * Callback to determine if async processing is in progress.
                 */
                // @ts-ignore
                public static readonly ASYNC_IS_ASYNC: org.apache.coyote.ActionCode
                /**
                 * Callback to determine if async dispatch is in progress.
                 */
                // @ts-ignore
                public static readonly ASYNC_IS_STARTED: org.apache.coyote.ActionCode
                /**
                 * Call back to determine if async complete is in progress.
                 */
                // @ts-ignore
                public static readonly ASYNC_IS_COMPLETING: org.apache.coyote.ActionCode
                /**
                 * Callback to determine if async dispatch is in progress.
                 */
                // @ts-ignore
                public static readonly ASYNC_IS_DISPATCHING: org.apache.coyote.ActionCode
                /**
                 * Callback to determine if async is timing out.
                 */
                // @ts-ignore
                public static readonly ASYNC_IS_TIMINGOUT: org.apache.coyote.ActionCode
                /**
                 * Callback to determine if async is in error.
                 */
                // @ts-ignore
                public static readonly ASYNC_IS_ERROR: org.apache.coyote.ActionCode
                /**
                 * Callback to trigger post processing. Typically only used during error
                 * handling to trigger essential processing that otherwise would be skipped.
                 */
                // @ts-ignore
                public static readonly ASYNC_POST_PROCESS: org.apache.coyote.ActionCode
                /**
                 * Callback to trigger the HTTP upgrade process.
                 */
                // @ts-ignore
                public static readonly UPGRADE: org.apache.coyote.ActionCode
                /**
                 * Indicator that Servlet is interested in being
                 * notified when data is available to be read.
                 */
                // @ts-ignore
                public static readonly NB_READ_INTEREST: org.apache.coyote.ActionCode
                /**
                 * Used with non-blocking writes to determine if a write is currently
                 * allowed (sets passed parameter to <code>true</code>) or not (sets passed
                 * parameter to <code>false</code>). If a write is not allowed then callback
                 * will be triggered at some future point when write becomes possible again.
                 */
                // @ts-ignore
                public static readonly NB_WRITE_INTEREST: org.apache.coyote.ActionCode
                /**
                 * Indicates if the request body has been fully read.
                 */
                // @ts-ignore
                public static readonly REQUEST_BODY_FULLY_READ: org.apache.coyote.ActionCode
                /**
                 * Indicates that the container needs to trigger a call to onDataAvailable()
                 * for the registered non-blocking read listener.
                 */
                // @ts-ignore
                public static readonly DISPATCH_READ: org.apache.coyote.ActionCode
                /**
                 * Indicates that the container needs to trigger a call to onWritePossible()
                 * for the registered non-blocking write listener.
                 */
                // @ts-ignore
                public static readonly DISPATCH_WRITE: org.apache.coyote.ActionCode
                /**
                 * Execute any non-blocking dispatches that have been registered via
                 * {@link #DISPATCH_READ} or {@link #DISPATCH_WRITE}. Typically required
                 * when the non-blocking listeners are configured on a thread where the
                 * processing wasn't triggered by a read or write event on the socket.
                 */
                // @ts-ignore
                public static readonly DISPATCH_EXECUTE: org.apache.coyote.ActionCode
                /**
                 * Is server push supported and allowed for the current request?
                 */
                // @ts-ignore
                public static readonly IS_PUSH_SUPPORTED: org.apache.coyote.ActionCode
                /**
                 * Push a request on behalf of the client of the current request.
                 */
                // @ts-ignore
                public static readonly PUSH_REQUEST: org.apache.coyote.ActionCode
                /**
                 * Are the request trailer fields ready to be read? Note that this returns
                 * true if it is known that request trailer fields are not supported so an
                 * empty collection of trailers can then be read.
                 */
                // @ts-ignore
                public static readonly IS_TRAILER_FIELDS_READY: org.apache.coyote.ActionCode
                /**
                 * Are HTTP trailer fields supported for the current response? Note that
                 * once an HTTP/1.1 response has been committed, it will no longer support
                 * trailer fields.
                 */
                // @ts-ignore
                public static readonly IS_TRAILER_FIELDS_SUPPORTED: org.apache.coyote.ActionCode
                // @ts-ignore
                public static values(): org.apache.coyote.ActionCode[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.apache.coyote.ActionCode
            }
        }
    }
}
