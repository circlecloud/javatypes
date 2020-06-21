declare namespace cn {
    namespace nukkit {
        namespace network {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface SourceInterface {
                // @ts-ignore
                putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket): number
                // @ts-ignore
                putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): number
                // @ts-ignore
                putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean, immediate: boolean): number
                // @ts-ignore
                getNetworkLatency(player: cn.nukkit.Player): number /*int*/
                // @ts-ignore
                close(player: cn.nukkit.Player): void
                // @ts-ignore
                close(player: cn.nukkit.Player, reason: java.lang.String | string): void
                // @ts-ignore
                setName(name: java.lang.String | string): void
                // @ts-ignore
                process(): boolean
                // @ts-ignore
                shutdown(): void
                // @ts-ignore
                emergencyShutdown(): void
            }
        }
    }
}
