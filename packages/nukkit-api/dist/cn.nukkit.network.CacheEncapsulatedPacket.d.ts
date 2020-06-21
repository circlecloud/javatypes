declare namespace cn {
    namespace nukkit {
        namespace network {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class CacheEncapsulatedPacket extends cn.nukkit.raknet.protocol.EncapsulatedPacket {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public internalData: number /*byte*/[]
                // @ts-ignore
                public toBinary(): number /*byte*/[]
                // @ts-ignore
                public toBinary(internal: boolean): number /*byte*/[]
            }
        }
    }
}
