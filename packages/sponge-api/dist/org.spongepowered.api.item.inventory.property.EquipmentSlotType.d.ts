declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * Inventory property which allows queries to be constructed for a particular
                         * equipment slot type.
                         */
                        // @ts-ignore
                        class EquipmentSlotType extends org.spongepowered.api.item.inventory.property.AbstractInventoryProperty<java.lang.String, org.spongepowered.api.item.inventory.equipment.EquipmentType> {
                            /**
                             * Create a new EquipmentSlotType property to match items of the specified
                             * value.
                             * @param value EquipmentType to match
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.EquipmentType)
                            /**
                             * Create a new EquipmentSlotType property to match items of the specified
                             * value.
                             * @param value EquipmentType to match
                             * @param operator logical operator to apply when comparing with other
                             *       properties
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.EquipmentType, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new EquipmentSlotType property to match items of the specified
                             * value.
                             * @param value EquipmentType to match
                             * @param operator logical operator to apply when comparing with other
                             *       properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(other: org.spongepowered.api.data.Property<any, ?>): int
                            /**
                             * Create an EquipmentSlotType property which matches EquipmentSlotType
                             * properties with equal value.
                             * @param value EquipmentType to match
                             * @return new property
                             */
                            // @ts-ignore
                            of(value: any): org.spongepowered.api.item.inventory.property.EquipmentSlotType
                            /**
                             * Create an EquipmentSlotType property which matches EquipmentSlotType
                             * properties with unequal value.
                             * @param value EquipmentType to match
                             * @return new property
                             */
                            // @ts-ignore
                            not(value: any): org.spongepowered.api.item.inventory.property.EquipmentSlotType
                        }
                    }
                }
            }
        }
    }
}
