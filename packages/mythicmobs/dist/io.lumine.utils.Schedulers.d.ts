declare namespace io {
    namespace lumine {
        namespace utils {
            // @ts-ignore
            class Schedulers extends java.lang.Object {
                // @ts-ignore
                public static get(context: io.lumine.utils.promise.ThreadContext): io.lumine.utils.tasks.TaskScheduler
                // @ts-ignore
                public static sync(): io.lumine.utils.tasks.TaskScheduler
                // @ts-ignore
                public static async(): io.lumine.utils.tasks.TaskScheduler
                // @ts-ignore
                public static bukkit(): BukkitScheduler
                // @ts-ignore
                public static builder(): io.lumine.utils.tasks.builder.TaskBuilder
            }
        }
    }
}
