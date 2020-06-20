declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            class EntityType extends java.lang.Enum<org.bukkit.entity.EntityType> implements org.bukkit.Keyed {
                // @ts-ignore
                values(): org.bukkit.entity.EntityType[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.entity.EntityType
                /**
                 * Gets the entity type name.
                 * @return the entity type's name
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getName(): java.lang.String
                // @ts-ignore
                getKey(): org.bukkit.NamespacedKey
                // @ts-ignore
                getEntityClass(): java.lang.Class<? extends org.bukkit.entity.Entity>
                /**
                 * Gets the entity type id.
                 * @return the raw type id
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getTypeId(): short
                /**
                 * Gets an entity type from its name.
                 * @param name the entity type's name
                 * @return the matching entity type or null
                 * @deprecated Magic value
                 */
                // @ts-ignore
                fromName(name: string): org.bukkit.entity.EntityType
                /**
                 * Gets an entity from its id.
                 * @param id the raw type id
                 * @return the matching entity type or null
                 * @deprecated Magic value
                 */
                // @ts-ignore
                fromId(id: number /*int*/): org.bukkit.entity.EntityType
                /**
                 * Some entities cannot be spawned using {@link
                 * World#spawnEntity(Location, EntityType)} or {@link
                 * World#spawn(Location, Class)}, usually because they require additional
                 * information in order to spawn.
                 * @return False if the entity type cannot be spawned
                 */
                // @ts-ignore
                isSpawnable(): boolean
                // @ts-ignore
                isAlive(): boolean
            }
        }
    }
}
