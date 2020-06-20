declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace wiring {
                    /**
                     * Simple default implementation of the {@link BeanWiringInfoResolver} interface,
                     * looking for a bean with the same name as the fully-qualified class name.
                     * This matches the default name of the bean in a Spring XML file if the
                     * bean tag's "id" attribute is not used.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ClassNameBeanWiringInfoResolver extends java.lang.Object implements org.springframework.beans.factory.wiring.BeanWiringInfoResolver {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        resolveWiringInfo(beanInstance: any): org.springframework.beans.factory.wiring.BeanWiringInfo
                    }
                }
            }
        }
    }
}
