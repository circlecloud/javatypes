declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace MoveEntityEvent {
                        namespace Teleport {
                            // @ts-ignore
                            interface Portal extends org.spongepowered.api.event.entity.MoveEntityEvent.Teleport {
                                /**
                                 * Sets whether the {@link PortalAgent} will be used.
                                 * <p>
                                 * If this is set to true, the {@link PortalAgent} will search for a
                                 * portal at the {@link #getToTransform()} location and will attempt to
                                 * create one if not found.
                                 * </p>
                                 * <p>
                                 * If this is set to false, the {@link #getTargetEntity()} will only be
                                 * teleported to the {@link #getToTransform()} location.
                                 * </p>
                                 * @param usePortalAgent whether to use the portal agent
                                 */
                                // @ts-ignore
                                setUsePortalAgent(usePortalAgent: boolean): void
                                /**
                                 * Gets whether the {@link PortalAgent} will be used.
                                 * <p>
                                 * If this is set to true, the {@link PortalAgent} will search for a
                                 * Portal at the {@link #getToTransform()} location, and will attempt to
                                 * create one if not found.
                                 * </p>
                                 * <p>
                                 * If this is set to false, the {@link #getTargetEntity()} will only be
                                 * teleported to the {@link #getToTransform()} location.
                                 * </p>
                                 * @return whether to use the portal agent
                                 */
                                // @ts-ignore
                                getUsePortalAgent(): boolean
                                /**
                                 * Gets the {@link PortalAgent} that will be responsible for teleporting
                                 * the {@link #getTargetEntity()} through a Portal.
                                 * @return The portal agent
                                 */
                                // @ts-ignore
                                getPortalAgent(): org.spongepowered.api.world.PortalAgent
                                /**
                                 * Sets the {@link PortalAgent} that will be responsible for teleporting
                                 * the {@link #getTargetEntity()} through a Portal.
                                 * @param portalAgent The portal agent
                                 */
                                // @ts-ignore
                                setPortalAgent(portalAgent: org.spongepowered.api.world.PortalAgent): void
                                /**
                                 * This method exists solely to provide backwards-compatibility with existing plugins
                                 * using the old Teleport event. It should not be called directly - instead,
                                 * plugins should use {@link SpongeEventFactory#createMoveEntityEventTeleportPortal(Cause, Transform, Transform, PortalAgent, Entity, boolean, boolean)}
                                 * @param cause The cause to use
                                 * @param fromTransform The from transform
                                 * @param toTransform The target transform
                                 * @param portalAgent The portal agent to use
                                 * @param targetEntity The entity being teleported
                                 * @param usePortalAgent Whether to use the portal agent
                                 * @return The event
                                 */
                                // @ts-ignore
                                createMoveEntityEventTeleportPortal(cause: org.spongepowered.api.event.cause.Cause, fromTransform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>, toTransform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>, portalAgent: org.spongepowered.api.world.PortalAgent, targetEntity: org.spongepowered.api.entity.Entity, usePortalAgent: boolean): org.spongepowered.api.event.entity.MoveEntityEvent.Teleport.Portal
                            }
                        }
                    }
                }
            }
        }
    }
}
