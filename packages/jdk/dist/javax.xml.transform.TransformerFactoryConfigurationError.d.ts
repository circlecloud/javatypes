declare namespace javax {
    namespace xml {
        namespace transform {
            /**
             * Thrown when a problem with configuration with the Transformer Factories
             * exists. This error will typically be thrown when the class of a
             * transformation factory specified in the system properties cannot be found
             * or instantiated.
             */
            // @ts-ignore
            class TransformerFactoryConfigurationError extends java.lang.Error {
                /**
                 * Create a new <code>TransformerFactoryConfigurationError</code> with no
                 * detail mesage.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new <code>TransformerFactoryConfigurationError</code> with
                 * the <code>String</code> specified as an error message.
                 * @param msg The error message for the exception.
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Create a new <code>TransformerFactoryConfigurationError</code> with a
                 * given <code>Exception</code> base cause of the error.
                 * @param e The exception to be encapsulated in a
                 *  TransformerFactoryConfigurationError.
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception)
                /**
                 * Create a new <code>TransformerFactoryConfigurationError</code> with the
                 * given <code>Exception</code> base cause and detail message.
                 * @param e The exception to be encapsulated in a
                 *  TransformerFactoryConfigurationError
                 * @param msg The detail message.
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception, msg: string)
                /**
                 * Return the message (if any) for this error . If there is no
                 * message for the exception and there is an encapsulated
                 * exception then the message of that exception will be returned.
                 * @return The error message.
                 */
                // @ts-ignore
                getMessage(): java.lang.String
                /**
                 * Return the actual exception (if any) that caused this exception to
                 * be raised.
                 * @return The encapsulated exception, or null if there is none.
                 */
                // @ts-ignore
                getException(): java.lang.Exception
                /**
                 * use the exception chaining mechanism of JDK1.4
                 */
                // @ts-ignore
                getCause(): java.lang.Throwable
            }
        }
    }
}
