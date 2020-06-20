declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Adapter for live beans view exposure, building a snapshot of current beans
                 * and their dependencies from either a local {@code ApplicationContext} (with a
                 * local {@code LiveBeansView} bean definition) or all registered ApplicationContexts
                 * (driven by the {@value #MBEAN_DOMAIN_PROPERTY_NAME} environment property).
                 * <p>Note: This feature is still in beta and primarily designed for use with
                 * Spring Tool Suite 3.1 and higher.
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.2
                 * @see #getSnapshotAsJson()
                 * @see org.springframework.web.context.support.LiveBeansViewServlet
                 */
                // @ts-ignore
                class LiveBeansView extends java.lang.Object implements org.springframework.context.support.LiveBeansViewMBean, org.springframework.context.ApplicationContextAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * The "MBean Domain" property name.
                     */
                    // @ts-ignore
                    readonly MBEAN_DOMAIN_PROPERTY_NAME: string
                    /**
                     * The MBean application key.
                     */
                    // @ts-ignore
                    readonly MBEAN_APPLICATION_KEY: string
                    // @ts-ignore
                    setApplicationContext(applicationContext: org.springframework.context.ApplicationContext): void
                    /**
                     * Generate a JSON snapshot of current beans and their dependencies,
                     * finding all active ApplicationContexts through {@link #findApplicationContexts()},
                     * then delegating to {@link #generateJson(java.util.Set)}.
                     */
                    // @ts-ignore
                    getSnapshotAsJson(): java.lang.String
                    /**
                     * Find all applicable ApplicationContexts for the current application.
                     * <p>Called if no specific ApplicationContext has been set for this LiveBeansView.
                     * @return the set of ApplicationContexts
                     */
                    // @ts-ignore
                    findApplicationContexts(): java.util.Set<org.springframework.context.ConfigurableApplicationContext>
                    /**
                     * Actually generate a JSON snapshot of the beans in the given ApplicationContexts.
                     * <p>This implementation doesn't use any JSON parsing libraries in order to avoid
                     * third-party library dependencies. It produces an array of context description
                     * objects, each containing a context and parent attribute as well as a beans
                     * attribute with nested bean description objects. Each bean object contains a
                     * bean, scope, type and resource attribute, as well as a dependencies attribute
                     * with a nested array of bean names that the present bean depends on.
                     * @param contexts the set of ApplicationContexts
                     * @return the JSON document
                     */
                    // @ts-ignore
                    generateJson(contexts: Array<org.springframework.context.ConfigurableApplicationContext>): java.lang.String
                    /**
                     * Determine whether the specified bean is eligible for inclusion in the
                     * LiveBeansView JSON snapshot.
                     * @param beanName the name of the bean
                     * @param bd the corresponding bean definition
                     * @param bf the containing bean factory
                     * @return {#code true} if the bean is to be included; {@code false} otherwise
                     */
                    // @ts-ignore
                    isBeanEligible(beanName: string, bd: BeanDefinition, bf: ConfigurableBeanFactory): boolean
                    /**
                     * Determine a resource description for the given bean definition and
                     * apply basic JSON escaping (backslashes, double quotes) to it.
                     * @param bd the bean definition to build the resource description for
                     * @return the JSON-escaped resource description
                     */
                    // @ts-ignore
                    getEscapedResourceDescription(bd: BeanDefinition): java.lang.String
                }
            }
        }
    }
}
