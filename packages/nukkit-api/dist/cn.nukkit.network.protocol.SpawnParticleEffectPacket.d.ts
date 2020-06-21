declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class SpawnParticleEffectPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public dimensionId: number /*int*/
                    // @ts-ignore
                    public uniqueEntityId: number /*long*/
                    // @ts-ignore
                    public position: cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public identifier: java.lang.String | string
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
