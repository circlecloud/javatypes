declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Visitor class for traversing {@link BeanDefinition} objects, in particular
                     * the property values and constructor argument values contained in them,
                     * resolving bean metadata values.
                     * <p>Used by {@link PlaceholderConfigurerSupport} to parse all String values
                     * contained in a BeanDefinition, resolving any placeholders found.
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 1.2
                     * @see BeanDefinition
                     * @see BeanDefinition#getPropertyValues
                     * @see BeanDefinition#getConstructorArgumentValues
                     * @see PlaceholderConfigurerSupport
                     */
                    // @ts-ignore
                    class BeanDefinitionVisitor extends java.lang.Object {
                        /**
                         * Create a new BeanDefinitionVisitor, applying the specified
                         * value resolver to all bean metadata values.
                         * @param valueResolver the StringValueResolver to apply
                         */
                        // @ts-ignore
                        constructor(valueResolver: StringValueResolver)
                        /**
                         * Create a new BeanDefinitionVisitor for subclassing.
                         * Subclasses need to override the {@link #resolveStringValue} method.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Traverse the given BeanDefinition object and the MutablePropertyValues
                         * and ConstructorArgumentValues contained in them.
                         * @param beanDefinition the BeanDefinition object to traverse
                         * @see #resolveStringValue(String)
                         */
                        // @ts-ignore
                        public visitBeanDefinition(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        visitParentName(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        visitBeanClassName(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        visitFactoryBeanName(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        visitFactoryMethodName(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        visitScope(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        visitPropertyValues(pvs: org.springframework.beans.MutablePropertyValues): void
                        // @ts-ignore
                        visitIndexedArgumentValues(ias: java.util.Map<java.lang.Integer | number, org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder>): void
                        // @ts-ignore
                        visitGenericArgumentValues(gas: java.util.List<org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder> | Array<org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder>): void
                        // @ts-ignore
                        resolveValue(value: java.lang.Object | any): any
                        // @ts-ignore
                        visitArray(arrayVal: java.lang.Object[] | any[]): void
                        // @ts-ignore
                        visitList(listVal: java.util.List<any> | Array<any>): void
                        // @ts-ignore
                        visitSet(setVal: java.util.Set<any> | Array<any>): void
                        // @ts-ignore
                        visitMap(mapVal: java.util.Map<any, any>): void
                        /**
                         * Resolve the given String value, for example parsing placeholders.
                         * @param strVal the original String value
                         * @return the resolved String value
                         */
                        // @ts-ignore
                        resolveStringValue(strVal: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
