declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    /**
                     * Represents a fish hook.
                     */
                    // @ts-ignore
                    interface FishHook extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets the hooked entity for this fish hook.
                         * <p>Fishooks can attach to {@link Entity} objects in the world, as though
                         * they are temporarily leashed. The hooked entity may also be null.</p>
                         * @return The hooked item, if available
                         */
                        // @ts-ignore
                        getHookedEntity(): java.util.Optional<org.spongepowered.api.entity.Entity>
                        /**
                         * Sets the hooked entity for this fish hook.
                         * <p>Fishhooks can attach to {@link Entity} objects in the world, as though
                         * they are temporarily leashed. The hooked entity may also be null.</p>
                         * @param entity The hooked entity
                         */
                        // @ts-ignore
                        setHookedEntity(entity: org.spongepowered.api.entity.Entity): void
                    }
                }
            }
        }
    }
}
