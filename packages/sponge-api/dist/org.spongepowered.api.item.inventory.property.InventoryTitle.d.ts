declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * The Title of an Inventory, viewable by players looking at the Inventory.
                         */
                        // @ts-ignore
                        class InventoryTitle extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String | string, org.spongepowered.api.text.Text> {
                            /**
                             * Creates a new {@link InventoryTitle} to be displayed on an {@link Inventory}.
                             * @param value The text value to display
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.text.Text)
                            // @ts-ignore
                            public static readonly PROPERTY_NAME: java.lang.String | string
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property<any, any>): number /*int*/
                            /**
                             * Creates a new {@link InventoryTitle} with the provided {@link Text}.
                             * @param value The text value to display
                             * @return The new inventory title
                             */
                            // @ts-ignore
                            public static of(value: org.spongepowered.api.text.Text): org.spongepowered.api.item.inventory.property.InventoryTitle
                        }
                    }
                }
            }
        }
    }
}
