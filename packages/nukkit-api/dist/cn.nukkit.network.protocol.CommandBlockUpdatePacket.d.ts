declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class CommandBlockUpdatePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isBlock: boolean
                    // @ts-ignore
                    public x: number /*int*/
                    // @ts-ignore
                    public y: number /*int*/
                    // @ts-ignore
                    public z: number /*int*/
                    // @ts-ignore
                    public commandBlockMode: number /*int*/
                    // @ts-ignore
                    public isRedstoneMode: boolean
                    // @ts-ignore
                    public isConditional: boolean
                    // @ts-ignore
                    public minecartEid: number /*long*/
                    // @ts-ignore
                    public command: java.lang.String | string
                    // @ts-ignore
                    public lastOutput: java.lang.String | string
                    // @ts-ignore
                    public name: java.lang.String | string
                    // @ts-ignore
                    public shouldTrackOutput: boolean
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
