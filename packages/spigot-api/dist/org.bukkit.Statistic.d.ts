declare namespace org {
    namespace bukkit {
        /**
         * Represents a countable statistic, which is tracked by the server.
         */
        // @ts-ignore
        class Statistic extends java.lang.Enum<org.bukkit.Statistic> implements org.bukkit.Keyed {
            // @ts-ignore
            readonly DAMAGE_DEALT: org.bukkit.Statistic
            // @ts-ignore
            readonly DAMAGE_TAKEN: org.bukkit.Statistic
            // @ts-ignore
            readonly DEATHS: org.bukkit.Statistic
            // @ts-ignore
            readonly MOB_KILLS: org.bukkit.Statistic
            // @ts-ignore
            readonly PLAYER_KILLS: org.bukkit.Statistic
            // @ts-ignore
            readonly FISH_CAUGHT: org.bukkit.Statistic
            // @ts-ignore
            readonly ANIMALS_BRED: org.bukkit.Statistic
            // @ts-ignore
            readonly LEAVE_GAME: org.bukkit.Statistic
            // @ts-ignore
            readonly JUMP: org.bukkit.Statistic
            // @ts-ignore
            readonly DROP_COUNT: org.bukkit.Statistic
            // @ts-ignore
            readonly DROP: org.bukkit.Statistic
            // @ts-ignore
            readonly PICKUP: org.bukkit.Statistic
            /**
             * Name is misleading, actually records ticks played.
             */
            // @ts-ignore
            readonly PLAY_ONE_MINUTE: org.bukkit.Statistic
            // @ts-ignore
            readonly WALK_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly WALK_ON_WATER_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly FALL_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly SNEAK_TIME: org.bukkit.Statistic
            // @ts-ignore
            readonly CLIMB_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly FLY_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly WALK_UNDER_WATER_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly MINECART_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly BOAT_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly PIG_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly HORSE_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly SPRINT_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly CROUCH_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly AVIATE_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly MINE_BLOCK: org.bukkit.Statistic
            // @ts-ignore
            readonly USE_ITEM: org.bukkit.Statistic
            // @ts-ignore
            readonly BREAK_ITEM: org.bukkit.Statistic
            // @ts-ignore
            readonly CRAFT_ITEM: org.bukkit.Statistic
            // @ts-ignore
            readonly KILL_ENTITY: org.bukkit.Statistic
            // @ts-ignore
            readonly ENTITY_KILLED_BY: org.bukkit.Statistic
            // @ts-ignore
            readonly TIME_SINCE_DEATH: org.bukkit.Statistic
            // @ts-ignore
            readonly TALKED_TO_VILLAGER: org.bukkit.Statistic
            // @ts-ignore
            readonly TRADED_WITH_VILLAGER: org.bukkit.Statistic
            // @ts-ignore
            readonly CAKE_SLICES_EATEN: org.bukkit.Statistic
            // @ts-ignore
            readonly CAULDRON_FILLED: org.bukkit.Statistic
            // @ts-ignore
            readonly CAULDRON_USED: org.bukkit.Statistic
            // @ts-ignore
            readonly ARMOR_CLEANED: org.bukkit.Statistic
            // @ts-ignore
            readonly BANNER_CLEANED: org.bukkit.Statistic
            // @ts-ignore
            readonly BREWINGSTAND_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            readonly BEACON_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            readonly DROPPER_INSPECTED: org.bukkit.Statistic
            // @ts-ignore
            readonly HOPPER_INSPECTED: org.bukkit.Statistic
            // @ts-ignore
            readonly DISPENSER_INSPECTED: org.bukkit.Statistic
            // @ts-ignore
            readonly NOTEBLOCK_PLAYED: org.bukkit.Statistic
            // @ts-ignore
            readonly NOTEBLOCK_TUNED: org.bukkit.Statistic
            // @ts-ignore
            readonly FLOWER_POTTED: org.bukkit.Statistic
            // @ts-ignore
            readonly TRAPPED_CHEST_TRIGGERED: org.bukkit.Statistic
            // @ts-ignore
            readonly ENDERCHEST_OPENED: org.bukkit.Statistic
            // @ts-ignore
            readonly ITEM_ENCHANTED: org.bukkit.Statistic
            // @ts-ignore
            readonly RECORD_PLAYED: org.bukkit.Statistic
            // @ts-ignore
            readonly FURNACE_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            readonly CRAFTING_TABLE_INTERACTION: org.bukkit.Statistic
            // @ts-ignore
            readonly CHEST_OPENED: org.bukkit.Statistic
            // @ts-ignore
            readonly SLEEP_IN_BED: org.bukkit.Statistic
            // @ts-ignore
            readonly SHULKER_BOX_OPENED: org.bukkit.Statistic
            // @ts-ignore
            readonly TIME_SINCE_REST: org.bukkit.Statistic
            // @ts-ignore
            readonly SWIM_ONE_CM: org.bukkit.Statistic
            // @ts-ignore
            readonly DAMAGE_DEALT_ABSORBED: org.bukkit.Statistic
            // @ts-ignore
            readonly DAMAGE_DEALT_RESISTED: org.bukkit.Statistic
            // @ts-ignore
            readonly DAMAGE_BLOCKED_BY_SHIELD: org.bukkit.Statistic
            // @ts-ignore
            readonly DAMAGE_ABSORBED: org.bukkit.Statistic
            // @ts-ignore
            readonly DAMAGE_RESISTED: org.bukkit.Statistic
            // @ts-ignore
            readonly CLEAN_SHULKER_BOX: org.bukkit.Statistic
            // @ts-ignore
            readonly OPEN_BARREL: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_BLAST_FURNACE: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_SMOKER: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_LECTERN: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_CAMPFIRE: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_CARTOGRAPHY_TABLE: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_LOOM: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_STONECUTTER: org.bukkit.Statistic
            // @ts-ignore
            readonly BELL_RING: org.bukkit.Statistic
            // @ts-ignore
            readonly RAID_TRIGGER: org.bukkit.Statistic
            // @ts-ignore
            readonly RAID_WIN: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_ANVIL: org.bukkit.Statistic
            // @ts-ignore
            readonly INTERACT_WITH_GRINDSTONE: org.bukkit.Statistic
            // @ts-ignore
            values(): org.bukkit.Statistic[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.Statistic
            /**
             * Gets the type of this statistic.
             * @return the type of this statistic
             */
            // @ts-ignore
            getType(): org.bukkit.Statistic.Type
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
            isSubstatistic(): boolean
            /**
             * Checks if this is a substatistic dealing with blocks.
             * <p>
             * This is a redundant method and equivalent to checking
             * <code>getType() == Type.BLOCK</code>
             * @return true if this deals with blocks
             */
            // @ts-ignore
            isBlock(): boolean
            // @ts-ignore
            getKey(): org.bukkit.NamespacedKey
        }
    }
}
