declare namespace org {
    namespace bukkit {
        namespace scheduler {
            /**
             * Represents a task being executed by the scheduler
             */
            // @ts-ignore
            interface BukkitTask {
                /**
                 * Returns the taskId for the task.
                 * @return Task id number
                 */
                // @ts-ignore
                getTaskId(): number /*int*/
                /**
                 * Returns the Plugin that owns this task.
                 * @return The Plugin that owns the task
                 */
                // @ts-ignore
                getOwner(): org.bukkit.plugin.Plugin
                /**
                 * Returns true if the Task is a sync task.
                 * @return true if the task is run by main thread
                 */
                // @ts-ignore
                isSync(): boolean
                /**
                 * Returns true if this task has been cancelled.
                 * @return true if the task has been cancelled
                 */
                // @ts-ignore
                isCancelled(): boolean
                /**
                 * Will attempt to cancel this task.
                 */
                // @ts-ignore
                cancel(): void
            }
        }
    }
}
