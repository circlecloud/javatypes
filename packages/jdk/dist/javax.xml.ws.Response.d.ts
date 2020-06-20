declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * The <code>Response</code> interface provides methods used to obtain the
             * payload and context of a message sent in response to an operation
             * invocation.
             * <p>For asynchronous operation invocations it provides additional methods
             * to check the status of the request. The <code>get(...)</code> methods may
             * throw the standard
             * set of exceptions and their cause may be a <code>RemoteException</code> or a
             * {@link WebServiceException} that represents the error that occured during the
             * asynchronous method invocation.</p>
             * @since JAX-WS 2.0
             */
            // @ts-ignore
            interface Response<T> extends java.util.concurrent.Future<T> {
                /**
                 * Gets the contained response context.
                 * @return The contained response context. May be <code>null</code> if a
                 *  response is not yet available.
                 */
                // @ts-ignore
                getContext(): java.util.Map<java.lang.String, java.lang.Object>
            }
        }
    }
}
