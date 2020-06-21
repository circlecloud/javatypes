declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Support base class for singleton registries which need to handle
                     * {@link org.springframework.beans.factory.FactoryBean} instances,
                     * integrated with {@link DefaultSingletonBeanRegistry}'s singleton management.
                     * <p>Serves as base class for {@link AbstractBeanFactory}.
                     * @author Juergen Hoeller
                     * @since 2.5.1
                     */
                    // @ts-ignore
                    abstract class FactoryBeanRegistrySupport extends org.springframework.beans.factory.support.DefaultSingletonBeanRegistry {
                        // @ts-ignore
                        constructor()
                        /**
                         * Determine the type for the given FactoryBean.
                         * @param factoryBean the FactoryBean instance to check
                         * @return the FactoryBean's object type,
                         *  or {#code null} if the type cannot be determined yet
                         */
                        // @ts-ignore
                        getTypeForFactoryBean(factoryBean: org.springframework.beans.factory.FactoryBean<any>): java.lang.Class<any>
                        /**
                         * Obtain an object to expose from the given FactoryBean, if available
                         * in cached form. Quick check for minimal synchronization.
                         * @param beanName the name of the bean
                         * @return the object obtained from the FactoryBean,
                         *  or {#code null} if not available
                         */
                        // @ts-ignore
                        getCachedObjectForFactoryBean(beanName: java.lang.String | string): any
                        /**
                         * Obtain an object to expose from the given FactoryBean.
                         * @param factory the FactoryBean instance
                         * @param beanName the name of the bean
                         * @param shouldPostProcess whether the bean is subject to post-processing
                         * @return the object obtained from the FactoryBean
                         * @throws BeanCreationException if FactoryBean object creation failed
                         * @see org.springframework.beans.factory.FactoryBean#getObject()
                         */
                        // @ts-ignore
                        getObjectFromFactoryBean(factory: org.springframework.beans.factory.FactoryBean<any>, beanName: java.lang.String | string, shouldPostProcess: boolean): any
                        /**
                         * Post-process the given object that has been obtained from the FactoryBean.
                         * The resulting object will get exposed for bean references.
                         * <p>The default implementation simply returns the given object as-is.
                         * Subclasses may override this, for example, to apply post-processors.
                         * @param object the object obtained from the FactoryBean.
                         * @param beanName the name of the bean
                         * @return the object to expose
                         * @throws org.springframework.beans.BeansException if any post-processing failed
                         */
                        // @ts-ignore
                        postProcessObjectFromFactoryBean(object: java.lang.Object | any, beanName: java.lang.String | string): any
                        /**
                         * Get a FactoryBean for the given bean if possible.
                         * @param beanName the name of the bean
                         * @param beanInstance the corresponding bean instance
                         * @return the bean instance as FactoryBean
                         * @throws BeansException if the given bean cannot be exposed as a FactoryBean
                         */
                        // @ts-ignore
                        getFactoryBean(beanName: java.lang.String | string, beanInstance: java.lang.Object | any): org.springframework.beans.factory.FactoryBean<any>
                        /**
                         * Overridden to clear the FactoryBean object cache as well.
                         */
                        // @ts-ignore
                        removeSingleton(beanName: java.lang.String | string): void
                        /**
                         * Overridden to clear the FactoryBean object cache as well.
                         */
                        // @ts-ignore
                        clearSingletonCache(): void
                        /**
                         * Return the security context for this bean factory. If a security manager
                         * is set, interaction with the user code will be executed using the privileged
                         * of the security context returned by this method.
                         * @see AccessController#getContext()
                         */
                        // @ts-ignore
                        getAccessControlContext(): java.security.AccessControlContext
                    }
                }
            }
        }
    }
}
