declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace InventoryArchetype {
                        /**
                         * A Builder for InventoryArchetypes.
                         * <p>Compositions of multiple base {@link InventoryArchetypes} are
                         * possible.</p>
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.inventory.InventoryArchetype, org.spongepowered.api.item.inventory.InventoryArchetype.Builder> {
                            /**
                             * Adds a {@link InventoryTitle} to this Archetype.
                             * @param title The default title
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            title(title: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.item.inventory.InventoryArchetype.Builder
                            /**
                             * Adds a {@link InventoryTitle} to this Archetype.
                             * @param title The default title
                             * @return Fluent patternI
                             */
                            // @ts-ignore
                            title(title: org.spongepowered.api.text.Text): org.spongepowered.api.item.inventory.InventoryArchetype.Builder
                            /**
                             * Adds an {@link InventoryProperty} to this Archetype.
                             * @param property The Property to add
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            property(property: org.spongepowered.api.item.inventory.InventoryProperty<java.lang.String | string, any>): org.spongepowered.api.item.inventory.InventoryArchetype.Builder
                            /**
                             * Adds an {@link InventoryArchetype} to this Archetype.
                             * @param archetype The Archetype to add
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            with(archetype: org.spongepowered.api.item.inventory.InventoryArchetype): org.spongepowered.api.item.inventory.InventoryArchetype.Builder
                            /**
                             * Adds multiple {@link InventoryArchetype} to this Archetype.
                             * @param archetypes The Archetypes to add
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            with(...archetypes: org.spongepowered.api.item.inventory.InventoryArchetype[]): org.spongepowered.api.item.inventory.InventoryArchetype.Builder
                            /**
                             * Registers the InventoryArchetype.
                             * @return The registered InventoryArchetype
                             */
                            // @ts-ignore
                            build(id: java.lang.String | string, name: java.lang.String | string): org.spongepowered.api.item.inventory.InventoryArchetype
                        }
                    }
                }
            }
        }
    }
}
