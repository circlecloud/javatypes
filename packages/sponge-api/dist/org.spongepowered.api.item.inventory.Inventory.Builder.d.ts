declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace Inventory {
                        /**
                         * A Builder for Inventories based on {@link InventoryArchetype}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.inventory.Inventory, org.spongepowered.api.item.inventory.Inventory.Builder> {
                            /**
                             * Sets the base {@link InventoryArchetype} for the Inventory.
                             * @param archetype The InventoryArchetype
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            of(archetype: org.spongepowered.api.item.inventory.InventoryArchetype): org.spongepowered.api.item.inventory.Inventory.Builder
                            /**
                             * Sets an {@link InventoryProperty}.
                             * @param name The name
                             * @param property The property
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            property(name: string, property: org.spongepowered.api.item.inventory.InventoryProperty<any, ?>): org.spongepowered.api.item.inventory.Inventory.Builder
                            /**
                             * Sets an {@link InventoryProperty} with its default key.
                             * @param property The property
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            property(property: org.spongepowered.api.item.inventory.InventoryProperty<any, ?>): org.spongepowered.api.item.inventory.Inventory.Builder
                            /**
                             * Sets the {@link Carrier} that carries the Inventory.
                             * @param carrier The Carrier
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            withCarrier(carrier: org.spongepowered.api.item.inventory.Carrier): org.spongepowered.api.item.inventory.Inventory.Builder
                            /**
                             * Registers a listener for given Event type
                             * @param type The type
                             * @param listener The listener
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            listener<E extends org.spongepowered.api.event.item.inventory.InteractInventoryEvent>(type: java.lang.Class<E>, listener: java.util.function.Consumer<E> | java.util.function$.Consumer<E>): org.spongepowered.api.item.inventory.Inventory.Builder
                            /**
                             * Sets the InventoryArchetype and Properties according to the
                             * {@link Carrier}s Inventory.
                             * @param carrier The Carrier
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            forCarrier(carrier: org.spongepowered.api.item.inventory.Carrier): org.spongepowered.api.item.inventory.Inventory.Builder
                            /**
                             * Sets the InventoryArchetype and Properties for a default Inventory of
                             * given {@link Carrier}.
                             * @param carrier The Carrier class
                             * @return Fluent pattern
                             */
                            // @ts-ignore
                            forCarrier(carrier: java.lang.Class<org.spongepowered.api.item.inventory.Carrier>): org.spongepowered.api.item.inventory.Inventory.Builder
                            /**
                             * Builds the {@link Inventory}.
                             * @param plugin The plugin building this inventory
                             * @return The new Inventory instance
                             */
                            // @ts-ignore
                            build(plugin: any): org.spongepowered.api.item.inventory.Inventory
                        }
                    }
                }
            }
        }
    }
}
