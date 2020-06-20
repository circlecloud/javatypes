declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Utility class that allows for convenient registration of common
                 * {@link org.springframework.beans.factory.config.BeanPostProcessor} and
                 * {@link org.springframework.beans.factory.config.BeanFactoryPostProcessor}
                 * definitions for annotation-based configuration. Also registers a common
                 * {@link org.springframework.beans.factory.support.AutowireCandidateResolver}.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @author Stephane Nicoll
                 * @since 2.5
                 * @see ContextAnnotationAutowireCandidateResolver
                 * @see ConfigurationClassPostProcessor
                 * @see CommonAnnotationBeanPostProcessor
                 * @see org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor
                 * @see org.springframework.orm.jpa.support.PersistenceAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                class AnnotationConfigUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The bean name of the internally managed Configuration annotation processor.
                     */
                    // @ts-ignore
                    readonly CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed BeanNameGenerator for use when processing
                     * {@link Configuration} classes. Set by {@link AnnotationConfigApplicationContext}
                     * and {@code AnnotationConfigWebApplicationContext} during bootstrap in order to make
                     * any custom name generation strategy available to the underlying
                     * {@link ConfigurationClassPostProcessor}.
                     * @since 3.1.1
                     */
                    // @ts-ignore
                    readonly CONFIGURATION_BEAN_NAME_GENERATOR: string
                    /**
                     * The bean name of the internally managed Autowired annotation processor.
                     */
                    // @ts-ignore
                    readonly AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed Required annotation processor.
                     * @deprecated as of 5.1, since no Required processor is registered by default anymore
                     */
                    // @ts-ignore
                    readonly REQUIRED_ANNOTATION_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed JSR-250 annotation processor.
                     */
                    // @ts-ignore
                    readonly COMMON_ANNOTATION_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed JPA annotation processor.
                     */
                    // @ts-ignore
                    readonly PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed @EventListener annotation processor.
                     */
                    // @ts-ignore
                    readonly EVENT_LISTENER_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed EventListenerFactory.
                     */
                    // @ts-ignore
                    readonly EVENT_LISTENER_FACTORY_BEAN_NAME: string
                    /**
                     * Register all relevant annotation post processors in the given registry.
                     * @param registry the registry to operate on
                     */
                    // @ts-ignore
                    registerAnnotationConfigProcessors(registry: BeanDefinitionRegistry): void
                    /**
                     * Register all relevant annotation post processors in the given registry.
                     * @param registry the registry to operate on
                     * @param source the configuration source element (already extracted)
                     *  that this registration was triggered from. May be {#code null}.
                     * @return a Set of BeanDefinitionHolders, containing all bean definitions
                     *  that have actually been registered by this call
                     */
                    // @ts-ignore
                    registerAnnotationConfigProcessors(registry: BeanDefinitionRegistry, source: any): java.util.Set<BeanDefinitionHolder>
                    // @ts-ignore
                    processCommonDefinitionAnnotations(abd: AnnotatedBeanDefinition): void
                }
            }
        }
    }
}
