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
                    abstract class InstantiationAwareBeanPostProcessorAdapter extends java.lang.Object implements org.springframework.beans.factory.config.SmartInstantiationAwareBeanPostProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public predictBeanType(beanClass: java.lang.Class<any>, beanName: java.lang.String | string): java.lang.Class<any>
                        // @ts-ignore
                        public determineCandidateConstructors(beanClass: java.lang.Class<any>, beanName: java.lang.String | string): java.lang.reflect.Constructor<any>[]
                        // @ts-ignore
                        public getEarlyBeanReference(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                        // @ts-ignore
                        public postProcessBeforeInstantiation(beanClass: java.lang.Class<any>, beanName: java.lang.String | string): any
                        // @ts-ignore
                        public postProcessAfterInstantiation(bean: java.lang.Object | any, beanName: java.lang.String | string): boolean
                        // @ts-ignore
                        public postProcessProperties(pvs: org.springframework.beans.PropertyValues, bean: java.lang.Object | any, beanName: java.lang.String | string): org.springframework.beans.PropertyValues
                        // @ts-ignore
                        public postProcessPropertyValues(pvs: org.springframework.beans.PropertyValues, pds: java.beans.PropertyDescriptor[], bean: java.lang.Object | any, beanName: java.lang.String | string): org.springframework.beans.PropertyValues
                        // @ts-ignore
                        public postProcessBeforeInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                        // @ts-ignore
                        public postProcessAfterInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
