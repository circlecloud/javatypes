declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Convenience methods performing bean lookups related to Spring-specific annotations,
                     * for example Spring's {@link Qualifier @Qualifier} annotation.
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 3.1.2
                     * @see BeanFactoryUtils
                     */
                    // @ts-ignore
                    class BeanFactoryAnnotationUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Retrieve all bean of type {@code T} from the given {@code BeanFactory} declaring a
                         * qualifier (e.g. via {@code <qualifier>} or {@code @Qualifier}) matching the given
                         * qualifier, or having a bean name matching the given qualifier.
                         * @param beanFactory the factory to get the target beans from (also searching ancestors)
                         * @param beanType the type of beans to retrieve
                         * @param qualifier the qualifier for selecting among all type matches
                         * @return the matching beans of type {#code T}
                         * @throws BeansException if any of the matching beans could not be created
                         * @since 5.1.1
                         * @see BeanFactoryUtils#beansOfTypeIncludingAncestors(ListableBeanFactory, Class)
                         */
                        // @ts-ignore
                        qualifiedBeansOfType<T>(beanFactory: org.springframework.beans.factory.ListableBeanFactory, beanType: java.lang.Class<T>, qualifier: string): java.util.Map<java.lang.String, T>
                        /**
                         * Obtain a bean of type {@code T} from the given {@code BeanFactory} declaring a
                         * qualifier (e.g. via {@code <qualifier>} or {@code @Qualifier}) matching the given
                         * qualifier, or having a bean name matching the given qualifier.
                         * @param beanFactory the factory to get the target bean from (also searching ancestors)
                         * @param beanType the type of bean to retrieve
                         * @param qualifier the qualifier for selecting between multiple bean matches
                         * @return the matching bean of type {#code T} (never {@code null})
                         * @throws NoUniqueBeanDefinitionException if multiple matching beans of type {#code T} found
                         * @throws NoSuchBeanDefinitionException if no matching bean of type {#code T} found
                         * @throws BeansException if the bean could not be created
                         * @see BeanFactoryUtils#beanOfTypeIncludingAncestors(ListableBeanFactory, Class)
                         */
                        // @ts-ignore
                        qualifiedBeanOfType<T>(beanFactory: org.springframework.beans.factory.BeanFactory, beanType: java.lang.Class<T>, qualifier: string): T
                        /**
                         * Check whether the named bean declares a qualifier of the given name.
                         * @param qualifier the qualifier to match
                         * @param beanName the name of the candidate bean
                         * @param beanFactory the factory from which to retrieve the named bean
                         * @return {#code true} if either the bean definition (in the XML case)
                         *  or the bean's factory method (in the {@code @Bean} case) defines a matching
                         *  qualifier value (through {@code <qualifier>} or {@code @Qualifier})
                         * @since 5.0
                         */
                        // @ts-ignore
                        isQualifierMatch(qualifier: java.util.function.Predicate<java.lang.String> | java.util.function$.Predicate<java.lang.String>, beanName: string, beanFactory: org.springframework.beans.factory.BeanFactory): boolean
                    }
                }
            }
        }
    }
}
