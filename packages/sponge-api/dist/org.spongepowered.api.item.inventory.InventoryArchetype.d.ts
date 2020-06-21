declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface InventoryArchetype extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a new {@link Builder} to build an {@link InventoryArchetype}.
                         * @return The builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.inventory.InventoryArchetype.Builder
                        /**
                         * Gets all child InventoryArchetypes.
                         * @return The child Archetypes
                         */
                        // @ts-ignore
                        getChildArchetypes(): Array<org.spongepowered.api.item.inventory.InventoryArchetype>
                        /**
                         * Returns all properties defined on this Archetype.
                         * @return The properties
                         */
                        // @ts-ignore
                        getProperties(): java.util.Map<java.lang.String | string, org.spongepowered.api.item.inventory.InventoryProperty<java.lang.String | string, any>>
                        /**
                         * Returns the Property with given key.
                         * @param key The key
                         * @return The matching Property or Optional.empty() if not found
                         */
                        // @ts-ignore
                        getProperty(key: java.lang.String | string): java.util.Optional<org.spongepowered.api.item.inventory.InventoryProperty<java.lang.String | string, any>>
                        /**
                         * Returns the property with the Properties default key.
                         * @param type The type of Property to query for
                         * @param <T> Expected Type of InventoryProperty
                         * @return The matching Property or Optional.empty() if not found
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.item.inventory.InventoryProperty<java.lang.String, ?>>(type: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Returns the property
                         * @param type The type of Property to query for
                         * @param key The Property key to search for
                         * @param <T> Expected Type of InventoryProperty
                         * @return The matching Property or Optional.empty() if not found
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.item.inventory.InventoryProperty<java.lang.String, ?>>(type: java.lang.Class<T>, key: java.lang.String | string): java.util.Optional<T>
                    }
                }
            }
        }
    }
}
