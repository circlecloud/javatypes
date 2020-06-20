declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * {@link FactoryBean} for creating {@link ThreadPoolTaskExecutor} instances,
                 * primarily used behind the XML task namespace.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class TaskExecutorFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setPoolSize(poolSize: string): void
                    // @ts-ignore
                    setQueueCapacity(queueCapacity: number /*int*/): void
                    // @ts-ignore
                    setRejectedExecutionHandler(rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): void
                    // @ts-ignore
                    setKeepAliveSeconds(keepAliveSeconds: number /*int*/): void
                    // @ts-ignore
                    setBeanName(beanName: string): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    getObject(): TaskExecutor
                    // @ts-ignore
                    getObjectType(): java.lang.Class<? extends TaskExecutor>
                    // @ts-ignore
                    isSingleton(): boolean
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
