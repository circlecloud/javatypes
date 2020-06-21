declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            /**
             * This class is provided as an easy way to handle scheduling tasks.
             */
            // @ts-ignore
            abstract class NukkitRunnable extends java.lang.Object implements java.lang.Runnable {
                // @ts-ignore
                constructor()
                /**
                 * Attempts to cancel this task.
                 * @throws IllegalStateException if task was not scheduled yet
                 */
                // @ts-ignore
                public cancel(): void
                // @ts-ignore
                public runTask(plugin: cn.nukkit.plugin.Plugin): java.lang.Runnable
                // @ts-ignore
                public runTaskAsynchronously(plugin: cn.nukkit.plugin.Plugin): java.lang.Runnable
                // @ts-ignore
                public runTaskLater(plugin: cn.nukkit.plugin.Plugin, delay: number /*int*/): java.lang.Runnable
                // @ts-ignore
                public runTaskLaterAsynchronously(plugin: cn.nukkit.plugin.Plugin, delay: number /*int*/): java.lang.Runnable
                // @ts-ignore
                public runTaskTimer(plugin: cn.nukkit.plugin.Plugin, delay: number /*int*/, period: number /*int*/): java.lang.Runnable
                // @ts-ignore
                public runTaskTimerAsynchronously(plugin: cn.nukkit.plugin.Plugin, delay: number /*int*/, period: number /*int*/): java.lang.Runnable
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
