declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a spawn egg and it's spawned type.
                 */
                // @ts-ignore
                interface SpawnEggMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Get the type of entity this egg will spawn.
                     * @return The entity type. May be null for implementation specific default.
                     * @deprecated different types are different items
                     */
                    // @ts-ignore
                    getSpawnedType(): org.bukkit.entity.EntityType
                    /**
                     * Set the type of entity this egg will spawn.
                     * @param type The entity type. May be null for implementation specific
                     *  default.
                     * @deprecated different types are different items
                     */
                    // @ts-ignore
                    setSpawnedType(type: org.bukkit.entity.EntityType): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.SpawnEggMeta
                }
            }
        }
    }
}
