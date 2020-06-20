declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * A generic String property for an inventory.
                         */
                        // @ts-ignore
                        class StringProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String, java.lang.String> {
                            /**
                             * Create a new {@link StringProperty} for matching the specified value.
                             * @param value the value to match
                             */
                            // @ts-ignore
                            constructor(value: string)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             * @param value the value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: string, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             * @param value the value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with equal value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            of(value: any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with unequal value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            not(value: any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThan(value: any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than or equal to this
                             * value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThan(value: any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than or equal to this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThanOrEqual(value: any): org.spongepowered.api.item.inventory.property.StringProperty
                        }
                    }
                }
            }
        }
    }
}
