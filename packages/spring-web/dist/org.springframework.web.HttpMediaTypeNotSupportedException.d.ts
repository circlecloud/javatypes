declare namespace org {
    namespace springframework {
        namespace web {
            /**
             * Exception thrown when a client POSTs, PUTs, or PATCHes content of a type
             * not supported by request handler.
             * @author Arjen Poutsma
             * @since 3.0
             */
            // @ts-ignore
            class HttpMediaTypeNotSupportedException extends org.springframework.web.HttpMediaTypeException {
                /**
                 * Create a new HttpMediaTypeNotSupportedException.
                 * @param message the exception message
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Create a new HttpMediaTypeNotSupportedException.
                 * @param contentType the unsupported content type
                 * @param supportedMediaTypes the list of supported media types
                 */
                // @ts-ignore
                constructor(contentType: org.springframework.http.MediaType, supportedMediaTypes: Array<org.springframework.http.MediaType>)
                /**
                 * Create a new HttpMediaTypeNotSupportedException.
                 * @param contentType the unsupported content type
                 * @param supportedMediaTypes the list of supported media types
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(contentType: org.springframework.http.MediaType, supportedMediaTypes: Array<org.springframework.http.MediaType>, msg: string)
                /**
                 * Return the HTTP request content type method that caused the failure.
                 */
                // @ts-ignore
                getContentType(): org.springframework.http.MediaType
            }
        }
    }
}
