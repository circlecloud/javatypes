declare namespace cn {
    namespace nukkit {
        namespace network {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface AdvancedSourceInterface extends cn.nukkit.network.SourceInterface {
                // @ts-ignore
                blockAddress(address: java.lang.String | string): void
                // @ts-ignore
                blockAddress(address: java.lang.String | string, timeout: number /*int*/): void
                // @ts-ignore
                unblockAddress(address: java.lang.String | string): void
                // @ts-ignore
                setNetwork(network: cn.nukkit.network.Network): void
                // @ts-ignore
                sendRawPacket(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
            }
        }
    }
}
