declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * {@link org.springframework.beans.factory.wiring.BeanWiringInfoResolver} that
                     * uses the Configurable annotation to identify which classes need autowiring.
                     * The bean name to look up will be taken from the {@link Configurable} annotation
                     * if specified; otherwise the default will be the fully-qualified name of the
                     * class being configured.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see Configurable
                     * @see org.springframework.beans.factory.wiring.ClassNameBeanWiringInfoResolver
                     */
                    // @ts-ignore
                    class AnnotationBeanWiringInfoResolver extends java.lang.Object implements org.springframework.beans.factory.wiring.BeanWiringInfoResolver {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public resolveWiringInfo(beanInstance: java.lang.Object | any): org.springframework.beans.factory.wiring.BeanWiringInfo
                        /**
                         * Build the {@link BeanWiringInfo} for the given {@link Configurable} annotation.
                         * @param beanInstance the bean instance
                         * @param annotation the Configurable annotation found on the bean class
                         * @return the resolved BeanWiringInfo
                         */
                        // @ts-ignore
                        buildWiringInfo(beanInstance: java.lang.Object | any, annotation: org.springframework.beans.factory.annotation.Configurable): org.springframework.beans.factory.wiring.BeanWiringInfo
                        /**
                         * Determine the default bean name for the specified bean instance.
                         * <p>The default implementation returns the superclass name for a CGLIB
                         * proxy and the name of the plain bean class else.
                         * @param beanInstance the bean instance to build a default name for
                         * @return the default bean name to use
                         * @see org.springframework.util.ClassUtils#getUserClass(Class)
                         */
                        // @ts-ignore
                        getDefaultBeanName(beanInstance: java.lang.Object | any): string
                    }
                }
            }
        }
    }
}
