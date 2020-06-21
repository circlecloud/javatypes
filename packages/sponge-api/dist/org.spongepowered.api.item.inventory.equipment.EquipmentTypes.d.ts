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
                            public static readonly ANY: org.spongepowered.api.item.inventory.equipment.EquipmentType
                            /**
                             * Held or otherwise equipped items.
                             */
                            // @ts-ignore
                            public static readonly EQUIPPED: org.spongepowered.api.item.inventory.equipment.EquipmentType
                            /**
                             * Any held types like MAINHAND and OFFHAND.
                             */
                            // @ts-ignore
                            public static readonly HELD: org.spongepowered.api.item.inventory.equipment.HeldEquipmentType
                            // @ts-ignore
                            public static readonly MAIN_HAND: org.spongepowered.api.item.inventory.equipment.HeldEquipmentType
                            // @ts-ignore
                            public static readonly OFF_HAND: org.spongepowered.api.item.inventory.equipment.HeldEquipmentType
                            /**
                             * Any worn types like HEADWEAR, CHESTPLATE, LEGGINGS and BOOTS.
                             */
                            // @ts-ignore
                            public static readonly WORN: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            public static readonly BOOTS: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            public static readonly CHESTPLATE: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            public static readonly HEADWEAR: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                            // @ts-ignore
                            public static readonly LEGGINGS: org.spongepowered.api.item.inventory.equipment.WornEquipmentType
                        }
                    }
                }
            }
        }
    }
}
