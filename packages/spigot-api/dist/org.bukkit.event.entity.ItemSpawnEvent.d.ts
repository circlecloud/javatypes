declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an item is spawned into a world
                 */
                // @ts-ignore
                class ItemSpawnEvent extends org.bukkit.event.entity.EntitySpawnEvent {
                    // @ts-ignore
                    constructor(spawnee: org.bukkit.entity.Item, loc: org.bukkit.Location)
                    // @ts-ignore
                    constructor(spawnee: org.bukkit.entity.Item)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Item
                }
            }
        }
    }
}
