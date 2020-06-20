declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * A {@link DataHolder} which has no attachment to any particular world allowing
                 * it to be used as a blueprint to create multiple copies of its containing
                 * data.
                 */
                // @ts-ignore
                interface Archetype<S extends org.spongepowered.api.data.LocatableSnapshot<S>, E> extends org.spongepowered.api.data.DataHolder {
                    /**
                     * Creates a new instance based on this archetype at the given location.
                     * @param location The location to create the new instance at
                     * @return The created type, if successful
                     */
                    // @ts-ignore
                    apply(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Optional<E>
                    /**
                     * Creates a new immutable snapshot based on this archetype.
                     * @param location The location for the snapshot to be specified as at
                     * @return The snapshot
                     */
                    // @ts-ignore
                    toSnapshot(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): S
                }
            }
        }
    }
}
