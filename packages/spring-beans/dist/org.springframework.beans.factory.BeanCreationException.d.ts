declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when a BeanFactory encounters an error when
                 * attempting to create a bean from a bean definition.
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class BeanCreationException extends org.springframework.beans.FatalBeanException {
                    /**
                     * Create a new BeanCreationException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new BeanCreationException.
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                    /**
                     * Create a new BeanCreationException.
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(beanName: string, msg: string)
                    /**
                     * Create a new BeanCreationException.
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(beanName: string, msg: string, cause: Error)
                    /**
                     * Create a new BeanCreationException.
                     * @param resourceDescription description of the resource
                     *  that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, msg: string)
                    /**
                     * Create a new BeanCreationException.
                     * @param resourceDescription description of the resource
                     *  that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, msg: string, cause: Error)
                    /**
                     * Return the description of the resource that the bean
                     * definition came from, if any.
                     */
                    // @ts-ignore
                    getResourceDescription(): java.lang.String
                    /**
                     * Return the name of the bean requested, if any.
                     */
                    // @ts-ignore
                    getBeanName(): java.lang.String
                    /**
                     * Add a related cause to this bean creation exception,
                     * not being a direct cause of the failure but having occurred
                     * earlier in the creation of the same bean instance.
                     * @param ex the related cause to add
                     */
                    // @ts-ignore
                    addRelatedCause(ex: Error): void
                    /**
                     * Return the related causes, if any.
                     * @return the array of related causes, or {#code null} if none
                     */
                    // @ts-ignore
                    getRelatedCauses(): java.lang.Throwable[]
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    printStackTrace(ps: java.io.PrintStream): void
                    // @ts-ignore
                    printStackTrace(pw: java.io.PrintWriter): void
                    // @ts-ignore
                    contains(exClass: java.lang.Class<any>): boolean
                }
            }
        }
    }
}
