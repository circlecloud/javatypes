declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Interface that exposes a reference to a bean name in an abstract fashion.
                     * This interface does not necessarily imply a reference to an actual bean
                     * instance; it just expresses a logical reference to the name of a bean.
                     * <p>Serves as common interface implemented by any kind of bean reference
                     * holder, such as {@link RuntimeBeanReference RuntimeBeanReference} and
                     * {@link RuntimeBeanNameReference RuntimeBeanNameReference}.
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface BeanReference extends org.springframework.beans.BeanMetadataElement {
                        /**
                         * Return the target bean name that this reference points to (never {@code null}).
                         */
                        // @ts-ignore
                        getBeanName(): string
                    }
                }
            }
        }
    }
}
