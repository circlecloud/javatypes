declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity is spawned into a world by a spawner.
                 * <p>
                 * If a Spawner Spawn event is cancelled, the entity will not spawn.
                 */
                // @ts-ignore
                class SpawnerSpawnEvent extends org.bukkit.event.entity.EntitySpawnEvent {
                    // @ts-ignore
                    constructor(spawnee: org.bukkit.entity.Entity, spawner: org.bukkit.block.CreatureSpawner)
                    // @ts-ignore
                    getSpawner(): org.bukkit.block.CreatureSpawner
                }
            }
        }
    }
}
