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
                    constructor(msg: java.lang.String | string)
                    /**
                     * Create a new BeanCreationException.
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    /**
                     * Create a new BeanCreationException.
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string, msg: java.lang.String | string)
                    /**
                     * Create a new BeanCreationException.
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    /**
                     * Create a new BeanCreationException.
                     * @param resourceDescription description of the resource
                     *  that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(resourceDescription: java.lang.String | string, beanName: java.lang.String | string, msg: java.lang.String | string)
                    /**
                     * Create a new BeanCreationException.
                     * @param resourceDescription description of the resource
                     *  that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(resourceDescription: java.lang.String | string, beanName: java.lang.String | string, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    /**
                     * Return the description of the resource that the bean
                     * definition came from, if any.
                     */
                    // @ts-ignore
                    public getResourceDescription(): string
                    /**
                     * Return the name of the bean requested, if any.
                     */
                    // @ts-ignore
                    public getBeanName(): string
                    /**
                     * Add a related cause to this bean creation exception,
                     * not being a direct cause of the failure but having occurred
                     * earlier in the creation of the same bean instance.
                     * @param ex the related cause to add
                     */
                    // @ts-ignore
                    public addRelatedCause(ex: java.lang.Throwable | Error): void
                    /**
                     * Return the related causes, if any.
                     * @return the array of related causes, or {#code null} if none
                     */
                    // @ts-ignore
                    public getRelatedCauses(): Error[]
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public printStackTrace(ps: java.io.PrintStream): void
                    // @ts-ignore
                    public printStackTrace(pw: java.io.PrintWriter): void
                    // @ts-ignore
                    public contains(exClass: java.lang.Class<any>): boolean
                }
            }
        }
    }
}
