declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Factory to manage Jetty resources, i.e. {@link Executor}, {@link ByteBufferPool} and
                     * {@link Scheduler}, within the lifecycle of a Spring {@code ApplicationContext}.
                     * <p>This factory implements {@link InitializingBean} and {@link DisposableBean}
                     * and is expected typically to be declared as a Spring-managed bean.
                     * @author Sebastien Deleuze
                     * @since 5.1
                     */
                    // @ts-ignore
                    class JettyResourceFactory extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Configure the {@link Executor} to use.
                         * <p>By default, initialized with a {@link QueuedThreadPool}.
                         * @param executor the executor to use
                         */
                        // @ts-ignore
                        setExecutor(executor: java.util.concurrent.Executor): void
                        /**
                         * Configure the {@link ByteBufferPool} to use.
                         * <p>By default, initialized with a {@link MappedByteBufferPool}.
                         * @param byteBufferPool the {#link ByteBuffer} pool to use
                         */
                        // @ts-ignore
                        setByteBufferPool(byteBufferPool: ByteBufferPool): void
                        /**
                         * Configure the {@link Scheduler} to use.
                         * <p>By default, initialized with a {@link ScheduledExecutorScheduler}.
                         * @param scheduler the {#link Scheduler} to use
                         */
                        // @ts-ignore
                        setScheduler(scheduler: Scheduler): void
                        /**
                         * Configure the thread prefix to initialize {@link QueuedThreadPool} executor with. This
                         * is used only when a {@link Executor} instance isn't
                         * {@link #setExecutor(Executor) provided}.
                         * <p>By default set to "jetty-http".
                         * @param threadPrefix the thread prefix to use
                         */
                        // @ts-ignore
                        setThreadPrefix(threadPrefix: string): void
                        /**
                         * Return the configured {@link Executor}.
                         */
                        // @ts-ignore
                        getExecutor(): java.util.concurrent.Executor
                        /**
                         * Return the configured {@link ByteBufferPool}.
                         */
                        // @ts-ignore
                        getByteBufferPool(): ByteBufferPool
                        /**
                         * Return the configured {@link Scheduler}.
                         */
                        // @ts-ignore
                        getScheduler(): Scheduler
                        // @ts-ignore
                        afterPropertiesSet(): void
                        // @ts-ignore
                        destroy(): void
                    }
                }
            }
        }
    }
}
