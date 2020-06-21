declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace wiring {
                    /**
                     * Holder for bean wiring metadata information about a particular class. Used in
                     * conjunction with the {@link org.springframework.beans.factory.annotation.Configurable}
                     * annotation and the AspectJ {@code AnnotationBeanConfigurerAspect}.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see BeanWiringInfoResolver
                     * @see org.springframework.beans.factory.config.AutowireCapableBeanFactory
                     * @see org.springframework.beans.factory.annotation.Configurable
                     */
                    // @ts-ignore
                    class BeanWiringInfo extends java.lang.Object {
                        /**
                         * Create a default BeanWiringInfo that suggests plain initialization of
                         * factory and post-processor callbacks that the bean class may expect.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new BeanWiringInfo that points to the given bean name.
                         * @param beanName the name of the bean definition to take the property values from
                         * @throws IllegalArgumentException if the supplied beanName is {#code null},
                         *  is empty, or consists wholly of whitespace
                         */
                        // @ts-ignore
                        constructor(beanName: java.lang.String | string)
                        /**
                         * Create a new BeanWiringInfo that points to the given bean name.
                         * @param beanName the name of the bean definition to take the property values from
                         * @param isDefaultBeanName whether the given bean name is a suggested
                         *  default bean name, not necessarily matching an actual bean definition
                         * @throws IllegalArgumentException if the supplied beanName is {#code null},
                         *  is empty, or consists wholly of whitespace
                         */
                        // @ts-ignore
                        constructor(beanName: java.lang.String | string, isDefaultBeanName: boolean)
                        /**
                         * Create a new BeanWiringInfo that indicates autowiring.
                         * @param autowireMode one of the constants {#link #AUTOWIRE_BY_NAME} /
                         *  {@link #AUTOWIRE_BY_TYPE}
                         * @param dependencyCheck whether to perform a dependency check for object
                         *  references in the bean instance (after autowiring)
                         * @throws IllegalArgumentException if the supplied {#code autowireMode}
                         *  is not one of the allowed values
                         * @see #AUTOWIRE_BY_NAME
                         * @see #AUTOWIRE_BY_TYPE
                         */
                        // @ts-ignore
                        constructor(autowireMode: number /*int*/, dependencyCheck: boolean)
                        /**
                         * Constant that indicates autowiring bean properties by name.
                         * @see #BeanWiringInfo(int, boolean)
                         * @see org.springframework.beans.factory.config.AutowireCapableBeanFactory#AUTOWIRE_BY_NAME
                         */
                        // @ts-ignore
                        public static readonly AUTOWIRE_BY_NAME: number /*int*/
                        /**
                         * Constant that indicates autowiring bean properties by type.
                         * @see #BeanWiringInfo(int, boolean)
                         * @see org.springframework.beans.factory.config.AutowireCapableBeanFactory#AUTOWIRE_BY_TYPE
                         */
                        // @ts-ignore
                        public static readonly AUTOWIRE_BY_TYPE: number /*int*/
                        /**
                         * Return whether this BeanWiringInfo indicates autowiring.
                         */
                        // @ts-ignore
                        public indicatesAutowiring(): boolean
                        /**
                         * Return the specific bean name that this BeanWiringInfo points to, if any.
                         */
                        // @ts-ignore
                        public getBeanName(): string
                        /**
                         * Return whether the specific bean name is a suggested default bean name,
                         * not necessarily matching an actual bean definition in the factory.
                         */
                        // @ts-ignore
                        public isDefaultBeanName(): boolean
                        /**
                         * Return one of the constants {@link #AUTOWIRE_BY_NAME} /
                         * {@link #AUTOWIRE_BY_TYPE}, if autowiring is indicated.
                         */
                        // @ts-ignore
                        public getAutowireMode(): number /*int*/
                        /**
                         * Return whether to perform a dependency check for object references
                         * in the bean instance (after autowiring).
                         */
                        // @ts-ignore
                        public getDependencyCheck(): boolean
                    }
                }
            }
        }
    }
}
