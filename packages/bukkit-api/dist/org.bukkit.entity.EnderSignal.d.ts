declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an EnderSignal, which is created upon throwing an ender eye.
             */
            // @ts-ignore
            interface EnderSignal extends org.bukkit.entity.Entity {
                /**
                 * Get the location this EnderSignal is moving towards.
                 * @return the {#link Location} this EnderSignal is moving towards.
                 */
                // @ts-ignore
                getTargetLocation(): org.bukkit.Location
                /**
                 * Set the {@link Location} this EnderSignal is moving towards.
                 * <br>
                 * When setting a new target location, the {@link #getDropItem()} resets to
                 * a random value and the despawn timer gets set back to 0.
                 * @param location the new target location
                 */
                // @ts-ignore
                setTargetLocation(location: org.bukkit.Location): void
                /**
                 * Gets if the EnderSignal should drop an item on death.<br>
                 * If {@code true}, it will drop an item. If {@code false}, it will shatter.
                 * @return true if the EnderSignal will drop an item on death, or false if
                 *  it will shatter
                 */
                // @ts-ignore
                getDropItem(): boolean
                /**
                 * Sets if the EnderSignal should drop an item on death; or if it should
                 * shatter.
                 * @param drop true if the EnderSignal should drop an item on death, or
                 *  false if it should shatter.
                 */
                // @ts-ignore
                setDropItem(drop: boolean): void
                /**
                 * Get the {@link ItemStack} to be displayed while in the air and to be
                 * dropped on death.
                 * @return the item stack
                 */
                // @ts-ignore
                getItem(): org.bukkit.inventory.ItemStack
                /**
                 * Set the {@link ItemStack} to be displayed while in the air and to be
                 * dropped on death.
                 * @param item the item to set. If null, resets to the default eye of ender
                 */
                // @ts-ignore
                setItem(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets the amount of time this entity has been alive (in ticks).
                 * <br>
                 * When this number is greater than 80, it will despawn on the next tick.
                 * @return the number of ticks this EnderSignal has been alive.
                 */
                // @ts-ignore
                getDespawnTimer(): number /*int*/
                /**
                 * Set how long this entity has been alive (in ticks).
                 * <br>
                 * When this number is greater than 80, it will despawn on the next tick.
                 * @param timer how long (in ticks) this EnderSignal has been alive.
                 */
                // @ts-ignore
                setDespawnTimer(timer: number /*int*/): void
            }
        }
    }
}
