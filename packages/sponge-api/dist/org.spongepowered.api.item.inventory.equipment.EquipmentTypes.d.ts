declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace equipment {
                        /**
                         * All built-in equipment types.
                         */
                        // @ts-ignore
                        class EquipmentTypes extends java.lang.Object {
                            /**
                             * Any type, all other types should subclass this to allow instanceof
                             * checks to succeed.
                             */
                            // @ts-ignore
                            readonly ANY: org.spongepowered.api.item.inventory.equipment.EquipmentType
                            /**
                             * Held or otherwise equipped items.
                             */
                            // @ts-ignore
                            readonly EQUIPPED: org.spongepowered.api.item.inventory.equipment.EquipmentType
                            /**
                             * Any held types like MAINHAND and OFFHAND.
                             */
                            // @ts-ignore
                            readonly HELD: org.spongepowered.api.item.inventory.equipment.HeldEquipmentType
                            // @ts-ignore
                            readonly MAIN_HAND: org.spongepowered.api.item.inventory.equipment.HeldEquipmentType
                            // @ts-ignore
                            readonly OFF_HAND: org.spongepowered.api.item.inventory.equipment.HeldEquipmentType
                            /**
                             * Any worn types like HEADWEAR, CHESTPLATE, LEGGINGS and BOOTS.
                             */
                            // @ts-ignore
                            readonly WORN: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            readonly BOOTS: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            readonly CHESTPLATE: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            readonly HEADWEAR: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            readonly LEGGINGS: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                        }
                    }
                }
            }
        }
    }
}
