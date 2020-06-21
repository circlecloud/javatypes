declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * A class that manages {@link ShutdownListener}s and remembers the reason for a shutdown. Both
                 * {@link com.rabbitmq.client.Channel Channel}s and {@link com.rabbitmq.client.Connection
                 * Connection}s have shutdown listeners.
                 */
                // @ts-ignore
                class ShutdownNotifierComponent extends java.lang.Object implements com.rabbitmq.client.ShutdownNotifier {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public addShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                    // @ts-ignore
                    public getCloseReason(): com.rabbitmq.client.ShutdownSignalException
                    // @ts-ignore
                    public notifyListeners(): void
                    // @ts-ignore
                    public removeShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                    // @ts-ignore
                    public isOpen(): boolean
                    /**
                     * Internal: this is the means of registering shutdown.
                     * @param sse the reason for the shutdown
                     * @return <code>true</code> if the component is open; <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public setShutdownCauseIfOpen(sse: com.rabbitmq.client.ShutdownSignalException): boolean
                }
            }
        }
    }
}
