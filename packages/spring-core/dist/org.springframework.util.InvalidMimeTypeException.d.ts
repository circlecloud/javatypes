declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Exception thrown from {@link MimeTypeUtils#parseMimeType(String)} in case of
             * encountering an invalid content type specification String.
             * @author Juergen Hoeller
             * @author Rossen Stoyanchev
             * @since 4.0
             */
            // @ts-ignore
            class InvalidMimeTypeException extends java.lang.IllegalArgumentException {
                /**
                 * Create a new InvalidContentTypeException for the given content type.
                 * @param mimeType the offending media type
                 * @param message a detail message indicating the invalid part
                 */
                // @ts-ignore
                constructor(mimeType: string, message: string)
                /**
                 * Return the offending content type.
                 */
                // @ts-ignore
                getMimeType(): java.lang.String
            }
        }
    }
}
