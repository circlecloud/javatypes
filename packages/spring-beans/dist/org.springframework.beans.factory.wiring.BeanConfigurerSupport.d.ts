declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace wiring {
                    /**
                     * Convenient base class for bean configurers that can perform Dependency Injection
                     * on objects (however they may be created). Typically subclassed by AspectJ aspects.
                     * <p>Subclasses may also need a custom metadata resolution strategy, in the
                     * {@link BeanWiringInfoResolver} interface. The default implementation looks for
                     * a bean with the same name as the fully-qualified class name. (This is the default
                     * name of the bean in a Spring XML file if the '{@code id}' attribute is not used.)
                     * @author Rob Harrop
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Adrian Colyer
                     * @since 2.0
                     * @see #setBeanWiringInfoResolver
                     * @see ClassNameBeanWiringInfoResolver
                     */
                    // @ts-ignore
                    class BeanConfigurerSupport extends java.lang.Object implements org.springframework.beans.factory.BeanFactoryAware, org.springframework.beans.factory.InitializingBean, org.springframework.beans.factory.DisposableBean {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set the {@link BeanWiringInfoResolver} to use.
                         * <p>The default behavior is to look for a bean with the same name as the class.
                         * As an alternative, consider using annotation-driven bean wiring.
                         * @see ClassNameBeanWiringInfoResolver
                         * @see org.springframework.beans.factory.annotation.AnnotationBeanWiringInfoResolver
                         */
                        // @ts-ignore
                        setBeanWiringInfoResolver(beanWiringInfoResolver: org.springframework.beans.factory.wiring.BeanWiringInfoResolver): void
                        /**
                         * Set the {@link BeanFactory} in which this aspect must configure beans.
                         */
                        // @ts-ignore
                        setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        /**
                         * Create the default BeanWiringInfoResolver to be used if none was
                         * specified explicitly.
                         * <p>The default implementation builds a {@link ClassNameBeanWiringInfoResolver}.
                         * @return the default BeanWiringInfoResolver (never {#code null})
                         */
                        // @ts-ignore
                        createDefaultBeanWiringInfoResolver(): org.springframework.beans.factory.wiring.BeanWiringInfoResolver
                        /**
                         * Check that a {@link BeanFactory} has been set.
                         */
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Release references to the {@link BeanFactory} and
                         * {@link BeanWiringInfoResolver} when the container is destroyed.
                         */
                        // @ts-ignore
                        destroy(): void
                        /**
                         * Configure the bean instance.
                         * <p>Subclasses can override this to provide custom configuration logic.
                         * Typically called by an aspect, for all bean instances matched by a pointcut.
                         * @param beanInstance the bean instance to configure (must <b>not</b> be {#code null})
                         */
                        // @ts-ignore
                        configureBean(beanInstance: any): void
                    }
                }
            }
        }
    }
}
