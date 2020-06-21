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
                    public setPoolSize(poolSize: java.lang.String | string): void
                    // @ts-ignore
                    public setQueueCapacity(queueCapacity: number /*int*/): void
                    // @ts-ignore
                    public setRejectedExecutionHandler(rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): void
                    // @ts-ignore
                    public setKeepAliveSeconds(keepAliveSeconds: number /*int*/): void
                    // @ts-ignore
                    public setBeanName(beanName: java.lang.String | string): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): TaskExecutor
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
