declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface ArmorStandData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ArmorStandData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableArmorStandData> {
                                /**
                                 * Returns whether this armor stand is rendered invisible and simply a
                                 * "marker". The inventory contents and nameplate will still show, but
                                 * the body itself of the armor stand will not be visible.
                                 * @return Whether this is a marker armor stand
                                 * @see Keys#ARMOR_STAND_MARKER
                                 */
                                // @ts-ignore
                                marker(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Returns whether this armor stand is a small armor stand or not.
                                 * @return Whether this is a small armor stand
                                 * @see Keys#ARMOR_STAND_IS_SMALL
                                 */
                                // @ts-ignore
                                small(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Returns whether this armor stand shows arms or not.
                                 * <p>Arms that do not show may also not show an item in hand.</p>
                                 * @return Whether this armor stand shows its arms
                                 * @see Keys#ARMOR_STAND_HAS_ARMS
                                 */
                                // @ts-ignore
                                arms(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets whether this armor stand has a visible base plate or not.
                                 * @return Whether this armor stand has a visible base plate
                                 * @see Keys#ARMOR_STAND_HAS_BASE_PLATE
                                 */
                                // @ts-ignore
                                basePlate(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
