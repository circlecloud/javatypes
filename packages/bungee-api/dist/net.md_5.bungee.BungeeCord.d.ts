declare namespace net {
    namespace md_5 {
        namespace bungee {
            /**
             * Main BungeeCord proxy class.
             */
            // @ts-ignore
            class BungeeCord extends ProxyServer {
                // @ts-ignore
                constructor()
                /**
                 * Current operation state.
                 */
                // @ts-ignore
                public isRunning: boolean
                /**
                 * Configuration.
                 */
                // @ts-ignore
                public readonly config: net.md_5.bungee.conf.Configuration
                // @ts-ignore
                public eventLoops: EventLoopGroup
                /**
                 * Plugin manager.
                 */
                // @ts-ignore
                public readonly pluginManager: PluginManager
                // @ts-ignore
                public readonly gson: Gson
                // @ts-ignore
                public static getInstance(): net.md_5.bungee.BungeeCord
                /**
                 * Start this proxy instance by loading the configuration, plugins and
                 * starting the connect thread.
                 * @throws Exception any critical errors encountered
                 */
                // @ts-ignore
                public start(): void
                // @ts-ignore
                public startListeners(): void
                // @ts-ignore
                public stopListeners(): void
                // @ts-ignore
                public stop(): void
                // @ts-ignore
                public stop(reason: java.lang.String | string): void
                /**
                 * Broadcasts a packet to all clients that is connected to this instance.
                 * @param packet the packet to send
                 */
                // @ts-ignore
                public broadcast(packet: DefinedPacket): void
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getVersion(): string
                // @ts-ignore
                public reloadMessages(): void
                // @ts-ignore
                public getTranslation(name: java.lang.String | string, ...args: java.lang.Object[] | any[]): string
                // @ts-ignore
                public getPlayers(): Array<ProxiedPlayer>
                // @ts-ignore
                public getOnlineCount(): number /*int*/
                // @ts-ignore
                public getPlayer(name: java.lang.String | string): ProxiedPlayer
                // @ts-ignore
                public getPlayerByOfflineUUID(name: java.util.UUID): net.md_5.bungee.UserConnection
                // @ts-ignore
                public getPlayer(uuid: java.util.UUID): ProxiedPlayer
                // @ts-ignore
                public getServers(): java.util.Map<java.lang.String | string, ServerInfo>
                // @ts-ignore
                public getServerInfo(name: java.lang.String | string): ServerInfo
                // @ts-ignore
                public registerChannel(channel: java.lang.String | string): void
                // @ts-ignore
                public unregisterChannel(channel: java.lang.String | string): void
                // @ts-ignore
                public getChannels(): Array<java.lang.String | string>
                // @ts-ignore
                public registerChannels(protocolVersion: number /*int*/): PluginMessage
                // @ts-ignore
                public getProtocolVersion(): number /*int*/
                // @ts-ignore
                public getGameVersion(): string
                // @ts-ignore
                public constructServerInfo(name: java.lang.String | string, address: java.net.InetSocketAddress, motd: java.lang.String | string, restricted: boolean): ServerInfo
                // @ts-ignore
                public getConsole(): CommandSender
                // @ts-ignore
                public broadcast(...message: BaseComponent[]): void
                // @ts-ignore
                public broadcast(message: BaseComponent): void
                // @ts-ignore
                public addConnection(con: net.md_5.bungee.UserConnection): void
                // @ts-ignore
                public removeConnection(con: net.md_5.bungee.UserConnection): void
                // @ts-ignore
                public getDisabledCommands(): Array<java.lang.String | string>
                // @ts-ignore
                public matchPlayer(partialName: java.lang.String | string): Array<ProxiedPlayer>
                // @ts-ignore
                public createTitle(): Title
                /**
                 * Configuration.
                 */
                // @ts-ignore
                public getConfig(): net.md_5.bungee.conf.Configuration
                /**
                 * Plugin manager.
                 */
                // @ts-ignore
                public getPluginManager(): PluginManager
                // @ts-ignore
                public getReconnectHandler(): ReconnectHandler
                // @ts-ignore
                public setReconnectHandler(reconnectHandler: ReconnectHandler): void
                // @ts-ignore
                public getConfigurationAdapter(): ConfigurationAdapter
                // @ts-ignore
                public setConfigurationAdapter(configurationAdapter: ConfigurationAdapter): void
                // @ts-ignore
                public getPluginsFolder(): java.io.File
                // @ts-ignore
                public getScheduler(): net.md_5.bungee.scheduler.BungeeScheduler
                // @ts-ignore
                public getConsoleReader(): ConsoleReader
                // @ts-ignore
                public getLogger(): java.util.logging.Logger
                // @ts-ignore
                public getConnectionThrottle(): net.md_5.bungee.ConnectionThrottle
            }
        }
    }
}
