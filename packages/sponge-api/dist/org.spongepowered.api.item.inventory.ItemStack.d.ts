declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * Represents a stack of a specific {@link ItemType}. Supports serialization and
                     * can be compared using the comparators listed in {@link ItemStackComparators}.
                     * <p>{@link ItemStack}s have a variety of properties and data. It is advised to
                     * use {@link DataHolder#get(Class)} in order to retrieve information regarding
                     * this item stack.</p>
                     */
                    // @ts-ignore
                    interface ItemStack extends org.spongepowered.api.data.DataHolder, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Creates a new {@link Builder} to build an {@link ItemStack}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.inventory.ItemStack.Builder
                        /**
                         * Creates a new {@link ItemStack} of the provided {@link ItemType}
                         * and quantity.
                         * @param itemType The item type
                         * @param quantity The quantity
                         * @return The new item stack
                         */
                        // @ts-ignore
                        of(itemType: org.spongepowered.api.item.ItemType, quantity: number /*int*/): org.spongepowered.api.item.inventory.ItemStack
                        /**
                         * Creates a new {@link ItemStack} of the provided {@link ItemType} and quantity of 1
                         * @param itemType The item type
                         * @return The new item stack
                         */
                        // @ts-ignore
                        of(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.inventory.ItemStack
                        /**
                         * Returns an empty {@link ItemStack}.
                         * @return The empty ItemStack
                         */
                        // @ts-ignore
                        empty(): org.spongepowered.api.item.inventory.ItemStack
                        /**
                         * Gets the {@link ItemType} of this {@link ItemStack}.
                         * @return The item type
                         * @deprecated Use {#link #getType()}
                         */
                        // @ts-ignore
                        getItem(): org.spongepowered.api.item.ItemType
                        /**
                         * Gets the {@link ItemType} of this {@link ItemStack}.
                         * @return The item type
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.item.ItemType
                        /**
                         * Gets the quantity of items in this stack. This may exceed the max stack
                         * size of the item, and if added to an inventory will then be divided by
                         * the max stack.
                         * @return Quantity of items
                         */
                        // @ts-ignore
                        getQuantity(): number /*int*/
                        /**
                         * Sets the quantity in this stack.
                         * @param quantity Quantity
                         * @throws IllegalArgumentException If quantity set exceeds the
                         *  {#link ItemStack#getMaxStackQuantity()}
                         */
                        // @ts-ignore
                        setQuantity(quantity: number /*int*/): void
                        /**
                         * Gets the maximum quantity per stack. By default, returns
                         * {@link ItemType#getMaxStackQuantity()}, unless a
                         * different value has been set for this specific stack.
                         * @return Max stack quantity
                         */
                        // @ts-ignore
                        getMaxStackQuantity(): number /*int*/
                        /**
                         * Gets the {@link ItemStackSnapshot} of this {@link ItemStack}. All known
                         * {@link DataManipulator}s existing on this {@link ItemStack} are added
                         * as copies to the {@link ItemStackSnapshot}.
                         * @return The newly created item stack snapshot
                         */
                        // @ts-ignore
                        createSnapshot(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                        /**
                         * Returns true if the specified {@link ItemStack} has the same stack
                         * size, {@link ItemType}, and data. Note that this method is not an
                         * overrider of {@link Object#equals(Object)} in order to maintain
                         * compatibility with the base game. Therefore, ItemStacks may not behave
                         * as expected when using them in equality based constructs such as
                         * {@link Map}s or {@link Set}s.
                         * @param that ItemStack to compare
                         * @return True if this equals the ItemStack
                         */
                        // @ts-ignore
                        equalTo(that: org.spongepowered.api.item.inventory.ItemStack): boolean
                        /**
                         * Returns true if {@link #getQuantity()} is zero and therefore this
                         * ItemStack is empty.
                         * <p>In Vanilla empty ItemStacks are not rendered by the client.</p>
                         * @return True if this ItemStack is empty
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        // @ts-ignore
                        copy(): org.spongepowered.api.item.inventory.ItemStack
                    }
                }
            }
        }
    }
}
