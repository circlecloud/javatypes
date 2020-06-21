declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                /**
                 * Represents the standard list data returned by opening a server in the
                 * Minecraft client server list, or hitting it with a packet 0xFE.
                 */
                // @ts-ignore
                class ServerPing extends java.lang.Object {
                    // @ts-ignore
                    constructor(version: net.md_5.bungee.api.ServerPing.Protocol, players: net.md_5.bungee.api.ServerPing.Players, description: java.lang.String | string, favicon: java.lang.String | string)
                    // @ts-ignore
                    constructor(version: net.md_5.bungee.api.ServerPing.Protocol, players: net.md_5.bungee.api.ServerPing.Players, description: java.lang.String | string, favicon: net.md_5.bungee.api.Favicon)
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(version: net.md_5.bungee.api.ServerPing.Protocol, players: net.md_5.bungee.api.ServerPing.Players, description: BaseComponent, favicon: net.md_5.bungee.api.Favicon)
                    // @ts-ignore
                    public getFavicon(): string
                    // @ts-ignore
                    public getFaviconObject(): net.md_5.bungee.api.Favicon
                    // @ts-ignore
                    public setFavicon(favicon: java.lang.String | string): void
                    // @ts-ignore
                    public setFavicon(favicon: net.md_5.bungee.api.Favicon): void
                    // @ts-ignore
                    public setDescription(description: java.lang.String | string): void
                    // @ts-ignore
                    public getDescription(): string
                    // @ts-ignore
                    public setDescriptionComponent(description: BaseComponent): void
                    // @ts-ignore
                    public getDescriptionComponent(): BaseComponent
                    // @ts-ignore
                    public getVersion(): net.md_5.bungee.api.ServerPing.Protocol
                    // @ts-ignore
                    public getPlayers(): net.md_5.bungee.api.ServerPing.Players
                    // @ts-ignore
                    public getModinfo(): net.md_5.bungee.api.ServerPing.ModInfo
                    // @ts-ignore
                    public setVersion(version: net.md_5.bungee.api.ServerPing.Protocol): void
                    // @ts-ignore
                    public setPlayers(players: net.md_5.bungee.api.ServerPing.Players): void
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    canEqual(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
