declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class QueryRegenerateEvent extends cn.nukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(server: cn.nukkit.Server)
                    // @ts-ignore
                    constructor(server: cn.nukkit.Server, timeout: number /*int*/)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getTimeout(): number /*int*/
                    // @ts-ignore
                    public setTimeout(timeout: number /*int*/): void
                    // @ts-ignore
                    public getServerName(): string
                    // @ts-ignore
                    public setServerName(serverName: java.lang.String | string): void
                    // @ts-ignore
                    public canListPlugins(): boolean
                    // @ts-ignore
                    public setListPlugins(listPlugins: boolean): void
                    // @ts-ignore
                    public getPlugins(): cn.nukkit.plugin.Plugin[]
                    // @ts-ignore
                    public setPlugins(plugins: cn.nukkit.plugin.Plugin[]): void
                    // @ts-ignore
                    public getPlayerList(): cn.nukkit.Player[]
                    // @ts-ignore
                    public setPlayerList(players: cn.nukkit.Player[]): void
                    // @ts-ignore
                    public getPlayerCount(): number /*int*/
                    // @ts-ignore
                    public setPlayerCount(count: number /*int*/): void
                    // @ts-ignore
                    public getMaxPlayerCount(): number /*int*/
                    // @ts-ignore
                    public setMaxPlayerCount(count: number /*int*/): void
                    // @ts-ignore
                    public getWorld(): string
                    // @ts-ignore
                    public setWorld(world: java.lang.String | string): void
                    // @ts-ignore
                    public getExtraData(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public setExtraData(extraData: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                    // @ts-ignore
                    public getLongQuery(buffer: number /*byte*/[]): number /*byte*/[]
                    // @ts-ignore
                    public getShortQuery(buffer: number /*byte*/[]): number /*byte*/[]
                }
            }
        }
    }
}
