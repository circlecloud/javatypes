declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * A simple holder for a given bean name plus bean instance.
                     * @author Juergen Hoeller
                     * @since 4.3.3
                     * @param <T> the bean type
                     * @see AutowireCapableBeanFactory#resolveNamedBean(Class)
                     */
                    // @ts-ignore
                    class NamedBeanHolder<T> extends java.lang.Object implements org.springframework.beans.factory.NamedBean {
                        /**
                         * Create a new holder for the given bean name plus instance.
                         * @param beanName the name of the bean
                         * @param beanInstance the corresponding bean instance
                         */
                        // @ts-ignore
                        constructor(beanName: string, beanInstance: T)
                        /**
                         * Return the name of the bean.
                         */
                        // @ts-ignore
                        getBeanName(): java.lang.String
                        /**
                         * Return the corresponding bean instance.
                         */
                        // @ts-ignore
                        getBeanInstance(): T
                    }
                }
            }
        }
    }
}
