declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of a Player, including the four armor slots and any extra slots.
             */
            // @ts-ignore
            interface PlayerInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get all ItemStacks from the armor slots
                 * @return All the ItemStacks from the armor slots. Individual items can be null.
                 */
                // @ts-ignore
                getArmorContents(): org.bukkit.inventory.ItemStack[]
                /**
                 * Get all additional ItemStacks stored in this inventory.
                 * <br>
                 * NB: What defines an extra slot is up to the implementation, however it
                 * will not be contained within {@link #getStorageContents()} or
                 * {@link #getArmorContents()}
                 * @return All additional ItemStacks. Individual items can be null.
                 */
                // @ts-ignore
                getExtraContents(): org.bukkit.inventory.ItemStack[]
                /**
                 * Return the ItemStack from the helmet slot
                 * @return The ItemStack in the helmet slot
                 */
                // @ts-ignore
                getHelmet(): org.bukkit.inventory.ItemStack
                /**
                 * Return the ItemStack from the chestplate slot
                 * @return The ItemStack in the chestplate slot
                 */
                // @ts-ignore
                getChestplate(): org.bukkit.inventory.ItemStack
                /**
                 * Return the ItemStack from the leg slot
                 * @return The ItemStack in the leg slot
                 */
                // @ts-ignore
                getLeggings(): org.bukkit.inventory.ItemStack
                /**
                 * Return the ItemStack from the boots slot
                 * @return The ItemStack in the boots slot
                 */
                // @ts-ignore
                getBoots(): org.bukkit.inventory.ItemStack
                /**
                 * Stores the ItemStack at the given index of the inventory.
                 * <p>
                 * Indexes 0 through 8 refer to the hotbar. 9 through 35 refer to the main inventory, counting up from 9 at the top
                 * left corner of the inventory, moving to the right, and moving to the row below it back on the left side when it
                 * reaches the end of the row. It follows the same path in the inventory like you would read a book.
                 * <p>
                 * Indexes 36 through 39 refer to the armor slots. Though you can set armor with this method using these indexes,
                 * you are encouraged to use the provided methods for those slots.
                 * <p>
                 * Index 40 refers to the off hand (shield) item slot. Though you can set off hand with this method using this index,
                 * you are encouraged to use the provided method for this slot.
                 * <p>
                 * If you attempt to use this method with an index less than 0 or greater than 40, an ArrayIndexOutOfBounds
                 * exception will be thrown.
                 * @param index The index where to put the ItemStack
                 * @param item The ItemStack to set
                 * @throws ArrayIndexOutOfBoundsException when index &lt; 0 || index &gt; 40
                 * @see #setBoots(ItemStack)
                 * @see #setChestplate(ItemStack)
                 * @see #setHelmet(ItemStack)
                 * @see #setLeggings(ItemStack)
                 * @see #setItemInOffHand(ItemStack)
                 */
                // @ts-ignore
                setItem(index: number /*int*/, item: org.bukkit.inventory.ItemStack): void
                /**
                 * Stores the ItemStack at the given equipment slot in the inventory.
                 * @param slot the slot to put the ItemStack
                 * @param item the ItemStack to set
                 * @see #setItem(int, ItemStack)
                 */
                // @ts-ignore
                setItem(slot: org.bukkit.inventory.EquipmentSlot, item: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets the ItemStack at the given equipment slot in the inventory.
                 * @param slot the slot to get the ItemStack
                 * @return the ItemStack in the given slot
                 */
                // @ts-ignore
                getItem(slot: org.bukkit.inventory.EquipmentSlot): org.bukkit.inventory.ItemStack
                /**
                 * Put the given ItemStacks into the armor slots
                 * @param items The ItemStacks to use as armour
                 */
                // @ts-ignore
                setArmorContents(items: org.bukkit.inventory.ItemStack[]): void
                /**
                 * Put the given ItemStacks into the extra slots
                 * <br>
                 * See {@link #getExtraContents()} for an explanation of extra slots.
                 * @param items The ItemStacks to use as extra
                 */
                // @ts-ignore
                setExtraContents(items: org.bukkit.inventory.ItemStack[]): void
                /**
                 * Put the given ItemStack into the helmet slot. This does not check if
                 * the ItemStack is a helmet
                 * @param helmet The ItemStack to use as helmet
                 */
                // @ts-ignore
                setHelmet(helmet: org.bukkit.inventory.ItemStack): void
                /**
                 * Put the given ItemStack into the chestplate slot. This does not check
                 * if the ItemStack is a chestplate
                 * @param chestplate The ItemStack to use as chestplate
                 */
                // @ts-ignore
                setChestplate(chestplate: org.bukkit.inventory.ItemStack): void
                /**
                 * Put the given ItemStack into the leg slot. This does not check if the
                 * ItemStack is a pair of leggings
                 * @param leggings The ItemStack to use as leggings
                 */
                // @ts-ignore
                setLeggings(leggings: org.bukkit.inventory.ItemStack): void
                /**
                 * Put the given ItemStack into the boots slot. This does not check if the
                 * ItemStack is a boots
                 * @param boots The ItemStack to use as boots
                 */
                // @ts-ignore
                setBoots(boots: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the item the player is currently holding
                 * in their main hand.
                 * @return the currently held item
                 */
                // @ts-ignore
                getItemInMainHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item the player is holding in their main hand.
                 * @param item The item to put into the player's hand
                 */
                // @ts-ignore
                setItemInMainHand(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the item the player is currently holding
                 * in their off hand.
                 * @return the currently held item
                 */
                // @ts-ignore
                getItemInOffHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item the player is holding in their off hand.
                 * @param item The item to put into the player's hand
                 */
                // @ts-ignore
                setItemInOffHand(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Gets a copy of the item the player is currently holding
                 * @deprecated players can duel wield now use the methods for the
                 *       specific hand instead
                 * @see #getItemInMainHand()
                 * @see #getItemInOffHand()
                 * @return the currently held item
                 */
                // @ts-ignore
                getItemInHand(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item the player is holding
                 * @deprecated players can duel wield now use the methods for the
                 *       specific hand instead
                 * @see #setItemInMainHand(ItemStack)
                 * @see #setItemInOffHand(ItemStack)
                 * @param stack The item to put into the player's hand
                 */
                // @ts-ignore
                setItemInHand(stack: org.bukkit.inventory.ItemStack): void
                /**
                 * Get the slot number of the currently held item
                 * @return Held item slot number
                 */
                // @ts-ignore
                getHeldItemSlot(): int
                /**
                 * Set the slot number of the currently held item.
                 * <p>
                 * This validates whether the slot is between 0 and 8 inclusive.
                 * @param slot The new slot number
                 * @throws IllegalArgumentException Thrown if slot is not between 0 and 8
                 *      inclusive
                 */
                // @ts-ignore
                setHeldItemSlot(slot: number /*int*/): void
                // @ts-ignore
                getHolder(): org.bukkit.entity.HumanEntity
            }
        }
    }
}
