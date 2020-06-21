declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Superclass for exceptions related to a property access,
             * such as type mismatch or invocation target exception.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            abstract class PropertyAccessException extends org.springframework.beans.BeansException {
                /**
                 * Create a new PropertyAccessException.
                 * @param propertyChangeEvent the PropertyChangeEvent that resulted in the problem
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(propertyChangeEvent: java.beans.PropertyChangeEvent, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Create a new PropertyAccessException without PropertyChangeEvent.
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Return the PropertyChangeEvent that resulted in the problem.
                 * <p>May be {@code null}; only available if an actual bean property
                 * was affected.
                 */
                // @ts-ignore
                public getPropertyChangeEvent(): java.beans.PropertyChangeEvent
                /**
                 * Return the name of the affected property, if available.
                 */
                // @ts-ignore
                public getPropertyName(): string
                /**
                 * Return the affected value that was about to be set, if any.
                 */
                // @ts-ignore
                public getValue(): any
                /**
                 * Return a corresponding error code for this type of exception.
                 */
                // @ts-ignore
                public abstract getErrorCode(): string
            }
        }
    }
}
