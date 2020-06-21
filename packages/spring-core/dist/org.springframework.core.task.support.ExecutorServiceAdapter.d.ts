declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                namespace support {
                    /**
                     * Adapter that takes a Spring {@link org.springframework.core.task.TaskExecutor}
                     * and exposes a full {@code java.util.concurrent.ExecutorService} for it.
                     * <p>This is primarily for adapting to client components that communicate via the
                     * {@code java.util.concurrent.ExecutorService} API. It can also be used as
                     * common ground between a local Spring {@code TaskExecutor} backend and a
                     * JNDI-located {@code ManagedExecutorService} in a Java EE 7 environment.
                     * <p><b>NOTE:</b> This ExecutorService adapter does <em>not</em> support the
                     * lifecycle methods in the {@code java.util.concurrent.ExecutorService} API
                     * ("shutdown()" etc), similar to a server-wide {@code ManagedExecutorService}
                     * in a Java EE 7 environment. The lifecycle is always up to the backend pool,
                     * with this adapter acting as an access-only proxy for that target pool.
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see java.util.concurrent.ExecutorService
                     */
                    // @ts-ignore
                    class ExecutorServiceAdapter extends java.util.concurrent.AbstractExecutorService {
                        /**
                         * Create a new ExecutorServiceAdapter, using the given target executor.
                         * @param taskExecutor the target executor to delegate to
                         */
                        // @ts-ignore
                        constructor(taskExecutor: org.springframework.core.task.TaskExecutor)
                        // @ts-ignore
                        public execute(task: java.lang.Runnable): void
                        // @ts-ignore
                        public shutdown(): void
                        // @ts-ignore
                        public shutdownNow(): Array<java.lang.Runnable>
                        // @ts-ignore
                        public awaitTermination(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                        // @ts-ignore
                        public isShutdown(): boolean
                        // @ts-ignore
                        public isTerminated(): boolean
                    }
                }
            }
        }
    }
}
