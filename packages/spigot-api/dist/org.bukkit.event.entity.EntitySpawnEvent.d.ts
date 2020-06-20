declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity is spawned into a world.
                 * <p>
                 * If an Entity Spawn event is cancelled, the entity will not spawn.
                 */
                // @ts-ignore
                class EntitySpawnEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(spawnee: org.bukkit.entity.Entity)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the location at which the entity is spawning.
                     * @return The location at which the entity is spawning
                     */
                    // @ts-ignore
                    getLocation(): org.bukkit.Location
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
