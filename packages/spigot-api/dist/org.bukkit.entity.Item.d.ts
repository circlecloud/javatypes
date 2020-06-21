declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a dropped item.
             */
            // @ts-ignore
            interface Item extends org.bukkit.entity.Entity {
                /**
                 * Gets the item stack associated with this item drop.
                 * @return An item stack.
                 */
                // @ts-ignore
                getItemStack(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item stack associated with this item drop.
                 * @param stack An item stack.
                 */
                // @ts-ignore
                setItemStack(stack: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets the delay before this Item is available to be picked up by players
                 * @return Remaining delay
                 */
                // @ts-ignore
                getPickupDelay(): number /*int*/
                /**
                 * Sets the delay before this Item is available to be picked up by players
                 * @param delay New delay
                 */
                // @ts-ignore
                setPickupDelay(delay: number /*int*/): void
            }
        }
    }
}
