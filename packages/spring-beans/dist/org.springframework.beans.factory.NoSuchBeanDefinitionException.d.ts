declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when a {@code BeanFactory} is asked for a bean instance for which it
                 * cannot find a definition. This may point to a non-existing bean, a non-unique bean,
                 * or a manually registered singleton instance without an associated bean definition.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @see BeanFactory#getBean(String)
                 * @see BeanFactory#getBean(Class)
                 * @see NoUniqueBeanDefinitionException
                 */
                // @ts-ignore
                class NoSuchBeanDefinitionException extends org.springframework.beans.BeansException {
                    /**
                     * Create a new {@code NoSuchBeanDefinitionException}.
                     * @param name the name of the missing bean
                     */
                    // @ts-ignore
                    constructor(name: string)
                    /**
                     * Create a new {@code NoSuchBeanDefinitionException}.
                     * @param name the name of the missing bean
                     * @param message detailed message describing the problem
                     */
                    // @ts-ignore
                    constructor(name: string, message: string)
                    /**
                     * Create a new {@code NoSuchBeanDefinitionException}.
                     * @param type required type of the missing bean
                     */
                    // @ts-ignore
                    constructor(type: java.lang.Class<any>)
                    /**
                     * Create a new {@code NoSuchBeanDefinitionException}.
                     * @param type required type of the missing bean
                     * @param message detailed message describing the problem
                     */
                    // @ts-ignore
                    constructor(type: java.lang.Class<any>, message: string)
                    /**
                     * Create a new {@code NoSuchBeanDefinitionException}.
                     * @param type full type declaration of the missing bean
                     * @since 4.3.4
                     */
                    // @ts-ignore
                    constructor(type: ResolvableType)
                    /**
                     * Create a new {@code NoSuchBeanDefinitionException}.
                     * @param type full type declaration of the missing bean
                     * @param message detailed message describing the problem
                     * @since 4.3.4
                     */
                    // @ts-ignore
                    constructor(type: ResolvableType, message: string)
                    /**
                     * Return the name of the missing bean, if it was a lookup <em>by name</em> that failed.
                     */
                    // @ts-ignore
                    getBeanName(): java.lang.String
                    /**
                     * Return the required type of the missing bean, if it was a lookup <em>by type</em>
                     * that failed.
                     */
                    // @ts-ignore
                    getBeanType(): java.lang.Class<?>
                    /**
                     * Return the required {@link ResolvableType} of the missing bean, if it was a lookup
                     * <em>by type</em> that failed.
                     * @since 4.3.4
                     */
                    // @ts-ignore
                    getResolvableType(): ResolvableType
                    /**
                     * Return the number of beans found when only one matching bean was expected.
                     * For a regular NoSuchBeanDefinitionException, this will always be 0.
                     * @see NoUniqueBeanDefinitionException
                     */
                    // @ts-ignore
                    getNumberOfBeansFound(): int
                }
            }
        }
    }
}
