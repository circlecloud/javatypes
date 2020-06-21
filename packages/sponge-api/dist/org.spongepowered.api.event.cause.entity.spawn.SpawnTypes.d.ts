declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace spawn {
                            // @ts-ignore
                            class SpawnTypes extends java.lang.Object {
                                /**
                                 * This is the equivalent to when a block break causes a normal entity to
                                 * spawn, such as {@link BlockTypes#MONSTER_EGG} where a
                                 * {@link EntityTypes#SILVERFISH} may spawn.
                                 */
                                // @ts-ignore
                                public static readonly BLOCK_SPAWNING: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * This is the equivalent to when an {@link Entity} is spawned from a
                                 * breeding of two other {@link Entity} instances. Usually associated
                                 * with {@link Animal} entities.
                                 */
                                // @ts-ignore
                                public static readonly BREEDING: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * An entity spawned due to a {@link Chunk} being loaded.
                                 */
                                // @ts-ignore
                                public static readonly CHUNK_LOAD: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * Custom spawn type. Usually, Sponge can decipher the spawn type
                                 * but in some cases, the type is just unknown.
                                 */
                                // @ts-ignore
                                public static readonly CUSTOM: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When a {@link BlockTypes#DISPENSER} or {@link BlockTypes#DROPPER} or
                                 * equivalent spawns an entity as it's normal function of "dispensing".
                                 */
                                // @ts-ignore
                                public static readonly DISPENSE: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an {@link Item} entity is "dropped" as when a block is broken or
                                 * an {@link Entity} is killed.
                                 */
                                // @ts-ignore
                                public static readonly DROPPED_ITEM: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an {@link ExperienceOrb} is spawned as a result of a "reward" from
                                 * an {@link Entity} granting experience for the kill, or a {@link Villager}
                                 * granting experience for a successful trade, or a block being mined.
                                 */
                                // @ts-ignore
                                public static readonly EXPERIENCE: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When a block becomes a {@link FallingBlock} entity due to normal gravity.
                                 */
                                // @ts-ignore
                                public static readonly FALLING_BLOCK: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an {@link Entity} is spawned as a result of a
                                 * {@link BlockTypes#MOB_SPAWNER} or {@link MobSpawnerMinecart} entity
                                 * performs it's normal spawning.
                                 */
                                // @ts-ignore
                                public static readonly MOB_SPAWNER: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * Unknown for now.
                                 */
                                // @ts-ignore
                                public static readonly PASSIVE: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an entity is placed into the world, likely from a command.
                                 */
                                // @ts-ignore
                                public static readonly PLACEMENT: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * An entity spawned from a {@link Plugin}, this can be for any reason
                                 * as dictated by the plugin.
                                 */
                                // @ts-ignore
                                public static readonly PLUGIN: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an entity is spawned as a projectile, either from
                                 * being "thrown" or "launched".
                                 */
                                // @ts-ignore
                                public static readonly PROJECTILE: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an entity is spawned from an {@link ItemTypes#SPAWN_EGG}.
                                 */
                                // @ts-ignore
                                public static readonly SPAWN_EGG: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an entity is spawned from a structure or {@link Populator}, usually
                                 * during world/chunk generation.
                                 */
                                // @ts-ignore
                                public static readonly STRUCTURE: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an entity is spawned from {@link BlockTypes#TNT}.
                                 */
                                // @ts-ignore
                                public static readonly TNT_IGNITE: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * When an entity is spawned from the current {@link Weather}
                                 * state of a {@link World}.
                                 */
                                // @ts-ignore
                                public static readonly WEATHER: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                                /**
                                 * An entity spawned from the normal world spawner (natural spawning).
                                 */
                                // @ts-ignore
                                public static readonly WORLD_SPAWNER: org.spongepowered.api.event.cause.entity.spawn.SpawnType
                            }
                        }
                    }
                }
            }
        }
    }
}
