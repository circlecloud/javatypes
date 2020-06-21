declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                // @ts-ignore
                class ForgeConstants extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly FORGE_REGISTER: java.lang.String | string
                    // @ts-ignore
                    public static readonly FML_TAG: java.lang.String | string
                    // @ts-ignore
                    public static readonly FML_HANDSHAKE_TAG: java.lang.String | string
                    // @ts-ignore
                    public static readonly FML_REGISTER: java.lang.String | string
                    /**
                     * The FML 1.8 handshake token.
                     */
                    // @ts-ignore
                    public static readonly FML_HANDSHAKE_TOKEN: java.lang.String | string
                    // @ts-ignore
                    public static readonly FML_RESET_HANDSHAKE: PluginMessage
                    // @ts-ignore
                    public static readonly FML_ACK: PluginMessage
                    // @ts-ignore
                    public static readonly FML_START_CLIENT_HANDSHAKE: PluginMessage
                    // @ts-ignore
                    public static readonly FML_START_SERVER_HANDSHAKE: PluginMessage
                    // @ts-ignore
                    public static readonly FML_EMPTY_MOD_LIST: PluginMessage
                    /**
                     * The minimum Forge version required to use Forge features. TODO: When the
                     * FML branch gets pulled, update this number to be the build that includes
                     * the change.
                     */
                    // @ts-ignore
                    public static readonly FML_MIN_BUILD_VERSION: number /*int*/
                    /**
                     * Regex to use to scrape the version information from a FML handshake.
                     */
                    // @ts-ignore
                    public static readonly FML_HANDSHAKE_VERSION_REGEX: java.util.regex.Pattern
                }
            }
        }
    }
}
