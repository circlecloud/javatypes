declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Event raised when an {@code ApplicationContext} gets closed.
                 * @author Juergen Hoeller
                 * @since 12.08.2003
                 * @see ContextRefreshedEvent
                 */
                // @ts-ignore
                class ContextClosedEvent extends org.springframework.context.event.ApplicationContextEvent {
                    /**
                     * Creates a new ContextClosedEvent.
                     * @param source the {#code ApplicationContext} that has been closed
                     *  (must not be {@code null})
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.context.ApplicationContext)
                }
            }
        }
    }
}
