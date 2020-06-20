declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * An inventory property which represents an index within an ordered inventory.
                         */
                        // @ts-ignore
                        class SlotIndex extends org.spongepowered.api.item.inventory.property.IntProperty {
                            /**
                             * Creates a new SlotIndex property for the specified value.
                             * @param value value to match
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/)
                            /**
                             * Creates a new SlotIndex property for the specified value and operator.
                             * @param value value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Creates a new SlotIndex property for the specified value and operator.
                             * @param value value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * equal value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            of(value: any): org.spongepowered.api.item.inventory.property.SlotIndex
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * unequal value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            not(value: any): org.spongepowered.api.item.inventory.property.SlotIndex
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value greater than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThan(value: any): org.spongepowered.api.item.inventory.property.SlotIndex
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value greater than or equal to this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.SlotIndex
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value less than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThan(value: any): org.spongepowered.api.item.inventory.property.SlotIndex
                            /**
                             * Create a SlotIndex property which matches SlotIndex properties with
                             * value less than or equal to this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.SlotIndex
                        }
                    }
                }
            }
        }
    }
}
