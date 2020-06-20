declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents an HTTP output message that allows for setting a streaming body.
             * Note that such messages typically do not support {@link #getBody()} access.
             * @author Arjen Poutsma
             * @since 4.0
             * @see #setBody
             */
            // @ts-ignore
            interface StreamingHttpOutputMessage extends org.springframework.http.HttpOutputMessage {
                /**
                 * Set the streaming body callback for this message.
                 * @param body the streaming body callback
                 */
                // @ts-ignore
                setBody(body: org.springframework.http.StreamingHttpOutputMessage.Body): void
            }
        }
    }
}
