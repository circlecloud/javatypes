declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace scheduler {
                    /**
                     * This interface represents a scheduler which may be used to queue, delay and
                     * execute tasks in an asynchronous fashion.
                     */
                    // @ts-ignore
                    interface TaskScheduler {
                        /**
                         * Cancel a task to prevent it from executing, or if its a repeating task,
                         * prevent its further execution.
                         * @param id the id of the task to cancel
                         */
                        // @ts-ignore
                        cancel(id: number /*int*/): void
                        /**
                         * Cancel a task to prevent it from executing, or if its a repeating task,
                         * prevent its further execution.
                         * @param task the task to cancel
                         */
                        // @ts-ignore
                        cancel(task: net.md_5.bungee.api.scheduler.ScheduledTask): void
                        /**
                         * Cancel all tasks owned by this plugin, this preventing them from being
                         * executed hereon in.
                         * @param plugin the plugin owning the tasks to be cancelled
                         * @return the number of tasks cancelled by this method
                         */
                        // @ts-ignore
                        cancel(plugin: net.md_5.bungee.api.plugin.Plugin): number /*int*/
                        /**
                         * Schedule a task to be executed asynchronously. The task will commence
                         * running as soon as this method returns.
                         * @param owner the plugin owning this task
                         * @param task the task to run
                         * @return the scheduled task
                         */
                        // @ts-ignore
                        runAsync(owner: net.md_5.bungee.api.plugin.Plugin, task: java.lang.Runnable): net.md_5.bungee.api.scheduler.ScheduledTask
                        /**
                         * Schedules a task to be executed asynchronously after the specified delay
                         * is up.
                         * @param owner the plugin owning this task
                         * @param task the task to run
                         * @param delay the delay before this task will be executed
                         * @param unit the unit in which the delay will be measured
                         * @return the scheduled task
                         */
                        // @ts-ignore
                        schedule(owner: net.md_5.bungee.api.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): net.md_5.bungee.api.scheduler.ScheduledTask
                        /**
                         * Schedules a task to be executed asynchronously after the specified delay
                         * is up. The scheduled task will continue running at the specified
                         * interval. The interval will not begin to count down until the last task
                         * invocation is complete.
                         * @param owner the plugin owning this task
                         * @param task the task to run
                         * @param delay the delay before this task will be executed
                         * @param period the interval before subsequent executions of this task
                         * @param unit the unit in which the delay and period will be measured
                         * @return the scheduled task
                         */
                        // @ts-ignore
                        schedule(owner: net.md_5.bungee.api.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/, period: number /*long*/, unit: java.util.concurrent.TimeUnit): net.md_5.bungee.api.scheduler.ScheduledTask
                        /**
                         * Get the unsafe methods of this class.
                         * @return the unsafe method interface
                         */
                        // @ts-ignore
                        unsafe(): net.md_5.bungee.api.scheduler.TaskScheduler.Unsafe
                    }
                }
            }
        }
    }
}
