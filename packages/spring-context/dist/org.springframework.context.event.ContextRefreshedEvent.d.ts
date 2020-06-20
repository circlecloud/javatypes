declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Event raised when an {@code ApplicationContext} gets initialized or refreshed.
                 * @author Juergen Hoeller
                 * @since 04.03.2003
                 * @see ContextClosedEvent
                 */
                // @ts-ignore
                class ContextRefreshedEvent extends org.springframework.context.event.ApplicationContextEvent {
                    /**
                     * Create a new ContextRefreshedEvent.
                     * @param source the {#code ApplicationContext} that has been initialized
                     *  or refreshed (must not be {@code null})
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.context.ApplicationContext)
                }
            }
        }
    }
}
