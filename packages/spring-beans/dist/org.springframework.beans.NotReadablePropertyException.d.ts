declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Exception thrown on an attempt to get the value of a property
             * that isn't readable, because there's no getter method.
             * @author Juergen Hoeller
             * @since 1.0.2
             */
            // @ts-ignore
            class NotReadablePropertyException extends org.springframework.beans.InvalidPropertyException {
                /**
                 * Create a new NotReadablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string)
                /**
                 * Create a new NotReadablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string)
                /**
                 * Create a new NotReadablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 * @param msg the detail message
                 * @param cause the root cause
                 * @since 4.0.9
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
