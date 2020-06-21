declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Subinterface of {@link BeanPostProcessor} that adds a before-destruction callback.
                     * <p>The typical usage will be to invoke custom destruction callbacks on
                     * specific bean types, matching corresponding initialization callbacks.
                     * @author Juergen Hoeller
                     * @since 1.0.1
                     */
                    // @ts-ignore
                    interface DestructionAwareBeanPostProcessor extends org.springframework.beans.factory.config.BeanPostProcessor {
                        /**
                         * Apply this BeanPostProcessor to the given bean instance before its
                         * destruction, e.g. invoking custom destruction callbacks.
                         * <p>Like DisposableBean's {@code destroy} and a custom destroy method, this
                         * callback will only apply to beans which the container fully manages the
                         * lifecycle for. This is usually the case for singletons and scoped beans.
                         * @param bean the bean instance to be destroyed
                         * @param beanName the name of the bean
                         * @throws org.springframework.beans.BeansException in case of errors
                         * @see org.springframework.beans.factory.DisposableBean#destroy()
                         * @see org.springframework.beans.factory.support.AbstractBeanDefinition#setDestroyMethodName(String)
                         */
                        // @ts-ignore
                        postProcessBeforeDestruction(bean: java.lang.Object | any, beanName: java.lang.String | string): void
                        /**
                         * Determine whether the given bean instance requires destruction by this
                         * post-processor.
                         * <p>The default implementation returns {@code true}. If a pre-5 implementation
                         * of {@code DestructionAwareBeanPostProcessor} does not provide a concrete
                         * implementation of this method, Spring silently assumes {@code true} as well.
                         * @param bean the bean instance to check
                         * @return {#code true} if {@link #postProcessBeforeDestruction} is supposed to
                         *  be called for this bean instance eventually, or {@code false} if not needed
                         * @since 4.3
                         */
                        // @ts-ignore
                        requiresDestruction(bean: java.lang.Object | any): boolean
                    }
                }
            }
        }
    }
}
