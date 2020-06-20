declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * {@link org.springframework.context.ApplicationListener} decorator that filters
                 * events from a specified event source, invoking its delegate listener for
                 * matching {@link org.springframework.context.ApplicationEvent} objects only.
                 * <p>Can also be used as base class, overriding the {@link #onApplicationEventInternal}
                 * method instead of specifying a delegate listener.
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 2.0.5
                 */
                // @ts-ignore
                class SourceFilteringListener extends java.lang.Object implements org.springframework.context.event.GenericApplicationListener, org.springframework.context.event.SmartApplicationListener {
                    /**
                     * Create a SourceFilteringListener for the given event source.
                     * @param source the event source that this listener filters for,
                     *  only processing events from this source
                     * @param delegate the delegate listener to invoke with event
                     *  from the specified source
                     */
                    // @ts-ignore
                    constructor(source: any, delegate: org.springframework.context.ApplicationListener<any>)
                    /**
                     * Create a SourceFilteringListener for the given event source,
                     * expecting subclasses to override the {@link #onApplicationEventInternal}
                     * method (instead of specifying a delegate listener).
                     * @param source the event source that this listener filters for,
                     *  only processing events from this source
                     */
                    // @ts-ignore
                    constructor(source: any)
                    // @ts-ignore
                    onApplicationEvent(event: org.springframework.context.ApplicationEvent): void
                    // @ts-ignore
                    supportsEventType(eventType: ResolvableType): boolean
                    // @ts-ignore
                    supportsSourceType(sourceType: java.lang.Class<any>): boolean
                    // @ts-ignore
                    getOrder(): int
                    /**
                     * Actually process the event, after having filtered according to the
                     * desired event source already.
                     * <p>The default implementation invokes the specified delegate, if any.
                     * @param event the event to process (matching the specified source)
                     */
                    // @ts-ignore
                    onApplicationEventInternal(event: org.springframework.context.ApplicationEvent): void
                }
            }
        }
    }
}
