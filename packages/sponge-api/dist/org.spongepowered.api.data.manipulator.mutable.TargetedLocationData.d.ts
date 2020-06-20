declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * An {@link DataManipulator} handling the a targeted {@link Vector3d}.
                         * <p>Usually for the case of a {@link EyeOfEnder}, the targeted {@link Vector3d}
                         * is where the {@link EyeOfEnder} will move towards until its expiration time.
                         * In the case of a {@link Player}, the targeted {@link Vector3d} is where any
                         * compass seen by the player will point towards. Note that it is not possible
                         * to set the target of an individual compass {@link ItemStack}.</p>
                         */
                        // @ts-ignore
                        interface TargetedLocationData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.TargetedLocationData, org.spongepowered.api.data.manipulator.immutable.ImmutableTargetedLocationData> {
                            /**
                             * Gets the {@link Value} for the targeted {@link Vector3d}.
                             * @return The value for the targeted location
                             * @see Keys#TARGETED_LOCATION
                             */
                            // @ts-ignore
                            target(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                        }
                    }
                }
            }
        }
    }
}
