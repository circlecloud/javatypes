declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * A generic integer property.
                         */
                        // @ts-ignore
                        class IntProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String, java.lang.Integer> {
                            /**
                             * Create a new integer property with the specified value.
                             * @param value value to match
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/)
                            /**
                             * Create a new integer property with the specified value and logical
                             * operator.
                             * @param value value to match
                             * @param operator logical operator to use when comparing to other
                             *       properties
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new integer property with the specified value and logical
                             * operator.
                             * @param value value to match
                             * @param operator logical operator to use when comparing to other
                             *       properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with equal value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            of(value: any): org.spongepowered.api.item.inventory.property.IntProperty
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with unequal value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            not(value: any): org.spongepowered.api.item.inventory.property.IntProperty
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value greater than this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThan(value: any): org.spongepowered.api.item.inventory.property.IntProperty
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value greater than or equal to this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.IntProperty
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value less than this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThan(value: any): org.spongepowered.api.item.inventory.property.IntProperty
                            /**
                             * Create an {@link IntProperty} property which matches {@link IntProperty}
                             * properties with value less than or equal to this value.
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.IntProperty
                        }
                    }
                }
            }
        }
    }
}
