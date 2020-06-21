declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * An "reactive" HTTP input message that exposes the input as {@link Publisher}.
             * <p>Typically implemented by an HTTP request on the server-side or a response
             * on the client-side.
             * @author Arjen Poutsma
             * @since 5.0
             */
            // @ts-ignore
            interface ReactiveHttpInputMessage extends org.springframework.http.HttpMessage {
                /**
                 * Return the body of the message as a {@link Publisher}.
                 * @return the body content publisher
                 */
                // @ts-ignore
                getBody(): object
            }
        }
    }
}
