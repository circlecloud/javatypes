declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * Represents a snapshot of an {@link ItemStack} as an
                     * {@link ImmutableDataHolder} to represent all of the data associated with
                     * the {@link ItemStack} of which the snapshot was created from. Being that
                     * it is a snapshot, a snapshot cannot be modified, but modifications will
                     * result in a new instance of the {@link ItemStackSnapshot}.
                     */
                    // @ts-ignore
                    interface ItemStackSnapshot extends org.spongepowered.api.data.ImmutableDataHolder<org.spongepowered.api.item.inventory.ItemStackSnapshot>, org.spongepowered.api.text.translation.Translatable {
                        // @ts-ignore
                        
                        /**
                         * Gets the {@link ItemType} of this {@link ItemStackSnapshot}. The
                         * {@link ItemType} is always available.
                         * @return The item type
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.item.ItemType
                        /**
                         * Gets the current stack size count of the {@link ItemStack} this
                         * {@link ItemStackSnapshot} is representing.
                         * @return The current stack size
                         * @deprecated Use {#link #getQuantity()}
                         */
                        // @ts-ignore
                        getCount(): int
                        /**
                         * Gets the quantity of items in this the {@link ItemStack} this
                         * {@link ItemStackSnapshot} is representing.
                         * @return The current stack size
                         */
                        // @ts-ignore
                        getQuantity(): int
                        /**
                         * Returns true if {@link #getQuantity()} is zero and therefore this
                         * ItemStackSnapshot is empty.
                         * @return True if this ItemStackSnapshot is empty
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        /**
                         * Creates a new {@link ItemStack} with all the data currently available
                         * on this {@link ItemStackSnapshot}.
                         * @return The newly generated item stack
                         */
                        // @ts-ignore
                        createStack(): org.spongepowered.api.item.inventory.ItemStack
                        /**
                         * Creates a {@link org.spongepowered.api.GameDictionary.Entry} that
                         * compares stacks to this {@link ItemStackSnapshot}. Note that not all
                         * data stored in this {@link ItemStackSnapshot} may be stored in the
                         * returned entry.
                         * @return A {#link org.spongepowered.api.GameDictionary.Entry} based on this
                         *  {@link ItemStackSnapshot}
                         */
                        // @ts-ignore
                        createGameDictionaryEntry(): org.spongepowered.api.GameDictionary.Entry
                    }
                }
            }
        }
    }
}
