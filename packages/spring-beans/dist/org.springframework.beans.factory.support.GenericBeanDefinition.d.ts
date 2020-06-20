declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * GenericBeanDefinition is a one-stop shop for standard bean definition purposes.
                     * Like any bean definition, it allows for specifying a class plus optionally
                     * constructor argument values and property values. Additionally, deriving from a
                     * parent bean definition can be flexibly configured through the "parentName" property.
                     * <p>In general, use this {@code GenericBeanDefinition} class for the purpose of
                     * registering user-visible bean definitions (which a post-processor might operate on,
                     * potentially even reconfiguring the parent name). Use {@code RootBeanDefinition} /
                     * {@code ChildBeanDefinition} where parent/child relationships happen to be pre-determined.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see #setParentName
                     * @see RootBeanDefinition
                     * @see ChildBeanDefinition
                     */
                    // @ts-ignore
                    class GenericBeanDefinition extends org.springframework.beans.factory.support.AbstractBeanDefinition {
                        /**
                         * Create a new GenericBeanDefinition, to be configured through its bean
                         * properties and configuration methods.
                         * @see #setBeanClass
                         * @see #setScope
                         * @see #setConstructorArgumentValues
                         * @see #setPropertyValues
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new GenericBeanDefinition as deep copy of the given
                         * bean definition.
                         * @param original the original bean definition to copy from
                         */
                        // @ts-ignore
                        constructor(original: org.springframework.beans.factory.config.BeanDefinition)
                        // @ts-ignore
                        setParentName(parentName: string): void
                        // @ts-ignore
                        getParentName(): java.lang.String
                        // @ts-ignore
                        cloneBeanDefinition(): org.springframework.beans.factory.support.AbstractBeanDefinition
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
