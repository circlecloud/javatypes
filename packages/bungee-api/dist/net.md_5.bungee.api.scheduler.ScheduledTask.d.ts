declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace scheduler {
                    /**
                     * Represents a task scheduled for execution by the {@link TaskScheduler}.
                     */
                    // @ts-ignore
                    interface ScheduledTask {
                        /**
                         * Gets the unique ID of this task.
                         * @return this tasks ID
                         */
                        // @ts-ignore
                        getId(): number /*int*/
                        /**
                         * Return the plugin which scheduled this task for execution.
                         * @return the owning plugin
                         */
                        // @ts-ignore
                        getOwner(): net.md_5.bungee.api.plugin.Plugin
                        /**
                         * Get the actual method which will be executed by this task.
                         * @return the {#link Runnable} behind this task
                         */
                        // @ts-ignore
                        getTask(): java.lang.Runnable
                        /**
                         * Cancel this task to suppress subsequent executions.
                         */
                        // @ts-ignore
                        cancel(): void
                    }
                }
            }
        }
    }
}
