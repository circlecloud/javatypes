declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Registers {@link EventListener} methods as individual {@link ApplicationListener} instances.
                 * Implements {@link BeanFactoryPostProcessor} (as of 5.1) primarily for early retrieval,
                 * avoiding AOP checks for this processor bean and its {@link EventListenerFactory} delegates.
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 4.2
                 * @see EventListenerFactory
                 * @see DefaultEventListenerFactory
                 */
                // @ts-ignore
                class EventListenerMethodProcessor extends java.lang.Object implements org.springframework.context.ApplicationContextAware {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public setApplicationContext(applicationContext: org.springframework.context.ApplicationContext): void
                    // @ts-ignore
                    public postProcessBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                    // @ts-ignore
                    public afterSingletonsInstantiated(): void
                }
            }
        }
    }
}
