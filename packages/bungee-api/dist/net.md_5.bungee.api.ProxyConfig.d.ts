declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                /**
                 * Core configuration adaptor for the proxy api.
                 * @deprecated This class is subject to rapid change between releases
                 */
                // @ts-ignore
                interface ProxyConfig {
                    /**
                     * Time before users are disconnected due to no network activity.
                     * @return timeout
                     */
                    // @ts-ignore
                    getTimeout(): number /*int*/
                    /**
                     * UUID used for metrics.
                     * @return uuid
                     */
                    // @ts-ignore
                    getUuid(): string
                    /**
                     * Set of all listeners.
                     * @return listeners
                     */
                    // @ts-ignore
                    getListeners(): Array<net.md_5.bungee.api.config.ListenerInfo>
                    /**
                     * Set of all servers.
                     * @return servers
                     */
                    // @ts-ignore
                    getServers(): java.util.Map<java.lang.String | string, net.md_5.bungee.api.config.ServerInfo>
                    /**
                     * Does the server authenticate with Mojang.
                     * @return online mode
                     */
                    // @ts-ignore
                    isOnlineMode(): boolean
                    /**
                     * Whether proxy commands are logged to the proxy log.
                     * @return log commands
                     */
                    // @ts-ignore
                    isLogCommands(): boolean
                    /**
                     * Returns the player max.
                     * @return player limit
                     */
                    // @ts-ignore
                    getPlayerLimit(): number /*int*/
                    /**
                     * A collection of disabled commands.
                     * @return disabled commands
                     */
                    // @ts-ignore
                    getDisabledCommands(): Array<java.lang.String | string>
                    /**
                     * The connection throttle delay.
                     * @return throttle
                     */
                    // @ts-ignore
                    getThrottle(): number /*int*/
                    /**
                     * Whether the proxy will parse IPs with spigot or not
                     * @return ip forward
                     */
                    // @ts-ignore
                    isIpForward(): boolean
                    /**
                     * The encoded favicon.
                     * @return favicon
                     * @deprecated Use #getFaviconObject instead.
                     */
                    // @ts-ignore
                    getFavicon(): string
                    /**
                     * The favicon used for the server ping list.
                     * @return favicon
                     */
                    // @ts-ignore
                    getFaviconObject(): net.md_5.bungee.api.Favicon
                }
            }
        }
    }
}
