declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Default object instantiation strategy for use in BeanFactories.
                     * <p>Uses CGLIB to generate subclasses dynamically if methods need to be
                     * overridden by the container to implement <em>Method Injection</em>.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 1.1
                     */
                    // @ts-ignore
                    class CglibSubclassingInstantiationStrategy extends org.springframework.beans.factory.support.SimpleInstantiationStrategy {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        instantiateWithMethodInjection(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, owner: org.springframework.beans.factory.BeanFactory): any
                        // @ts-ignore
                        instantiateWithMethodInjection(bd: org.springframework.beans.factory.support.RootBeanDefinition, beanName: java.lang.String | string, owner: org.springframework.beans.factory.BeanFactory, ctor: java.lang.reflect.Constructor<any>, ...args: java.lang.Object[] | any[]): any
                    }
                }
            }
        }
    }
}
