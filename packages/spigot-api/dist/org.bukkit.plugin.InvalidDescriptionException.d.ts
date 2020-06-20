declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Thrown when attempting to load an invalid PluginDescriptionFile
             */
            // @ts-ignore
            class InvalidDescriptionException extends java.lang.Exception {
                /**
                 * Constructs a new InvalidDescriptionException based on the given
                 * Exception
                 * @param message Brief message explaining the cause of the exception
                 * @param cause Exception that triggered this Exception
                 */
                // @ts-ignore
                constructor(cause: Error, message: string)
                /**
                 * Constructs a new InvalidDescriptionException based on the given
                 * Exception
                 * @param cause Exception that triggered this Exception
                 */
                // @ts-ignore
                constructor(cause: Error)
                /**
                 * Constructs a new InvalidDescriptionException with the given message
                 * @param message Brief message explaining the cause of the exception
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Constructs a new InvalidDescriptionException
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
