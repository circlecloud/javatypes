declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Event raised when an {@code ApplicationContext} gets started.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see ContextStoppedEvent
                 */
                // @ts-ignore
                class ContextStartedEvent extends org.springframework.context.event.ApplicationContextEvent {
                    /**
                     * Create a new ContextStartedEvent.
                     * @param source the {#code ApplicationContext} that has been started
                     *  (must not be {@code null})
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.context.ApplicationContext)
                }
            }
        }
    }
}
