declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace GameDictionary {
                // @ts-ignore
                interface Entry {
                    /**
                     * Returns the type of item contained by this entry.
                     * @return The item type
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.item.ItemType
                    /**
                     * Tests whether the provided item stack matches this entry's
                     * specifications.
                     * @param stack The item stack to test
                     * @return {#code true} if the stack matches this entry
                     */
                    // @ts-ignore
                    matches(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                    /**
                     * Returns whether this entry checks against the item type and extra
                     * data associated with the stack. If this returns {@code true}, any
                     * {@link ItemStack} whose {@link ItemType} and manipulators match
                     * those of the {@linkplain #getTemplate() template} will {@linkplain
                     * #matches(ItemStack) match} this entry; however, not all manipulators
                     * present in the template are required to match those in the item
                     * stack to cause them to match. If this returns {@code false}, any
                     * item stack whose {@link ItemType} matches that of the entry will
                     * match this entry.
                     * @return {#code true} if the entry checks extra data on the stack
                     */
                    // @ts-ignore
                    isSpecific(): boolean
                    /**
                     * Returns an item stack snapshot for plugins to inspect this entry.
                     * The returned snapshot will {@linkplain #matches(ItemStack) match}
                     * this entry. The size of the snapshot will always be 1.
                     * @return A snapshot that matches this entry
                     */
                    // @ts-ignore
                    getTemplate(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                }
            }
        }
    }
}
