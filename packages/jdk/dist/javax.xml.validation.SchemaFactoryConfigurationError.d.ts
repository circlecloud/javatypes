declare namespace javax {
    namespace xml {
        namespace validation {
            /**
             * Thrown when a problem with configuration with the Schema Factories
             * exists. This error will typically be thrown when the class of a
             * schema factory specified in the system properties cannot be found
             * or instantiated.
             * @since 1.8
             */
            // @ts-ignore
            class SchemaFactoryConfigurationError extends java.lang.Error {
                /**
                 * Create a new <code>SchemaFactoryConfigurationError</code> with no
                 * detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new <code>SchemaFactoryConfigurationError</code> with
                 * the <code>String</code> specified as an error message.
                 * @param message The error message for the exception.
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Create a new <code>SchemaFactoryConfigurationError</code> with the
                 * given <code>Throwable</code> base cause.
                 * @param cause The exception or error to be encapsulated in a
                 *  SchemaFactoryConfigurationError.
                 */
                // @ts-ignore
                constructor(cause: Error)
                /**
                 * Create a new <code>SchemaFactoryConfigurationError</code> with the
                 * given <code>Throwable</code> base cause and detail message.
                 * @param cause The exception or error to be encapsulated in a
                 *  SchemaFactoryConfigurationError.
                 * @param message The detail message.
                 */
                // @ts-ignore
                constructor(message: string, cause: Error)
            }
        }
    }
}
