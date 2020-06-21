declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Exception thrown on an attempt to set the value of a property that
             * is not writable (typically because there is no setter method).
             * @author Rod Johnson
             * @author Alef Arendsen
             * @author Arjen Poutsma
             */
            // @ts-ignore
            class NotWritablePropertyException extends org.springframework.beans.InvalidPropertyException {
                /**
                 * Create a new NotWritablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property name
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string)
                /**
                 * Create a new NotWritablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property name
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string)
                /**
                 * Create a new NotWritablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property name
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Create a new NotWritablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property name
                 * @param msg the detail message
                 * @param possibleMatches suggestions for actual bean property names
                 *  that closely match the invalid property name
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: java.lang.String | string, msg: java.lang.String | string, possibleMatches: java.lang.String[] | string[])
                /**
                 * Return suggestions for actual bean property names that closely match
                 * the invalid property name, if any.
                 */
                // @ts-ignore
                public getPossibleMatches(): string[]
            }
        }
    }
}
