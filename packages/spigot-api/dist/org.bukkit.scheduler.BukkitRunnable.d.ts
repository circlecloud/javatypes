declare namespace org {
    namespace bukkit {
        namespace scheduler {
            /**
             * This class is provided as an easy way to handle scheduling tasks.
             */
            // @ts-ignore
            abstract class BukkitRunnable extends java.lang.Object implements java.lang.Runnable {
                // @ts-ignore
                constructor()
                /**
                 * Returns true if this task has been cancelled.
                 * @return true if the task has been cancelled
                 * @throws IllegalStateException if task was not scheduled yet
                 */
                // @ts-ignore
                public isCancelled(): boolean
                /**
                 * Attempts to cancel this task.
                 * @throws IllegalStateException if task was not scheduled yet
                 */
                // @ts-ignore
                public cancel(): void
                /**
                 * Schedules this in the Bukkit scheduler to run on next tick.
                 * @param plugin the reference to the plugin scheduling task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalStateException if this was already scheduled
                 * @see BukkitScheduler#runTask(Plugin, Runnable)
                 */
                // @ts-ignore
                public runTask(plugin: org.bukkit.plugin.Plugin): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules this in the Bukkit scheduler to run asynchronously.
                 * @param plugin the reference to the plugin scheduling task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalStateException if this was already scheduled
                 * @see BukkitScheduler#runTaskAsynchronously(Plugin, Runnable)
                 */
                // @ts-ignore
                public runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin): org.bukkit.scheduler.BukkitTask
                /**
                 * Schedules this to run after the specified number of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param delay the ticks to wait before running the task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalStateException if this was already scheduled
                 * @see BukkitScheduler#runTaskLater(Plugin, Runnable, long)
                 */
                // @ts-ignore
                public runTaskLater(plugin: org.bukkit.plugin.Plugin, delay: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules this to run asynchronously after the specified number of
                 * server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param delay the ticks to wait before running the task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalStateException if this was already scheduled
                 * @see BukkitScheduler#runTaskLaterAsynchronously(Plugin, Runnable, long)
                 */
                // @ts-ignore
                public runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, delay: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * Schedules this to repeatedly run until cancelled, starting after the
                 * specified number of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param delay the ticks to wait before running the task
                 * @param period the ticks to wait between runs
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalStateException if this was already scheduled
                 * @see BukkitScheduler#runTaskTimer(Plugin, Runnable, long, long)
                 */
                // @ts-ignore
                public runTaskTimer(plugin: org.bukkit.plugin.Plugin, delay: number /*long*/, period: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules this to repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param delay the ticks to wait before running the task for the first
                 *      time
                 * @param period the ticks to wait between runs
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalStateException if this was already scheduled
                 * @see BukkitScheduler#runTaskTimerAsynchronously(Plugin, Runnable, long,
                 *      long)
                 */
                // @ts-ignore
                public runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, delay: number /*long*/, period: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * Gets the task id for this runnable.
                 * @return the task id that this runnable was scheduled as
                 * @throws IllegalStateException if task was not scheduled yet
                 */
                // @ts-ignore
                public getTaskId(): number /*int*/
            }
        }
    }
}
