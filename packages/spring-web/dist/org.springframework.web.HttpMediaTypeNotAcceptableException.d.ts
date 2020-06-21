declare namespace org {
    namespace springframework {
        namespace web {
            /**
             * Exception thrown when the request handler cannot generate a response that is acceptable by the client.
             * @author Arjen Poutsma
             * @since 3.0
             */
            // @ts-ignore
            class HttpMediaTypeNotAcceptableException extends org.springframework.web.HttpMediaTypeException {
                /**
                 * Create a new HttpMediaTypeNotAcceptableException.
                 * @param message the exception message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Create a new HttpMediaTypeNotSupportedException.
                 * @param supportedMediaTypes the list of supported media types
                 */
                // @ts-ignore
                constructor(supportedMediaTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>)
            }
        }
    }
}
