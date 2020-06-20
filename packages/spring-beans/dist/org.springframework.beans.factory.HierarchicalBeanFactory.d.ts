declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Sub-interface implemented by bean factories that can be part
                 * of a hierarchy.
                 * <p>The corresponding {@code setParentBeanFactory} method for bean
                 * factories that allow setting the parent in a configurable
                 * fashion can be found in the ConfigurableBeanFactory interface.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @since 07.07.2003
                 * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#setParentBeanFactory
                 */
                // @ts-ignore
                interface HierarchicalBeanFactory extends org.springframework.beans.factory.BeanFactory {
                    /**
                     * Return the parent bean factory, or {@code null} if there is none.
                     */
                    // @ts-ignore
                    getParentBeanFactory(): org.springframework.beans.factory.BeanFactory
                    /**
                     * Return whether the local bean factory contains a bean of the given name,
                     * ignoring beans defined in ancestor contexts.
                     * <p>This is an alternative to {@code containsBean}, ignoring a bean
                     * of the given name from an ancestor bean factory.
                     * @param name the name of the bean to query
                     * @return whether a bean with the given name is defined in the local factory
                     * @see BeanFactory#containsBean
                     */
                    // @ts-ignore
                    containsLocalBean(name: string): boolean
                }
            }
        }
    }
}
