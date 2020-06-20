declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Represents when a player has an item repaired via the Mending enchantment.
                 * <br>
                 * This event is fired directly before the {@link PlayerExpChangeEvent}, and the
                 * results of this event directly affect the {@link PlayerExpChangeEvent}.
                 */
                // @ts-ignore
                class PlayerItemMendEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, item: org.bukkit.inventory.ItemStack, experienceOrb: org.bukkit.entity.ExperienceOrb, repairAmount: number /*int*/)
                    /**
                     * Get the {@link ItemStack} to be repaired.
                     * This is not necessarily the item the player is holding.
                     * @return the item to be repaired
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Get the experience orb triggering the event.
                     * @return the experience orb
                     */
                    // @ts-ignore
                    getExperienceOrb(): org.bukkit.entity.ExperienceOrb
                    /**
                     * Get the amount the item is to be repaired.
                     * The default value is twice the value of the consumed experience orb
                     * or the remaining damage left on the item, whichever is smaller.
                     * @return how much damage will be repaired by the experience orb
                     */
                    // @ts-ignore
                    getRepairAmount(): int
                    /**
                     * Set the amount the item will be repaired.
                     * Half of this value will be subtracted from the experience orb which initiated this event.
                     * @param amount how much damage will be repaired on the item
                     */
                    // @ts-ignore
                    setRepairAmount(amount: number /*int*/): void
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
