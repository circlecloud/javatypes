declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Exception thrown when navigation of a valid nested property
             * path encounters a NullPointerException.
             * <p>For example, navigating "spouse.age" could fail because the
             * spouse property of the target object has a null value.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            class NullValueInNestedPathException extends org.springframework.beans.InvalidPropertyException {
                /**
                 * Create a new NullValueInNestedPathException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string)
                /**
                 * Create a new NullValueInNestedPathException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string)
                /**
                 * Create a new NullValueInNestedPathException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property
                 * @param msg the detail message
                 * @param cause the root cause
                 * @since 4.3.2
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
