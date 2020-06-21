declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class PlayerSkinPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public uuid: java.util.UUID
                    // @ts-ignore
                    public skin: cn.nukkit.entity.data.Skin
                    // @ts-ignore
                    public newSkinName: java.lang.String | string
                    // @ts-ignore
                    public oldSkinName: java.lang.String | string
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
