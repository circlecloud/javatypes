declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Strategy interface for processing Lifecycle beans within the ApplicationContext.
             * @author Mark Fisher
             * @author Juergen Hoeller
             * @since 3.0
             */
            // @ts-ignore
            interface LifecycleProcessor extends org.springframework.context.Lifecycle {
                /**
                 * Notification of context refresh, e.g. for auto-starting components.
                 */
                // @ts-ignore
                onRefresh(): void
                /**
                 * Notification of context close phase, e.g. for auto-stopping components.
                 */
                // @ts-ignore
                onClose(): void
            }
        }
    }
}
