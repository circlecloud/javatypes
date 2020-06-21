declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Thrown when attempting to load an invalid Plugin file
             */
            // @ts-ignore
            class UnknownDependencyException extends java.lang.RuntimeException {
                /**
                 * Constructs a new UnknownDependencyException based on the given
                 * Exception
                 * @param throwable Exception that triggered this Exception
                 */
                // @ts-ignore
                constructor(throwable: java.lang.Throwable | Error)
                /**
                 * Constructs a new UnknownDependencyException with the given message
                 * @param message Brief message explaining the cause of the exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Constructs a new UnknownDependencyException based on the given
                 * Exception
                 * @param message Brief message explaining the cause of the exception
                 * @param throwable Exception that triggered this Exception
                 */
                // @ts-ignore
                constructor(throwable: java.lang.Throwable | Error, message: java.lang.String | string)
                /**
                 * Constructs a new UnknownDependencyException
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
