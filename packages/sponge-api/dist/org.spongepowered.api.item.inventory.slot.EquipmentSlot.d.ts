declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace slot {
                        /**
                         * An inventory slot which can only contain equipment.
                         */
                        // @ts-ignore
                        interface EquipmentSlot extends org.spongepowered.api.item.inventory.slot.FilteringSlot {
                            /**
                             * Check whether the supplied equipment type can be inserted into this slot.
                             * Returning false from this method implies that {@link #offer} <b>would
                             * always return false</b> for items of this type.
                             * @param type EquipmentType to check
                             * @return true if the specified EquipmentType is valid for this slot
                             */
                            // @ts-ignore
                            isValidItem(type: org.spongepowered.api.item.inventory.equipment.EquipmentType): boolean
                        }
                    }
                }
            }
        }
    }
}
