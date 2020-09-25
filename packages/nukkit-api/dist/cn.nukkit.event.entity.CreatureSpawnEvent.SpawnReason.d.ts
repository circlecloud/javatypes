declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                namespace CreatureSpawnEvent {
                    /**
                     * An enum to specify the type of spawning
                     */
                    // @ts-ignore
                    class SpawnReason extends java.lang.Enum<cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason> {
                        /**
                         * When something spawns from natural means
                         */
                        // @ts-ignore
                        public static readonly NATURAL: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity spawns as a jockey of another entity (mostly spider
                         * jockeys)
                         */
                        // @ts-ignore
                        public static readonly JOCKEY: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns from a spawner
                         */
                        // @ts-ignore
                        public static readonly SPAWNER: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns from an egg
                         */
                        // @ts-ignore
                        public static readonly EGG: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns from a Spawner Egg
                         */
                        // @ts-ignore
                        public static readonly SPAWN_EGG: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature spawns because of a lightning strike
                         */
                        // @ts-ignore
                        public static readonly LIGHTNING: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a snowman is spawned by being built
                         */
                        // @ts-ignore
                        public static readonly BUILD_SNOWMAN: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an iron golem is spawned by being built
                         */
                        // @ts-ignore
                        public static readonly BUILD_IRONGOLEM: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a wither boss is spawned by being built
                         */
                        // @ts-ignore
                        public static readonly BUILD_WITHER: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an iron golem is spawned to defend a village
                         */
                        // @ts-ignore
                        public static readonly VILLAGE_DEFENSE: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a zombie is spawned to invade a village
                         */
                        // @ts-ignore
                        public static readonly VILLAGE_INVASION: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an animal breeds to create a child
                         */
                        // @ts-ignore
                        public static readonly BREEDING: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a slime splits
                         */
                        // @ts-ignore
                        public static readonly SLIME_SPLIT: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity calls for reinforcements
                         */
                        // @ts-ignore
                        public static readonly REINFORCEMENTS: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by nether portal
                         */
                        // @ts-ignore
                        public static readonly NETHER_PORTAL: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by a dispenser dispensing an egg
                         */
                        // @ts-ignore
                        public static readonly DISPENSE_EGG: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a zombie infects a villager
                         */
                        // @ts-ignore
                        public static readonly INFECTION: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a villager is cured from infection
                         */
                        // @ts-ignore
                        public static readonly CURED: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an ocelot has a baby spawned along with them
                         */
                        // @ts-ignore
                        public static readonly OCELOT_BABY: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a silverfish spawns from a block
                         */
                        // @ts-ignore
                        public static readonly SILVERFISH_BLOCK: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity spawns as a mount of another entity (mostly chicken
                         * jockeys)
                         */
                        // @ts-ignore
                        public static readonly MOUNT: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity spawns as a trap for players approaching
                         */
                        // @ts-ignore
                        public static readonly TRAP: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is spawned as a result of ender pearl usage
                         */
                        // @ts-ignore
                        public static readonly ENDER_PEARL: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is spawned as a result of the entity it is being
                         * perched on jumping or being damaged
                         */
                        // @ts-ignore
                        public static readonly SHOULDER_ENTITY: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by another entity drowning
                         */
                        // @ts-ignore
                        public static readonly DROWNED: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an cow is spawned by shearing a mushroom cow
                         */
                        // @ts-ignore
                        public static readonly SHEARED: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When a creature is spawned by plugins
                         */
                        // @ts-ignore
                        public static readonly CUSTOM: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        /**
                         * When an entity is missing a SpawnReason
                         */
                        // @ts-ignore
                        public static readonly DEFAULT: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                        // @ts-ignore
                        public static values(): cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason
                    }
                }
            }
        }
    }
}
