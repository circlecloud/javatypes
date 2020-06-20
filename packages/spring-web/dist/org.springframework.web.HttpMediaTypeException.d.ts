declare namespace org {
    namespace springframework {
        namespace web {
            /**
             * Abstract base for exceptions related to media types. Adds a list of supported {@link MediaType MediaTypes}.
             * @author Arjen Poutsma
             * @since 3.0
             */
            // @ts-ignore
            class HttpMediaTypeException extends ServletException {
                /**
                 * Create a new HttpMediaTypeException.
                 * @param message the exception message
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Create a new HttpMediaTypeException with a list of supported media types.
                 * @param supportedMediaTypes the list of supported media types
                 */
                // @ts-ignore
                constructor(message: string, supportedMediaTypes: Array<org.springframework.http.MediaType>)
                /**
                 * Return the list of supported media types.
                 */
                // @ts-ignore
                getSupportedMediaTypes(): java.util.List<org.springframework.http.MediaType>
            }
        }
    }
}
