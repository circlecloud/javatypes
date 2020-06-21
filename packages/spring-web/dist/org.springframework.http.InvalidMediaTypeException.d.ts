declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Exception thrown from {@link MediaType#parseMediaType(String)} in case of
             * encountering an invalid media type specification String.
             * @author Juergen Hoeller
             * @since 3.2.2
             */
            // @ts-ignore
            class InvalidMediaTypeException extends java.lang.IllegalArgumentException {
                /**
                 * Create a new InvalidMediaTypeException for the given media type.
                 * @param mediaType the offending media type
                 * @param message a detail message indicating the invalid part
                 */
                // @ts-ignore
                constructor(mediaType: java.lang.String | string, message: java.lang.String | string)
                /**
                 * Return the offending media type.
                 */
                // @ts-ignore
                getMediaType(): string
            }
        }
    }
}
