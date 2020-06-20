declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Common interface for exposing locally scheduled tasks.
                 * @author Juergen Hoeller
                 * @since 5.0.2
                 * @see ScheduledTaskRegistrar
                 * @see org.springframework.scheduling.annotation.ScheduledAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                interface ScheduledTaskHolder {
                    /**
                     * Return an overview of the tasks that have been scheduled by this instance.
                     */
                    // @ts-ignore
                    getScheduledTasks(): java.util.Set<org.springframework.scheduling.config.ScheduledTask>
                }
            }
        }
    }
}
