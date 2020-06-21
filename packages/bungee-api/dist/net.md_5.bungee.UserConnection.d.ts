declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
            class UserConnection extends java.lang.Object {
                // @ts-ignore
                constructor(bungee: ProxyServer, ch: net.md_5.bungee.netty.ChannelWrapper, name: java.lang.String | string, pendingConnection: net.md_5.bungee.connection.InitialHandler)
                // @ts-ignore
                public init(): void
                // @ts-ignore
                public sendPacket(packet: PacketWrapper): void
                // @ts-ignore
                public isActive(): boolean
                // @ts-ignore
                public setDisplayName(name: java.lang.String | string): void
                // @ts-ignore
                public connect(target: ServerInfo): void
                // @ts-ignore
                public connect(target: ServerInfo, reason: ServerConnectEvent.Reason): void
                // @ts-ignore
                public connect(target: ServerInfo, callback: object): void
                // @ts-ignore
                public connect(target: ServerInfo, callback: object, reason: ServerConnectEvent.Reason): void
                // @ts-ignore
                public connectNow(target: ServerInfo): void
                // @ts-ignore
                public connectNow(target: ServerInfo, reason: ServerConnectEvent.Reason): void
                // @ts-ignore
                public updateAndGetNextServer(currentTarget: ServerInfo): ServerInfo
                // @ts-ignore
                public connect(info: ServerInfo, callback: object, retry: boolean): void
                // @ts-ignore
                public connect(info: ServerInfo, callback: object, retry: boolean, reason: ServerConnectEvent.Reason): void
                // @ts-ignore
                public connect(request: ServerConnectRequest): void
                // @ts-ignore
                public disconnect(reason: java.lang.String | string): void
                // @ts-ignore
                public disconnect(...reason: BaseComponent[]): void
                // @ts-ignore
                public disconnect(reason: BaseComponent): void
                // @ts-ignore
                public disconnect0(...reason: BaseComponent[]): void
                // @ts-ignore
                public chat(message: java.lang.String | string): void
                // @ts-ignore
                public sendMessage(message: java.lang.String | string): void
                // @ts-ignore
                public sendMessages(...messages: java.lang.String[] | string[]): void
                // @ts-ignore
                public sendMessage(...message: BaseComponent[]): void
                // @ts-ignore
                public sendMessage(message: BaseComponent): void
                // @ts-ignore
                public sendMessage(position: ChatMessageType, ...message: BaseComponent[]): void
                // @ts-ignore
                public sendMessage(position: ChatMessageType, message: BaseComponent): void
                // @ts-ignore
                public sendData(channel: java.lang.String | string, data: number /*byte*/[]): void
                // @ts-ignore
                public getAddress(): java.net.InetSocketAddress
                // @ts-ignore
                public getGroups(): Array<java.lang.String | string>
                // @ts-ignore
                public addGroups(...groups: java.lang.String[] | string[]): void
                // @ts-ignore
                public removeGroups(...groups: java.lang.String[] | string[]): void
                // @ts-ignore
                public hasPermission(permission: java.lang.String | string): boolean
                // @ts-ignore
                public setPermission(permission: java.lang.String | string, value: boolean): void
                // @ts-ignore
                public getPermissions(): Array<java.lang.String | string>
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public unsafe(): Unsafe
                // @ts-ignore
                public getUUID(): string
                // @ts-ignore
                public getUniqueId(): java.util.UUID
                // @ts-ignore
                public setSettings(settings: ClientSettings): void
                // @ts-ignore
                public getLocale(): java.util.Locale
                // @ts-ignore
                public getViewDistance(): number /*byte*/
                // @ts-ignore
                public getChatMode(): ProxiedPlayer.ChatMode
                // @ts-ignore
                public hasChatColors(): boolean
                // @ts-ignore
                public getSkinParts(): SkinConfiguration
                // @ts-ignore
                public getMainHand(): ProxiedPlayer.MainHand
                // @ts-ignore
                public isForgeUser(): boolean
                // @ts-ignore
                public getModList(): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public setTabHeader(header: BaseComponent, footer: BaseComponent): void
                // @ts-ignore
                public setTabHeader(header: BaseComponent[], footer: BaseComponent[]): void
                // @ts-ignore
                public resetTabHeader(): void
                // @ts-ignore
                public sendTitle(title: Title): void
                // @ts-ignore
                public getExtraDataInHandshake(): string
                // @ts-ignore
                public setCompressionThreshold(compressionThreshold: number /*int*/): void
                // @ts-ignore
                public isConnected(): boolean
                // @ts-ignore
                public getScoreboard(): Scoreboard
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getPendingConnection(): net.md_5.bungee.connection.InitialHandler
                // @ts-ignore
                public getServer(): net.md_5.bungee.ServerConnection
                // @ts-ignore
                public setServer(server: net.md_5.bungee.ServerConnection): void
                // @ts-ignore
                public getDimension(): number /*int*/
                // @ts-ignore
                public setDimension(dimension: number /*int*/): void
                // @ts-ignore
                public isDimensionChange(): boolean
                // @ts-ignore
                public setDimensionChange(dimensionChange: boolean): void
                // @ts-ignore
                public getPendingConnects(): Array<ServerInfo>
                // @ts-ignore
                public getSentPingTime(): number /*long*/
                // @ts-ignore
                public setSentPingTime(sentPingTime: number /*long*/): void
                // @ts-ignore
                public getPing(): number /*int*/
                // @ts-ignore
                public setPing(ping: number /*int*/): void
                // @ts-ignore
                public getReconnectServer(): ServerInfo
                // @ts-ignore
                public setReconnectServer(reconnectServer: ServerInfo): void
                // @ts-ignore
                public getTabListHandler(): net.md_5.bungee.tab.TabList
                // @ts-ignore
                public getGamemode(): number /*int*/
                // @ts-ignore
                public setGamemode(gamemode: number /*int*/): void
                // @ts-ignore
                public getCompressionThreshold(): number /*int*/
                // @ts-ignore
                public setServerJoinQueue(serverJoinQueue: java.util.Queue<java.lang.String | string>): void
                // @ts-ignore
                public getClientEntityId(): number /*int*/
                // @ts-ignore
                public setClientEntityId(clientEntityId: number /*int*/): void
                // @ts-ignore
                public getServerEntityId(): number /*int*/
                // @ts-ignore
                public setServerEntityId(serverEntityId: number /*int*/): void
                // @ts-ignore
                public getSettings(): ClientSettings
                // @ts-ignore
                public getServerSentScoreboard(): Scoreboard
                // @ts-ignore
                public getSentBossBars(): Array<java.util.UUID>
                // @ts-ignore
                public getDisplayName(): string
                // @ts-ignore
                public getEntityRewrite(): net.md_5.bungee.entitymap.EntityMap
                // @ts-ignore
                public getForgeClientHandler(): net.md_5.bungee.forge.ForgeClientHandler
                // @ts-ignore
                public setForgeClientHandler(forgeClientHandler: net.md_5.bungee.forge.ForgeClientHandler): void
                // @ts-ignore
                public getForgeServerHandler(): net.md_5.bungee.forge.ForgeServerHandler
                // @ts-ignore
                public setForgeServerHandler(forgeServerHandler: net.md_5.bungee.forge.ForgeServerHandler): void
            }
        }
    }
}
