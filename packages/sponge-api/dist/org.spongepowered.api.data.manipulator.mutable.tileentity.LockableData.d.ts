declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * An {@link DataManipulator} handling the "locking" information for a
                             * {@link TileEntityCarrier} that can be "locked" such that it can only be
                             * interacted with if the "lock" has a matching {@link ItemStack} of the same
                             * name.
                             */
                            // @ts-ignore
                            interface LockableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.LockableData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableLockableData> {
                                /**
                                 * Gets the {@link Value} for the "lock" token.
                                 * @return The immutable value for the lock token
                                 * @see Keys#LOCK_TOKEN
                                 */
                                // @ts-ignore
                                lockToken(): org.spongepowered.api.data.value.mutable.Value<java.lang.String | string>
                            }
                        }
                    }
                }
            }
        }
    }
}
