declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Interface responsible for creating instances corresponding to a root bean definition.
                     * <p>This is pulled out into a strategy as various approaches are possible,
                     * including using CGLIB to create subclasses on the fly to support Method Injection.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 1.1
                     */
                    // @ts-ignore
                    interface InstantiationStrategy {
                        /**
                         * Return an instance of the bean with the given name in this factory.
                         * @param bd the bean definition
                         * @param beanName the name of the bean when it is created in this context.
                         *  The name can be {#code null} if we are autowiring a bean which doesn't
                         *  belong to the factory.
                         * @param owner the owning BeanFactory
                         * @return a bean instance for this bean definition
                         * @throws BeansException if the instantiation attempt failed
                         */
                        // @ts-ignore
                        instantiate(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: string, owner: org.springframework.beans.factory.BeanFactory): java.lang.Object
                        /**
                         * Return an instance of the bean with the given name in this factory,
                         * creating it via the given constructor.
                         * @param bd the bean definition
                         * @param beanName the name of the bean when it is created in this context.
                         *  The name can be {#code null} if we are autowiring a bean which doesn't
                         *  belong to the factory.
                         * @param owner the owning BeanFactory
                         * @param ctor the constructor to use
                         * @param args the constructor arguments to apply
                         * @return a bean instance for this bean definition
                         * @throws BeansException if the instantiation attempt failed
                         */
                        // @ts-ignore
                        instantiate(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: string, owner: org.springframework.beans.factory.BeanFactory, ctor: java.lang.reflect.Constructor<any>, ...args: any[]): java.lang.Object
                        /**
                         * Return an instance of the bean with the given name in this factory,
                         * creating it via the given factory method.
                         * @param bd the bean definition
                         * @param beanName the name of the bean when it is created in this context.
                         *  The name can be {#code null} if we are autowiring a bean which doesn't
                         *  belong to the factory.
                         * @param owner the owning BeanFactory
                         * @param factoryBean the factory bean instance to call the factory method on,
                         *  or {#code null} in case of a static factory method
                         * @param factoryMethod the factory method to use
                         * @param args the factory method arguments to apply
                         * @return a bean instance for this bean definition
                         * @throws BeansException if the instantiation attempt failed
                         */
                        // @ts-ignore
                        instantiate(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: string, owner: org.springframework.beans.factory.BeanFactory, factoryBean: any, factoryMethod: java.lang.reflect.Method, ...args: any[]): java.lang.Object
                    }
                }
            }
        }
    }
}
