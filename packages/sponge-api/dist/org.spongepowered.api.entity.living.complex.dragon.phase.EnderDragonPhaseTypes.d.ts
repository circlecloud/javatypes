declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace complex {
                        namespace dragon {
                            namespace phase {
                                /**
                                 * An enumeration of {@link EnderDragonPhaseType}s.
                                 */
                                // @ts-ignore
                                class EnderDragonPhaseTypes extends java.lang.Object {
                                    /**
                                     * The {@link EnderDragon} is flying to the End Portal to die.
                                     */
                                    // @ts-ignore
                                    readonly DYING: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is circling around.
                                     */
                                    // @ts-ignore
                                    readonly HOLDING_PATTERN: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is hovering.
                                     * <p>This is the default state when summoned using the {@code /summon} command.</p>
                                     */
                                    // @ts-ignore
                                    readonly HOVER: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is charging towards a {@link Player}.
                                     */
                                    // @ts-ignore
                                    readonly CHARGING_PLAYER: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is landing on the End Portal.
                                     * <p>This is part of the transition to a landed state.</p>
                                     */
                                    // @ts-ignore
                                    readonly LANDING: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is flying to the End Portal to land.
                                     * <p>This is part of the transition to a landed state.</p>
                                     */
                                    // @ts-ignore
                                    readonly LANDING_APPROACH: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is growling before performing a dragon breath attack.
                                     */
                                    // @ts-ignore
                                    readonly SITTING_ATTACKING: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is performing a dragon breath attack.
                                     * <p>This is part of the landed state.</p>
                                     */
                                    // @ts-ignore
                                    readonly SITTING_FLAMING: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is looking for a {@link Player} to peform a dragon breath attack.
                                     */
                                    // @ts-ignore
                                    readonly SITTING_SCANNING: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is preparing to shoot a {@link DragonFireball}.
                                     */
                                    // @ts-ignore
                                    readonly STRAFE_PLAYER: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                    /**
                                     * The {@link EnderDragon} is taking off from the End Portal.
                                     * <p>This is part of the transition out of a landed state.</p>
                                     */
                                    // @ts-ignore
                                    readonly TAKEOFF: org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseType
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
