declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Post-processor callback interface for <i>merged</i> bean definitions at runtime.
                     * {@link BeanPostProcessor} implementations may implement this sub-interface in order
                     * to post-process the merged bean definition (a processed copy of the original bean
                     * definition) that the Spring {@code BeanFactory} uses to create a bean instance.
                     * <p>The {@link #postProcessMergedBeanDefinition} method may for example introspect
                     * the bean definition in order to prepare some cached metadata before post-processing
                     * actual instances of a bean. It is also allowed to modify the bean definition but
                     * <i>only</i> for definition properties which are actually intended for concurrent
                     * modification. Essentially, this only applies to operations defined on the
                     * {@link RootBeanDefinition} itself but not to the properties of its base classes.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#getMergedBeanDefinition
                     */
                    // @ts-ignore
                    interface MergedBeanDefinitionPostProcessor extends org.springframework.beans.factory.config.BeanPostProcessor {
                        /**
                         * Post-process the given merged bean definition for the specified bean.
                         * @param beanDefinition the merged bean definition for the bean
                         * @param beanType the actual type of the managed bean instance
                         * @param beanName the name of the bean
                         * @see AbstractAutowireCapableBeanFactory#applyMergedBeanDefinitionPostProcessors
                         */
                        // @ts-ignore
                        postProcessMergedBeanDefinition(beanDefinition: org.springframework.beans.factory.support.RootBeanDefinition, beanType: java.lang.Class<any>, beanName: java.lang.String | string): void
                        /**
                         * A notification that the bean definition for the specified name has been reset,
                         * and that this post-processor should clear any metadata for the affected bean.
                         * <p>The default implementation is empty.
                         * @param beanName the name of the bean
                         * @since 5.1
                         * @see DefaultListableBeanFactory#resetBeanDefinition
                         */
                        // @ts-ignore
                        resetBeanDefinition(beanName: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
