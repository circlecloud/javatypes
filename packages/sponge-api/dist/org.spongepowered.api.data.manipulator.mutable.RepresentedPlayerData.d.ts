declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * An {@link DataManipulator} handling the {@link GameProfile}
                         * represented by this {@link DataHolder}. Applicable to a {@link Skull}
                         * {@link TileEntity} or {@link ItemStack}.
                         */
                        // @ts-ignore
                        interface RepresentedPlayerData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.RepresentedPlayerData, org.spongepowered.api.data.manipulator.immutable.ImmutableRepresentedPlayerData> {
                            /**
                             * Gets the {@link Value}{@link GameProfile} that is
                             * represented by the {@link DataHolder}.
                             * @return The value of the game profile
                             * @see Keys#REPRESENTED_PLAYER
                             */
                            // @ts-ignore
                            owner(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.profile.GameProfile>
                        }
                    }
                }
            }
        }
    }
}
