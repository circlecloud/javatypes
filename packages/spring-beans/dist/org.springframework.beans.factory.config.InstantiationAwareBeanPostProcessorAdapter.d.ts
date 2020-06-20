declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Adapter that implements all methods on {@link SmartInstantiationAwareBeanPostProcessor}
                     * as no-ops, which will not change normal processing of each bean instantiated
                     * by the container. Subclasses may override merely those methods that they are
                     * actually interested in.
                     * <p>Note that this base class is only recommendable if you actually require
                     * {@link InstantiationAwareBeanPostProcessor} functionality. If all you need
                     * is plain {@link BeanPostProcessor} functionality, prefer a straight
                     * implementation of that (simpler) interface.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class InstantiationAwareBeanPostProcessorAdapter extends java.lang.Object implements org.springframework.beans.factory.config.SmartInstantiationAwareBeanPostProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        predictBeanType(beanClass: java.lang.Class<any>, beanName: string): java.lang.Class<?>
                        // @ts-ignore
                        determineCandidateConstructors(beanClass: java.lang.Class<any>, beanName: string): java.lang.reflect.Constructor[]
                        // @ts-ignore
                        getEarlyBeanReference(bean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        postProcessBeforeInstantiation(beanClass: java.lang.Class<any>, beanName: string): java.lang.Object
                        // @ts-ignore
                        postProcessAfterInstantiation(bean: any, beanName: string): boolean
                        // @ts-ignore
                        postProcessProperties(pvs: org.springframework.beans.PropertyValues, bean: any, beanName: string): org.springframework.beans.PropertyValues
                        // @ts-ignore
                        postProcessPropertyValues(pvs: org.springframework.beans.PropertyValues, pds: java.beans.PropertyDescriptor[], bean: any, beanName: string): org.springframework.beans.PropertyValues
                        // @ts-ignore
                        postProcessBeforeInitialization(bean: any, beanName: string): java.lang.Object
                        // @ts-ignore
                        postProcessAfterInitialization(bean: any, beanName: string): java.lang.Object
                    }
                }
            }
        }
    }
}
