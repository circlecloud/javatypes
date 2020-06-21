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
                        class StringProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String | string, java.lang.String | string> {
                            /**
                             * Create a new {@link StringProperty} for matching the specified value.
                             * @param value the value to match
                             */
                            // @ts-ignore
                            constructor(value: java.lang.String | string)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             * @param value the value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: java.lang.String | string, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new {@link StringProperty} for matching the specified value
                             * with the specified operator.
                             * @param value the value to match
                             * @param operator the operator to use when comparing with other properties
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object | any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property<any, any>): number /*int*/
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with equal value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with unequal value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThan(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value greater than or equal to this
                             * value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThan(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.StringProperty
                            /**
                             * Create a {@link StringProperty} which matches {@link StringProperty}
                             * properties with value less than or equal to this value.
                             * @param value the value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.StringProperty
                        }
                    }
                }
            }
        }
    }
}
