declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a spawn egg that can be used to spawn mobs
             * @deprecated use {#link SpawnEggMeta}
             */
            // @ts-ignore
            class SpawnEgg extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(data: number /*byte*/)
                // @ts-ignore
                constructor(type: org.bukkit.entity.EntityType)
                /**
                 * Get the type of entity this egg will spawn.
                 * @return The entity type.
                 * @deprecated This is now stored in {#link SpawnEggMeta}.
                 */
                // @ts-ignore
                public getSpawnedType(): org.bukkit.entity.EntityType
                /**
                 * Set the type of entity this egg will spawn.
                 * @param type The entity type.
                 * @deprecated This is now stored in {#link SpawnEggMeta}.
                 */
                // @ts-ignore
                public setSpawnedType(type: org.bukkit.entity.EntityType): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.SpawnEgg
            }
        }
    }
}
