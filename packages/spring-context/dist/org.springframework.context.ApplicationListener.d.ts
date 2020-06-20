declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Interface to be implemented by application event listeners.
             * <p>Based on the standard {@code java.util.EventListener} interface
             * for the Observer design pattern.
             * <p>As of Spring 3.0, an {@code ApplicationListener} can generically declare
             * the event type that it is interested in. When registered with a Spring
             * {@code ApplicationContext}, events will be filtered accordingly, with the
             * listener getting invoked for matching event objects only.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @param <E> the specific {#code ApplicationEvent} subclass to listen to
             * @see org.springframework.context.ApplicationEvent
             * @see org.springframework.context.event.ApplicationEventMulticaster
             * @see org.springframework.context.event.EventListener
             */
            // @ts-ignore
            interface ApplicationListener<E extends org.springframework.context.ApplicationEvent> extends java.util.EventListener {
                /**
                 * Handle an application event.
                 * @param event the event to respond to
                 */
                // @ts-ignore
                onApplicationEvent(event: E extends org.springframework.context.ApplicationEvent): void
            }
        }
    }
}
