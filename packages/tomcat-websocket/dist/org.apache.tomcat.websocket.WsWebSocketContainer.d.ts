declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class WsWebSocketContainer extends java.lang.Object implements org.apache.tomcat.websocket.BackgroundProcess {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    setInstanceManager(instanceManager: InstanceManager): void
                    // @ts-ignore
                    public connectToServer(pojo: java.lang.Object | any, path: java.net.URI): Session
                    // @ts-ignore
                    public connectToServer(annotatedEndpointClass: java.lang.Class<any>, path: java.net.URI): Session
                    // @ts-ignore
                    public connectToServer(clazz: java.lang.Class<any>, clientEndpointConfiguration: ClientEndpointConfig, path: java.net.URI): Session
                    // @ts-ignore
                    public connectToServer(endpoint: Endpoint, clientEndpointConfiguration: ClientEndpointConfig, path: java.net.URI): Session
                    // @ts-ignore
                    registerSession(key: java.lang.Object | any, wsSession: org.apache.tomcat.websocket.WsSession): void
                    // @ts-ignore
                    unregisterSession(key: java.lang.Object | any, wsSession: org.apache.tomcat.websocket.WsSession): void
                    // @ts-ignore
                    public getDefaultMaxSessionIdleTimeout(): number /*long*/
                    // @ts-ignore
                    public setDefaultMaxSessionIdleTimeout(timeout: number /*long*/): void
                    // @ts-ignore
                    public getDefaultMaxBinaryMessageBufferSize(): number /*int*/
                    // @ts-ignore
                    public setDefaultMaxBinaryMessageBufferSize(max: number /*int*/): void
                    // @ts-ignore
                    public getDefaultMaxTextMessageBufferSize(): number /*int*/
                    // @ts-ignore
                    public setDefaultMaxTextMessageBufferSize(max: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     * Currently, this implementation does not support any extensions.
                     */
                    // @ts-ignore
                    public getInstalledExtensions(): Array<Extension>
                    /**
                     * {@inheritDoc}
                     * The default value for this implementation is -1.
                     */
                    // @ts-ignore
                    public getDefaultAsyncSendTimeout(): number /*long*/
                    /**
                     * {@inheritDoc}
                     * The default value for this implementation is -1.
                     */
                    // @ts-ignore
                    public setAsyncSendTimeout(timeout: number /*long*/): void
                    /**
                     * Cleans up the resources still in use by WebSocket sessions created from
                     * this container. This includes closing sessions and cancelling
                     * {@link Future}s associated with blocking read/writes.
                     */
                    // @ts-ignore
                    public destroy(): void
                    // @ts-ignore
                    public backgroundProcess(): void
                    // @ts-ignore
                    public setProcessPeriod(period: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     * The default value is 10 which means session expirations are processed
                     * every 10 seconds.
                     */
                    // @ts-ignore
                    public getProcessPeriod(): number /*int*/
                }
            }
        }
    }
}
