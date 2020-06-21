declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Simple object instantiation strategy for use in a BeanFactory.
                     * <p>Does not support Method Injection, although it provides hooks for subclasses
                     * to override to add Method Injection support, for example by overriding methods.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 1.1
                     */
                    // @ts-ignore
                    class SimpleInstantiationStrategy extends java.lang.Object implements org.springframework.beans.factory.support.InstantiationStrategy {
                        // @ts-ignore
                        constructor()
                        /**
                         * Return the factory method currently being invoked or {@code null} if none.
                         * <p>Allows factory method implementations to determine whether the current
                         * caller is the container itself as opposed to user code.
                         */
                        // @ts-ignore
                        public static getCurrentlyInvokedFactoryMethod(): java.lang.reflect.Method
                        // @ts-ignore
                        public instantiate(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, owner: org.springframework.beans.factory.BeanFactory): any
                        /**
                         * Subclasses can override this method, which is implemented to throw
                         * UnsupportedOperationException, if they can instantiate an object with
                         * the Method Injection specified in the given RootBeanDefinition.
                         * Instantiation should use a no-arg constructor.
                         */
                        // @ts-ignore
                        instantiateWithMethodInjection(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, owner: org.springframework.beans.factory.BeanFactory): any
                        // @ts-ignore
                        public instantiate(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, owner: org.springframework.beans.factory.BeanFactory, ctor: java.lang.reflect.Constructor<any>, ...args: java.lang.Object[] | any[]): any
                        /**
                         * Subclasses can override this method, which is implemented to throw
                         * UnsupportedOperationException, if they can instantiate an object with
                         * the Method Injection specified in the given RootBeanDefinition.
                         * Instantiation should use the given constructor and parameters.
                         */
                        // @ts-ignore
                        instantiateWithMethodInjection(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, owner: org.springframework.beans.factory.BeanFactory, ctor: java.lang.reflect.Constructor<any>, ...args: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public instantiate(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, owner: org.springframework.beans.factory.BeanFactory, factoryBean: java.lang.Object | any, factoryMethod: java.lang.reflect.Method, ...args: java.lang.Object[] | any[]): any
                    }
                }
            }
        }
    }
}
