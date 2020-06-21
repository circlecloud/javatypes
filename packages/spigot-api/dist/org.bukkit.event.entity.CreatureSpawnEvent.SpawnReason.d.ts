declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace CreatureSpawnEvent {
                    /**
                     * An enum to specify the type of spawning
                     */
                    // @ts-ignore
                    class SpawnReason extends java.lang.Enum<org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason> {
                        /**
                         * When something spawns from natural means
                         */
                        // @ts-ignore
                        readonly NATURAL: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity spawns as a jockey of another entity (mostly spider
                         * jockeys)
                         */
                        // @ts-ignore
                        readonly JOCKEY: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns due to chunk generation
                         * @deprecated no longer called, chunks are generated with entities
                         *  already existing. Consider using {#link ChunkLoadEvent},
                         *  {@link ChunkLoadEvent#isNewChunk()} and {@link Chunk#getEntities()}
                         *  for similar effect.
                         */
                        // @ts-ignore
                        readonly CHUNK_GEN: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns from a spawner
                         */
                        // @ts-ignore
                        readonly SPAWNER: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns from an egg
                         */
                        // @ts-ignore
                        readonly EGG: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns from a Spawner Egg
                         */
                        // @ts-ignore
                        readonly SPAWNER_EGG: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns because of a lightning strike
                         */
                        // @ts-ignore
                        readonly LIGHTNING: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a snowman is spawned by being built
                         */
                        // @ts-ignore
                        readonly BUILD_SNOWMAN: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an iron golem is spawned by being built
                         */
                        // @ts-ignore
                        readonly BUILD_IRONGOLEM: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a wither boss is spawned by being built
                         */
                        // @ts-ignore
                        readonly BUILD_WITHER: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an iron golem is spawned to defend a village
                         */
                        // @ts-ignore
                        readonly VILLAGE_DEFENSE: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a zombie is spawned to invade a village
                         */
                        // @ts-ignore
                        readonly VILLAGE_INVASION: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an animal breeds to create a child
                         */
                        // @ts-ignore
                        readonly BREEDING: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a slime splits
                         */
                        // @ts-ignore
                        readonly SLIME_SPLIT: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity calls for reinforcements
                         */
                        // @ts-ignore
                        readonly REINFORCEMENTS: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by nether portal
                         */
                        // @ts-ignore
                        readonly NETHER_PORTAL: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by a dispenser dispensing an egg
                         */
                        // @ts-ignore
                        readonly DISPENSE_EGG: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a zombie infects a villager
                         */
                        // @ts-ignore
                        readonly INFECTION: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a villager is cured from infection
                         */
                        // @ts-ignore
                        readonly CURED: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an ocelot has a baby spawned along with them
                         */
                        // @ts-ignore
                        readonly OCELOT_BABY: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a silverfish spawns from a block
                         */
                        // @ts-ignore
                        readonly SILVERFISH_BLOCK: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity spawns as a mount of another entity (mostly chicken
                         * jockeys)
                         */
                        // @ts-ignore
                        readonly MOUNT: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity spawns as a trap for players approaching
                         */
                        // @ts-ignore
                        readonly TRAP: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is spawned as a result of ender pearl usage
                         */
                        // @ts-ignore
                        readonly ENDER_PEARL: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is spawned as a result of the entity it is being
                         * perched on jumping or being damaged
                         */
                        // @ts-ignore
                        readonly SHOULDER_ENTITY: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by another entity drowning
                         */
                        // @ts-ignore
                        readonly DROWNED: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an cow is spawned by shearing a mushroom cow
                         */
                        // @ts-ignore
                        readonly SHEARED: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When eg an effect cloud is spawned as a result of a creeper exploding
                         */
                        // @ts-ignore
                        readonly EXPLOSION: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is spawned as part of a raid
                         */
                        // @ts-ignore
                        readonly RAID: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is spawned as part of a patrol
                         */
                        // @ts-ignore
                        readonly PATROL: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a bee is released from a beehive/bee nest
                         */
                        // @ts-ignore
                        readonly BEEHIVE: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by plugins
                         */
                        // @ts-ignore
                        readonly CUSTOM: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is missing a SpawnReason
                         */
                        // @ts-ignore
                        readonly DEFAULT: org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        // @ts-ignore
                        values(): org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason
                    }
                }
            }
        }
    }
}
