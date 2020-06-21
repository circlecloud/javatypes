declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Exception thrown when no suitable editor or converter can be found for a bean property.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @since 3.0
             */
            // @ts-ignore
            class ConversionNotSupportedException extends org.springframework.beans.TypeMismatchException {
                /**
                 * Create a new ConversionNotSupportedException.
                 * @param propertyChangeEvent the PropertyChangeEvent that resulted in the problem
                 * @param requiredType the required target type (or {#code null} if not known)
                 * @param cause the root cause (may be {#code null})
                 */
                // @ts-ignore
                constructor(propertyChangeEvent: java.beans.PropertyChangeEvent, requiredType: java.lang.Class<any>, cause: java.lang.Throwable | Error)
                /**
                 * Create a new ConversionNotSupportedException.
                 * @param value the offending value that couldn't be converted (may be {#code null})
                 * @param requiredType the required target type (or {#code null} if not known)
                 * @param cause the root cause (may be {#code null})
                 */
                // @ts-ignore
                constructor(value: java.lang.Object | any, requiredType: java.lang.Class<any>, cause: java.lang.Throwable | Error)
            }
        }
    }
}
