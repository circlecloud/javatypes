declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Stores details for players attempting to log in.
                 * <br>
                 * Note that this event is called <i>early</i> in the player initialization
                 * process. It is recommended that most options involving the Player
                 * <i>entity</i> be postponed to the {@link PlayerJoinEvent} instead.
                 */
                // @ts-ignore
                class PlayerLoginEvent extends org.bukkit.event.player.PlayerEvent {
                    /**
                     * This constructor defaults message to an empty string, and result to
                     * ALLOWED
                     * @param player The {#link Player} for this event
                     * @param hostname The hostname that was used to connect to the server
                     * @param address The address the player used to connect, provided for
                     *      timing issues
                     * @param realAddress the actual, unspoofed connecting address
                     */
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, hostname: string, address: java.net.InetAddress, realAddress: java.net.InetAddress)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, hostname: string, address: java.net.InetAddress)
                    /**
                     * This constructor pre-configures the event with a result and message
                     * @param player The {#link Player} for this event
                     * @param hostname The hostname that was used to connect to the server
                     * @param address The address the player used to connect, provided for
                     *      timing issues
                     * @param result The result status for this event
                     * @param message The message to be displayed if result denies login
                     * @param realAddress the actual, unspoofed connecting address
                     */
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, hostname: string, address: java.net.InetAddress, result: org.bukkit.event.player.PlayerLoginEvent.Result, message: string, realAddress: java.net.InetAddress)
                    /**
                     * Gets the connection address of this player, regardless of whether it has been spoofed or not.
                     * @return the player's connection address
                     */
                    // @ts-ignore
                    getRealAddress(): java.net.InetAddress
                    /**
                     * Gets the current result of the login, as an enum
                     * @return Current Result of the login
                     */
                    // @ts-ignore
                    getResult(): org.bukkit.event.player.PlayerLoginEvent.Result
                    /**
                     * Sets the new result of the login, as an enum
                     * @param result New result to set
                     */
                    // @ts-ignore
                    setResult(result: org.bukkit.event.player.PlayerLoginEvent.Result): void
                    /**
                     * Gets the current kick message that will be used if getResult() !=
                     * Result.ALLOWED
                     * @return Current kick message
                     */
                    // @ts-ignore
                    getKickMessage(): java.lang.String
                    /**
                     * Sets the kick message to display if getResult() != Result.ALLOWED
                     * @param message New kick message
                     */
                    // @ts-ignore
                    setKickMessage(message: string): void
                    /**
                     * Gets the hostname that the player used to connect to the server, or
                     * blank if unknown
                     * @return The hostname
                     */
                    // @ts-ignore
                    getHostname(): java.lang.String
                    /**
                     * Allows the player to log in
                     */
                    // @ts-ignore
                    allow(): void
                    /**
                     * Disallows the player from logging in, with the given reason
                     * @param result New result for disallowing the player
                     * @param message Kick message to display to the user
                     */
                    // @ts-ignore
                    disallow(result: org.bukkit.event.player.PlayerLoginEvent.Result, message: string): void
                    /**
                     * Gets the {@link InetAddress} for the Player associated with this event.
                     * This method is provided as a workaround for player.getAddress()
                     * returning null during PlayerLoginEvent.
                     * @return The address for this player. For legacy compatibility, this may
                     *      be null.
                     */
                    // @ts-ignore
                    getAddress(): java.net.InetAddress
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
