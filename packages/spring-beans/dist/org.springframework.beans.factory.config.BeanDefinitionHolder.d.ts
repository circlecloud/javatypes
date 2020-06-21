declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Holder for a BeanDefinition with name and aliases.
                     * Can be registered as a placeholder for an inner bean.
                     * <p>Can also be used for programmatic registration of inner bean
                     * definitions. If you don't care about BeanNameAware and the like,
                     * registering RootBeanDefinition or ChildBeanDefinition is good enough.
                     * @author Juergen Hoeller
                     * @since 1.0.2
                     * @see org.springframework.beans.factory.BeanNameAware
                     * @see org.springframework.beans.factory.support.RootBeanDefinition
                     * @see org.springframework.beans.factory.support.ChildBeanDefinition
                     */
                    // @ts-ignore
                    class BeanDefinitionHolder extends java.lang.Object implements org.springframework.beans.BeanMetadataElement {
                        /**
                         * Create a new BeanDefinitionHolder.
                         * @param beanDefinition the BeanDefinition to wrap
                         * @param beanName the name of the bean, as specified for the bean definition
                         */
                        // @ts-ignore
                        constructor(beanDefinition: org.springframework.beans.factory.config.BeanDefinition, beanName: java.lang.String | string)
                        /**
                         * Create a new BeanDefinitionHolder.
                         * @param beanDefinition the BeanDefinition to wrap
                         * @param beanName the name of the bean, as specified for the bean definition
                         * @param aliases alias names for the bean, or {#code null} if none
                         */
                        // @ts-ignore
                        constructor(beanDefinition: org.springframework.beans.factory.config.BeanDefinition, beanName: java.lang.String | string, aliases: java.lang.String[] | string[])
                        /**
                         * Copy constructor: Create a new BeanDefinitionHolder with the
                         * same contents as the given BeanDefinitionHolder instance.
                         * <p>Note: The wrapped BeanDefinition reference is taken as-is;
                         * it is {@code not} deeply copied.
                         * @param beanDefinitionHolder the BeanDefinitionHolder to copy
                         */
                        // @ts-ignore
                        constructor(beanDefinitionHolder: org.springframework.beans.factory.config.BeanDefinitionHolder)
                        /**
                         * Return the wrapped BeanDefinition.
                         */
                        // @ts-ignore
                        public getBeanDefinition(): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Return the primary name of the bean, as specified for the bean definition.
                         */
                        // @ts-ignore
                        public getBeanName(): string
                        /**
                         * Return the alias names for the bean, as specified directly for the bean definition.
                         * @return the array of alias names, or {#code null} if none
                         */
                        // @ts-ignore
                        public getAliases(): string[]
                        /**
                         * Expose the bean definition's source object.
                         * @see BeanDefinition#getSource()
                         */
                        // @ts-ignore
                        public getSource(): any
                        /**
                         * Determine whether the given candidate name matches the bean name
                         * or the aliases stored in this bean definition.
                         */
                        // @ts-ignore
                        public matchesName(candidateName: java.lang.String | string): boolean
                        /**
                         * Return a friendly, short description for the bean, stating name and aliases.
                         * @see #getBeanName()
                         * @see #getAliases()
                         */
                        // @ts-ignore
                        public getShortDescription(): string
                        /**
                         * Return a long description for the bean, including name and aliases
                         * as well as a description of the contained {@link BeanDefinition}.
                         * @see #getShortDescription()
                         * @see #getBeanDefinition()
                         */
                        // @ts-ignore
                        public getLongDescription(): string
                        /**
                         * This implementation returns the long description. Can be overridden
                         * to return the short description or any kind of custom description instead.
                         * @see #getLongDescription()
                         * @see #getShortDescription()
                         */
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
