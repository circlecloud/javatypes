declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents an HTTP output message, consisting of {@linkplain #getHeaders() headers}
             * and a writable {@linkplain #getBody() body}.
             * <p>Typically implemented by an HTTP request handle on the client side,
             * or an HTTP response handle on the server side.
             * @author Arjen Poutsma
             * @since 3.0
             */
            // @ts-ignore
            interface HttpOutputMessage extends org.springframework.http.HttpMessage {
                /**
                 * Return the body of the message as an output stream.
                 * @return the output stream body (never {#code null})
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                getBody(): java.io.OutputStream
            }
        }
    }
}
