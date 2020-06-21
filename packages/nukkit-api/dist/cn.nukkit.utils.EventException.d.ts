declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class EventException extends java.lang.RuntimeException {
                /**
                 * Constructs a new EventException based on the given Exception
                 * @param throwable Exception that triggered this Exception
                 */
                // @ts-ignore
                constructor(throwable: java.lang.Throwable | Error)
                /**
                 * Constructs a new EventException
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new EventException with the given message
                 * @param cause   The exception that caused this
                 * @param message The message
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error, message: java.lang.String | string)
                /**
                 * Constructs a new EventException with the given message
                 * @param message The message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * If applicable, returns the Exception that triggered this Exception
                 * @return Inner exception, or null if one does not exist
                 */
                // @ts-ignore
                getCause(): Error
            }
        }
    }
}
