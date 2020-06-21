declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace AnimatePacket {
                    // @ts-ignore
                    class Action extends java.lang.Enum<cn.nukkit.network.protocol.AnimatePacket.Action> {
                        // @ts-ignore
                        readonly NO_ACTION: cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        readonly SWING_ARM: cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        readonly WAKE_UP: cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        readonly CRITICAL_HIT: cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        readonly MAGIC_CRITICAL_HIT: cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        readonly ROW_RIGHT: cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        readonly ROW_LEFT: cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        values(): cn.nukkit.network.protocol.AnimatePacket.Action[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): cn.nukkit.network.protocol.AnimatePacket.Action
                        // @ts-ignore
                        getId(): number /*int*/
                        // @ts-ignore
                        fromId(id: number /*int*/): cn.nukkit.network.protocol.AnimatePacket.Action
                    }
                }
            }
        }
    }
}
