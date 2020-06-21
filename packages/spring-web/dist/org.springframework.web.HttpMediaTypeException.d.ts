declare namespace org {
    namespace springframework {
        namespace web {
            /**
             * Abstract base for exceptions related to media types. Adds a list of supported {@link MediaType MediaTypes}.
             * @author Arjen Poutsma
             * @since 3.0
             */
            // @ts-ignore
            abstract class HttpMediaTypeException extends ServletException {
                /**
                 * Create a new HttpMediaTypeException.
                 * @param message the exception message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Create a new HttpMediaTypeException with a list of supported media types.
                 * @param supportedMediaTypes the list of supported media types
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, supportedMediaTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>)
                /**
                 * Return the list of supported media types.
                 */
                // @ts-ignore
                public getSupportedMediaTypes(): Array<org.springframework.http.MediaType>
            }
        }
    }
}
