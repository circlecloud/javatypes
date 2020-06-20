declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Exception thrown when instantiation of a bean failed.
             * Carries the offending bean class.
             * @author Juergen Hoeller
             * @since 1.2.8
             */
            // @ts-ignore
            class BeanInstantiationException extends org.springframework.beans.FatalBeanException {
                /**
                 * Create a new BeanInstantiationException.
                 * @param beanClass the offending bean class
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, msg: string)
                /**
                 * Create a new BeanInstantiationException.
                 * @param beanClass the offending bean class
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(beanClass: java.lang.Class<any>, msg: string, cause: Error)
                /**
                 * Create a new BeanInstantiationException.
                 * @param constructor the offending constructor
                 * @param msg the detail message
                 * @param cause the root cause
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(constructor: java.lang.reflect.Constructor<any>, msg: string, cause: Error)
                /**
                 * Create a new BeanInstantiationException.
                 * @param constructingMethod the delegate for bean construction purposes
                 *  (typically, but not necessarily, a static factory method)
                 * @param msg the detail message
                 * @param cause the root cause
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(constructingMethod: java.lang.reflect.Method, msg: string, cause: Error)
                /**
                 * Return the offending bean class (never {@code null}).
                 * @return the class that was to be instantiated
                 */
                // @ts-ignore
                getBeanClass(): java.lang.Class<?>
                /**
                 * Return the offending constructor, if known.
                 * @return the constructor in use, or {#code null} in case of a
                 *  factory method or in case of default instantiation
                 * @since 4.3
                 */
                // @ts-ignore
                getConstructor(): java.lang.reflect.Constructor<?>
                /**
                 * Return the delegate for bean construction purposes, if known.
                 * @return the method in use (typically a static factory method),
                 *  or {#code null} in case of constructor-based instantiation
                 * @since 4.3
                 */
                // @ts-ignore
                getConstructingMethod(): java.lang.reflect.Method
            }
        }
    }
}
