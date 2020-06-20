declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Bean definition for beans which inherit settings from their parent.
                     * Child bean definitions have a fixed dependency on a parent bean definition.
                     * <p>A child bean definition will inherit constructor argument values,
                     * property values and method overrides from the parent, with the option
                     * to add new values. If init method, destroy method and/or static factory
                     * method are specified, they will override the corresponding parent settings.
                     * The remaining settings will <i>always</i> be taken from the child definition:
                     * depends on, autowire mode, dependency check, singleton, lazy init.
                     * <p><b>NOTE:</b> Since Spring 2.5, the preferred way to register bean
                     * definitions programmatically is the {@link GenericBeanDefinition} class,
                     * which allows to dynamically define parent dependencies through the
                     * {@link GenericBeanDefinition#setParentName} method. This effectively
                     * supersedes the ChildBeanDefinition class for most use cases.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @see GenericBeanDefinition
                     * @see RootBeanDefinition
                     */
                    // @ts-ignore
                    class ChildBeanDefinition extends org.springframework.beans.factory.support.AbstractBeanDefinition {
                        /**
                         * Create a new ChildBeanDefinition for the given parent, to be
                         * configured through its bean properties and configuration methods.
                         * @param parentName the name of the parent bean
                         * @see #setBeanClass
                         * @see #setScope
                         * @see #setConstructorArgumentValues
                         * @see #setPropertyValues
                         */
                        // @ts-ignore
                        constructor(parentName: string)
                        /**
                         * Create a new ChildBeanDefinition for the given parent.
                         * @param parentName the name of the parent bean
                         * @param pvs the additional property values of the child
                         */
                        // @ts-ignore
                        constructor(parentName: string, pvs: org.springframework.beans.MutablePropertyValues)
                        /**
                         * Create a new ChildBeanDefinition for the given parent.
                         * @param parentName the name of the parent bean
                         * @param cargs the constructor argument values to apply
                         * @param pvs the additional property values of the child
                         */
                        // @ts-ignore
                        constructor(parentName: string, cargs: org.springframework.beans.factory.config.ConstructorArgumentValues, pvs: org.springframework.beans.MutablePropertyValues)
                        /**
                         * Create a new ChildBeanDefinition for the given parent,
                         * providing constructor arguments and property values.
                         * @param parentName the name of the parent bean
                         * @param beanClass the class of the bean to instantiate
                         * @param cargs the constructor argument values to apply
                         * @param pvs the property values to apply
                         */
                        // @ts-ignore
                        constructor(parentName: string, beanClass: java.lang.Class<any>, cargs: org.springframework.beans.factory.config.ConstructorArgumentValues, pvs: org.springframework.beans.MutablePropertyValues)
                        /**
                         * Create a new ChildBeanDefinition for the given parent,
                         * providing constructor arguments and property values.
                         * Takes a bean class name to avoid eager loading of the bean class.
                         * @param parentName the name of the parent bean
                         * @param beanClassName the name of the class to instantiate
                         * @param cargs the constructor argument values to apply
                         * @param pvs the property values to apply
                         */
                        // @ts-ignore
                        constructor(parentName: string, beanClassName: string, cargs: org.springframework.beans.factory.config.ConstructorArgumentValues, pvs: org.springframework.beans.MutablePropertyValues)
                        /**
                         * Create a new ChildBeanDefinition as deep copy of the given
                         * bean definition.
                         * @param original the original bean definition to copy from
                         */
                        // @ts-ignore
                        constructor(original: org.springframework.beans.factory.support.ChildBeanDefinition)
                        // @ts-ignore
                        setParentName(parentName: string): void
                        // @ts-ignore
                        getParentName(): java.lang.String
                        // @ts-ignore
                        validate(): void
                        // @ts-ignore
                        cloneBeanDefinition(): org.springframework.beans.factory.support.AbstractBeanDefinition
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
