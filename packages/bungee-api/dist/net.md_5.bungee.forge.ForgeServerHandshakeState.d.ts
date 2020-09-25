declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                /**
                 * Handshake sequence manager for the Bungee - Forge Server (Downstream/Server
                 * Connector) link. Modelled after the Forge implementation.
                 */
                // @ts-ignore
                class ForgeServerHandshakeState extends java.lang.Enum<net.md_5.bungee.forge.ForgeServerHandshakeState> implements net.md_5.bungee.forge.IForgeServerPacketHandler<net.md_5.bungee.forge.ForgeServerHandshakeState> {
                    /**
                     * Start the handshake.
                     */
                    // @ts-ignore
                    public static readonly START: net.md_5.bungee.forge.ForgeServerHandshakeState
                    // @ts-ignore
                    public static readonly HELLO: net.md_5.bungee.forge.ForgeServerHandshakeState
                    // @ts-ignore
                    public static readonly WAITINGCACK: net.md_5.bungee.forge.ForgeServerHandshakeState
                    // @ts-ignore
                    public static readonly COMPLETE: net.md_5.bungee.forge.ForgeServerHandshakeState
                    /**
                     * Handshake has been completed. Do not respond to any more handshake
                     * packets.
                     */
                    // @ts-ignore
                    public static readonly DONE: net.md_5.bungee.forge.ForgeServerHandshakeState
                    // @ts-ignore
                    public static values(): net.md_5.bungee.forge.ForgeServerHandshakeState[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): net.md_5.bungee.forge.ForgeServerHandshakeState
                }
            }
        }
    }
}
