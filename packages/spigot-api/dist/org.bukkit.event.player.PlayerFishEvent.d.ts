declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Thrown when a player is fishing
                 */
                // @ts-ignore
                class PlayerFishEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, entity: org.bukkit.entity.Entity, hookEntity: org.bukkit.entity.FishHook, state: org.bukkit.event.player.PlayerFishEvent.State)
                    /**
                     * Gets the entity caught by the player.
                     * <p>
                     * If player has fished successfully, the result may be cast to {@link
                     * org.bukkit.entity.Item}.
                     * @return Entity caught by the player, Entity if fishing, and null if
                     *      bobber has gotten stuck in the ground or nothing has been caught
                     */
                    // @ts-ignore
                    getCaught(): org.bukkit.entity.Entity
                    /**
                     * Gets the fishing hook.
                     * @return the entity representing the fishing hook/bobber.
                     */
                    // @ts-ignore
                    getHook(): org.bukkit.entity.FishHook
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the amount of experience received when fishing.
                     * <p>
                     * Note: This value has no default effect unless the event state is {@link
                     * State#CAUGHT_FISH}.
                     * @return the amount of experience to drop
                     */
                    // @ts-ignore
                    getExpToDrop(): int
                    /**
                     * Sets the amount of experience received when fishing.
                     * <p>
                     * Note: This value has no default effect unless the event state is {@link
                     * State#CAUGHT_FISH}.
                     * @param amount the amount of experience to drop
                     */
                    // @ts-ignore
                    setExpToDrop(amount: number /*int*/): void
                    /**
                     * Gets the state of the fishing
                     * @return A State detailing the state of the fishing
                     */
                    // @ts-ignore
                    getState(): org.bukkit.event.player.PlayerFishEvent.State
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
