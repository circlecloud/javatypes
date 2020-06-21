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
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string)
                /**
                 * Create a new InvalidPropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Return the offending bean class.
                 */
                // @ts-ignore
                public getBeanClass(): java.lang.Class<any>
                /**
                 * Return the name of the offending property.
                 */
                // @ts-ignore
                public getPropertyName(): string
            }
        }
    }
}
