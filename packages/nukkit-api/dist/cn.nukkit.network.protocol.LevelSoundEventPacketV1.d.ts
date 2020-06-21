declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class LevelSoundEventPacketV1 extends cn.nukkit.network.protocol.LevelSoundEventPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public sound: number /*int*/
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public extraData: number /*int*/
                    // @ts-ignore
                    public pitch: number /*int*/
                    // @ts-ignore
                    public isBabyMob: boolean
                    // @ts-ignore
                    public isGlobal: boolean
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
