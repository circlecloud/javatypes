declare namespace org {
    namespace bukkit {
        /**
         * Represents a countable statistic, which is tracked by the server.
         */
        // @ts-ignore
        class Statistic extends java.lang.Enum<org.bukkit.Statistic> implements org.bukkit.Keyed {
            // @ts-ignore
            public static readonly DAMAGE_DEALT: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DAMAGE_TAKEN: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DEATHS: org.bukkit.Statistic
            // @ts-ignore
            public static readonly MOB_KILLS: org.bukkit.Statistic
            // @ts-ignore
            public static readonly PLAYER_KILLS: org.bukkit.Statistic
            // @ts-ignore
            public static readonly FISH_CAUGHT: org.bukkit.Statistic
            // @ts-ignore
            public static readonly ANIMALS_BRED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly LEAVE_GAME: org.bukkit.Statistic
            // @ts-ignore
            public static readonly JUMP: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DROP_COUNT: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DROP: org.bukkit.Statistic
            // @ts-ignore
            public static readonly PICKUP: org.bukkit.Statistic
            /**
             * Name is misleading, actually records ticks played.
             */
            // @ts-ignore
            public static readonly PLAY_ONE_MINUTE: org.bukkit.Statistic
            // @ts-ignore
            public static readonly WALK_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly WALK_ON_WATER_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly FALL_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly SNEAK_TIME: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CLIMB_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly FLY_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly WALK_UNDER_WATER_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly MINECART_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly BOAT_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly PIG_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly HORSE_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly SPRINT_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CROUCH_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly AVIATE_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly MINE_BLOCK: org.bukkit.Statistic
            // @ts-ignore
            public static readonly USE_ITEM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly BREAK_ITEM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CRAFT_ITEM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly KILL_ENTITY: org.bukkit.Statistic
            // @ts-ignore
            public static readonly ENTITY_KILLED_BY: org.bukkit.Statistic
            // @ts-ignore
            public static readonly TIME_SINCE_DEATH: org.bukkit.Statistic
            // @ts-ignore
            public static readonly TALKED_TO_VILLAGER: org.bukkit.Statistic
            // @ts-ignore
            public static readonly TRADED_WITH_VILLAGER: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CAKE_SLICES_EATEN: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CAULDRON_FILLED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CAULDRON_USED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly ARMOR_CLEANED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly BANNER_CLEANED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly BREWINGSTAND_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            public static readonly BEACON_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DROPPER_INSPECTED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly HOPPER_INSPECTED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DISPENSER_INSPECTED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly NOTEBLOCK_PLAYED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly NOTEBLOCK_TUNED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly FLOWER_POTTED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly TRAPPED_CHEST_TRIGGERED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly ENDERCHEST_OPENED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly ITEM_ENCHANTED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly RECORD_PLAYED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly FURNACE_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CRAFTING_TABLE_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CHEST_OPENED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly SLEEP_IN_BED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly SHULKER_BOX_OPENED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly TIME_SINCE_REST: org.bukkit.Statistic
            // @ts-ignore
            public static readonly SWIM_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DAMAGE_DEALT_ABSORBED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DAMAGE_DEALT_RESISTED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DAMAGE_BLOCKED_BY_SHIELD: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DAMAGE_ABSORBED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly DAMAGE_RESISTED: org.bukkit.Statistic
            // @ts-ignore
            public static readonly CLEAN_SHULKER_BOX: org.bukkit.Statistic
            // @ts-ignore
            public static readonly OPEN_BARREL: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_BLAST_FURNACE: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_SMOKER: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_LECTERN: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_CAMPFIRE: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_CARTOGRAPHY_TABLE: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_LOOM: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_STONECUTTER: org.bukkit.Statistic
            // @ts-ignore
            public static readonly BELL_RING: org.bukkit.Statistic
            // @ts-ignore
            public static readonly RAID_TRIGGER: org.bukkit.Statistic
            // @ts-ignore
            public static readonly RAID_WIN: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_ANVIL: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_GRINDSTONE: org.bukkit.Statistic
            // @ts-ignore
            public static readonly TARGET_HIT: org.bukkit.Statistic
            // @ts-ignore
            public static readonly INTERACT_WITH_SMITHING_TABLE: org.bukkit.Statistic
            // @ts-ignore
            public static readonly STRIDER_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            public static values(): org.bukkit.Statistic[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.Statistic
            /**
             * Gets the type of this statistic.
             * @return the type of this statistic
             */
            // @ts-ignore
            public getType(): org.bukkit.Statistic.Type
            /**
             * Checks if this is a substatistic.
             * <p>
             * A substatistic exists en masse for each block, item, or entitytype, depending on
             * {@link #getType()}.
             * <p>
             * This is a redundant method and equivalent to checking
             * <code>getType() != Type.UNTYPED</code>
             * @return true if this is a substatistic
             */
            // @ts-ignore
            public isSubstatistic(): boolean
            /**
             * Checks if this is a substatistic dealing with blocks.
             * <p>
             * This is a redundant method and equivalent to checking
             * <code>getType() == Type.BLOCK</code>
             * @return true if this deals with blocks
             */
            // @ts-ignore
            public isBlock(): boolean
            // @ts-ignore
            public getKey(): org.bukkit.NamespacedKey
        }
    }
}
