declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * Property for inventories of a particular capacity. For example to allow
                         * querying for Inventories with 5 Slots.
                         */
                        // @ts-ignore
                        class InventoryCapacity extends org.spongepowered.api.item.inventory.property.IntProperty {
                            /**
                             * Creates a new InventoryCapacity property with the specified value.
                             * @param capacity Capacity to match
                             */
                            // @ts-ignore
                            constructor(capacity: number /*int*/)
                            /**
                             * Create a new InventoryCapacity property with the specified value.
                             * @param capacity size to match
                             * @param operator logical operator to use when comparing this property with
                             *       other properties
                             */
                            // @ts-ignore
                            constructor(capacity: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create an InventoryCapacity property which matches InventoryCapacity
                             * properties with equal value.
                             * @param capacity value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(capacity: number /*int*/): org.spongepowered.api.item.inventory.property.InventoryCapacity
                        }
                    }
                }
            }
        }
    }
}
