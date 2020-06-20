declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "locking" information for a
                             * {@link TileEntityCarrier} that can be "locked" such that it can only be
                             * interacted with if the "lock" has a matching {@link ItemStack} of the same
                             * name.
                             */
                            // @ts-ignore
                            interface ImmutableLockableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableLockableData, org.spongepowered.api.data.manipulator.mutable.tileentity.LockableData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "lock" token.
                                 * @return The immutable value for the lock token
                                 */
                                // @ts-ignore
                                lockToken(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.String>
                            }
                        }
                    }
                }
            }
        }
    }
}
