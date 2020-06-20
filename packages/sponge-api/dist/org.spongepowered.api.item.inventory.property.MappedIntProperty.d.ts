declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * An integer-mapped integer property. This is primarily used for supporting the
                         * "fields" on the beacon inventory for the moment. This property is also
                         * settable.
                         */
                        // @ts-ignore
                        class MappedIntProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.Integer, java.lang.Integer> {
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             * @param key key to match
                             * @param value value to match
                             */
                            // @ts-ignore
                            constructor(key: number, value: number)
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             * @param key key to match
                             * @param value value to match
                             * @param operator logical operator to use when comparing this property with
                             *       other properties
                             */
                            // @ts-ignore
                            constructor(key: number, value: number, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             * @param key key to match
                             * @param value value to match
                             * @param operator logical operator to use when comparing this property with
                             *       other properties
                             */
                            // @ts-ignore
                            constructor(key: any, value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with equal value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            of(key: any, value: any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with unequal value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            not(key: any, value: any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value greater than this value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThan(key: any, value: any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value greater than or equal to this value and matching
                             * key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            greaterThanOrEqual(key: any, value: any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value less than this value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThan(key: any, value: any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value less than or equal to this value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            lessThanOrEqual(key: any, value: any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                        }
                    }
                }
            }
        }
    }
}
