declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                class ConsumerWorkService extends java.lang.Object {
                    // @ts-ignore
                    constructor(executor: java.util.concurrent.ExecutorService, threadFactory: java.util.concurrent.ThreadFactory, queueingTimeout: number /*int*/, shutdownTimeout: number /*int*/)
                    // @ts-ignore
                    constructor(executor: java.util.concurrent.ExecutorService, threadFactory: java.util.concurrent.ThreadFactory, shutdownTimeout: number /*int*/)
                    // @ts-ignore
                    public getShutdownTimeout(): number /*int*/
                    /**
                     * Stop executing all consumer work
                     */
                    // @ts-ignore
                    public shutdown(): void
                    /**
                     * Stop executing all consumer work for a particular channel
                     * @param channel to stop consumer work for
                     */
                    // @ts-ignore
                    public stopWork(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    public registerKey(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    public setUnlimited(channel: com.rabbitmq.client.Channel, unlimited: boolean): void
                    // @ts-ignore
                    public addWork(channel: com.rabbitmq.client.Channel, runnable: java.lang.Runnable): void
                    /**
                     * @return true if executor used by this work service is managed
                     *               by it and wasn't provided by the user
                     */
                    // @ts-ignore
                    public usesPrivateExecutor(): boolean
                }
            }
        }
    }
}
