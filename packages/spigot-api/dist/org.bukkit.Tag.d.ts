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
            
            /**
             * Vanilla block tag representing all colors of wool.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all plank variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all regular/mossy/cracked/chiseled stone
             * bricks.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wooden buttons.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all buttons (inherits from
             * {@link #WOODEN_BUTTONS}.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all colors of carpet.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wooden doors.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wooden stairs.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wooden slabs.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wooden fences.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wooden pressure plates.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wooden trapdoors.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all doors (inherits from
             * {@link #WOODEN_DOORS}.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all sapling variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all log and bark variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all dark oak log and bark variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all oak log and bark variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all birch log and bark variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all acacia log and bark variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all jungle log and bark variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all spruce log and bark variants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all banner blocks.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all sand blocks.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all stairs.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all slabs.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all walls.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all damaged and undamaged anvils.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all Minecart rails.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all leaves fans.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all trapdoors (inherits from
             * {@link #WOODEN_TRAPDOORS}.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all empty and filled flower pots.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all small flowers.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all beds.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all fences.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all tall flowers.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all flowers.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all shulker boxes.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag denoting blocks that enderman may pick up and hold.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag denoting ice blocks.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag denoting all valid mob spawn positions.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag denoting impermeable blocks which do not drip fluids.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag denoting all underwater blocks which may be bonemealed.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all coral blocks.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wall corals.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all coral plants.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all coral.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag denoting all blocks bamboo may be planted on.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all standing signs.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all wall signs.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all signs.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all blocks immune to dragons.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all blocks immune to withers.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all beehives.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all crops.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all bee growables.
             */
            // @ts-ignore
            
            /**
             * Vanilla block tag representing all portals.
             */
            // @ts-ignore
            
            /**
             * Key for the built in item registry.
             */
            // @ts-ignore
            
            /**
             * Vanilla item tag representing all banner items.
             */
            // @ts-ignore
            
            /**
             * Vanilla item tag representing all boat items.
             */
            // @ts-ignore
            
            /**
             * Vanilla item tag representing all fish items.
             */
            // @ts-ignore
            
            /**
             * Vanilla item tag representing all music disc items.
             */
            // @ts-ignore
            
            /**
             * Vanilla item tag representing all coal items.
             */
            // @ts-ignore
            
            /**
             * Vanilla item tag representing all arrow items.
             */
            // @ts-ignore
            
            /**
             * Vanilla item tag representing all books that may be placed on lecterns.
             */
            // @ts-ignore
            
            /**
             * Returns whether or not this tag has an entry for the specified item.
             * @param item to check
             * @return if it is tagged
             */
            // @ts-ignore
            isTagged(item: T extends org.bukkit.Keyed): boolean
            /**
             * Gets an immutable set of all tagged items.
             * @return set of tagged items
             */
            // @ts-ignore
            getValues(): java.util.Set<T>
        }
    }
}
