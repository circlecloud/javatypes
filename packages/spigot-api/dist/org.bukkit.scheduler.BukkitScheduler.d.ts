declare namespace org {
    namespace bukkit {
        namespace scheduler {
            // @ts-ignore
            interface BukkitScheduler {
                /**
                 * Schedules a once off task to occur after a delay.
                 * <p>
                 * This task will be executed by the main server thread.
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @param delay Delay in server ticks before executing task
                 * @return Task id number (-1 if scheduling failed)
                 */
                // @ts-ignore
                scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/): int
                /**
                 * @deprecated Use {#link BukkitRunnable#runTaskLater(Plugin, long)}
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @param delay Delay in server ticks before executing task
                 * @return Task id number (-1 if scheduling failed)
                 */
                // @ts-ignore
                scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number /*long*/): int
                /**
                 * Schedules a once off task to occur as soon as possible.
                 * <p>
                 * This task will be executed by the main server thread.
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @return Task id number (-1 if scheduling failed)
                 */
                // @ts-ignore
                scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): int
                /**
                 * @deprecated Use {#link BukkitRunnable#runTask(Plugin)}
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @return Task id number (-1 if scheduling failed)
                 */
                // @ts-ignore
                scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): int
                /**
                 * Schedules a repeating task.
                 * <p>
                 * This task will be executed by the main server thread.
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @param delay Delay in server ticks before executing first repeat
                 * @param period Period in server ticks of the task
                 * @return Task id number (-1 if scheduling failed)
                 */
                // @ts-ignore
                scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/, period: number /*long*/): int
                /**
                 * @deprecated Use {#link BukkitRunnable#runTaskTimer(Plugin, long, long)}
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @param delay Delay in server ticks before executing first repeat
                 * @param period Period in server ticks of the task
                 * @return Task id number (-1 if scheduling failed)
                 */
                // @ts-ignore
                scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number /*long*/, period: number /*long*/): int
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur after a delay. This task will be
                 * executed by a thread managed by the scheduler.
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @param delay Delay in server ticks before executing task
                 * @return Task id number (-1 if scheduling failed)
                 * @deprecated This name is misleading, as it does not schedule "a sync"
                 *      task, but rather, "an async" task
                 */
                // @ts-ignore
                scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/): int
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur as soon as possible. This task will
                 * be executed by a thread managed by the scheduler.
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @return Task id number (-1 if scheduling failed)
                 * @deprecated This name is misleading, as it does not schedule "a sync"
                 *      task, but rather, "an async" task
                 */
                // @ts-ignore
                scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): int
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a repeating task. This task will be executed by a thread
                 * managed by the scheduler.
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @param delay Delay in server ticks before executing first repeat
                 * @param period Period in server ticks of the task
                 * @return Task id number (-1 if scheduling failed)
                 * @deprecated This name is misleading, as it does not schedule "a sync"
                 *      task, but rather, "an async" task
                 */
                // @ts-ignore
                scheduleAsyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/, period: number /*long*/): int
                /**
                 * Calls a method on the main thread and returns a Future object. This
                 * task will be executed by the main server thread.
                 * <ul>
                 * <li>Note: The Future.get() methods must NOT be called from the main
                 * thread.
                 * <li>Note2: There is at least an average of 10ms latency until the
                 * isDone() method returns true.
                 * </ul>
                 * @param <T> The callable's return type
                 * @param plugin Plugin that owns the task
                 * @param task Task to be executed
                 * @return Future Future object related to the task
                 */
                // @ts-ignore
                callSyncMethod<T>(plugin: org.bukkit.plugin.Plugin, task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                /**
                 * Removes task from scheduler.
                 * @param taskId Id number of task to be removed
                 */
                // @ts-ignore
                cancelTask(taskId: number /*int*/): void
                /**
                 * Removes all tasks associated with a particular plugin from the
                 * scheduler.
                 * @param plugin Owner of tasks to be removed
                 */
                // @ts-ignore
                cancelTasks(plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Check if the task currently running.
                 * <p>
                 * A repeating task might not be running currently, but will be running in
                 * the future. A task that has finished, and does not repeat, will not be
                 * running ever again.
                 * <p>
                 * Explicitly, a task is running if there exists a thread for it, and that
                 * thread is alive.
                 * @param taskId The task to check.
                 *  <p>
                 * @return If the task is currently running.
                 */
                // @ts-ignore
                isCurrentlyRunning(taskId: number /*int*/): boolean
                /**
                 * Check if the task queued to be run later.
                 * <p>
                 * If a repeating task is currently running, it might not be queued now
                 * but could be in the future. A task that is not queued, and not running,
                 * will not be queued again.
                 * @param taskId The task to check.
                 *  <p>
                 * @return If the task is queued to be run.
                 */
                // @ts-ignore
                isQueued(taskId: number /*int*/): boolean
                /**
                 * Returns a list of all active workers.
                 * <p>
                 * This list contains asynch tasks that are being executed by separate
                 * threads.
                 * @return Active workers
                 */
                // @ts-ignore
                getActiveWorkers(): java.util.List<org.bukkit.scheduler.BukkitWorker>
                /**
                 * Returns a list of all pending tasks. The ordering of the tasks is not
                 * related to their order of execution.
                 * @return Active workers
                 */
                // @ts-ignore
                getPendingTasks(): java.util.List<org.bukkit.scheduler.BukkitTask>
                /**
                 * Returns a task that will run on the next server tick.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): org.bukkit.scheduler.BukkitTask
                /**
                 * Returns a task that will run on the next server tick.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTask(plugin: org.bukkit.plugin.Plugin, task: java.util.function.Consumer<org.bukkit.scheduler.BukkitTask> | java.util.function$.Consumer<org.bukkit.scheduler.BukkitTask>): void
                /**
                 * @deprecated Use {#link BukkitRunnable#runTask(Plugin)}
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.util.function.Consumer<org.bukkit.scheduler.BukkitTask> | java.util.function$.Consumer<org.bukkit.scheduler.BukkitTask>): void
                /**
                 * @deprecated Use {#link BukkitRunnable#runTaskAsynchronously(Plugin)}
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskLater(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskLater(plugin: org.bukkit.plugin.Plugin, task: java.util.function.Consumer<org.bukkit.scheduler.BukkitTask> | java.util.function$.Consumer<org.bukkit.scheduler.BukkitTask>, delay: number /*long*/): void
                /**
                 * @deprecated Use {#link BukkitRunnable#runTaskLater(Plugin, long)}
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskLater(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.util.function.Consumer<org.bukkit.scheduler.BukkitTask> | java.util.function$.Consumer<org.bukkit.scheduler.BukkitTask>, delay: number /*long*/): void
                /**
                 * @deprecated Use {#link BukkitRunnable#runTaskLaterAsynchronously(Plugin, long)}
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @param period the ticks to wait between runs
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/, period: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @param period the ticks to wait between runs
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: java.util.function.Consumer<org.bukkit.scheduler.BukkitTask> | java.util.function$.Consumer<org.bukkit.scheduler.BukkitTask>, delay: number /*long*/, period: number /*long*/): void
                /**
                 * @deprecated Use {#link BukkitRunnable#runTaskTimer(Plugin, long, long)}
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task
                 * @param period the ticks to wait between runs
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number /*long*/, period: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task for the first
                 *      time
                 * @param period the ticks to wait between runs
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*long*/, period: number /*long*/): org.bukkit.scheduler.BukkitTask
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task for the first
                 *      time
                 * @param period the ticks to wait between runs
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.util.function.Consumer<org.bukkit.scheduler.BukkitTask> | java.util.function$.Consumer<org.bukkit.scheduler.BukkitTask>, delay: number /*long*/, period: number /*long*/): void
                /**
                 * @deprecated Use {#link BukkitRunnable#runTaskTimerAsynchronously(Plugin, long, long)}
                 * @param plugin the reference to the plugin scheduling task
                 * @param task the task to be run
                 * @param delay the ticks to wait before running the task for the first
                 *      time
                 * @param period the ticks to wait between runs
                 * @return a BukkitTask that contains the id number
                 * @throws IllegalArgumentException if plugin is null
                 * @throws IllegalArgumentException if task is null
                 */
                // @ts-ignore
                runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number /*long*/, period: number /*long*/): org.bukkit.scheduler.BukkitTask
            }
        }
    }
}
