declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a LivingEntity shoots a bow firing an arrow
                 */
                // @ts-ignore
                class EntityShootBowEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(shooter: org.bukkit.entity.LivingEntity, bow: org.bukkit.inventory.ItemStack, consumable: org.bukkit.inventory.ItemStack, projectile: org.bukkit.entity.Entity, hand: org.bukkit.inventory.EquipmentSlot, force: number /*float*/, consumeItem: boolean)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets the bow ItemStack used to fire the arrow.
                     * @return the bow involved in this event
                     */
                    // @ts-ignore
                    public getBow(): org.bukkit.inventory.ItemStack
                    /**
                     * Get the ItemStack to be consumed in this event (if any).
                     * For instance, bows will consume an arrow ItemStack in a player's
                     * inventory.
                     * @return the consumable item
                     */
                    // @ts-ignore
                    public getConsumable(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the projectile which will be launched by this event
                     * @return the launched projectile
                     */
                    // @ts-ignore
                    public getProjectile(): org.bukkit.entity.Entity
                    /**
                     * Replaces the projectile which will be launched
                     * @param projectile the new projectile
                     */
                    // @ts-ignore
                    public setProjectile(projectile: org.bukkit.entity.Entity): void
                    /**
                     * Get the hand from which the bow was shot.
                     * @return the hand
                     */
                    // @ts-ignore
                    public getHand(): org.bukkit.inventory.EquipmentSlot
                    /**
                     * Gets the force the arrow was launched with
                     * @return bow shooting force, up to 1.0
                     */
                    // @ts-ignore
                    public getForce(): number /*float*/
                    /**
                     * Set whether or not the consumable item should be consumed in this event.
                     * If set to false, it is recommended that a call to
                     * {@link Player#updateInventory()} is made as the client may disagree with
                     * the server's decision to not consume a consumable item.
                     * <p>
                     * This value is ignored for entities where items are not required
                     * (skeletons, pillagers, etc.) or with crossbows (as no item is being
                     * consumed).
                     * @param consumeItem whether or not to consume the item
                     */
                    // @ts-ignore
                    public setConsumeItem(consumeItem: boolean): void
                    /**
                     * Get whether or not the consumable item should be consumed in this event.
                     * @return true if consumed, false otherwise
                     */
                    // @ts-ignore
                    public shouldConsumeItem(): boolean
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
