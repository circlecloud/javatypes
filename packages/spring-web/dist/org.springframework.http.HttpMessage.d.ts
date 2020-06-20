declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents the base interface for HTTP request and response messages.
             * Consists of {@link HttpHeaders}, retrievable via {@link #getHeaders()}.
             * @author Arjen Poutsma
             * @since 3.0
             */
            // @ts-ignore
            interface HttpMessage {
                /**
                 * Return the headers of this message.
                 * @return a corresponding HttpHeaders object (never {#code null})
                 */
                // @ts-ignore
                getHeaders(): org.springframework.http.HttpHeaders
            }
        }
    }
}
