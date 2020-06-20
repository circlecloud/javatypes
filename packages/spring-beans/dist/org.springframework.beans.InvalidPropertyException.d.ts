declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Exception thrown when referring to an invalid bean property.
             * Carries the offending bean class and property name.
             * @author Juergen Hoeller
             * @since 1.0.2
             */
            // @ts-ignore
            class InvalidPropertyException extends org.springframework.beans.FatalBeanException {
                /**
                 * Create a new InvalidPropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: string, msg: string)
                /**
                 * Create a new InvalidPropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: string, msg: string, cause: Error)
                /**
                 * Return the offending bean class.
                 */
                // @ts-ignore
                getBeanClass(): java.lang.Class<?>
                /**
                 * Return the name of the offending property.
                 */
                // @ts-ignore
                getPropertyName(): java.lang.String
            }
        }
    }
}
