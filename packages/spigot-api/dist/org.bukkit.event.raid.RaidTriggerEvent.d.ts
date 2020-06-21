declare namespace org {
    namespace bukkit {
        namespace event {
            namespace raid {
                /**
                 * Called when a {@link Raid} is triggered (e.g: a player with Bad Omen effect
                 * enters a village).
                 */
                // @ts-ignore
                class RaidTriggerEvent extends org.bukkit.event.raid.RaidEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(raid: org.bukkit.Raid, world: org.bukkit.World, player: org.bukkit.entity.Player)
                    /**
                     * Returns the player who triggered the raid.
                     * @return triggering player
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
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
