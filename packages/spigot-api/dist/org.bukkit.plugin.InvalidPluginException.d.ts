declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Thrown when attempting to load an invalid Plugin file
             */
            // @ts-ignore
            class InvalidPluginException extends java.lang.Exception {
                /**
                 * Constructs a new InvalidPluginException based on the given Exception
                 * @param cause Exception that triggered this Exception
                 */
                // @ts-ignore
                constructor(cause: Error)
                /**
                 * Constructs a new InvalidPluginException
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new InvalidPluginException with the specified detail
                 * message and cause.
                 * @param message the detail message (which is saved for later retrieval
                 *      by the getMessage() method).
                 * @param cause the cause (which is saved for later retrieval by the
                 *      getCause() method). (A null value is permitted, and indicates that
                 *      the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
                /**
                 * Constructs a new InvalidPluginException with the specified detail
                 * message
                 * @param message TThe detail message is saved for later retrieval by the
                 *      getMessage() method.
                 */
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
