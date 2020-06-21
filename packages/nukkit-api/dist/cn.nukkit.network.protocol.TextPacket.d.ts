declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * Created on 15-10-13.
                 */
                // @ts-ignore
                class TextPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_RAW: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_CHAT: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_TRANSLATION: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_POPUP: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_JUKEBOX_POPUP: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_TIP: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_SYSTEM: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_WHISPER: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_ANNOUNCEMENT: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_JSON: number /*byte*/
                    // @ts-ignore
                    public type: number /*byte*/
                    // @ts-ignore
                    public source: java.lang.String | string
                    // @ts-ignore
                    public message: java.lang.String | string
                    // @ts-ignore
                    public parameters: java.lang.String[] | string[]
                    // @ts-ignore
                    public isLocalized: boolean
                    // @ts-ignore
                    public xboxUserId: java.lang.String | string
                    // @ts-ignore
                    public platformChatId: java.lang.String | string
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
