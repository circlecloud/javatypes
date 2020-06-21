declare namespace org {
    namespace springframework {
        namespace context {
            namespace weaving {
                /**
                 * {@link org.springframework.beans.factory.config.BeanPostProcessor}
                 * implementation that passes the context's default {@link LoadTimeWeaver}
                 * to beans that implement the {@link LoadTimeWeaverAware} interface.
                 * <p>{@link org.springframework.context.ApplicationContext Application contexts}
                 * will automatically register this with their underlying {@link BeanFactory bean factory},
                 * provided that a default {@code LoadTimeWeaver} is actually available.
                 * <p>Applications should not use this class directly.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see LoadTimeWeaverAware
                 * @see org.springframework.context.ConfigurableApplicationContext#LOAD_TIME_WEAVER_BEAN_NAME
                 */
                // @ts-ignore
                class LoadTimeWeaverAwareProcessor extends java.lang.Object {
                    /**
                     * Create a new {@code LoadTimeWeaverAwareProcessor} that will
                     * auto-retrieve the {@link LoadTimeWeaver} from the containing
                     * {@link BeanFactory}, expecting a bean named
                     * {@link ConfigurableApplicationContext#LOAD_TIME_WEAVER_BEAN_NAME "loadTimeWeaver"}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code LoadTimeWeaverAwareProcessor} for the given
                     * {@link LoadTimeWeaver}.
                     * <p>If the given {@code loadTimeWeaver} is {@code null}, then a
                     * {@code LoadTimeWeaver} will be auto-retrieved from the containing
                     * {@link BeanFactory}, expecting a bean named
                     * {@link ConfigurableApplicationContext#LOAD_TIME_WEAVER_BEAN_NAME "loadTimeWeaver"}.
                     * @param loadTimeWeaver the specific {#code LoadTimeWeaver} that is to be used
                     */
                    // @ts-ignore
                    constructor(loadTimeWeaver: org.springframework.instrument.classloading.LoadTimeWeaver)
                    /**
                     * Create a new {@code LoadTimeWeaverAwareProcessor}.
                     * <p>The {@code LoadTimeWeaver} will be auto-retrieved from
                     * the given {@link BeanFactory}, expecting a bean named
                     * {@link ConfigurableApplicationContext#LOAD_TIME_WEAVER_BEAN_NAME "loadTimeWeaver"}.
                     * @param beanFactory the BeanFactory to retrieve the LoadTimeWeaver from
                     */
                    // @ts-ignore
                    constructor(beanFactory: BeanFactory)
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    public postProcessBeforeInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                    // @ts-ignore
                    public postProcessAfterInitialization(bean: java.lang.Object | any, name: java.lang.String | string): any
                }
            }
        }
    }
}
