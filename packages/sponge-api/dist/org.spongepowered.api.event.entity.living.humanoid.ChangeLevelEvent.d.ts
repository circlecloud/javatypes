declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            /**
                             * Called when a human's level is changed.
                             * @deprecated Use {#link ChangeEntityExperienceEvent} instead
                             */
                            // @ts-ignore
                            interface ChangeLevelEvent extends org.spongepowered.api.event.entity.living.humanoid.TargetHumanoidEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the original level of the human.
                                 * @return The original level of the human
                                 */
                                // @ts-ignore
                                getOriginalLevel(): number /*int*/
                                /**
                                 * Gets the new level of the human.
                                 * @return The new level of the human
                                 */
                                // @ts-ignore
                                getLevel(): number /*int*/
                                /**
                                 * Sets the new level of the human.
                                 * <p>Technically, this can be set to the same level to
                                 * cancel effects of the level being changed.</p>
                                 * @param level The new level to change to
                                 */
                                // @ts-ignore
                                setLevel(level: number /*int*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
