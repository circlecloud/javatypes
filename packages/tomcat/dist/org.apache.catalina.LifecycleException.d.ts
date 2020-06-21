declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * General purpose exception that is thrown to indicate a lifecycle related
             * problem.  Such exceptions should generally be considered fatal to the
             * operation of the application containing this component.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            class LifecycleException extends java.lang.Exception {
                /**
                 * Construct a new LifecycleException with no other information.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a new LifecycleException for the specified message.
                 * @param message Message describing this exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Construct a new LifecycleException for the specified throwable.
                 * @param throwable Throwable that caused this exception
                 */
                // @ts-ignore
                constructor(throwable: java.lang.Throwable | Error)
                /**
                 * Construct a new LifecycleException for the specified message
                 * and throwable.
                 * @param message Message describing this exception
                 * @param throwable Throwable that caused this exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, throwable: java.lang.Throwable | Error)
            }
        }
    }
}
