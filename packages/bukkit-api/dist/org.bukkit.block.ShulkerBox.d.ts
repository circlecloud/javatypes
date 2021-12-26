declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a ShulkerBox.
             */
            // @ts-ignore
            interface ShulkerBox extends org.bukkit.block.Container, org.bukkit.loot.Lootable, org.bukkit.block.Lidded {
                /**
                 * Get the {@link DyeColor} corresponding to this ShulkerBox
                 * @return the {#link DyeColor} of this ShulkerBox
                 */
                // @ts-ignore
                getColor(): org.bukkit.DyeColor
            }
        }
    }
}
