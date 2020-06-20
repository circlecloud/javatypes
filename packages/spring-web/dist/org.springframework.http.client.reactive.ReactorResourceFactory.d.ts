declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Factory to manage Reactor Netty resources, i.e. {@link LoopResources} for
                     * event loop threads, and {@link ConnectionProvider} for the connection pool,
                     * within the lifecycle of a Spring {@code ApplicationContext}.
                     * <p>This factory implements {@link InitializingBean} and {@link DisposableBean}
                     * and is expected typically to be declared as a Spring-managed bean.
                     * @author Rossen Stoyanchev
                     * @since 5.1
                     */
                    // @ts-ignore
                    class ReactorResourceFactory extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Whether to use global Reactor Netty resources via {@link HttpResources}.
                         * <p>Default is "true" in which case this factory initializes and stops the
                         * global Reactor Netty resources within Spring's {@code ApplicationContext}
                         * lifecycle. If set to "false" the factory manages its resources independent
                         * of the global ones.
                         * @param useGlobalResources whether to expose and manage the global resources
                         * @see #addGlobalResourcesConsumer(Consumer)
                         */
                        // @ts-ignore
                        setUseGlobalResources(useGlobalResources: boolean): void
                        /**
                         * Whether this factory exposes the global
                         * {@link reactor.netty.http.HttpResources HttpResources} holder.
                         */
                        // @ts-ignore
                        isUseGlobalResources(): boolean
                        /**
                         * Add a Consumer for configuring the global Reactor Netty resources on
                         * startup. When this option is used, {@link #setUseGlobalResources} is also
                         * enabled.
                         * @param consumer the consumer to apply
                         * @see #setUseGlobalResources(boolean)
                         */
                        // @ts-ignore
                        addGlobalResourcesConsumer(consumer: java.util.function.Consumer<HttpResources> | java.util.function$.Consumer<HttpResources>): void
                        /**
                         * Use this when you don't want to participate in global resources and
                         * you want to customize the creation of the managed {@code ConnectionProvider}.
                         * <p>By default, {@code ConnectionProvider.elastic("http")} is used.
                         * <p>Note that this option is ignored if {@code userGlobalResources=false} or
                         * {@link #setConnectionProvider(ConnectionProvider)} is set.
                         * @param supplier the supplier to use
                         */
                        // @ts-ignore
                        setConnectionProviderSupplier(supplier: java.util.function.Supplier<ConnectionProvider> | java.util.function$.Supplier<ConnectionProvider>): void
                        /**
                         * Use this when you want to provide an externally managed
                         * {@link ConnectionProvider} instance.
                         * @param connectionProvider the connection provider to use as is
                         */
                        // @ts-ignore
                        setConnectionProvider(connectionProvider: ConnectionProvider): void
                        /**
                         * Return the configured {@link ConnectionProvider}.
                         */
                        // @ts-ignore
                        getConnectionProvider(): ConnectionProvider
                        /**
                         * Use this when you don't want to participate in global resources and
                         * you want to customize the creation of the managed {@code LoopResources}.
                         * <p>By default, {@code LoopResources.create("reactor-http")} is used.
                         * <p>Note that this option is ignored if {@code userGlobalResources=false} or
                         * {@link #setLoopResources(LoopResources)} is set.
                         * @param supplier the supplier to use
                         */
                        // @ts-ignore
                        setLoopResourcesSupplier(supplier: java.util.function.Supplier<LoopResources> | java.util.function$.Supplier<LoopResources>): void
                        /**
                         * Use this option when you want to provide an externally managed
                         * {@link LoopResources} instance.
                         * @param loopResources the loop resources to use as is
                         */
                        // @ts-ignore
                        setLoopResources(loopResources: LoopResources): void
                        /**
                         * Return the configured {@link LoopResources}.
                         */
                        // @ts-ignore
                        getLoopResources(): LoopResources
                        /**
                         * Configure the amount of time we'll wait before shutting down resources.
                         * If a task is submitted during the {@code shutdownQuietPeriod}, it is guaranteed
                         * to be accepted and the {@code shutdownQuietPeriod} will start over.
                         * <p>By default, this is set to
                         * {@link LoopResources#DEFAULT_SHUTDOWN_QUIET_PERIOD} which is 2 seconds but
                         * can also be overridden with the system property
                         * {@link reactor.netty.ReactorNetty#SHUTDOWN_QUIET_PERIOD
                         * ReactorNetty.SHUTDOWN_QUIET_PERIOD}.
                         * @since 5.2.4
                         * @see #setShutdownTimeout(Duration)
                         */
                        // @ts-ignore
                        setShutdownQuietPeriod(shutdownQuietPeriod: java.time.Duration): void
                        /**
                         * Configure the maximum amount of time to wait until the disposal of the
                         * underlying resources regardless if a task was submitted during the
                         * {@code shutdownQuietPeriod}.
                         * <p>By default, this is set to
                         * {@link LoopResources#DEFAULT_SHUTDOWN_TIMEOUT} which is 15 seconds but
                         * can also be overridden with the system property
                         * {@link reactor.netty.ReactorNetty#SHUTDOWN_TIMEOUT
                         * ReactorNetty.SHUTDOWN_TIMEOUT}.
                         * @since 5.2.4
                         * @see #setShutdownQuietPeriod(Duration)
                         */
                        // @ts-ignore
                        setShutdownTimeout(shutdownTimeout: java.time.Duration): void
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
