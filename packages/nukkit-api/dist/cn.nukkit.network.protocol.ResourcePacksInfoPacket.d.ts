declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class ResourcePacksInfoPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public mustAccept: boolean
                    // @ts-ignore
                    public unknownBool: boolean
                    // @ts-ignore
                    public behaviourPackEntries: cn.nukkit.resourcepacks.ResourcePack[]
                    // @ts-ignore
                    public resourcePackEntries: cn.nukkit.resourcepacks.ResourcePack[]
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public pid(): number /*byte*/
                }
            }
        }
    }
}
