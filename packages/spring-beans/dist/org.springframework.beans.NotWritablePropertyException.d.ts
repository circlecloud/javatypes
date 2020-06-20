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
                constructor(beanClass: java.lang.Class<any>, propertyName: string)
                /**
                 * Create a new NotWritablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property name
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: string, msg: string)
                /**
                 * Create a new NotWritablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property name
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: string, msg: string, cause: Error)
                /**
                 * Create a new NotWritablePropertyException.
                 * @param beanClass the offending bean class
                 * @param propertyName the offending property name
                 * @param msg the detail message
                 * @param possibleMatches suggestions for actual bean property names
                 *  that closely match the invalid property name
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, propertyName: string, msg: string, possibleMatches: string[])
                /**
                 * Return suggestions for actual bean property names that closely match
                 * the invalid property name, if any.
                 */
                // @ts-ignore
                getPossibleMatches(): java.lang.String[]
            }
        }
    }
}
