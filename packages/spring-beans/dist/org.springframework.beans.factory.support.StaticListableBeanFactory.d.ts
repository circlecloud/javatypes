declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Static {@link org.springframework.beans.factory.BeanFactory} implementation
                     * which allows to register existing singleton instances programmatically.
                     * Does not have support for prototype beans or aliases.
                     * <p>Serves as example for a simple implementation of the
                     * {@link org.springframework.beans.factory.ListableBeanFactory} interface,
                     * managing existing bean instances rather than creating new ones based on bean
                     * definitions, and not implementing any extended SPI interfaces (such as
                     * {@link org.springframework.beans.factory.config.ConfigurableBeanFactory}).
                     * <p>For a full-fledged factory based on bean definitions, have a look
                     * at {@link DefaultListableBeanFactory}.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 06.01.2003
                     * @see DefaultListableBeanFactory
                     */
                    // @ts-ignore
                    class StaticListableBeanFactory extends java.lang.Object implements org.springframework.beans.factory.ListableBeanFactory {
                        /**
                         * Create a regular {@code StaticListableBeanFactory}, to be populated
                         * with singleton bean instances through {@link #addBean} calls.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a {@code StaticListableBeanFactory} wrapping the given {@code Map}.
                         * <p>Note that the given {@code Map} may be pre-populated with beans;
                         * or new, still allowing for beans to be registered via {@link #addBean};
                         * or {@link java.util.Collections#emptyMap()} for a dummy factory which
                         * enforces operating against an empty set of beans.
                         * @param beans a {#code Map} for holding this factory's beans, with the
                         *  bean name String as key and the corresponding singleton object as value
                         * @since 4.3
                         */
                        // @ts-ignore
                        constructor(beans: java.util.Map<java.lang.String, java.lang.Object>)
                        /**
                         * Add a new singleton bean.
                         * Will overwrite any existing instance for the given name.
                         * @param name the name of the bean
                         * @param bean the bean instance
                         */
                        // @ts-ignore
                        addBean(name: string, bean: any): void
                        // @ts-ignore
                        getBean(name: string): java.lang.Object
                        // @ts-ignore
                        getBean<T>(name: string, requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        getBean(name: string, ...args: any[]): java.lang.Object
                        // @ts-ignore
                        getBean<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        getBean<T>(requiredType: java.lang.Class<T>, ...args: any[]): T
                        // @ts-ignore
                        getBeanProvider<T>(requiredType: java.lang.Class<T>): org.springframework.beans.factory.ObjectProvider<T>
                        // @ts-ignore
                        getBeanProvider<T>(requiredType: ResolvableType): org.springframework.beans.factory.ObjectProvider<T>
                        // @ts-ignore
                        containsBean(name: string): boolean
                        // @ts-ignore
                        isSingleton(name: string): boolean
                        // @ts-ignore
                        isPrototype(name: string): boolean
                        // @ts-ignore
                        isTypeMatch(name: string, typeToMatch: ResolvableType): boolean
                        // @ts-ignore
                        getType(name: string): java.lang.Class<?>
                        // @ts-ignore
                        getType(name: string, allowFactoryBeanInit: boolean): java.lang.Class<?>
                        // @ts-ignore
                        getAliases(name: string): java.lang.String[]
                        // @ts-ignore
                        containsBeanDefinition(name: string): boolean
                        // @ts-ignore
                        getBeanDefinitionCount(): int
                        // @ts-ignore
                        getBeanDefinitionNames(): java.lang.String[]
                        // @ts-ignore
                        getBeanNamesForType(type: ResolvableType): java.lang.String[]
                        // @ts-ignore
                        getBeanNamesForType(type: ResolvableType, includeNonSingletons: boolean, allowEagerInit: boolean): java.lang.String[]
                        // @ts-ignore
                        getBeansOfType<T>(type: java.lang.Class<T>): java.util.Map<java.lang.String, T>
                        // @ts-ignore
                        getBeansOfType<T>(type: java.lang.Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): java.util.Map<java.lang.String, T>
                        // @ts-ignore
                        getBeanNamesForAnnotation(annotationType: java.lang.Class<java.lang.annotation.Annotation>): java.lang.String[]
                        // @ts-ignore
                        getBeansWithAnnotation(annotationType: java.lang.Class<java.lang.annotation.Annotation>): java.util.Map<java.lang.String, java.lang.Object>
                        // @ts-ignore
                        findAnnotationOnBean<A extends java.lang.annotation.Annotation>(beanName: string, annotationType: java.lang.Class<A>): A
                    }
                }
            }
        }
    }
}
