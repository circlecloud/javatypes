declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Interface to be implemented by objects that can manage a number of
                 * {@link ApplicationListener} objects and publish events to them.
                 * <p>An {@link org.springframework.context.ApplicationEventPublisher}, typically
                 * a Spring {@link org.springframework.context.ApplicationContext}, can use an
                 * {@code ApplicationEventMulticaster} as a delegate for actually publishing events.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @see ApplicationListener
                 */
                // @ts-ignore
                interface ApplicationEventMulticaster {
                    /**
                     * Add a listener to be notified of all events.
                     * @param listener the listener to add
                     */
                    // @ts-ignore
                    addApplicationListener(listener: org.springframework.context.ApplicationListener<any>): void
                    /**
                     * Add a listener bean to be notified of all events.
                     * @param listenerBeanName the name of the listener bean to add
                     */
                    // @ts-ignore
                    addApplicationListenerBean(listenerBeanName: string): void
                    /**
                     * Remove a listener from the notification list.
                     * @param listener the listener to remove
                     */
                    // @ts-ignore
                    removeApplicationListener(listener: org.springframework.context.ApplicationListener<any>): void
                    /**
                     * Remove a listener bean from the notification list.
                     * @param listenerBeanName the name of the listener bean to remove
                     */
                    // @ts-ignore
                    removeApplicationListenerBean(listenerBeanName: string): void
                    /**
                     * Remove all listeners registered with this multicaster.
                     * <p>After a remove call, the multicaster will perform no action
                     * on event notification until new listeners are registered.
                     */
                    // @ts-ignore
                    removeAllListeners(): void
                    /**
                     * Multicast the given application event to appropriate listeners.
                     * <p>Consider using {@link #multicastEvent(ApplicationEvent, ResolvableType)}
                     * if possible as it provides better support for generics-based events.
                     * @param event the event to multicast
                     */
                    // @ts-ignore
                    multicastEvent(event: org.springframework.context.ApplicationEvent): void
                    /**
                     * Multicast the given application event to appropriate listeners.
                     * <p>If the {@code eventType} is {@code null}, a default type is built
                     * based on the {@code event} instance.
                     * @param event the event to multicast
                     * @param eventType the type of event (can be {#code null})
                     * @since 4.2
                     */
                    // @ts-ignore
                    multicastEvent(event: org.springframework.context.ApplicationEvent, eventType: ResolvableType): void
                }
            }
        }
    }
}
