declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    /**
                     * Represents an armor stand.
                     */
                    // @ts-ignore
                    interface ArmorStand extends org.spongepowered.api.entity.living.Living, org.spongepowered.api.entity.ArmorEquipable {
                        /**
                         * Gets a copy of the current {@link BodyPartRotationalData} used by this
                         * {@link ArmorStand}.
                         * @return A copy of the current body rotational data
                         */
                        // @ts-ignore
                        getBodyPartRotationalData(): org.spongepowered.api.data.manipulator.mutable.entity.BodyPartRotationalData
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} is considered a "marker" stand. If
                         * {@code true}, the armor stand's bounding box is near
                         * impossible to see, and the armor stand can no longer be
                         * interacted with.
                         * @return The value for the marker state
                         */
                        // @ts-ignore
                        marker(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} is considered a "small" armor stand.
                         * @return The value for the small state
                         */
                        // @ts-ignore
                        small(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} will show that it has a base plate
                         * visible to players.
                         * @return The value for the base plate state
                         */
                        // @ts-ignore
                        basePlate(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} will show that it has "arms".
                         * @return The value for the arms state
                         */
                        // @ts-ignore
                        arms(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        /**
                         * Gets the {@link ArmorStandData} for this armor stand.
                         * @return The data manipulator for this armorstand
                         */
                        // @ts-ignore
                        getArmorStandData(): org.spongepowered.api.data.manipulator.mutable.entity.ArmorStandData
                        // @ts-ignore
                        placingDisabled(): org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.item.inventory.equipment.EquipmentType>
                        // @ts-ignore
                        takingDisabled(): org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.item.inventory.equipment.EquipmentType>
                        // @ts-ignore
                        getDisabledSlotsData(): org.spongepowered.api.data.manipulator.mutable.entity.DisabledSlotsData
                    }
                }
            }
        }
    }
}
