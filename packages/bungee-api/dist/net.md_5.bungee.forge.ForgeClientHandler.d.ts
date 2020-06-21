declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                /**
                 * Handles the Forge Client data and handshake procedure.
                 */
                // @ts-ignore
                class ForgeClientHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor(con: net.md_5.bungee.UserConnection)
                    /**
                     * Handles the Forge packet.
                     * @param message The Forge Handshake packet to handle.
                     * @throws IllegalArgumentException if invalid packet received
                     */
                    // @ts-ignore
                    public handle(message: PluginMessage): void
                    /**
                     * Receives a {@link PluginMessage} from ForgeServer to pass to Client.
                     * @param message The message to being received.
                     * @throws IllegalArgumentException if invalid packet received
                     */
                    // @ts-ignore
                    public receive(message: PluginMessage): void
                    /**
                     * Resets the client handshake state to HELLO, and, if we know the handshake
                     * has been completed before, send the reset packet.
                     */
                    // @ts-ignore
                    public resetHandshake(): void
                    /**
                     * Sends the server mod list to the client, or stores it for sending later.
                     * @param modList The {#link PluginMessage} to send to the client containing
                     *  the mod list.
                     * @throws IllegalArgumentException Thrown if the {#link PluginMessage} was
                     *  not as expected.
                     */
                    // @ts-ignore
                    public setServerModList(modList: PluginMessage): void
                    /**
                     * Sends the server ID list to the client, or stores it for sending later.
                     * @param idList The {#link PluginMessage} to send to the client containing
                     *  the ID list.
                     * @throws IllegalArgumentException Thrown if the {#link PluginMessage} was
                     *  not as expected.
                     */
                    // @ts-ignore
                    public setServerIdList(idList: PluginMessage): void
                    /**
                     * Returns whether the handshake is complete.
                     * @return <code>true</code> if the handshake has been completed.
                     */
                    // @ts-ignore
                    public isHandshakeComplete(): boolean
                    // @ts-ignore
                    public setHandshakeComplete(): void
                    /**
                     * Returns whether we know if the user is a forge user. In FML 1.8, a "FML"
                     * token is included in the initial handshake. We can use that to determine
                     * if the user is a Forge 1.8 user.
                     * @return <code>true</code> if the user is a forge user.
                     */
                    // @ts-ignore
                    public isForgeUser(): boolean
                    /**
                     * The users' mod list.
                     */
                    // @ts-ignore
                    public getClientModList(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    /**
                     * Gets or sets a value indicating whether the '\00FML\00' token was found
                     * in the handshake.
                     */
                    // @ts-ignore
                    public isFmlTokenInHandshake(): boolean
                    /**
                     * Gets or sets a value indicating whether the '\00FML\00' token was found
                     * in the handshake.
                     */
                    // @ts-ignore
                    public setFmlTokenInHandshake(fmlTokenInHandshake: boolean): void
                }
            }
        }
    }
}
