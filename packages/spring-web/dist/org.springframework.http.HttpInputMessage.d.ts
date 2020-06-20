declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents an HTTP input message, consisting of {@linkplain #getHeaders() headers}
             * and a readable {@linkplain #getBody() body}.
             * <p>Typically implemented by an HTTP request handle on the server side,
             * or an HTTP response handle on the client side.
             * @author Arjen Poutsma
             * @since 3.0
             */
            // @ts-ignore
            interface HttpInputMessage extends org.springframework.http.HttpMessage {
                /**
                 * Return the body of the message as an input stream.
                 * @return the input stream body (never {#code null})
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                getBody(): java.io.InputStream
            }
        }
    }
}
