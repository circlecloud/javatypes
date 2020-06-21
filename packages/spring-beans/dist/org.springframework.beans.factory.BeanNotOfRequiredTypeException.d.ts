declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Thrown when a bean doesn't match the expected type.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class BeanNotOfRequiredTypeException extends org.springframework.beans.BeansException {
                    /**
                     * Create a new BeanNotOfRequiredTypeException.
                     * @param beanName the name of the bean requested
                     * @param requiredType the required type
                     * @param actualType the actual type returned, which did not match
                     *  the expected type
                     */
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string, requiredType: java.lang.Class<any>, actualType: java.lang.Class<any>)
                    /**
                     * Return the name of the instance that was of the wrong type.
                     */
                    // @ts-ignore
                    public getBeanName(): string
                    /**
                     * Return the expected type for the bean.
                     */
                    // @ts-ignore
                    public getRequiredType(): java.lang.Class<any>
                    /**
                     * Return the actual type of the instance found.
                     */
                    // @ts-ignore
                    public getActualType(): java.lang.Class<any>
                }
            }
        }
    }
}
