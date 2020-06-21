declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * {@link GenericApplicationListener} adapter that determines supported event types
                 * through introspecting the generically declared type of the target listener.
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.0
                 * @see org.springframework.context.ApplicationListener#onApplicationEvent
                 */
                // @ts-ignore
                class GenericApplicationListenerAdapter extends java.lang.Object implements org.springframework.context.event.GenericApplicationListener, org.springframework.context.event.SmartApplicationListener {
                    /**
                     * Create a new GenericApplicationListener for the given delegate.
                     * @param delegate the delegate listener to be invoked
                     */
                    // @ts-ignore
                    constructor(delegate: org.springframework.context.ApplicationListener<any>)
                    // @ts-ignore
                    public onApplicationEvent(event: org.springframework.context.ApplicationEvent): void
                    // @ts-ignore
                    public supportsEventType(eventType: ResolvableType): boolean
                    // @ts-ignore
                    public supportsSourceType(sourceType: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public getOrder(): number /*int*/
                }
            }
        }
    }
}
