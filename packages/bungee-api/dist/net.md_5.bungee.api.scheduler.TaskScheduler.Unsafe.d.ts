declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace scheduler {
                    namespace TaskScheduler {
                        // @ts-ignore
                        interface Unsafe {
                            /**
                             * An executor service which underlies this scheduler.
                             * @param plugin owning plugin
                             * @return the underlying executor service or compatible wrapper
                             */
                            // @ts-ignore
                            getExecutorService(plugin: net.md_5.bungee.api.plugin.Plugin): java.util.concurrent.ExecutorService
                        }
                    }
                }
            }
        }
    }
}
