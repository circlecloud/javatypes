declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * A property to uniquely identify an Inventory instance.
                         */
                        // @ts-ignore
                        class Identifiable extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String | string, java.util.UUID> {
                            /**
                             * Creates an Identifiable with a random UUID.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates an Identifiable with given UUID.
                             * @param value The UUID
                             */
                            // @ts-ignore
                            constructor(value: java.util.UUID)
                            /**
                             * Creates an Identifiable with given UUID.
                             * @param value The UUID
                             * @param op The operator
                             */
                            // @ts-ignore
                            constructor(value: java.util.UUID, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property<any, any>): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
