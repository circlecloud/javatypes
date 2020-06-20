declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} handling the {@link GameProfile}
                         * represented by this {@link DataHolder}. Applicable to a {@link Skull}
                         * {@link TileEntity} or {@link ItemStack}.
                         */
                        // @ts-ignore
                        interface ImmutableRepresentedPlayerData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutableRepresentedPlayerData, org.spongepowered.api.data.manipulator.mutable.RepresentedPlayerData> {
                            /**
                             * Gets the {@link ImmutableValue} for the {@link GameProfile} that is
                             * represented by the {@link DataHolder}.
                             * @return The immutable value of the game profile
                             */
                            // @ts-ignore
                            owner(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.profile.GameProfile>
                        }
                    }
                }
            }
        }
    }
}
