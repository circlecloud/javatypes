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
                /**
                 * Returns whether the item frame is be visible or not.
                 * @return whether the item frame is visible or not
                 */
                // @ts-ignore
                isVisible(): boolean
                /**
                 * Sets whether the item frame should be visible or not.
                 * @param visible whether the item frame is visible or not
                 */
                // @ts-ignore
                setVisible(visible: boolean): void
                /**
                 * Returns whether the item frame is "fixed" or not.
                 * When true it's not possible to destroy/move the frame (e.g. by damage,
                 * interaction, pistons, or missing supporting blocks), rotate the item or
                 * place/remove items.
                 * @return whether the item frame is fixed or not
                 */
                // @ts-ignore
                isFixed(): boolean
                /**
                 * Sets whether the item frame should be fixed or not.
                 * When set to true it's not possible to destroy/move the frame (e.g. by
                 * damage, interaction, pistons, or missing supporting blocks), rotate the
                 * item or place/remove items.
                 * @param visible whether the item frame is fixed or not
                 */
                // @ts-ignore
                setFixed(visible: boolean): void
            }
        }
    }
}
