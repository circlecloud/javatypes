declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitTaskManager extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.AbstractTaskManager {
                            // @ts-ignore
                            constructor(plugin: JavaPlugin)
                            // @ts-ignore
                            public scheduleTask(task: java.lang.Runnable, delay: number /*int*/, interval: number /*int*/): number /*int*/
                            // @ts-ignore
                            public cancelTask(taskId: number /*int*/): void
                            // @ts-ignore
                            public scheduleAsyncTask(task: java.lang.Runnable, delay: number /*int*/, interval: number /*int*/): number /*int*/
                            // @ts-ignore
                            public run(task: java.lang.Runnable): void
                            // @ts-ignore
                            public runAsync(task: java.lang.Runnable): void
                            // @ts-ignore
                            public runAsyncLater(task: java.lang.Runnable, delay: number /*int*/): void
                            // @ts-ignore
                            public runLater(task: java.lang.Runnable, delay: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
