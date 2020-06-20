declare namespace javax {
    namespace xml {
        namespace stream {
            /**
             * An error class for reporting factory configuration errors.
             * @version 1.0
             * @author Copyright (c) 2009 by Oracle Corporation. All Rights Reserved.
             * @since 1.6
             */
            // @ts-ignore
            class FactoryConfigurationError extends java.lang.Error {
                /**
                 * Default constructor
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct an exception with a nested inner exception
                 * @param e the exception to nest
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception)
                /**
                 * Construct an exception with a nested inner exception
                 * and a message
                 * @param e the exception to nest
                 * @param msg the message to report
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception, msg: string)
                /**
                 * Construct an exception with a nested inner exception
                 * and a message
                 * @param msg the message to report
                 * @param e the exception to nest
                 */
                // @ts-ignore
                constructor(msg: string, e: java.lang.Exception)
                /**
                 * Construct an exception with associated message
                 * @param msg the message to report
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Return the nested exception (if any)
                 * @return the nested exception or null
                 */
                // @ts-ignore
                getException(): java.lang.Exception
                /**
                 * use the exception chaining mechanism of JDK1.4
                 */
                // @ts-ignore
                getCause(): java.lang.Throwable
                /**
                 * Report the message associated with this error
                 * @return the string value of the message
                 */
                // @ts-ignore
                getMessage(): java.lang.String
            }
        }
    }
}
