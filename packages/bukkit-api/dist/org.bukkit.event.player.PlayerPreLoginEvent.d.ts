declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Stores details for players attempting to log in
                 * @deprecated This event causes synchronization from the login thread; {#link
                 *      AsyncPlayerPreLoginEvent} is preferred to keep the secondary threads
                 *      asynchronous.
                 */
                // @ts-ignore
                class PlayerPreLoginEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(name: java.lang.String | string, ipAddress: java.net.InetAddress)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, ipAddress: java.net.InetAddress, uniqueId: java.util.UUID)
                    /**
                     * Gets the current result of the login, as an enum
                     * @return Current Result of the login
                     */
                    // @ts-ignore
                    public getResult(): org.bukkit.event.player.PlayerPreLoginEvent.Result
                    /**
                     * Sets the new result of the login, as an enum
                     * @param result New result to set
                     */
                    // @ts-ignore
                    public setResult(result: org.bukkit.event.player.PlayerPreLoginEvent.Result): void
                    /**
                     * Gets the current kick message that will be used if getResult() !=
                     * Result.ALLOWED
                     * @return Current kick message
                     */
                    // @ts-ignore
                    public getKickMessage(): string
                    /**
                     * Sets the kick message to display if getResult() != Result.ALLOWED
                     * @param message New kick message
                     */
                    // @ts-ignore
                    public setKickMessage(message: java.lang.String | string): void
                    /**
                     * Allows the player to log in
                     */
                    // @ts-ignore
                    public allow(): void
                    /**
                     * Disallows the player from logging in, with the given reason
                     * @param result New result for disallowing the player
                     * @param message Kick message to display to the user
                     */
                    // @ts-ignore
                    public disallow(result: org.bukkit.event.player.PlayerPreLoginEvent.Result, message: java.lang.String | string): void
                    /**
                     * Gets the player's name.
                     * @return the player's name
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Gets the player IP address.
                     * @return The IP address
                     */
                    // @ts-ignore
                    public getAddress(): java.net.InetAddress
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    /**
                     * Gets the player's unique ID.
                     * @return The unique ID
                     */
                    // @ts-ignore
                    public getUniqueId(): java.util.UUID
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
