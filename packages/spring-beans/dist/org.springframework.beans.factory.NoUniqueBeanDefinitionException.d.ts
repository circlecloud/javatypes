declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when a {@code BeanFactory} is asked for a bean instance for which
                 * multiple matching candidates have been found when only one matching bean was expected.
                 * @author Juergen Hoeller
                 * @since 3.2.1
                 * @see BeanFactory#getBean(Class)
                 */
                // @ts-ignore
                class NoUniqueBeanDefinitionException extends org.springframework.beans.factory.NoSuchBeanDefinitionException {
                    /**
                     * Create a new {@code NoUniqueBeanDefinitionException}.
                     * @param type required type of the non-unique bean
                     * @param numberOfBeansFound the number of matching beans
                     * @param message detailed message describing the problem
                     */
                    // @ts-ignore
                    constructor(type: java.lang.Class<any>, numberOfBeansFound: number /*int*/, message: java.lang.String | string)
                    /**
                     * Create a new {@code NoUniqueBeanDefinitionException}.
                     * @param type required type of the non-unique bean
                     * @param beanNamesFound the names of all matching beans (as a Collection)
                     */
                    // @ts-ignore
                    constructor(type: java.lang.Class<any>, beanNamesFound: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
                    /**
                     * Create a new {@code NoUniqueBeanDefinitionException}.
                     * @param type required type of the non-unique bean
                     * @param beanNamesFound the names of all matching beans (as an array)
                     */
                    // @ts-ignore
                    constructor(type: java.lang.Class<any>, ...beanNamesFound: java.lang.String[] | string[])
                    /**
                     * Create a new {@code NoUniqueBeanDefinitionException}.
                     * @param type required type of the non-unique bean
                     * @param beanNamesFound the names of all matching beans (as a Collection)
                     * @since 5.1
                     */
                    // @ts-ignore
                    constructor(type: ResolvableType, beanNamesFound: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
                    /**
                     * Create a new {@code NoUniqueBeanDefinitionException}.
                     * @param type required type of the non-unique bean
                     * @param beanNamesFound the names of all matching beans (as an array)
                     * @since 5.1
                     */
                    // @ts-ignore
                    constructor(type: ResolvableType, ...beanNamesFound: java.lang.String[] | string[])
                    /**
                     * Return the number of beans found when only one matching bean was expected.
                     * For a NoUniqueBeanDefinitionException, this will usually be higher than 1.
                     * @see #getBeanType()
                     */
                    // @ts-ignore
                    public getNumberOfBeansFound(): number /*int*/
                    /**
                     * Return the names of all beans found when only one matching bean was expected.
                     * Note that this may be {@code null} if not specified at construction time.
                     * @since 4.3
                     * @see #getBeanType()
                     */
                    // @ts-ignore
                    public getBeanNamesFound(): Array<java.lang.String | string>
                }
            }
        }
    }
}
