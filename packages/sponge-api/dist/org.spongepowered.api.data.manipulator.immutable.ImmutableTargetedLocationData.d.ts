declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} handling the supposed targeted
                         * {@link Vector3d}.
                         * <p>Usually for the case of {@link EnderPearl}s, the targeted {@link Vector3d}
                         * is where the {@link EnderPearl} will move towards until it's expiration time.
                         * In the case of {@link ItemStack}s of type {@link ItemTypes#COMPASS}, the
                         * targeted {@link Vector3d} is where the compass will point towards.</p>
                         */
                        // @ts-ignore
                        interface ImmutableTargetedLocationData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutableTargetedLocationData, org.spongepowered.api.data.manipulator.mutable.TargetedLocationData> {
                            /**
                             * Gets the {@link ImmutableValue} for the targeted {@link Vector3d}.
                             * @return The immutable value for the targeted location
                             */
                            // @ts-ignore
                            target(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                        }
                    }
                }
            }
        }
    }
}
