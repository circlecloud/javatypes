declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an EnderDragon switches controller phase.
                 */
                // @ts-ignore
                class EnderDragonChangePhaseEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(enderDragon: org.bukkit.entity.EnderDragon, currentPhase: org.bukkit.entity.EnderDragon.Phase, newPhase: org.bukkit.entity.EnderDragon.Phase)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.EnderDragon
                    /**
                     * Gets the current phase that the dragon is in. This method will return null
                     * when a dragon is first spawned and hasn't yet been assigned a phase.
                     * @return the current dragon phase
                     */
                    // @ts-ignore
                    getCurrentPhase(): org.bukkit.entity.EnderDragon.Phase
                    /**
                     * Gets the new phase that the dragon will switch to.
                     * @return the new dragon phase
                     */
                    // @ts-ignore
                    getNewPhase(): org.bukkit.entity.EnderDragon.Phase
                    /**
                     * Sets the new phase for the ender dragon.
                     * @param newPhase the new dragon phase
                     */
                    // @ts-ignore
                    setNewPhase(newPhase: org.bukkit.entity.EnderDragon.Phase): void
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
