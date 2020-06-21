declare namespace cn {
    namespace nukkit {
        namespace network {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class RakNetInterface extends java.lang.Object implements cn.nukkit.raknet.server.ServerInstance, cn.nukkit.network.AdvancedSourceInterface {
                // @ts-ignore
                constructor(server: cn.nukkit.Server)
                // @ts-ignore
                public setNetwork(network: cn.nukkit.network.Network): void
                // @ts-ignore
                public process(): boolean
                // @ts-ignore
                public closeSession(identifier: java.lang.String | string, reason: java.lang.String | string): void
                // @ts-ignore
                public getNetworkLatency(player: cn.nukkit.Player): number /*int*/
                // @ts-ignore
                public close(player: cn.nukkit.Player): void
                // @ts-ignore
                public close(player: cn.nukkit.Player, reason: java.lang.String | string): void
                // @ts-ignore
                public shutdown(): void
                // @ts-ignore
                public emergencyShutdown(): void
                // @ts-ignore
                public openSession(identifier: java.lang.String | string, address: java.lang.String | string, port: number /*int*/, clientID: number /*long*/): void
                // @ts-ignore
                public handleEncapsulated(identifier: java.lang.String | string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number /*int*/): void
                // @ts-ignore
                public blockAddress(address: java.lang.String | string): void
                // @ts-ignore
                public blockAddress(address: java.lang.String | string, timeout: number /*int*/): void
                // @ts-ignore
                public unblockAddress(address: java.lang.String | string): void
                // @ts-ignore
                public handleRaw(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
                // @ts-ignore
                public sendRawPacket(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
                // @ts-ignore
                public notifyACK(identifier: java.lang.String | string, identifierACK: number /*int*/): void
                // @ts-ignore
                public setName(name: java.lang.String | string): void
                // @ts-ignore
                public setPortCheck(value: boolean): void
                // @ts-ignore
                public handleOption(name: java.lang.String | string, value: java.lang.String | string): void
                // @ts-ignore
                public putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket): number
                // @ts-ignore
                public putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): number
                // @ts-ignore
                public putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean, immediate: boolean): number
            }
        }
    }
}
