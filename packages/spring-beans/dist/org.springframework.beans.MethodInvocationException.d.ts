declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Thrown when a bean property getter or setter method throws an exception,
             * analogous to an InvocationTargetException.
             * @author Rod Johnson
             */
            // @ts-ignore
            class MethodInvocationException extends org.springframework.beans.PropertyAccessException {
                /**
                 * Create a new MethodInvocationException.
                 * @param propertyChangeEvent the PropertyChangeEvent that resulted in an exception
                 * @param cause the Throwable raised by the invoked method
                 */
                // @ts-ignore
                constructor(propertyChangeEvent: java.beans.PropertyChangeEvent, cause: java.lang.Throwable | Error)
                /**
                 * Error code that a method invocation error will be registered with.
                 */
                // @ts-ignore
                public static readonly ERROR_CODE: java.lang.String | string
                // @ts-ignore
                public getErrorCode(): string
            }
        }
    }
}
