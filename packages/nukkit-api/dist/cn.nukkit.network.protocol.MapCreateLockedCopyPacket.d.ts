declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class MapCreateLockedCopyPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public originalMapId: number /*long*/
                    // @ts-ignore
                    public newMapId: number /*long*/
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
