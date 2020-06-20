declare namespace org {
    namespace springframework {
        namespace scheduling {
            /**
             * Extension of the Runnable interface, adding special callbacks
             * for long-running operations.
             * <p>This interface closely corresponds to the CommonJ Work interface,
             * but is kept separate to avoid a required CommonJ dependency.
             * <p>Scheduling-capable TaskExecutors are encouraged to check a submitted
             * Runnable, detecting whether this interface is implemented and reacting
             * as appropriately as they are able to.
             * @author Juergen Hoeller
             * @since 2.0
             * @see commonj.work.Work
             * @see org.springframework.core.task.TaskExecutor
             * @see SchedulingTaskExecutor
             * @see org.springframework.scheduling.commonj.WorkManagerTaskExecutor
             */
            // @ts-ignore
            interface SchedulingAwareRunnable extends java.lang.Runnable {
                /**
                 * Return whether the Runnable's operation is long-lived
                 * ({@code true}) versus short-lived ({@code false}).
                 * <p>In the former case, the task will not allocate a thread from the thread
                 * pool (if any) but rather be considered as long-running background thread.
                 * <p>This should be considered a hint. Of course TaskExecutor implementations
                 * are free to ignore this flag and the SchedulingAwareRunnable interface overall.
                 */
                // @ts-ignore
                isLongLived(): boolean
            }
        }
    }
}
