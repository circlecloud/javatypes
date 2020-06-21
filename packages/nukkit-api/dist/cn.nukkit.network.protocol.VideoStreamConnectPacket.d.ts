declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class VideoStreamConnectPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly ACTION_OPEN: number /*byte*/
                    // @ts-ignore
                    public static readonly ACTION_CLOSE: number /*byte*/
                    // @ts-ignore
                    public address: java.lang.String | string
                    // @ts-ignore
                    public screenshotFrequency: number /*float*/
                    // @ts-ignore
                    public action: number /*byte*/
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
