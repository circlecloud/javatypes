declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Fired when a player changes their currently held item
                 */
                // @ts-ignore
                class PlayerItemHeldEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, previous: number /*int*/, current: number /*int*/)
                    /**
                     * Gets the previous held slot index
                     * @return Previous slot index
                     */
                    // @ts-ignore
                    public getPreviousSlot(): number /*int*/
                    /**
                     * Gets the new held slot index
                     * @return New slot index
                     */
                    // @ts-ignore
                    public getNewSlot(): number /*int*/
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
