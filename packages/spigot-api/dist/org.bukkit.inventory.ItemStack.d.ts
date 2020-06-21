declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a stack of items.
             * <p>
             * <b>IMPORTANT: An <i>Item</i>Stack is only designed to contain <i>items</i>. Do not
             * use this class to encapsulate Materials for which {@link Material#isItem()}
             * returns false.</b>
             */
            // @ts-ignore
            class ItemStack extends java.lang.Object implements java.lang.Cloneable, org.bukkit.configuration.serialization.ConfigurationSerializable {
                // @ts-ignore
                constructor()
                /**
                 * Defaults stack size to 1, with no extra data.
                 * <p>
                 * <b>IMPORTANT: An <i>Item</i>Stack is only designed to contain
                 * <i>items</i>. Do not use this class to encapsulate Materials for which
                 * {@link Material#isItem()} returns false.</b>
                 * @param type item material
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * An item stack with no extra data.
                 * <p>
                 * <b>IMPORTANT: An <i>Item</i>Stack is only designed to contain
                 * <i>items</i>. Do not use this class to encapsulate Materials for which
                 * {@link Material#isItem()} returns false.</b>
                 * @param type item material
                 * @param amount stack size
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, amount: number /*int*/)
                /**
                 * An item stack with the specified damage / durability
                 * @param type item material
                 * @param amount stack size
                 * @param damage durability / damage
                 * @deprecated see {#link #setDurability(short)}
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, amount: number /*int*/, damage: number /*short*/)
                /**
                 * @param type the type
                 * @param amount the amount in the stack
                 * @param damage the damage value of the item
                 * @param data the data value or null
                 * @deprecated this method uses an ambiguous data byte object
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, amount: number /*int*/, damage: number /*short*/, data: java.lang.Byte | number)
                /**
                 * Creates a new item stack derived from the specified stack
                 * @param stack the stack to copy
                 * @throws IllegalArgumentException if the specified stack is null or
                 *      returns an item meta not created by the item factory
                 */
                // @ts-ignore
                constructor(stack: org.bukkit.inventory.ItemStack)
                /**
                 * Gets the type of this item
                 * @return Type of the items in this stack
                 */
                // @ts-ignore
                public getType(): org.bukkit.Material
                /**
                 * Sets the type of this item
                 * <p>
                 * Note that in doing so you will reset the MaterialData for this stack.
                 * <p>
                 * <b>IMPORTANT: An <i>Item</i>Stack is only designed to contain
                 * <i>items</i>. Do not use this class to encapsulate Materials for which
                 * {@link Material#isItem()} returns false.</b>
                 * @param type New type to set the items in this stack to
                 */
                // @ts-ignore
                public setType(type: org.bukkit.Material): void
                /**
                 * Gets the amount of items in this stack
                 * @return Amount of items in this stack
                 */
                // @ts-ignore
                public getAmount(): number /*int*/
                /**
                 * Sets the amount of items in this stack
                 * @param amount New amount of items in this stack
                 */
                // @ts-ignore
                public setAmount(amount: number /*int*/): void
                /**
                 * Gets the MaterialData for this stack of items
                 * @return MaterialData for this item
                 */
                // @ts-ignore
                public getData(): org.bukkit.material.MaterialData
                /**
                 * Sets the MaterialData for this stack of items
                 * @param data New MaterialData for this item
                 */
                // @ts-ignore
                public setData(data: org.bukkit.material.MaterialData): void
                /**
                 * Sets the durability of this item
                 * @param durability Durability of this item
                 * @deprecated durability is now part of ItemMeta. To avoid confusion and
                 *  misuse, {#link #getItemMeta()}, {@link #setItemMeta(ItemMeta)} and
                 *  {@link Damageable#setDamage(int)} should be used instead. This is because
                 *  any call to this method will be overwritten by subsequent setting of
                 *  ItemMeta which was created before this call.
                 */
                // @ts-ignore
                public setDurability(durability: number /*short*/): void
                /**
                 * Gets the durability of this item
                 * @return Durability of this item
                 * @deprecated see {#link #setDurability(short)}
                 */
                // @ts-ignore
                public getDurability(): number /*short*/
                /**
                 * Get the maximum stacksize for the material hold in this ItemStack.
                 * (Returns -1 if it has no idea)
                 * @return The maximum you can stack this material to.
                 */
                // @ts-ignore
                public getMaxStackSize(): number /*int*/
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * This method is the same as equals, but does not consider stack size
                 * (amount).
                 * @param stack the item stack to compare to
                 * @return true if the two stacks are equal, ignoring the amount
                 */
                // @ts-ignore
                public isSimilar(stack: org.bukkit.inventory.ItemStack): boolean
                // @ts-ignore
                public clone(): org.bukkit.inventory.ItemStack
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Checks if this ItemStack contains the given {@link Enchantment}
                 * @param ench Enchantment to test
                 * @return True if this has the given enchantment
                 */
                // @ts-ignore
                public containsEnchantment(ench: org.bukkit.enchantments.Enchantment): boolean
                /**
                 * Gets the level of the specified enchantment on this item stack
                 * @param ench Enchantment to check
                 * @return Level of the enchantment, or 0
                 */
                // @ts-ignore
                public getEnchantmentLevel(ench: org.bukkit.enchantments.Enchantment): number /*int*/
                /**
                 * Gets a map containing all enchantments and their levels on this item.
                 * @return Map of enchantments.
                 */
                // @ts-ignore
                public getEnchantments(): java.util.Map<org.bukkit.enchantments.Enchantment, java.lang.Integer | number>
                /**
                 * Adds the specified enchantments to this item stack.
                 * <p>
                 * This method is the same as calling {@link
                 * #addEnchantment(org.bukkit.enchantments.Enchantment, int)} for each
                 * element of the map.
                 * @param enchantments Enchantments to add
                 * @throws IllegalArgumentException if the specified enchantments is null
                 * @throws IllegalArgumentException if any specific enchantment or level
                 *      is null. <b>Warning</b>: Some enchantments may be added before this
                 *      exception is thrown.
                 */
                // @ts-ignore
                public addEnchantments(enchantments: java.util.Map<org.bukkit.enchantments.Enchantment, java.lang.Integer | number>): void
                /**
                 * Adds the specified {@link Enchantment} to this item stack.
                 * <p>
                 * If this item stack already contained the given enchantment (at any
                 * level), it will be replaced.
                 * @param ench Enchantment to add
                 * @param level Level of the enchantment
                 * @throws IllegalArgumentException if enchantment null, or enchantment is
                 *      not applicable
                 */
                // @ts-ignore
                public addEnchantment(ench: org.bukkit.enchantments.Enchantment, level: number /*int*/): void
                /**
                 * Adds the specified enchantments to this item stack in an unsafe manner.
                 * <p>
                 * This method is the same as calling {@link
                 * #addUnsafeEnchantment(org.bukkit.enchantments.Enchantment, int)} for
                 * each element of the map.
                 * @param enchantments Enchantments to add
                 */
                // @ts-ignore
                public addUnsafeEnchantments(enchantments: java.util.Map<org.bukkit.enchantments.Enchantment, java.lang.Integer | number>): void
                /**
                 * Adds the specified {@link Enchantment} to this item stack.
                 * <p>
                 * If this item stack already contained the given enchantment (at any
                 * level), it will be replaced.
                 * <p>
                 * This method is unsafe and will ignore level restrictions or item type.
                 * Use at your own discretion.
                 * @param ench Enchantment to add
                 * @param level Level of the enchantment
                 */
                // @ts-ignore
                public addUnsafeEnchantment(ench: org.bukkit.enchantments.Enchantment, level: number /*int*/): void
                /**
                 * Removes the specified {@link Enchantment} if it exists on this
                 * ItemStack
                 * @param ench Enchantment to remove
                 * @return Previous level, or 0
                 */
                // @ts-ignore
                public removeEnchantment(ench: org.bukkit.enchantments.Enchantment): number /*int*/
                // @ts-ignore
                public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Required method for configuration serialization
                 * @param args map to deserialize
                 * @return deserialized item stack
                 * @see ConfigurationSerializable
                 */
                // @ts-ignore
                public static deserialize(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.inventory.ItemStack
                /**
                 * Get a copy of this ItemStack's {@link ItemMeta}.
                 * @return a copy of the current ItemStack's ItemData
                 */
                // @ts-ignore
                public getItemMeta(): org.bukkit.inventory.meta.ItemMeta
                /**
                 * Checks to see if any meta data has been defined.
                 * @return Returns true if some meta data has been set for this item
                 */
                // @ts-ignore
                public hasItemMeta(): boolean
                /**
                 * Set the ItemMeta of this ItemStack.
                 * @param itemMeta new ItemMeta, or null to indicate meta data be cleared.
                 * @return True if successfully applied ItemMeta, see {#link
                 *      ItemFactory#isApplicable(ItemMeta, ItemStack)}
                 * @throws IllegalArgumentException if the item meta was not created by
                 *      the {#link ItemFactory}
                 */
                // @ts-ignore
                public setItemMeta(itemMeta: org.bukkit.inventory.meta.ItemMeta): boolean
            }
        }
    }
}
