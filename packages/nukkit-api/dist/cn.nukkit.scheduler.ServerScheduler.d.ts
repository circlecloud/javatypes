declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            /**
             * @author Nukkit Project Team
             */
            // @ts-ignore
            class ServerScheduler extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static WORKERS: number /*int*/
                // @ts-ignore
                public scheduleTask(task: cn.nukkit.scheduler.Task): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleTask(Plugin, Runnable)}
                 */
                // @ts-ignore
                public scheduleTask(task: java.lang.Runnable): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleTask(Plugin, Runnable, boolean)}
                 */
                // @ts-ignore
                public scheduleTask(task: java.lang.Runnable, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleAsyncTask(Plugin, AsyncTask)}
                 */
                // @ts-ignore
                public scheduleAsyncTask(task: cn.nukkit.scheduler.AsyncTask): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleAsyncTask(plugin: cn.nukkit.plugin.Plugin, task: cn.nukkit.scheduler.AsyncTask): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleAsyncTaskToWorker(task: cn.nukkit.scheduler.AsyncTask, worker: number /*int*/): void
                // @ts-ignore
                public getAsyncTaskPoolSize(): number /*int*/
                // @ts-ignore
                public increaseAsyncTaskPoolSize(newSize: number /*int*/): void
                // @ts-ignore
                public scheduleDelayedTask(task: cn.nukkit.scheduler.Task, delay: number /*int*/): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleDelayedTask(task: cn.nukkit.scheduler.Task, delay: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleDelayedTask(Plugin, Runnable, int)}
                 */
                // @ts-ignore
                public scheduleDelayedTask(task: java.lang.Runnable, delay: number /*int*/): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleDelayedTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*int*/): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleDelayedTask(Plugin, Runnable, int, boolean)}
                 */
                // @ts-ignore
                public scheduleDelayedTask(task: java.lang.Runnable, delay: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleDelayedTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleRepeatingTask(Plugin, Runnable, int)}
                 */
                // @ts-ignore
                public scheduleRepeatingTask(task: java.lang.Runnable, period: number /*int*/): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, period: number /*int*/): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleRepeatingTask(Plugin, Runnable, int, boolean)}
                 */
                // @ts-ignore
                public scheduleRepeatingTask(task: java.lang.Runnable, period: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, period: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleRepeatingTask(task: cn.nukkit.scheduler.Task, period: number /*int*/): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleRepeatingTask(task: cn.nukkit.scheduler.Task, period: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: cn.nukkit.scheduler.Task, delay: number /*int*/, period: number /*int*/): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: cn.nukkit.scheduler.Task, delay: number /*int*/, period: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleDelayedRepeatingTask(Plugin, Runnable, int, int)}
                 */
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: java.lang.Runnable, delay: number /*int*/, period: number /*int*/): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleDelayedRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*int*/, period: number /*int*/): cn.nukkit.scheduler.TaskHandler
                /**
                 * @deprecated Use {#link #scheduleDelayedRepeatingTask(Plugin, Runnable, int, int, boolean)}
                 */
                // @ts-ignore
                public scheduleDelayedRepeatingTask(task: java.lang.Runnable, delay: number /*int*/, period: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public scheduleDelayedRepeatingTask(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, delay: number /*int*/, period: number /*int*/, asynchronous: boolean): cn.nukkit.scheduler.TaskHandler
                // @ts-ignore
                public cancelTask(taskId: number /*int*/): void
                // @ts-ignore
                public cancelTask(plugin: cn.nukkit.plugin.Plugin): void
                // @ts-ignore
                public cancelAllTasks(): void
                // @ts-ignore
                public isQueued(taskId: number /*int*/): boolean
                // @ts-ignore
                public mainThreadHeartbeat(currentTick: number /*int*/): void
                // @ts-ignore
                public getQueueSize(): number /*int*/
            }
        }
    }
}
