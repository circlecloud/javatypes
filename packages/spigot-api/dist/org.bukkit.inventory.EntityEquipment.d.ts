declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * An interface to a creatures inventory
             */
            // @ts-ignore
            interface EntityEquipment {
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their main hand.
                 * @return the currently held item
                 */
                // @ts-ignore
                getItemInMainHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item the entity is holding in their main hand.
                 * @param item The item to put into the entities hand
                 */
                // @ts-ignore
                setItemInMainHand(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the item the entity is currently holding
                 * in their off hand.
                 * @return the currently held item
                 */
                // @ts-ignore
                getItemInOffHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item the entity is holding in their off hand.
                 * @param item The item to put into the entities hand
                 */
                // @ts-ignore
                setItemInOffHand(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the item the entity is currently holding
                 * @deprecated entities can duel wield now use the methods for the
                 *       specific hand instead
                 * @see #getItemInMainHand()
                 * @see #getItemInOffHand()
                 * @return the currently held item
                 */
                // @ts-ignore
                getItemInHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item the entity is holding
                 * @deprecated entities can duel wield now use the methods for the
                 *       specific hand instead
                 * @see #setItemInMainHand(ItemStack)
                 * @see #setItemInOffHand(ItemStack)
                 * @param stack The item to put into the entities hand
                 */
                // @ts-ignore
                setItemInHand(stack: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the helmet currently being worn by the entity
                 * @return The helmet being worn
                 */
                // @ts-ignore
                getHelmet(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the helmet worn by the entity
                 * @param helmet The helmet to put on the entity
                 */
                // @ts-ignore
                setHelmet(helmet: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the chest plate currently being worn by the entity
                 * @return The chest plate being worn
                 */
                // @ts-ignore
                getChestplate(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the chest plate worn by the entity
                 * @param chestplate The chest plate to put on the entity
                 */
                // @ts-ignore
                setChestplate(chestplate: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the leggings currently being worn by the entity
                 * @return The leggings being worn
                 */
                // @ts-ignore
                getLeggings(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the leggings worn by the entity
                 * @param leggings The leggings to put on the entity
                 */
                // @ts-ignore
                setLeggings(leggings: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the boots currently being worn by the entity
                 * @return The boots being worn
                 */
                // @ts-ignore
                getBoots(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the boots worn by the entity
                 * @param boots The boots to put on the entity
                 */
                // @ts-ignore
                setBoots(boots: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of all worn armor
                 * @return The array of worn armor. Individual items may be null.
                 */
                // @ts-ignore
                getArmorContents(): org.bukkit.inventory.ItemStack[]
                /**
                 * Sets the entities armor to the provided array of ItemStacks
                 * @param items The items to set the armor as. Individual items may be null.
                 */
                // @ts-ignore
                setArmorContents(items: org.bukkit.inventory.ItemStack[]): void
                /**
                 * Clears the entity of all armor and held items
                 */
                // @ts-ignore
                clear(): void
                /**
                 * @deprecated entities can duel wield now use the methods for the specific
                 *  hand instead
                 * @see #getItemInMainHandDropChance()
                 * @see #getItemInOffHandDropChance()
                 * @return drop chance
                 */
                // @ts-ignore
                getItemInHandDropChance(): number /*float*/
                /**
                 * @deprecated entities can duel wield now use the methods for the specific
                 *  hand instead
                 * @see #setItemInMainHandDropChance(float)
                 * @see #setItemInOffHandDropChance(float)
                 * @param chance drop chance
                 */
                // @ts-ignore
                setItemInHandDropChance(chance: number /*float*/): void
                /**
                 * Gets the chance of the main hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @return chance of the currently held item being dropped (1 for players)
                 */
                // @ts-ignore
                getItemInMainHandDropChance(): number /*float*/
                /**
                 * Sets the chance of the item this creature is currently holding in their
                 * main hand being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @param chance the chance of the main hand item being dropped
                 * @throws UnsupportedOperationException when called on players
                 */
                // @ts-ignore
                setItemInMainHandDropChance(chance: number /*float*/): void
                /**
                 * Gets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @return chance of the off hand item being dropped (1 for players)
                 */
                // @ts-ignore
                getItemInOffHandDropChance(): number /*float*/
                /**
                 * Sets the chance of the off hand item being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @param chance the chance of off hand item being dropped
                 * @throws UnsupportedOperationException when called on players
                 */
                // @ts-ignore
                setItemInOffHandDropChance(chance: number /*float*/): void
                /**
                 * Gets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @return the chance of the helmet being dropped (1 for players)
                 */
                // @ts-ignore
                getHelmetDropChance(): number /*float*/
                /**
                 * Sets the chance of the helmet being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @param chance of the helmet being dropped
                 * @throws UnsupportedOperationException when called on players
                 */
                // @ts-ignore
                setHelmetDropChance(chance: number /*float*/): void
                /**
                 * Gets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @return the chance of the chest plate being dropped (1 for players)
                 */
                // @ts-ignore
                getChestplateDropChance(): number /*float*/
                /**
                 * Sets the chance of the chest plate being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @param chance of the chest plate being dropped
                 * @throws UnsupportedOperationException when called on players
                 */
                // @ts-ignore
                setChestplateDropChance(chance: number /*float*/): void
                /**
                 * Gets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @return the chance of the leggings being dropped (1 for players)
                 */
                // @ts-ignore
                getLeggingsDropChance(): number /*float*/
                /**
                 * Sets the chance of the leggings being dropped upon this creature's
                 * death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @param chance chance of the leggings being dropped
                 * @throws UnsupportedOperationException when called on players
                 */
                // @ts-ignore
                setLeggingsDropChance(chance: number /*float*/): void
                /**
                 * Gets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @return the chance of the boots being dropped (1 for players)
                 */
                // @ts-ignore
                getBootsDropChance(): number /*float*/
                /**
                 * Sets the chance of the boots being dropped upon this creature's death.
                 * <ul>
                 * <li>A drop chance of 0.0F will never drop
                 * <li>A drop chance of 1.0F will always drop
                 * </ul>
                 * @param chance of the boots being dropped
                 * @throws UnsupportedOperationException when called on players
                 */
                // @ts-ignore
                setBootsDropChance(chance: number /*float*/): void
                /**
                 * Get the entity this EntityEquipment belongs to
                 * @return the entity this EntityEquipment belongs to
                 */
                // @ts-ignore
                getHolder(): org.bukkit.entity.Entity
            }
        }
    }
}
