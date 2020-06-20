declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * A property to define which GUI should be opened on the client
                         * for the inventory.
                         */
                        // @ts-ignore
                        class GuiIdProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String, org.spongepowered.api.item.inventory.property.GuiId> {
                            /**
                             * Creates a GuiID property from the specified GUI ID.
                             * @param value The GUI ID to create the property with
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.property.GuiId)
                            // @ts-ignore
                            compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                        }
                    }
                }
            }
        }
    }
}
