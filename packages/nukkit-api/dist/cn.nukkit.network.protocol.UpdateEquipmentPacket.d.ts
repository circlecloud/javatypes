declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class UpdateEquipmentPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public windowId: number /*int*/
                    // @ts-ignore
                    public windowType: number /*int*/
                    // @ts-ignore
                    public unknown: number /*int*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public namedtag: number /*byte*/[]
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
