declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                /**
                 * A type of item.
                 */
                // @ts-ignore
                interface ItemType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable, org.spongepowered.api.GameDictionary.Entry {
                    /**
                     * Gets the corresponding {@link BlockType} of this item if one exists.
                     * @return The Block
                     */
                    // @ts-ignore
                    getBlock(): java.util.Optional<org.spongepowered.api.block.BlockType>
                    /**
                     * Gets the container item of this item if one exists.
                     * <p>e.g. {@link ItemTypes#BUCKET} for {@link ItemTypes#WATER_BUCKET}</p>
                     * @return The container item.
                     */
                    // @ts-ignore
                    getContainer(): java.util.Optional<org.spongepowered.api.item.ItemType>
                    /**
                     * Gets the id of this item.
                     * <p>Ex. Minecraft registers a golden carrot as
                     * "minecraft:golden_carrot".</p>
                     * @return The id
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Gets the default maximum quantity for
                     * {@link ItemStack}s of this item.
                     * @return Max stack quantity
                     */
                    // @ts-ignore
                    getMaxStackQuantity(): int
                    /**
                     * Gets the default {@link Property} of this {@link ItemType}.
                     * <p>While item stacks do have properties, generally, there is an
                     * intrinsic default property for many item types. However, it should be
                     * considered that when mods are introducing their own custom items, they
                     * too could introduce different item properties based on various data on
                     * the item stack. The default properties retrieved from here should merely
                     * be considered as a default, not as a definitive property.</p>
                     * @param propertyClass The item property class
                     * @param <T> The type of item property
                     * @return The item property, if available
                     */
                    // @ts-ignore
                    getDefaultProperty<T extends org.spongepowered.api.data.Property<?, ?>>(propertyClass: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    getType(): org.spongepowered.api.item.ItemType
                    // @ts-ignore
                    matches(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                    // @ts-ignore
                    isSpecific(): boolean
                    // @ts-ignore
                    getTemplate(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                }
            }
        }
    }
}
