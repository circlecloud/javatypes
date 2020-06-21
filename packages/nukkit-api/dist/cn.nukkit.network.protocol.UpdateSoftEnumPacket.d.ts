declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class UpdateSoftEnumPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public readonly values: java.lang.String[] | string[]
                    // @ts-ignore
                    public name: java.lang.String | string
                    // @ts-ignore
                    public type: cn.nukkit.network.protocol.UpdateSoftEnumPacket.Type
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
