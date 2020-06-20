declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableArmorStandData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableArmorStandData, org.spongepowered.api.data.manipulator.mutable.entity.ArmorStandData> {
                                /**
                                 * Returns whether this armor stand is considered a "marker" where if
                                 * it is a "marker", then the armor stand is not rendered itself, but
                                 * the equipment it has would still be rendered.
                                 * @return Whether this armor stand is a marker
                                 */
                                // @ts-ignore
                                marker(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Returns whether this armor stand is a small armor stand or not.
                                 * @return Whether this is a small armor stand
                                 */
                                // @ts-ignore
                                small(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Returns whether this armor stand shows arms or not.
                                 * <p>Arms that do not show may also not show an item in hand.</p>
                                 * @return Whether this armor stand shows its arms
                                 */
                                // @ts-ignore
                                arms(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets whether this armor stand has a visible base plate or not.
                                 * @return Whether this armor stand has a visible base plate
                                 */
                                // @ts-ignore
                                basePlate(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
