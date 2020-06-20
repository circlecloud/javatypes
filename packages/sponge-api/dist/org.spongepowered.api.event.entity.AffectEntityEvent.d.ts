declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * An event that affects multiple {@link Entity} instances as a bulk action.
                     * The constraint is that if an action can be deemed as necessary for selective
                     * individualized processing, such as {@link DamageEntityEvent},
                     * the actioned {@link Event} is handled individually. If a bulk of
                     * {@link Entity} instances are being affected, for example by an
                     * {@link Explosion} "damaging" a varying amount of {@link Entity} instances.
                     * Other cases will be included as necessary.
                     */
                    // @ts-ignore
                    interface AffectEntityEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets an {@link List} of the entity data
                         * un-affected by event changes.
                         * <p>This method <b>MUST</b> be called at {@link Order#PRE} in order
                         * to be properly initialized, after which it can be called at any time.
                         * If it is not first called at {@link Order#PRE}, it will throw an {@link IllegalStateException}
                         * when invoked.</p>
                         * @return The ImmutableList
                         * @throws IllegalStateException If the method is called after the pre order
                         */
                        // @ts-ignore
                        getEntitySnapshots(): java.util.List<org.spongepowered.api.entity.EntitySnapshot>
                        /**
                         * Gets the {@link List} who will be affected after event
                         * resolution.
                         * @return The List
                         */
                        // @ts-ignore
                        getEntities(): java.util.List<org.spongepowered.api.entity.Entity>
                        /**
                         * Filters out {@link Location}'s from
                         * {@link AffectEntityEvent#getEntities()} to be affected by this event.
                         * <p>Locations for which the predicate returns <code>false</code> will
                         * be removed from {@link #getEntities()}.</p>
                         * @param predicate The predicate to use for filtering
                         * @return The entities removed from {#link #getEntities()}
                         */
                        // @ts-ignore
                        filterEntityLocations(predicate: java.util.function.Predicate<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>> | java.util.function$.Predicate<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>): java.util.List<org.spongepowered.api.entity.Entity>
                        /**
                         * Filters out {@link Entity}'s from {@link AffectEntityEvent#getEntities()}
                         * to be affected by this event.
                         * <p>Entities for which the predicate returns <code>false</code> will
                         * be removed from {@link #getEntities()}.</p>
                         * @param predicate The predicate to use for filtering
                         * @return The entities removed from {#link #getEntities()}
                         */
                        // @ts-ignore
                        filterEntities(predicate: java.util.function.Predicate<org.spongepowered.api.entity.Entity> | java.util.function$.Predicate<org.spongepowered.api.entity.Entity>): java.util.List<? extends org.spongepowered.api.entity.Entity>
                    }
                }
            }
        }
    }
}
