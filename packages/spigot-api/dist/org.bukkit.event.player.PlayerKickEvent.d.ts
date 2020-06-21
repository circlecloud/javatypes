declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player gets kicked from the server
                 */
                // @ts-ignore
                class PlayerKickEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(playerKicked: org.bukkit.entity.Player, kickReason: java.lang.String | string, leaveMessage: java.lang.String | string)
                    /**
                     * Gets the reason why the player is getting kicked
                     * @return string kick reason
                     */
                    // @ts-ignore
                    public getReason(): string
                    /**
                     * Gets the leave message send to all online players
                     * @return string kick reason
                     */
                    // @ts-ignore
                    public getLeaveMessage(): string
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Sets the reason why the player is getting kicked
                     * @param kickReason kick reason
                     */
                    // @ts-ignore
                    public setReason(kickReason: java.lang.String | string): void
                    /**
                     * Sets the leave message send to all online players
                     * @param leaveMessage leave message
                     */
                    // @ts-ignore
                    public setLeaveMessage(leaveMessage: java.lang.String | string): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
