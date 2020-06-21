declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                namespace ConcurrentTaskExecutor {
                    /**
                     * Delegate that wraps a given Runnable/Callable  with a JSR-236 ManagedTask,
                     * exposing a long-running hint based on {@link SchedulingAwareRunnable}
                     * and a given identity name.
                     */
                    // @ts-ignore
                    class ManagedTaskBuilder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static buildManagedTask(task: java.lang.Runnable, identityName: java.lang.String | string): java.lang.Runnable
                        // @ts-ignore
                        public static buildManagedTask<T>(task: java.util.concurrent.Callable<T>, identityName: java.lang.String | string): java.util.concurrent.Callable<T>
                    }
                }
            }
        }
    }
}
