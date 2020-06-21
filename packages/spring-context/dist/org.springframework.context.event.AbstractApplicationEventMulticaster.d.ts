declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Abstract implementation of the {@link ApplicationEventMulticaster} interface,
                 * providing the basic listener registration facility.
                 * <p>Doesn't permit multiple instances of the same listener by default,
                 * as it keeps listeners in a linked Set. The collection class used to hold
                 * ApplicationListener objects can be overridden through the "collectionClass"
                 * bean property.
                 * <p>Implementing ApplicationEventMulticaster's actual {@link #multicastEvent} method
                 * is left to subclasses. {@link SimpleApplicationEventMulticaster} simply multicasts
                 * all events to all registered listeners, invoking them in the calling thread.
                 * Alternative implementations could be more sophisticated in those respects.
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 1.2.3
                 * @see #getApplicationListeners(ApplicationEvent, ResolvableType)
                 * @see SimpleApplicationEventMulticaster
                 */
                // @ts-ignore
                abstract class AbstractApplicationEventMulticaster extends java.lang.Object implements org.springframework.context.event.ApplicationEventMulticaster {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    public addApplicationListener(listener: org.springframework.context.ApplicationListener<any>): void
                    // @ts-ignore
                    public addApplicationListenerBean(listenerBeanName: java.lang.String | string): void
                    // @ts-ignore
                    public removeApplicationListener(listener: org.springframework.context.ApplicationListener<any>): void
                    // @ts-ignore
                    public removeApplicationListenerBean(listenerBeanName: java.lang.String | string): void
                    // @ts-ignore
                    public removeAllListeners(): void
                    /**
                     * Return a Collection containing all ApplicationListeners.
                     * @return a Collection of ApplicationListeners
                     * @see org.springframework.context.ApplicationListener
                     */
                    // @ts-ignore
                    getApplicationListeners(): Array<org.springframework.context.ApplicationListener<any>>
                    /**
                     * Return a Collection of ApplicationListeners matching the given
                     * event type. Non-matching listeners get excluded early.
                     * @param event the event to be propagated. Allows for excluding
                     *  non-matching listeners early, based on cached matching information.
                     * @param eventType the event type
                     * @return a Collection of ApplicationListeners
                     * @see org.springframework.context.ApplicationListener
                     */
                    // @ts-ignore
                    getApplicationListeners(event: org.springframework.context.ApplicationEvent, eventType: ResolvableType): Array<org.springframework.context.ApplicationListener<any>>
                    /**
                     * Filter a listener early through checking its generically declared event
                     * type before trying to instantiate it.
                     * <p>If this method returns {@code true} for a given listener as a first pass,
                     * the listener instance will get retrieved and fully evaluated through a
                     * {@link #supportsEvent(ApplicationListener, ResolvableType, Class)} call afterwards.
                     * @param listenerType the listener's type as determined by the BeanFactory
                     * @param eventType the event type to check
                     * @return whether the given listener should be included in the candidates
                     *  for the given event type
                     */
                    // @ts-ignore
                    supportsEvent(listenerType: java.lang.Class<any>, eventType: ResolvableType): boolean
                    /**
                     * Determine whether the given listener supports the given event.
                     * <p>The default implementation detects the {@link SmartApplicationListener}
                     * and {@link GenericApplicationListener} interfaces. In case of a standard
                     * {@link ApplicationListener}, a {@link GenericApplicationListenerAdapter}
                     * will be used to introspect the generically declared type of the target listener.
                     * @param listener the target listener to check
                     * @param eventType the event type to check against
                     * @param sourceType the source type to check against
                     * @return whether the given listener should be included in the candidates
                     *  for the given event type
                     */
                    // @ts-ignore
                    supportsEvent(listener: org.springframework.context.ApplicationListener<any>, eventType: ResolvableType, sourceType: java.lang.Class<any>): boolean
                }
            }
        }
    }
}
