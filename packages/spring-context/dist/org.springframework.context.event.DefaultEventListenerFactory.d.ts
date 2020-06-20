declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Default {@link EventListenerFactory} implementation that supports the
                 * regular {@link EventListener} annotation.
                 * <p>Used as "catch-all" implementation by default.
                 * @author Stephane Nicoll
                 * @since 4.2
                 */
                // @ts-ignore
                class DefaultEventListenerFactory extends java.lang.Object implements org.springframework.context.event.EventListenerFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setOrder(order: number /*int*/): void
                    // @ts-ignore
                    getOrder(): int
                    // @ts-ignore
                    supportsMethod(method: java.lang.reflect.Method): boolean
                    // @ts-ignore
                    createApplicationListener(beanName: string, type: java.lang.Class<any>, method: java.lang.reflect.Method): org.springframework.context.ApplicationListener<?>
                }
            }
        }
    }
}
