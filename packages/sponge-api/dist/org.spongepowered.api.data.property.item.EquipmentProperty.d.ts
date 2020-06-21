declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents the {@link EquipmentType} that the item can be used in an
                         * equipment inventory.
                         */
                        // @ts-ignore
                        class EquipmentProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String | string, org.spongepowered.api.item.inventory.equipment.EquipmentType> {
                            /**
                             * Constructs a new {@link EquipmentProperty}.
                             * @param value The equipment type
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.EquipmentType)
                            /**
                             * Constructs a new {@link EquipmentProperty}.
                             * @param value The equipment type
                             * @param op The operator to use to compare
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.EquipmentType, op: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Constructs a new {@link EquipmentProperty}.
                             * @param value EquipmentType to match
                             * @param operator logical operator to apply when comparing with other
                             *       properties
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object | any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            public compareTo(o: org.spongepowered.api.data.Property<any, any>): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
