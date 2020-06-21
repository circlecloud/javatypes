declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Extension of the {@link InstantiationAwareBeanPostProcessor} interface,
                     * adding a callback for predicting the eventual type of a processed bean.
                     * <p><b>NOTE:</b> This interface is a special purpose interface, mainly for
                     * internal use within the framework. In general, application-provided
                     * post-processors should simply implement the plain {@link BeanPostProcessor}
                     * interface or derive from the {@link InstantiationAwareBeanPostProcessorAdapter}
                     * class. New methods might be added to this interface even in point releases.
                     * @author Juergen Hoeller
                     * @since 2.0.3
                     * @see InstantiationAwareBeanPostProcessorAdapter
                     */
                    // @ts-ignore
                    interface SmartInstantiationAwareBeanPostProcessor extends org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessor {
                        /**
                         * Predict the type of the bean to be eventually returned from this
                         * processor's {@link #postProcessBeforeInstantiation} callback.
                         * <p>The default implementation returns {@code null}.
                         * @param beanClass the raw class of the bean
                         * @param beanName the name of the bean
                         * @return the type of the bean, or {#code null} if not predictable
                         * @throws org.springframework.beans.BeansException in case of errors
                         */
                        // @ts-ignore
                        predictBeanType(beanClass: java.lang.Class<any>, beanName: java.lang.String | string): java.lang.Class<any>
                        /**
                         * Determine the candidate constructors to use for the given bean.
                         * <p>The default implementation returns {@code null}.
                         * @param beanClass the raw class of the bean (never {#code null})
                         * @param beanName the name of the bean
                         * @return the candidate constructors, or {#code null} if none specified
                         * @throws org.springframework.beans.BeansException in case of errors
                         */
                        // @ts-ignore
                        determineCandidateConstructors(beanClass: java.lang.Class<any>, beanName: java.lang.String | string): java.lang.reflect.Constructor<any>[]
                        /**
                         * Obtain a reference for early access to the specified bean,
                         * typically for the purpose of resolving a circular reference.
                         * <p>This callback gives post-processors a chance to expose a wrapper
                         * early - that is, before the target bean instance is fully initialized.
                         * The exposed object should be equivalent to the what
                         * {@link #postProcessBeforeInitialization} / {@link #postProcessAfterInitialization}
                         * would expose otherwise. Note that the object returned by this method will
                         * be used as bean reference unless the post-processor returns a different
                         * wrapper from said post-process callbacks. In other words: Those post-process
                         * callbacks may either eventually expose the same reference or alternatively
                         * return the raw bean instance from those subsequent callbacks (if the wrapper
                         * for the affected bean has been built for a call to this method already,
                         * it will be exposes as final bean reference by default).
                         * <p>The default implementation returns the given {@code bean} as-is.
                         * @param bean the raw bean instance
                         * @param beanName the name of the bean
                         * @return the object to expose as bean reference
                         *  (typically with the passed-in bean instance as default)
                         * @throws org.springframework.beans.BeansException in case of errors
                         */
                        // @ts-ignore
                        getEarlyBeanReference(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
