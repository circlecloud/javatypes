declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * An event that is related to experience.
                     */
                    // @ts-ignore
                    interface ChangeEntityExperienceEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original total experience unmodified by event changes.
                         * @return The experience
                         * @deprecated Use {#link #getOriginalData()} instead, which provides more
                         *  information about the experience.
                         */
                        // @ts-ignore
                        getOriginalExperience(): int
                        /**
                         * Gets the original values for the experience unmodified by event changes.
                         * @return The experience data
                         */
                        // @ts-ignore
                        getOriginalData(): org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExperienceHolderData
                        /**
                         * Gets the total experience after event changes.
                         * @return The experience
                         * @deprecated Use {#link #getFinalData()} instead, which provides more
                         *  information about the experience.
                         */
                        // @ts-ignore
                        getExperience(): int
                        /**
                         * Sets the final total experience after event changes.
                         * @param experience The experience
                         * @deprecated Modify the value returned by {#link #getFinalData()}
                         *  instead, which provides more information about the experience.
                         */
                        // @ts-ignore
                        setExperience(experience: number /*int*/): void
                        /**
                         * Gets the experience after an event has been processed. Modify this
                         * data manipulator to change the final experience.
                         * @return The experience to receive
                         */
                        // @ts-ignore
                        getFinalData(): org.spongepowered.api.data.manipulator.mutable.entity.ExperienceHolderData
                        /**
                         * This method exists solely to provide backwards-compatibility with existing plugins
                         * using the old ChangeExperienceEvent. It should not be called directly - instead,
                         * plugins should use {@link SpongeEventFactory#createChangeEntityExperienceEvent(Cause, ImmutableExperienceHolderData, ExperienceHolderData, Entity)}
                         * @param cause The cause to use
                         * @param originalExperience The original experience amount
                         * @param experience New experience amount
                         * @param targetEntity The target entity
                         * @return The event
                         */
                        // @ts-ignore
                        createChangeEntityExperienceEvent(cause: org.spongepowered.api.event.cause.Cause, originalExperience: number /*int*/, experience: number /*int*/, targetEntity: org.spongepowered.api.entity.Entity): org.spongepowered.api.event.entity.ChangeEntityExperienceEvent
                    }
                }
            }
        }
    }
}
