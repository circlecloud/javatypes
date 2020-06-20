declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the disabled slots in an {@link ArmorStand}.
                             * A slot can have taking disabled, placing disabled or both.
                             */
                            // @ts-ignore
                            interface DisabledSlotsData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.DisabledSlotsData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDisabledSlotsData> {
                                /**
                                 * Controls slots that players can't take items from.
                                 * @return A set of slots that players cannot take from.
                                 * @see Keys#ARMOR_STAND_TAKING_DISABLED
                                 */
                                // @ts-ignore
                                takingDisabled(): org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.item.inventory.equipment.EquipmentType>
                                /**
                                 * Controls slots that players can't place items into.
                                 * @return A set of slots that players cannot place into.
                                 * @see Keys#ARMOR_STAND_PLACING_DISABLED
                                 */
                                // @ts-ignore
                                placingDisabled(): org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.item.inventory.equipment.EquipmentType>
                            }
                        }
                    }
                }
            }
        }
    }
}
