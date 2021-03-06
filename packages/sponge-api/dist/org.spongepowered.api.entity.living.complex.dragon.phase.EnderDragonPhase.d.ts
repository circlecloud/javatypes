declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace complex {
                        namespace dragon {
                            namespace phase {
                                /**
                                 * An {@link EnderDragon} phase.
                                 */
                                // @ts-ignore
                                interface EnderDragonPhase {
                                    /**
                                     * Gets the type of this phase.
                                     * @return The type of this phase
                                     */
                                    // @ts-ignore
                                    getType(): org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * Gets the position the dragon is flying towards.
                                     * @return The target position
                                     */
                                    // @ts-ignore
                                    getTargetPosition(): java.util.Optional<Vector3d>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
