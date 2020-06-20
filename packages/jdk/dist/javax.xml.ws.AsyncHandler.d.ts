declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * The <code>AsyncHandler</code> interface is implemented by
             * clients that wish to receive callback notification of the completion of
             * service endpoint operations invoked asynchronously.
             * @since JAX-WS 2.0
             */
            // @ts-ignore
            interface AsyncHandler<T> {
                /**
                 * Called when the response to an asynchronous operation is available.
                 * @param res The response to the operation invocation.
                 */
                // @ts-ignore
                handleResponse(res: javax.xml.ws.Response<T>): void
            }
        }
    }
}
