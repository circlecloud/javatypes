declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Exception thrown on a type mismatch when trying to set a bean property.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            class TypeMismatchException extends org.springframework.beans.PropertyAccessException {
                /**
                 * Create a new {@code TypeMismatchException}.
                 * @param propertyChangeEvent the PropertyChangeEvent that resulted in the problem
                 * @param requiredType the required target type
                 */
                // @ts-ignore
                constructor(propertyChangeEvent: java.beans.PropertyChangeEvent, requiredType: java.lang.Class<any>)
                /**
                 * Create a new {@code TypeMismatchException}.
                 * @param propertyChangeEvent the PropertyChangeEvent that resulted in the problem
                 * @param requiredType the required target type (or {#code null} if not known)
                 * @param cause the root cause (may be {#code null})
                 */
                // @ts-ignore
                constructor(propertyChangeEvent: java.beans.PropertyChangeEvent, requiredType: java.lang.Class<any>, cause: java.lang.Throwable | Error)
                /**
                 * Create a new {@code TypeMismatchException} without a {@code PropertyChangeEvent}.
                 * @param value the offending value that couldn't be converted (may be {#code null})
                 * @param requiredType the required target type (or {#code null} if not known)
                 * @see #initPropertyName
                 */
                // @ts-ignore
                constructor(value: java.lang.Object | any, requiredType: java.lang.Class<any>)
                /**
                 * Create a new {@code TypeMismatchException} without a {@code PropertyChangeEvent}.
                 * @param value the offending value that couldn't be converted (may be {#code null})
                 * @param requiredType the required target type (or {#code null} if not known)
                 * @param cause the root cause (may be {#code null})
                 * @see #initPropertyName
                 */
                // @ts-ignore
                constructor(value: java.lang.Object | any, requiredType: java.lang.Class<any>, cause: java.lang.Throwable | Error)
                /**
                 * Error code that a type mismatch error will be registered with.
                 */
                // @ts-ignore
                public static readonly ERROR_CODE: java.lang.String | string
                /**
                 * Initialize this exception's property name for exposure through {@link #getPropertyName()},
                 * as an alternative to having it initialized via a {@link PropertyChangeEvent}.
                 * @param propertyName the property name to expose
                 * @since 5.0.4
                 * @see #TypeMismatchException(Object, Class)
                 * @see #TypeMismatchException(Object, Class, Throwable)
                 */
                // @ts-ignore
                public initPropertyName(propertyName: java.lang.String | string): void
                /**
                 * Return the name of the affected property, if available.
                 */
                // @ts-ignore
                public getPropertyName(): string
                /**
                 * Return the offending value (may be {@code null}).
                 */
                // @ts-ignore
                public getValue(): any
                /**
                 * Return the required target type, if any.
                 */
                // @ts-ignore
                public getRequiredType(): java.lang.Class<any>
                // @ts-ignore
                public getErrorCode(): string
            }
        }
    }
}
