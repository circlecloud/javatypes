declare namespace net {
    namespace md_5 {
        namespace bungee {
            // @ts-ignore
            class BungeeServerInfo extends java.lang.Object {
                // @ts-ignore
                constructor(name: java.lang.String | string, address: java.net.InetSocketAddress, motd: java.lang.String | string, restricted: boolean)
                // @ts-ignore
                public addPlayer(player: ProxiedPlayer): void
                // @ts-ignore
                public removePlayer(player: ProxiedPlayer): void
                // @ts-ignore
                public getPlayers(): Array<ProxiedPlayer>
                // @ts-ignore
                public getPermission(): string
                // @ts-ignore
                public canAccess(player: CommandSender): boolean
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public sendData(channel: java.lang.String | string, data: number /*byte*/[]): void
                // @ts-ignore
                public sendData(channel: java.lang.String | string, data: number /*byte*/[], queue: boolean): boolean
                // @ts-ignore
                public ping(callback: object): void
                // @ts-ignore
                public ping(callback: object, protocolVersion: number /*int*/): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getAddress(): java.net.InetSocketAddress
                // @ts-ignore
                public getMotd(): string
                // @ts-ignore
                public isRestricted(): boolean
                // @ts-ignore
                public getPacketQueue(): java.util.Queue<DefinedPacket>
            }
        }
    }
}
