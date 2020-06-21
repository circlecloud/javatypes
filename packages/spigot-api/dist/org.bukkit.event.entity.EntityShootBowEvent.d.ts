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
                    constructor(shooter: org.bukkit.entity.LivingEntity, bow: org.bukkit.inventory.ItemStack, projectile: org.bukkit.entity.Entity, force: number /*float*/)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets the bow ItemStack used to fire the arrow.
                     * @return the bow involved in this event
                     */
                    // @ts-ignore
                    public getBow(): org.bukkit.inventory.ItemStack
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
                     * Gets the force the arrow was launched with
                     * @return bow shooting force, up to 1.0
                     */
                    // @ts-ignore
                    public getForce(): number /*float*/
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
