declare namespace java {
    namespace util {
        namespace prefs {
            /**
             * Thrown to indicate that an operation could not complete because
             * the input did not conform to the appropriate XML document type
             * for a collection of preferences, as per the {@link Preferences}
             * specification.
             * @author Josh Bloch
             * @see Preferences
             * @since 1.4
             */
            // @ts-ignore
            class InvalidPreferencesFormatException extends java.lang.Exception {
                /**
                 * Constructs an InvalidPreferencesFormatException with the specified
                 * cause.
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link Throwable#getCause()} method).
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
                /**
                 * Constructs an InvalidPreferencesFormatException with the specified
                 * detail message.
                 * @param message   the detail message. The detail message is saved for
                 *           later retrieval by the {#link Throwable#getMessage()} method.
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Constructs an InvalidPreferencesFormatException with the specified
                 * detail message and cause.
                 * @param message   the detail message. The detail message is saved for
                 *          later retrieval by the {#link Throwable#getMessage()} method.
                 * @param cause the cause (which is saved for later retrieval by the
                 *          {#link Throwable#getCause()} method).
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
