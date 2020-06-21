declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * An inventory property which represents a position within a grid. Bear in mind
                         * that this property should be queried against the relevant parent, since a
                         * slot may have multiple parent inventories.
                         */
                        // @ts-ignore
                        class SlotPos extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String | string, Vector2i> {
                            /**
                             * Create a new SlotPos property for matching the specified value.
                             * @param value the value to match
                             */
                            // @ts-ignore
                            constructor(value: Vector2i)
                            /**
                             * Create a new SlotPos property for matching the specified value.
                             * @param x slot x position
                             * @param y slot y position
                             */
                            // @ts-ignore
                            constructor(x: number /*int*/, y: number /*int*/)
                            /**
                             * Create a new SlotPos property for matching the specified value with the
                             * specified operator.
                             * @param value the value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: Vector2i, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new SlotPos property for matching the specified value with the
                             * specified operator.
                             * @param x slot x position
                             * @param y slot y position
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(x: number /*int*/, y: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Gets the X position of this slot within the queried parent.
                             * @return slot x coordinate
                             */
                            // @ts-ignore
                            public getX(): number /*int*/
                            /**
                             * Gets the Y position of this slot within the queried parent.
                             * @return slot y coordinate
                             */
                            // @ts-ignore
                            public getY(): number /*int*/
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property<any, any>): number /*int*/
                            /**
                             * Create an SlotPos property which matches SlotPos properties with equal
                             * value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.SlotPos
                            /**
                             * Create an SlotPos property which matches SlotPos properties with equal
                             * value.
                             * @param x the x position of the slot to match
                             * @param y the y position of the slot to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(x: number /*int*/, y: number /*int*/): org.spongepowered.api.item.inventory.property.SlotPos
                            /**
                             * Create an SlotPos property which matches SlotPos properties with unequal
                             * value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.SlotPos
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * greater than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.SlotPos
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * greater than or equal to this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.SlotPos
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * less than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.SlotPos
                            /**
                             * Create an SlotPos property which matches SlotPos properties with value
                             * less than or equal to this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.SlotPos
                        }
                    }
                }
            }
        }
    }
}
