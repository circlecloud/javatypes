declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Counterpart of {@link BeanNameAware}. Returns the bean name of an object.
                 * <p>This interface can be introduced to avoid a brittle dependence on
                 * bean name in objects used with Spring IoC and Spring AOP.
                 * @author Rod Johnson
                 * @since 2.0
                 * @see BeanNameAware
                 */
                // @ts-ignore
                interface NamedBean {
                    /**
                     * Return the name of this bean in a Spring bean factory, if known.
                     */
                    // @ts-ignore
                    getBeanName(): java.lang.String
                }
            }
        }
    }
}
