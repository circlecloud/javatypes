declare namespace org {
    namespace bukkit {
        /**
         * GameRules dictate certain behavior within Minecraft itself
         * <br>
         * For more information please visit the
         * <a href="https://minecraft.gamepedia.com/Commands/gamerule">Minecraft
         * Wiki</a>
         * @param <T> type of rule (Boolean or Integer)
         */
        // @ts-ignore
        class GameRule<T> extends java.lang.Object {
            /**
             * Toggles the announcing of advancements.
             */
            // @ts-ignore
            readonly ANNOUNCE_ADVANCEMENTS: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether command blocks should notify admins when they perform commands.
             */
            // @ts-ignore
            readonly COMMAND_BLOCK_OUTPUT: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether the server should skip checking player speed when the player is
             * wearing elytra.
             */
            // @ts-ignore
            readonly DISABLE_ELYTRA_MOVEMENT_CHECK: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether time progresses from the current moment.
             */
            // @ts-ignore
            readonly DO_DAYLIGHT_CYCLE: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether entities that are not mobs should have drops.
             */
            // @ts-ignore
            readonly DO_ENTITY_DROPS: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether fire should spread and naturally extinguish.
             */
            // @ts-ignore
            readonly DO_FIRE_TICK: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether players should only be able to craft recipes they've unlocked
             * first.
             */
            // @ts-ignore
            readonly DO_LIMITED_CRAFTING: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether mobs should drop items.
             */
            // @ts-ignore
            readonly DO_MOB_LOOT: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether mobs should naturally spawn.
             */
            // @ts-ignore
            readonly DO_MOB_SPAWNING: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether blocks should have drops.
             */
            // @ts-ignore
            readonly DO_TILE_DROPS: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether the weather will change from the current moment.
             */
            // @ts-ignore
            readonly DO_WEATHER_CYCLE: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether the player should keep items in their inventory after death.
             */
            // @ts-ignore
            readonly KEEP_INVENTORY: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether to log admin commands to server log.
             */
            // @ts-ignore
            readonly LOG_ADMIN_COMMANDS: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether mobs can pick up items or change blocks.
             */
            // @ts-ignore
            readonly MOB_GRIEFING: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether players can regenerate health naturally through their hunger bar.
             */
            // @ts-ignore
            readonly NATURAL_REGENERATION: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether the debug screen shows all or reduced information.
             */
            // @ts-ignore
            readonly REDUCED_DEBUG_INFO: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether the feedback from commands executed by a player should show up in
             * chat. Also affects the default behavior of whether command blocks store
             * their output text.
             */
            // @ts-ignore
            readonly SEND_COMMAND_FEEDBACK: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether a message appears in chat when a player dies.
             */
            // @ts-ignore
            readonly SHOW_DEATH_MESSAGES: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether players in spectator mode can generate chunks.
             */
            // @ts-ignore
            readonly SPECTATORS_GENERATE_CHUNKS: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether pillager raids are enabled or not.
             */
            // @ts-ignore
            readonly DISABLE_RAIDS: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether phantoms will appear without sleeping or not.
             */
            // @ts-ignore
            readonly DO_INSOMNIA: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether clients will respawn immediately after death or not.
             */
            // @ts-ignore
            readonly DO_IMMEDIATE_RESPAWN: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether drowning damage is enabled or not.
             */
            // @ts-ignore
            readonly DROWNING_DAMAGE: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether fall damage is enabled or not.
             */
            // @ts-ignore
            readonly FALL_DAMAGE: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether fire damage is enabled or not.
             */
            // @ts-ignore
            readonly FIRE_DAMAGE: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether patrols should naturally spawn.
             */
            // @ts-ignore
            readonly DO_PATROL_SPAWNING: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * Whether traders should naturally spawn.
             */
            // @ts-ignore
            readonly DO_TRADER_SPAWNING: org.bukkit.GameRule<java.lang.Boolean>
            /**
             * How often a random block tick occurs (such as plant growth, leaf decay,
             * etc.) per chunk section per game tick. 0 will disable random ticks,
             * higher numbers will increase random ticks.
             */
            // @ts-ignore
            readonly RANDOM_TICK_SPEED: org.bukkit.GameRule<java.lang.Integer>
            /**
             * The number of blocks outward from the world spawn coordinates that a
             * player will spawn in when first joining a server or when dying without a
             * spawnpoint.
             */
            // @ts-ignore
            readonly SPAWN_RADIUS: org.bukkit.GameRule<java.lang.Integer>
            /**
             * The maximum number of other pushable entities a mob or player can push,
             * before taking suffocation damage.
             * <br>
             * Setting to 0 disables this rule.
             */
            // @ts-ignore
            readonly MAX_ENTITY_CRAMMING: org.bukkit.GameRule<java.lang.Integer>
            /**
             * Determines the number at which the chain of command blocks act as a
             * "chain."
             * <br>
             * This is the maximum amount of command blocks that can be activated in a
             * single tick from a single chain.
             */
            // @ts-ignore
            readonly MAX_COMMAND_CHAIN_LENGTH: org.bukkit.GameRule<java.lang.Integer>
            /**
             * Get the name of this GameRule.
             * @return the name of this GameRule
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Get the type of this rule.
             * @return the rule type; Integer or Boolean
             */
            // @ts-ignore
            getType(): java.lang.Class<T>
            // @ts-ignore
            equals(obj: any): boolean
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Get a {@link GameRule} by its name.
             * @param rule the name of the GameRule
             * @return the {#link GameRule} or null if no GameRule matches the given
             *  name
             */
            // @ts-ignore
            getByName(rule: string): org.bukkit.GameRule<?>
            /**
             * Get an immutable collection of {@link GameRule}s.
             * @return an immutable collection containing all registered GameRules.
             */
            // @ts-ignore
            values(): org.bukkit.GameRule[]
        }
    }
}
