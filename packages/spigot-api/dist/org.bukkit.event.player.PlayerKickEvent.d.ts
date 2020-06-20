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
                    constructor(playerKicked: org.bukkit.entity.Player, kickReason: string, leaveMessage: string)
                    /**
                     * Gets the reason why the player is getting kicked
                     * @return string kick reason
                     */
                    // @ts-ignore
                    getReason(): java.lang.String
                    /**
                     * Gets the leave message send to all online players
                     * @return string kick reason
                     */
                    // @ts-ignore
                    getLeaveMessage(): java.lang.String
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Sets the reason why the player is getting kicked
                     * @param kickReason kick reason
                     */
                    // @ts-ignore
                    setReason(kickReason: string): void
                    /**
                     * Sets the leave message send to all online players
                     * @param leaveMessage leave message
                     */
                    // @ts-ignore
                    setLeaveMessage(leaveMessage: string): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
