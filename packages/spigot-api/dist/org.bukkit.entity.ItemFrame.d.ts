declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an Item Frame
             */
            // @ts-ignore
            interface ItemFrame extends org.bukkit.entity.Hanging {
                /**
                 * Get the item in this frame
                 * @return a defensive copy the item in this item frame
                 */
                // @ts-ignore
                getItem(): org.bukkit.inventory.ItemStack
                /**
                 * Set the item in this frame
                 * @param item the new item
                 */
                // @ts-ignore
                setItem(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Set the item in this frame
                 * @param item the new item
                 * @param playSound whether or not to play the item placement sound
                 */
                // @ts-ignore
                setItem(item: org.bukkit.inventory.ItemStack, playSound: boolean): void
                /**
                 * Get the rotation of the frame's item
                 * @return the direction
                 */
                // @ts-ignore
                getRotation(): org.bukkit.Rotation
                /**
                 * Set the rotation of the frame's item
                 * @param rotation the new rotation
                 * @throws IllegalArgumentException if rotation is null
                 */
                // @ts-ignore
                setRotation(rotation: org.bukkit.Rotation): void
            }
        }
    }
}
