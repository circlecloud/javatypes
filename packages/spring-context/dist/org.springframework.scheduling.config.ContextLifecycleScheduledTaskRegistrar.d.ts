declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * {@link ScheduledTaskRegistrar} subclass which redirects the actual scheduling
                 * of tasks to the {@link #afterSingletonsInstantiated()} callback (as of 4.1.2).
                 * @author Juergen Hoeller
                 * @since 3.2.1
                 */
                // @ts-ignore
                class ContextLifecycleScheduledTaskRegistrar extends org.springframework.scheduling.config.ScheduledTaskRegistrar {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public afterSingletonsInstantiated(): void
                }
            }
        }
    }
}
