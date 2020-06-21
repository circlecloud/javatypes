declare namespace cn {
    namespace nukkit {
        namespace network {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class Network extends java.lang.Object {
                // @ts-ignore
                constructor(server: cn.nukkit.Server)
                // @ts-ignore
                public static readonly CHANNEL_NONE: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_PRIORITY: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_WORLD_CHUNKS: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_MOVEMENT: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_BLOCKS: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_WORLD_EVENTS: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_ENTITY_SPAWNING: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_TEXT: number /*byte*/
                // @ts-ignore
                public static readonly CHANNEL_END: number /*byte*/
                // @ts-ignore
                public addStatistics(upload: number /*double*/, download: number /*double*/): void
                // @ts-ignore
                public getUpload(): number /*double*/
                // @ts-ignore
                public getDownload(): number /*double*/
                // @ts-ignore
                public resetStatistics(): void
                // @ts-ignore
                public getInterfaces(): Array<cn.nukkit.network.SourceInterface>
                // @ts-ignore
                public processInterfaces(): void
                // @ts-ignore
                public registerInterface(interfaz: cn.nukkit.network.SourceInterface): void
                // @ts-ignore
                public unregisterInterface(interfaz: cn.nukkit.network.SourceInterface): void
                // @ts-ignore
                public setName(name: java.lang.String | string): void
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public getSubName(): string
                // @ts-ignore
                public setSubName(subName: java.lang.String | string): void
                // @ts-ignore
                public updateName(): void
                // @ts-ignore
                public registerPacket(id: number /*byte*/, clazz: java.lang.Class<any>): void
                // @ts-ignore
                public getServer(): cn.nukkit.Server
                // @ts-ignore
                public processBatch(packet: cn.nukkit.network.protocol.BatchPacket, player: cn.nukkit.Player): void
                /**
                 * Process packets obtained from batch packets
                 * Required to perform additional analyses and filter unnecessary packets
                 * @param packets
                 */
                // @ts-ignore
                public processPackets(player: cn.nukkit.Player, packets: java.util.List<cn.nukkit.network.protocol.DataPacket> | Array<cn.nukkit.network.protocol.DataPacket>): void
                // @ts-ignore
                public getPacket(id: number /*byte*/): cn.nukkit.network.protocol.DataPacket
                // @ts-ignore
                public sendPacket(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
                // @ts-ignore
                public blockAddress(address: java.lang.String | string): void
                // @ts-ignore
                public blockAddress(address: java.lang.String | string, timeout: number /*int*/): void
                // @ts-ignore
                public unblockAddress(address: java.lang.String | string): void
            }
        }
    }
}
