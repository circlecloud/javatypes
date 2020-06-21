declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace objective {
                    namespace Objective {
                        /**
                         * Represents a builder to create {@link Objective} instances.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.scoreboard.objective.Objective, org.spongepowered.api.scoreboard.objective.Objective.Builder> {
                            /**
                             * Sets the name of the {@link Objective}.
                             * @param name The name to set
                             * @return This builder
                             */
                            // @ts-ignore
                            name(name: java.lang.String | string): org.spongepowered.api.scoreboard.objective.Objective.Builder
                            /**
                             * Sets the display name of the {@link Objective}.
                             * @param displayName The display name to set
                             * @return This builder
                             */
                            // @ts-ignore
                            displayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.objective.Objective.Builder
                            /**
                             * Sets the {@link Criterion} of the {@link Objective}.
                             * @param criterion The {#link Criterion} to set
                             * @return This builder
                             */
                            // @ts-ignore
                            criterion(criterion: org.spongepowered.api.scoreboard.critieria.Criterion): org.spongepowered.api.scoreboard.objective.Objective.Builder
                            /**
                             * Sets the {@link ObjectiveDisplayMode} of the {@link Objective}.
                             * @param objectiveDisplayMode The {#link ObjectiveDisplayMode} to set
                             * @return This builder
                             */
                            // @ts-ignore
                            objectiveDisplayMode(objectiveDisplayMode: org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode): org.spongepowered.api.scoreboard.objective.Objective.Builder
                            /**
                             * Builds an instance of an {@link Objective}.
                             * @return A new instance of an {#link Objective}
                             * @throws IllegalStateException if the {#link Objective} is not complete
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.scoreboard.objective.Objective
                        }
                    }
                }
            }
        }
    }
}
