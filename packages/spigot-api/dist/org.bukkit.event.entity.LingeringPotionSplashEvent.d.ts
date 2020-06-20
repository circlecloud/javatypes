declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a splash potion hits an area
                 */
                // @ts-ignore
                class LingeringPotionSplashEvent extends org.bukkit.event.entity.ProjectileHitEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(potion: org.bukkit.entity.ThrownPotion, entity: org.bukkit.entity.AreaEffectCloud)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.ThrownPotion
                    /**
                     * Gets the AreaEffectCloud spawned
                     * @return The spawned AreaEffectCloud
                     */
                    // @ts-ignore
                    getAreaEffectCloud(): org.bukkit.entity.AreaEffectCloud
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
