declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                // @ts-ignore
                class ForgeUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the registered FML channels from the packet.
                     * @param pluginMessage The packet representing FMLProxyPacket.
                     * @return The registered channels.
                     */
                    // @ts-ignore
                    public static readRegisteredChannels(pluginMessage: PluginMessage): Array<java.lang.String | string>
                    /**
                     * Gets the modlist from the packet.
                     * @param pluginMessage The packet representing FMLProxyPacket.
                     * @return The modlist.
                     */
                    // @ts-ignore
                    public static readModList(pluginMessage: PluginMessage): java.util.Map<java.lang.String | string, java.lang.String | string>
                    /**
                     * Get the build number of FML from the packet.
                     * @param modList The modlist, as a Map.
                     * @return The build number, or 0 if it failed.
                     */
                    // @ts-ignore
                    public static getFmlBuildNumber(modList: java.util.Map<java.lang.String | string, java.lang.String | string>): number /*int*/
                }
            }
        }
    }
}
