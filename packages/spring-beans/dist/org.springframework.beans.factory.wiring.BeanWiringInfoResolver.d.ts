declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace wiring {
                    /**
                     * Strategy interface to be implemented by objects than can resolve bean name
                     * information, given a newly instantiated bean object. Invocations to the
                     * {@link #resolveWiringInfo} method on this interface will be driven by
                     * the AspectJ pointcut in the relevant concrete aspect.
                     * <p>Metadata resolution strategy can be pluggable. A good default is
                     * {@link ClassNameBeanWiringInfoResolver}, which uses the fully-qualified
                     * class name as bean name.
                     * @author Rod Johnson
                     * @since 2.0
                     * @see BeanWiringInfo
                     * @see ClassNameBeanWiringInfoResolver
                     * @see org.springframework.beans.factory.annotation.AnnotationBeanWiringInfoResolver
                     */
                    // @ts-ignore
                    interface BeanWiringInfoResolver {
                        /**
                         * Resolve the BeanWiringInfo for the given bean instance.
                         * @param beanInstance the bean instance to resolve info for
                         * @return the BeanWiringInfo, or {#code null} if not found
                         */
                        // @ts-ignore
                        resolveWiringInfo(beanInstance: any): org.springframework.beans.factory.wiring.BeanWiringInfo
                    }
                }
            }
        }
    }
}
