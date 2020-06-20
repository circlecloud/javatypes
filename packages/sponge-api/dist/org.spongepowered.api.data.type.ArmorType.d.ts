declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a type of "armor", usually applicable to any
                     * {@link ItemTypes#DIAMOND_CHESTPLATE}.
                     */
                    // @ts-ignore
                    interface ArmorType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the {@link ItemType} that can be used to
                         * "repair" the armor type.
                         * @return The item type considered to be used for repairing
                         */
                        // @ts-ignore
                        getRepairItemType(): java.util.Optional<org.spongepowered.api.item.ItemType>
                    }
                }
            }
        }
    }
}
