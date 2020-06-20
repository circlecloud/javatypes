declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace MoveEntityEvent {
                        /**
                         * Fired when an {@link Entity}'s position changes for reasons other than
                         * normal movement.
                         */
                        // @ts-ignore
                        interface Teleport extends org.spongepowered.api.event.entity.MoveEntityEvent {
                            /**
                             * Gets whether the entity teleporting will maintain its velocity
                             * after teleport.
                             * @return Whether the entity will maintain momentum after teleport
                             */
                            // @ts-ignore
                            getKeepsVelocity(): boolean
                            /**
                             * Sets whether the entity teleporting will maintain its velocity
                             * after teleport.
                             * @param keepsVelocity Whether the entity will maintain velocity
                             */
                            // @ts-ignore
                            setKeepsVelocity(keepsVelocity: boolean): void
                            /**
                             * This method exists solely to provide backwards-compatibility with existing plugins
                             * using the old Teleport Event. It should not be called directly - instead,
                             * plugins should use {@link SpongeEventFactory#createMoveEntityEventTeleport(Cause, Transform, Transform, Entity, boolean)}
                             * @param cause The cause to use
                             * @param fromTransform The from transform
                             * @param toTransform The target transform
                             * @param targetEntity The target entity
                             * @return The event
                             */
                            // @ts-ignore
                            createMoveEntityEventTeleport(cause: org.spongepowered.api.event.cause.Cause, fromTransform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>, toTransform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>, targetEntity: org.spongepowered.api.entity.Entity): org.spongepowered.api.event.entity.MoveEntityEvent.Teleport
                        }
                    }
                }
            }
        }
    }
}
