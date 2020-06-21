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
                        class MappedIntProperty extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.Integer | number, java.lang.Integer | number> {
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             * @param key key to match
                             * @param value value to match
                             */
                            // @ts-ignore
                            constructor(key: java.lang.Integer | number, value: java.lang.Integer | number)
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             * @param key key to match
                             * @param value value to match
                             * @param operator logical operator to use when comparing this property with
                             *       other properties
                             */
                            // @ts-ignore
                            constructor(key: java.lang.Integer | number, value: java.lang.Integer | number, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new MappedIntproperty with the specified key and value.
                             * @param key key to match
                             * @param value value to match
                             * @param operator logical operator to use when comparing this property with
                             *       other properties
                             */
                            // @ts-ignore
                            constructor(key: java.lang.Object | any, value: java.lang.Object | any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(other: org.spongepowered.api.data.Property<any, any>): number /*int*/
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with equal value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(key: java.lang.Object | any, value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with unequal value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static not(key: java.lang.Object | any, value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value greater than this value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThan(key: java.lang.Object | any, value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value greater than or equal to this value and matching
                             * key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static greaterThanOrEqual(key: java.lang.Object | any, value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value less than this value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThan(key: java.lang.Object | any, value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                            /**
                             * Create a MappedIntproperty property which matches MappedIntproperty
                             * properties with value less than or equal to this value and matching key.
                             * @param key key to match
                             * @param value value to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static lessThanOrEqual(key: java.lang.Object | any, value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.MappedIntProperty
                        }
                    }
                }
            }
        }
    }
}
