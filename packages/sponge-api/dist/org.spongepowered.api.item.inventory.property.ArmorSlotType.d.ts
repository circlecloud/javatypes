declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace property {
                        /**
                         * Inventory property which allows queries to be constructed for a particular
                         * worn equipment slot type.
                         */
                        // @ts-ignore
                        class ArmorSlotType extends org.spongepowered.api.item.inventory.property.EquipmentSlotType {
                            /**
                             * Create a new ArmorSlotType property which matches armour slots of the
                             * specified type.
                             * @param value armour type to match
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.WornEquipmentType)
                            /**
                             * Create a new ArmorSlotType property which matches armour slots of the
                             * specified type.
                             * @param value armour type to match
                             * @param operator logical operator (either EQUAL or NOTEQUAL) to apply
                             */
                            // @ts-ignore
                            constructor(value: org.spongepowered.api.item.inventory.equipment.WornEquipmentType, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create a new ArmorSlotType property which matches armour slots of the
                             * specified type.
                             * @param value armour type to match
                             * @param operator logical operator (either EQUAL or NOTEQUAL) to apply
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object | any, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Create an ArmourSlotType property which matches ArmourSlotType properties
                             * with equal value.
                             * @param value Type of worn equipment to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static of(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.ArmorSlotType
                            /**
                             * Create an ArmourSlotType property which matches ArmourSlotType properties
                             * with unequal value.
                             * @param value Type of worn equipment to match
                             * @return new property
                             */
                            // @ts-ignore
                            public static not(value: java.lang.Object | any): org.spongepowered.api.item.inventory.property.ArmorSlotType
                        }
                    }
                }
            }
        }
    }
}
