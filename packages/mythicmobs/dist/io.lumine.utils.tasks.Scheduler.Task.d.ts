declare namespace io {
    namespace lumine {
        namespace utils {
            namespace tasks {
                namespace Scheduler {
                    // @ts-ignore
                    interface Task extends io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        getTimesRan(): number /*int*/
                        // @ts-ignore
                        stop(): boolean
                        // @ts-ignore
                        getBukkitId(): number /*int*/
                    }
                }
            }
        }
    }
}
