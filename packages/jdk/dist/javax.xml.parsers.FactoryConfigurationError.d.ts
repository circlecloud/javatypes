declare namespace javax {
    namespace xml {
        namespace parsers {
            /**
             * Thrown when a problem with configuration with the Parser Factories
             * exists. This error will typically be thrown when the class of a
             * parser factory specified in the system properties cannot be found
             * or instantiated.
             * @author <a href="mailto:Jeff.Suttor#Sun.com">Jeff Suttor</a>
             * @version $Revision: 1.7 $, $Date: 2010-11-01 04:36:09 $
             */
            // @ts-ignore
            class FactoryConfigurationError extends java.lang.Error {
                /**
                 * Create a new <code>FactoryConfigurationError</code> with no
                 * detail mesage.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new <code>FactoryConfigurationError</code> with
                 * the <code>String </code> specified as an error message.
                 * @param msg The error message for the exception.
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Create a new <code>FactoryConfigurationError</code> with a
                 * given <code>Exception</code> base cause of the error.
                 * @param e The exception to be encapsulated in a
                 *  FactoryConfigurationError.
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception)
                /**
                 * Create a new <code>FactoryConfigurationError</code> with the
                 * given <code>Exception</code> base cause and detail message.
                 * @param e The exception to be encapsulated in a
                 *  FactoryConfigurationError
                 * @param msg The detail message.
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception, msg: java.lang.String | string)
                /**
                 * Return the message (if any) for this error . If there is no
                 * message for the exception and there is an encapsulated
                 * exception then the message of that exception, if it exists will be
                 * returned. Else the name of the encapsulated exception will be
                 * returned.
                 * @return The error message.
                 */
                // @ts-ignore
                getMessage(): string
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
                getCause(): Error
            }
        }
    }
}
