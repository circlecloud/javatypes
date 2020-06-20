declare namespace org {
    namespace bukkit {
        namespace configuration {
            /**
             * Exception thrown when attempting to load an invalid {@link Configuration}
             */
            // @ts-ignore
            class InvalidConfigurationException extends java.lang.Exception {
                /**
                 * Creates a new instance of InvalidConfigurationException without a
                 * message or cause.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an instance of InvalidConfigurationException with the
                 * specified message.
                 * @param msg The details of the exception.
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Constructs an instance of InvalidConfigurationException with the
                 * specified cause.
                 * @param cause The cause of the exception.
                 */
                // @ts-ignore
                constructor(cause: Error)
                /**
                 * Constructs an instance of InvalidConfigurationException with the
                 * specified message and cause.
                 * @param cause The cause of the exception.
                 * @param msg The details of the exception.
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}
