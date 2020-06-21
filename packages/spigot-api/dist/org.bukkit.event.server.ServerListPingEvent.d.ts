declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * Called when a server list ping is coming in. Displayed players can be
                 * checked and removed by {@link #iterator() iterating} over this event.
                 */
                // @ts-ignore
                class ServerListPingEvent extends org.bukkit.event.server.ServerEvent implements java.lang.Iterable<org.bukkit.entity.Player> {
                    // @ts-ignore
                    constructor(address: java.net.InetAddress, motd: java.lang.String | string, numPlayers: number /*int*/, maxPlayers: number /*int*/)
                    /**
                     * This constructor is intended for implementations that provide the
                     * {@link #iterator()} method, thus provided the {@link #getNumPlayers()}
                     * count.
                     * @param address the address of the pinger
                     * @param motd the message of the day
                     * @param maxPlayers the max number of players
                     */
                    // @ts-ignore
                    constructor(address: java.net.InetAddress, motd: java.lang.String | string, maxPlayers: number /*int*/)
                    /**
                     * Get the address the ping is coming from.
                     * @return the address
                     */
                    // @ts-ignore
                    public getAddress(): java.net.InetAddress
                    /**
                     * Get the message of the day message.
                     * @return the message of the day
                     */
                    // @ts-ignore
                    public getMotd(): string
                    /**
                     * Change the message of the day message.
                     * @param motd the message of the day
                     */
                    // @ts-ignore
                    public setMotd(motd: java.lang.String | string): void
                    /**
                     * Get the number of players sent.
                     * @return the number of players
                     */
                    // @ts-ignore
                    public getNumPlayers(): number /*int*/
                    /**
                     * Get the maximum number of players sent.
                     * @return the maximum number of players
                     */
                    // @ts-ignore
                    public getMaxPlayers(): number /*int*/
                    /**
                     * Set the maximum number of players sent.
                     * @param maxPlayers the maximum number of player
                     */
                    // @ts-ignore
                    public setMaxPlayers(maxPlayers: number /*int*/): void
                    /**
                     * Sets the server-icon sent to the client.
                     * @param icon the icon to send to the client
                     * @throws IllegalArgumentException if the {#link CachedServerIcon} is not
                     *      created by the caller of this event; null may be accepted for some
                     *      implementations
                     * @throws UnsupportedOperationException if the caller of this event does
                     *      not support setting the server icon
                     */
                    // @ts-ignore
                    public setServerIcon(icon: org.bukkit.util.CachedServerIcon): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                    /**
                     * {@inheritDoc}
                     * <p>
                     * Calling the {@link Iterator#remove()} method will force that particular
                     * player to not be displayed on the player list, decrease the size
                     * returned by {@link #getNumPlayers()}, and will not be returned again by
                     * any new iterator.
                     * @throws UnsupportedOperationException if the caller of this event does
                     *      not support removing players
                     */
                    // @ts-ignore
                    public iterator(): java.util.Iterator<org.bukkit.entity.Player>
                }
            }
        }
    }
}
