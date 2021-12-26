declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a creature is spawned into a world.
                 * <p>
                 * If a Creature Spawn event is cancelled, the creature will not spawn.
                 */
                // @ts-ignore
                class CreatureSpawnEvent extends org.bukkit.event.entity.EntitySpawnEvent {
                    // @ts-ignore
                    constructor(spawnee: org.bukkit.entity.LivingEntity, spawnReason: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets the reason for why the creature is being spawned.
                     * @return A SpawnReason value detailing the reason for the creature being
                     *      spawned
                     */
                    // @ts-ignore
                    public getSpawnReason(): org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                }
            }
        }
    }
}
