declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gamerule {
                    /**
                     * An enumeration of all possible GameRule names in vanilla minecraft.
                     */
                    // @ts-ignore
                    class DefaultGameRules extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * If advancements should be announced to the server.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly ANNOUNCE_ADVANCEMENTS: string
                        /**
                         * Whether {@link CommandBlock}s should notify admins when
                         * they perform commands.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly COMMAND_BLOCK_OUTPUT: string
                        /**
                         * Whether the server should skip checking player speed when
                         * the player is wearing elytra.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code false}.</p>
                         */
                        // @ts-ignore
                        readonly DISABLE_ELYTRA_MOVEMENT_CHECK: string
                        /**
                         * Whether the day-night cycle and moon phases progress.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly DO_DAYLIGHT_CYCLE: string
                        /**
                         * Whether entities that are not mobs should have drops.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly DO_ENTITY_DROPS: string
                        /**
                         * Whether fire should spread and naturally extinguish.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly DO_FIRE_TICK: string
                        /**
                         * Whether {@link Player}s can only craft recipes they have unlocked.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code false}.</p>
                         */
                        // @ts-ignore
                        readonly DO_LIMITED_CRAFTING: string
                        /**
                         * Whether {@link Agent}s should drop items.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly DO_MOB_LOOT: string
                        /**
                         * Whether {@link Agent}s should naturally spawn.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly DO_MOB_SPAWNING: string
                        /**
                         * Whether blocks should have drops.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly DO_TILE_DROPS: string
                        /**
                         * Whether the weather will change.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly DO_WEATHER_CYCLE: string
                        /**
                         * A function to be executed once per tick.
                         * <p>This is a string game rule, with a default value of {@code -}.</p>
                         */
                        // @ts-ignore
                        readonly GAME_LOOP_FUNCTION: string
                        /**
                         * Whether {@link Player}s should keep items in their inventory
                         * after death.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code false}.</p>
                         */
                        // @ts-ignore
                        readonly KEEP_INVENTORY: string
                        /**
                         * Whether to log admin commands to server log.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly LOG_ADMIN_COMMANDS: string
                        /**
                         * The total number of {@link BlockTypes#CHAIN_COMMAND_BLOCK chain command
                         * blocks} that can run during a single tick.
                         * <p>This is a numerical game rule, with a default value
                         * of {@code 65536}.</p>
                         */
                        // @ts-ignore
                        readonly MAX_COMMAND_CHAIN_LENGTH: string
                        /**
                         * The maximum number of other pushable entities a mob or player can push,
                         * before taking 3 suffocation damage per half-second.
                         * <p>Damage affects {@link GameModes#SURVIVAL survival mode} or
                         * {@link GameModes#ADVENTURE adventure mode} {@link Player}s, and all
                         * mobs but bats. Pushable entities include non-spectator-mode
                         * {@link Player}, any mob except {@link Bat}s, as well as
                         * {@link Boat}s and {@link Minecart}.</p>
                         * <p>Setting to {@code 0} disables the rule.</p>
                         * <p>This is a numerical game rule, with a default value of {@code 24}.</p>
                         */
                        // @ts-ignore
                        readonly MAX_ENTITY_CRAMMING: string
                        /**
                         * Whether {@link Agent}s should be able to change blocks, and whether
                         * {@link Agent}s can pick up items.
                         * <p>In vanilla Minecraft, the following entities can change blocks when
                         * this gamerule is {@code true}:
                         * <ul>
                         * <li>{@link Creeper}</li>
                         * <li>{@link Zombie}</li>
                         * <li>{@link Enderman}</li>
                         * <li>{@link Ghast}</li>
                         * <li>{@link Wither}</li>
                         * <li>{@link EnderDragon}</li>
                         * <li>{@link Rabbit}</li>
                         * <li>{@link Sheep}</li>
                         * <li>{@link Villager}</li>
                         * <li>{@link SnowGolem}</li>
                         * <li>{@link Silverfish}</li>
                         * </ul></p>
                         * <p>In vanilla Minecraft, the following entities can pick up items when
                         * this gamerule is{@code true}:
                         * <ul>
                         * <li>{@link Villager}</li>
                         * <li>{@link Zombie}</li>
                         * <li>{@link Skeleton}</li>
                         * <li>{@link ZombiePigman}</li>
                         * </ul></p>
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly MOB_GRIEFING: string
                        /**
                         * Whether {@link Player}s can regenerate health naturally if their
                         * hunger is full enough (doesn't affect external healing, such as
                         * golden apples, the Regeneration effect, etc.).
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly NATURAL_REGENERATION: string
                        /**
                         * How often a random block tick occurs (such as plant growth,
                         * leaf decay, etc.) per chunk section per game tick.
                         * <p>0 will disable random ticks, higher numbers will increase random
                         * ticks</p>
                         * <p>This is a numerical game rule, with a default value of {@code 3}.</p>
                         */
                        // @ts-ignore
                        readonly RANDOM_TICK_SPEED: string
                        /**
                         * Whether the debug screen shows all or reduced information.
                         * <p>This is a boolean game rule, with a default value of
                         * {@code false}.</p>
                         */
                        // @ts-ignore
                        readonly REDUCED_DEBUG_INFO: string
                        /**
                         * Whether the feedback from commands executed by a {@link Player}
                         * should show up in chat.
                         * <p>This game rule affects the default behavior of whether
                         * {@link CommandBlock}s store their output text.</p>
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly SEND_COMMAND_FEEDBACK: string
                        /**
                         * Whether a message appears in chat when a {@link Player} dies.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly SHOW_DEATH_MESSAGES: string
                        /**
                         * The number of blocks outward from the world spawn coordinates
                         * that a player will spawn in when first joining a server or when
                         * dying without a spawn point.
                         * <p>This is a numerical game rule, with a default value of {@code 10}.</p>
                         */
                        // @ts-ignore
                        readonly SPAWN_RADIUS: string
                        /**
                         * Whether players in {@link GameModes#SPECTATOR spectator mode} can
                         * generate chunks.
                         * <p>This is a boolean game rule, with a default value of {@code true}.</p>
                         */
                        // @ts-ignore
                        readonly SPECTATORS_GENERATE_CHUNKS: string
                    }
                }
            }
        }
    }
}
