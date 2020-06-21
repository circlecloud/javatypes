declare namespace org {
    namespace springframework {
        namespace context {
            namespace weaving {
                /**
                 * Post-processor that registers AspectJ's
                 * {@link org.aspectj.weaver.loadtime.ClassPreProcessorAgentAdapter}
                 * with the Spring application context's default
                 * {@link org.springframework.instrument.classloading.LoadTimeWeaver}.
                 * @author Juergen Hoeller
                 * @author Ramnivas Laddad
                 * @since 2.5
                 */
                // @ts-ignore
                class AspectJWeavingEnabler extends java.lang.Object implements org.springframework.context.weaving.LoadTimeWeaverAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * The {@code aop.xml} resource location.
                     */
                    // @ts-ignore
                    public static readonly ASPECTJ_AOP_XML_RESOURCE: java.lang.String | string
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public setLoadTimeWeaver(loadTimeWeaver: org.springframework.instrument.classloading.LoadTimeWeaver): void
                    // @ts-ignore
                    public getOrder(): number /*int*/
                    // @ts-ignore
                    public postProcessBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Enable AspectJ weaving with the given {@link LoadTimeWeaver}.
                     * @param weaverToUse the LoadTimeWeaver to apply to (or {#code null} for a default weaver)
                     * @param beanClassLoader the class loader to create a default weaver for (if necessary)
                     */
                    // @ts-ignore
                    public static enableAspectJWeaving(weaverToUse: org.springframework.instrument.classloading.LoadTimeWeaver, beanClassLoader: java.lang.ClassLoader): void
                }
            }
        }
    }
}
