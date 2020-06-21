declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace conf {
                /**
                 * Core configuration for the proxy.
                 */
                // @ts-ignore
                class Configuration extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public load(): void
                    // @ts-ignore
                    public getFavicon(): string
                    // @ts-ignore
                    public getFaviconObject(): Favicon
                    /**
                     * Time before users are disconnected due to no network activity.
                     */
                    // @ts-ignore
                    public getTimeout(): number /*int*/
                    /**
                     * UUID used for metrics.
                     */
                    // @ts-ignore
                    public getUuid(): string
                    /**
                     * Set of all listeners.
                     */
                    // @ts-ignore
                    public getListeners(): Array<ListenerInfo>
                    /**
                     * Set of all servers.
                     */
                    // @ts-ignore
                    public getServers(): object
                    /**
                     * Should we check minecraft.net auth.
                     */
                    // @ts-ignore
                    public isOnlineMode(): boolean
                    /**
                     * Whether we log proxy commands to the proxy log
                     */
                    // @ts-ignore
                    public isLogCommands(): boolean
                    // @ts-ignore
                    public isLogPings(): boolean
                    // @ts-ignore
                    public getPlayerLimit(): number /*int*/
                    // @ts-ignore
                    public getDisabledCommands(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getThrottle(): number /*int*/
                    // @ts-ignore
                    public getThrottleLimit(): number /*int*/
                    // @ts-ignore
                    public isIpForward(): boolean
                    // @ts-ignore
                    public getCompressionThreshold(): number /*int*/
                    // @ts-ignore
                    public isPreventProxyConnections(): boolean
                    // @ts-ignore
                    public isForgeSupport(): boolean
                }
            }
        }
    }
}
