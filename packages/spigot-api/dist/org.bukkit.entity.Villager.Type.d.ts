declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace Villager {
                /**
                 * Represents Villager type, usually corresponding to what biome they spawn
                 * in.
                 */
                // @ts-ignore
                class Type extends java.lang.Enum<org.bukkit.entity.Villager.Type> implements org.bukkit.Keyed {
                    // @ts-ignore
                    readonly DESERT: org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    readonly JUNGLE: org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    readonly PLAINS: org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    readonly SAVANNA: org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    readonly SNOW: org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    readonly SWAMP: org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    readonly TAIGA: org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    values(): org.bukkit.entity.Villager.Type[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.entity.Villager.Type
                    // @ts-ignore
                    getKey(): org.bukkit.NamespacedKey
                }
            }
        }
    }
}
