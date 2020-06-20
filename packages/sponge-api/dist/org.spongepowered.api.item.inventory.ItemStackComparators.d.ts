declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * A utility class for getting all available {@link Comparator}s for {@link ItemStack}s.
                     */
                    // @ts-ignore
                    class ItemStackComparators extends java.lang.Object {
                        /**
                         * Compares ItemStacks based on {@link ItemType}.
                         * This comparator will not return the same results as
                         * ItemStack.equals(ItemStack) for ItemStacks with extra attached data,
                         * different damage values, or different sizes.
                         */
                        // @ts-ignore
                        readonly TYPE: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Compares ItemStacks based on
                         * {@link ItemStack} size. This
                         * comparator will not return the same results as
                         * ItemStack.equals(ItemStack) for ItemStacks with extra attached data,
                         * different types, or different damage values.
                         */
                        // @ts-ignore
                        readonly SIZE: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Compares ItemStacks based on {@link ItemType}
                         * and {@link ItemStack} size. This comparator will not return the same
                         * results as ItemStack.equals(ItemStack) for ItemStacks with extra attached
                         * data or different damage values.
                         */
                        // @ts-ignore
                        readonly TYPE_SIZE: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * The default comparator for {@link ItemStack}s.
                         */
                        // @ts-ignore
                        readonly DEFAULT: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Compares ItemStacks based on its {@link Property} list.
                         */
                        // @ts-ignore
                        readonly PROPERTIES: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Compares ItemStacks based on their {@link DataManipulator}s.
                         */
                        // @ts-ignore
                        readonly ITEM_DATA: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Compares ItemStacks based on their {@link DataManipulator}s ignoring {@link DurabilityData}
                         */
                        // @ts-ignore
                        readonly ITEM_DATA_IGNORE_DAMAGE: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Compares ItemStacks only ignoring their stack-size.
                         * <p>This means for stackable items that they can stack together</p>
                         */
                        // @ts-ignore
                        readonly IGNORE_SIZE: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                        // @ts-ignore
                        readonly ALL: java.util.Comparator<org.spongepowered.api.item.inventory.ItemStack>
                    }
                }
            }
        }
    }
}
