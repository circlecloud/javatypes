declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class LevelEventGenericPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public eventId: number /*int*/
                    // @ts-ignore
                    public tag: cn.nukkit.nbt.tag.CompoundTag
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                }
            }
        }
    }
}
