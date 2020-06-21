declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Base class for events raised for an {@code ApplicationContext}.
                 * @author Juergen Hoeller
                 * @since 2.5
                 */
                // @ts-ignore
                abstract class ApplicationContextEvent extends org.springframework.context.ApplicationEvent {
                    /**
                     * Create a new ContextStartedEvent.
                     * @param source the {#code ApplicationContext} that the event is raised for
                     *  (must not be {@code null})
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.context.ApplicationContext)
                    /**
                     * Get the {@code ApplicationContext} that the event was raised for.
                     */
                    // @ts-ignore
                    public getApplicationContext(): org.springframework.context.ApplicationContext
                }
            }
        }
    }
}
