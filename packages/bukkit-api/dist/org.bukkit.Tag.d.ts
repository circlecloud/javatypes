declare namespace org {
    namespace bukkit {
        /**
         * Represents a tag that may be defined by the server or a resource pack to
         * group like things together.
         * Note that whilst all tags defined within this interface must be present in
         * implementations, their existence is not guaranteed across future versions.
         * @param <T> the type of things grouped by this tag
         */
        // @ts-ignore
        interface Tag<T extends org.bukkit.Keyed> extends org.bukkit.Keyed {
            /**
             * Key for the built in block registry.
             */
            // @ts-ignore
            readonly REGISTRY_BLOCKS: java.lang.String | string
            /**
             * Vanilla block tag representing all colors of wool.
             */
            // @ts-ignore
            readonly WOOL: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all plank variants.
             */
            // @ts-ignore
            readonly PLANKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all regular/mossy/cracked/chiseled stone
             * bricks.
             */
            // @ts-ignore
            readonly STONE_BRICKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wooden buttons.
             */
            // @ts-ignore
            readonly WOODEN_BUTTONS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all buttons (inherits from
             * {@link #WOODEN_BUTTONS}.
             */
            // @ts-ignore
            readonly BUTTONS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all colors of carpet.
             */
            // @ts-ignore
            readonly CARPETS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wooden doors.
             */
            // @ts-ignore
            readonly WOODEN_DOORS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wooden stairs.
             */
            // @ts-ignore
            readonly WOODEN_STAIRS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wooden slabs.
             */
            // @ts-ignore
            readonly WOODEN_SLABS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wooden fences.
             */
            // @ts-ignore
            readonly WOODEN_FENCES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all pressure plates.
             */
            // @ts-ignore
            readonly PRESSURE_PLATES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wooden pressure plates.
             */
            // @ts-ignore
            readonly WOODEN_PRESSURE_PLATES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all stone pressure plates.
             */
            // @ts-ignore
            readonly STONE_PRESSURE_PLATES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wooden trapdoors.
             */
            // @ts-ignore
            readonly WOODEN_TRAPDOORS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all doors (inherits from
             * {@link #WOODEN_DOORS}.
             */
            // @ts-ignore
            readonly DOORS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all sapling variants.
             */
            // @ts-ignore
            readonly SAPLINGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all log and bark variants that burn.
             */
            // @ts-ignore
            readonly LOGS_THAT_BURN: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all log and bark variants.
             */
            // @ts-ignore
            readonly LOGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all dark oak log and bark variants.
             */
            // @ts-ignore
            readonly DARK_OAK_LOGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all oak log and bark variants.
             */
            // @ts-ignore
            readonly OAK_LOGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all birch log and bark variants.
             */
            // @ts-ignore
            readonly BIRCH_LOGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all acacia log and bark variants.
             */
            // @ts-ignore
            readonly ACACIA_LOGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all jungle log and bark variants.
             */
            // @ts-ignore
            readonly JUNGLE_LOGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all spruce log and bark variants.
             */
            // @ts-ignore
            readonly SPRUCE_LOGS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all crimson stems.
             */
            // @ts-ignore
            readonly CRIMSON_STEMS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all warped stems.
             */
            // @ts-ignore
            readonly WARPED_STEMS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all banner blocks.
             */
            // @ts-ignore
            readonly BANNERS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all sand blocks.
             */
            // @ts-ignore
            readonly SAND: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all stairs.
             */
            // @ts-ignore
            readonly STAIRS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all slabs.
             */
            // @ts-ignore
            readonly SLABS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all walls.
             */
            // @ts-ignore
            readonly WALLS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all damaged and undamaged anvils.
             */
            // @ts-ignore
            readonly ANVIL: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all Minecart rails.
             */
            // @ts-ignore
            readonly RAILS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all leaves fans.
             */
            // @ts-ignore
            readonly LEAVES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all trapdoors (inherits from
             * {@link #WOODEN_TRAPDOORS}.
             */
            // @ts-ignore
            readonly TRAPDOORS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all empty and filled flower pots.
             */
            // @ts-ignore
            readonly FLOWER_POTS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all small flowers.
             */
            // @ts-ignore
            readonly SMALL_FLOWERS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all beds.
             */
            // @ts-ignore
            readonly BEDS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all fences.
             */
            // @ts-ignore
            readonly FENCES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all tall flowers.
             */
            // @ts-ignore
            readonly TALL_FLOWERS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all flowers.
             */
            // @ts-ignore
            readonly FLOWERS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all piglin repellents.
             */
            // @ts-ignore
            readonly PIGLIN_REPELLENTS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all gold ores.
             */
            // @ts-ignore
            readonly GOLD_ORES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all non flammable wood.
             */
            // @ts-ignore
            readonly NON_FLAMMABLE_WOOD: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag denoting blocks that enderman may pick up and hold.
             */
            // @ts-ignore
            readonly ENDERMAN_HOLDABLE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag denoting ice blocks.
             */
            // @ts-ignore
            readonly ICE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag denoting all valid mob spawn positions.
             */
            // @ts-ignore
            readonly VALID_SPAWN: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag denoting impermeable blocks which do not drip fluids.
             */
            // @ts-ignore
            readonly IMPERMEABLE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag denoting all underwater blocks which may be bonemealed.
             */
            // @ts-ignore
            readonly UNDERWATER_BONEMEALS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all coral blocks.
             */
            // @ts-ignore
            readonly CORAL_BLOCKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wall corals.
             */
            // @ts-ignore
            readonly WALL_CORALS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all coral plants.
             */
            // @ts-ignore
            readonly CORAL_PLANTS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all coral.
             */
            // @ts-ignore
            readonly CORALS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag denoting all blocks bamboo may be planted on.
             */
            // @ts-ignore
            readonly BAMBOO_PLANTABLE_ON: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all standing signs.
             */
            // @ts-ignore
            readonly STANDING_SIGNS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wall signs.
             */
            // @ts-ignore
            readonly WALL_SIGNS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all signs.
             */
            // @ts-ignore
            readonly SIGNS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks immune to dragons.
             */
            // @ts-ignore
            readonly DRAGON_IMMUNE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks immune to withers.
             */
            // @ts-ignore
            readonly WITHER_IMMUNE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all base blocks used for wither summoning.
             */
            // @ts-ignore
            readonly WITHER_SUMMON_BASE_BLOCKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all beehives.
             */
            // @ts-ignore
            readonly BEEHIVES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all crops.
             */
            // @ts-ignore
            readonly CROPS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all bee growables.
             */
            // @ts-ignore
            readonly BEE_GROWABLES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all portals.
             */
            // @ts-ignore
            readonly PORTALS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all fire blocks.
             */
            // @ts-ignore
            readonly FIRE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all nylium blocks.
             */
            // @ts-ignore
            readonly NYLIUM: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wart blocks.
             */
            // @ts-ignore
            readonly WART_BLOCKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all beacon base blocks.
             */
            // @ts-ignore
            readonly BEACON_BASE_BLOCKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks affected by the soul speed enchantment.
             */
            // @ts-ignore
            readonly SOUL_SPEED_BLOCKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all wall post overrides.
             */
            // @ts-ignore
            readonly WALL_POST_OVERRIDE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all climbable blocks.
             */
            // @ts-ignore
            readonly CLIMBABLE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all shulker boxes.
             */
            // @ts-ignore
            readonly SHULKER_BOXES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all hoglin repellents.
             */
            // @ts-ignore
            readonly HOGLIN_REPELLENTS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all soul fire base blocks.
             */
            // @ts-ignore
            readonly SOUL_FIRE_BASE_BLOCKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all warm strider blocks.
             */
            // @ts-ignore
            readonly STRIDER_WARM_BLOCKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all campfires.
             */
            // @ts-ignore
            readonly CAMPFIRES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks guarded by piglins.
             */
            // @ts-ignore
            readonly GUARDED_BY_PIGLINS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks that prevent inside mob
             * spawning.
             */
            // @ts-ignore
            readonly PREVENT_MOB_SPAWNING_INSIDE: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all fence gates.
             */
            // @ts-ignore
            readonly FENCE_GATES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all unstable bottom center blocks.
             */
            // @ts-ignore
            readonly UNSTABLE_BOTTOM_CENTER: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks that burn forever in the
             * overworld.
             */
            // @ts-ignore
            readonly INFINIBURN_OVERWORLD: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks that burn forever in the
             * nether.
             */
            // @ts-ignore
            readonly INFINIBURN_NETHER: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla block tag representing all blocks that burn forever in the end.
             */
            // @ts-ignore
            readonly INFINIBURN_END: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Key for the built in item registry.
             */
            // @ts-ignore
            readonly REGISTRY_ITEMS: java.lang.String | string
            /**
             * Vanilla item tag representing all items loved by piglins.
             */
            // @ts-ignore
            readonly ITEMS_PIGLIN_LOVED: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all banner items.
             */
            // @ts-ignore
            readonly ITEMS_BANNERS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all boat items.
             */
            // @ts-ignore
            readonly ITEMS_BOATS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all fish items.
             */
            // @ts-ignore
            readonly ITEMS_FISHES: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all music disc items.
             */
            // @ts-ignore
            readonly ITEMS_MUSIC_DISCS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all music disc items dropped by creepers.
             */
            // @ts-ignore
            readonly ITEMS_CREEPER_DROP_MUSIC_DISCS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all coal items.
             */
            // @ts-ignore
            readonly ITEMS_COALS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all arrow items.
             */
            // @ts-ignore
            readonly ITEMS_ARROWS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all books that may be placed on lecterns.
             */
            // @ts-ignore
            readonly ITEMS_LECTERN_BOOKS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all items that may be placed in beacons.
             */
            // @ts-ignore
            readonly ITEMS_BEACON_PAYMENT_ITEMS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all stone tool materials.
             */
            // @ts-ignore
            readonly ITEMS_STONE_TOOL_MATERIALS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Vanilla item tag representing all furnace materials.
             */
            // @ts-ignore
            readonly ITEMS_FURNACE_MATERIALS: org.bukkit.Tag<org.bukkit.Material>
            /**
             * Key for the built in fluid registry.
             */
            // @ts-ignore
            readonly REGISTRY_FLUIDS: java.lang.String | string
            /**
             * Vanilla fluid tag representing lava and flowing lava.
             */
            // @ts-ignore
            readonly FLUIDS_LAVA: org.bukkit.Tag<org.bukkit.Fluid>
            /**
             * Vanilla fluid tag representing water and flowing water.
             */
            // @ts-ignore
            readonly FLUIDS_WATER: org.bukkit.Tag<org.bukkit.Fluid>
            /**
             * Returns whether or not this tag has an entry for the specified item.
             * @param item to check
             * @return if it is tagged
             */
            // @ts-ignore
            isTagged(item: T): boolean
            /**
             * Gets an immutable set of all tagged items.
             * @return set of tagged items
             */
            // @ts-ignore
            getValues(): Array<T>
        }
    }
}
