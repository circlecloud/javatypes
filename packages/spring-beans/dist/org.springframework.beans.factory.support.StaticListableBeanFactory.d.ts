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
                        constructor(beans: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                        /**
                         * Add a new singleton bean.
                         * Will overwrite any existing instance for the given name.
                         * @param name the name of the bean
                         * @param bean the bean instance
                         */
                        // @ts-ignore
                        public addBean(name: java.lang.String | string, bean: java.lang.Object | any): void
                        // @ts-ignore
                        public getBean(name: java.lang.String | string): any
                        // @ts-ignore
                        public getBean<T>(name: java.lang.String | string, requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getBean(name: java.lang.String | string, ...args: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public getBean<T>(requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public getBean<T>(requiredType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                        // @ts-ignore
                        public getBeanProvider<T>(requiredType: java.lang.Class<T>): org.springframework.beans.factory.ObjectProvider<T>
                        // @ts-ignore
                        public getBeanProvider<T>(requiredType: ResolvableType): org.springframework.beans.factory.ObjectProvider<T>
                        // @ts-ignore
                        public containsBean(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public isSingleton(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public isPrototype(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public isTypeMatch(name: java.lang.String | string, typeToMatch: ResolvableType): boolean
                        // @ts-ignore
                        public getType(name: java.lang.String | string): java.lang.Class<any>
                        // @ts-ignore
                        public getType(name: java.lang.String | string, allowFactoryBeanInit: boolean): java.lang.Class<any>
                        // @ts-ignore
                        public getAliases(name: java.lang.String | string): string[]
                        // @ts-ignore
                        public containsBeanDefinition(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public getBeanDefinitionCount(): number /*int*/
                        // @ts-ignore
                        public getBeanDefinitionNames(): string[]
                        // @ts-ignore
                        public getBeanNamesForType(type: ResolvableType): string[]
                        // @ts-ignore
                        public getBeanNamesForType(type: ResolvableType, includeNonSingletons: boolean, allowEagerInit: boolean): string[]
                        // @ts-ignore
                        public getBeansOfType<T>(type: java.lang.Class<T>): java.util.Map<java.lang.String | string, T>
                        // @ts-ignore
                        public getBeansOfType<T>(type: java.lang.Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): java.util.Map<java.lang.String | string, T>
                        // @ts-ignore
                        public getBeanNamesForAnnotation(annotationType: java.lang.Class<any>): string[]
                        // @ts-ignore
                        public getBeansWithAnnotation(annotationType: java.lang.Class<any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public findAnnotationOnBean<A extends java.lang.annotation.Annotation>(beanName: java.lang.String | string, annotationType: java.lang.Class<A>): A
                    }
                }
            }
        }
    }
}
