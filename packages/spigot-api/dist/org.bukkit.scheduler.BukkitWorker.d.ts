declare namespace org {
    namespace bukkit {
        namespace scheduler {
            /**
             * Represents a worker thread for the scheduler. This gives information about
             * the Thread object for the task, owner of the task and the taskId.
             * <p>
             * Workers are used to execute async tasks.
             */
            // @ts-ignore
            interface BukkitWorker {
                /**
                 * Returns the taskId for the task being executed by this worker.
                 * @return Task id number
                 */
                // @ts-ignore
                getTaskId(): int
                /**
                 * Returns the Plugin that owns this task.
                 * @return The Plugin that owns the task
                 */
                // @ts-ignore
                getOwner(): org.bukkit.plugin.Plugin
                /**
                 * Returns the thread for the worker.
                 * @return The Thread object for the worker
                 */
                // @ts-ignore
                getThread(): java.lang.Thread
            }
        }
    }
}
