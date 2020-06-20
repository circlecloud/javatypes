declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Event raised when an {@code ApplicationContext} gets stopped.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see ContextStartedEvent
                 */
                // @ts-ignore
                class ContextStoppedEvent extends org.springframework.context.event.ApplicationContextEvent {
                    /**
                     * Create a new ContextStoppedEvent.
                     * @param source the {#code ApplicationContext} that has been stopped
                     *  (must not be {@code null})
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.context.ApplicationContext)
                }
            }
        }
    }
}
