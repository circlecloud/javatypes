declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * Property for inventories of a particular size. For example to allow querying
                         * for {@link InventoryRow} of length 9 or {@link GridInventory} of size 3x3.
                         */
                        // @ts-ignore
                        class InventoryDimension extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String | string, Vector2i> {
                            /**
                             * Create a new InventoryDimension property with the specified value.
                             * @param value size to match
                             */
                            // @ts-ignore
                            constructor(value: Vector2i)
                            /**
                             * Create a new InventoryDimension property with the specified dimensions.
                             * @param width width of the inventory to match
                             * @param height height of the inventory to match
                             */
                            // @ts-ignore
                            constructor(width: number /*int*/, height: number /*int*/)
                            /**
                             * Create a new InventoryDimension property with the specified value.
                             * @param value size to match
                             * @param operator logical operator to use when comparing this property with
                             *       other properties
                             */
                            // @ts-ignore
                            constructor(value: Vector2i, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new InventoryDimension property with the specified dimensions.
                             * @param width width of the inventory to match
                             * @param height height of the inventory to match
                             * @param operator logical operator to use when comparing this property with
                             *       other properties
                             */
                            // @ts-ignore
                            constructor(width: number /*int*/, height: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public static readonly PROPERTY_NAME: java.lang.String | string
                            /**
                             * Gets the number of columns in this inventory.
                             * @return column count
                             */
                            // @ts-ignore
                            public getColumns(): number /*int*/
                            /**
                             * Gets the number of rows in this inventory.
                             * @return row count
                             */
                            // @ts-ignore
                            public getRows(): number /*int*/
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property<any, any>): number /*int*/
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with equal value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.InventoryDimension
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with equal value.
                             * @param width x coordinate to match
                             * @param height y coordinate to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(width: number /*int*/, height: number /*int*/): org.spongepowered.api.item.inventory.property.InventoryDimension
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with unequal value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.InventoryDimension
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value greater than this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.InventoryDimension
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value greater than or equal to this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.InventoryDimension
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value less than this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.InventoryDimension
                            /**
                             * Create an InventoryDimension property which matches InventoryDimension
                             * properties with value less than or equal to this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.InventoryDimension
                        }
                    }
                }
            }
        }
    }
}
