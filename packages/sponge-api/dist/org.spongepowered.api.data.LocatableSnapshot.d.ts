declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * A type of {@link ImmutableDataHolder} that may be linked to a particular
                 * {@link Location}. Being that a {@link LocatableSnapshot} may be built
                 * by an {@link ImmutableDataBuilder}, the {@link Location} may be
                 * <code>null</code> such that {@link #getLocation()} returns
                 * {@link Optional#empty()}.
                 * @param <T> The type of location snapshot for self referencing
                 */
                // @ts-ignore
                interface LocatableSnapshot<T extends org.spongepowered.api.data.LocatableSnapshot<T>> extends org.spongepowered.api.data.ImmutableDataHolder<T> {
                    /**
                     * Gets the {@link UUID} of the world.
                     * @return The world unique Id
                     */
                    // @ts-ignore
                    getWorldUniqueId(): java.util.UUID
                    /**
                     * Gets the saved block position.
                     * @return The saved block position
                     */
                    // @ts-ignore
                    getPosition(): Vector3i
                    /**
                     * Gets the {@link Location} of the snapshot at which it may have been
                     * taken from. The {@link Location} being immutable signifies that the
                     * {@link LocatableSnapshot} can be re-created at the desired
                     * {@link Location}.
                     * @return The location of where the snapshot was taken, if available
                     */
                    // @ts-ignore
                    getLocation(): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Creates a copy of the snapshot with the provided
                     * {@link Location}.
                     * @param location The location
                     * @return The new snapshot
                     */
                    // @ts-ignore
                    withLocation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): T
                }
            }
        }
    }
}
