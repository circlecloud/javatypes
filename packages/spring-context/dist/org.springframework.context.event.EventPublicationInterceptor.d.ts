declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * {@link MethodInterceptor Interceptor} that publishes an
                 * {@code ApplicationEvent} to all {@code ApplicationListeners}
                 * registered with an {@code ApplicationEventPublisher} after each
                 * <i>successful</i> method invocation.
                 * <p>Note that this interceptor is only capable of publishing <i>stateless</i>
                 * events configured via the
                 * {@link #setApplicationEventClass "applicationEventClass"} property.
                 * @author Dmitriy Kopylenko
                 * @author Juergen Hoeller
                 * @author Rick Evans
                 * @see #setApplicationEventClass
                 * @see org.springframework.context.ApplicationEvent
                 * @see org.springframework.context.ApplicationListener
                 * @see org.springframework.context.ApplicationEventPublisher
                 * @see org.springframework.context.ApplicationContext
                 */
                // @ts-ignore
                class EventPublicationInterceptor extends java.lang.Object implements org.springframework.context.ApplicationEventPublisherAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the application event class to publish.
                     * <p>The event class <b>must</b> have a constructor with a single
                     * {@code Object} argument for the event source. The interceptor
                     * will pass in the invoked object.
                     * @throws IllegalArgumentException if the supplied {#code Class} is
                     *  {@code null} or if it is not an {@code ApplicationEvent} subclass or
                     *  if it does not expose a constructor that takes a single {@code Object} argument
                     */
                    // @ts-ignore
                    setApplicationEventClass(applicationEventClass: java.lang.Class<any>): void
                    // @ts-ignore
                    setApplicationEventPublisher(applicationEventPublisher: org.springframework.context.ApplicationEventPublisher): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                }
            }
        }
    }
}
