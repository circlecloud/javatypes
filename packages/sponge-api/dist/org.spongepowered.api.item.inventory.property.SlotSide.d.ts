declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * property which represents a "side" for a particular slot, for use in querying
                         * "sided inventories".
                         */
                        // @ts-ignore
                        class SlotSide extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String, org.spongepowered.api.util.Direction> {
                            /**
                             * Create a new SlotSide property for matching the specified value.
                             * @param value the value to match
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.util.Direction)
                            /**
                             * Create a new SlotSide property for matching the specified value with the
                             * specified operator.
                             * @param value the value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.util.Direction, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new SlotSide property for matching the specified value with the
                             * specified operator.
                             * @param value the value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                            /**
                             * Create a SlotSide property which matches SlotSide properties with equal
                             * value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            of(value: any): org.spongepowered.api.item.inventory.property.SlotSide
                            /**
                             * Create a SlotSide property which matches SlotSide properties with unequal
                             * value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            not(value: any): org.spongepowered.api.item.inventory.property.SlotSide
                        }
                    }
                }
            }
        }
    }
}
