declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    /**
                     * An Agent represents a {@link Living} that has AI. In the future Sponge will
                     * allow for custom AIs, but for now vanilla behavior can only be disabled.
                     */
                    // @ts-ignore
                    interface Agent extends org.spongepowered.api.entity.living.Living {
                        /**
                         * Gets the current target, usually according to the various
                         * {@link AITask}s that are acting on this agent.
                         * @return The target entity, if available
                         */
                        // @ts-ignore
                        getTarget(): java.util.Optional<org.spongepowered.api.entity.Entity>
                        /**
                         * Sets the current target, usually to bypass what the {@link AITask}s are
                         * deciding to be the target.
                         * @param target The target entity, or null
                         */
                        // @ts-ignore
                        setTarget(target: org.spongepowered.api.entity.Entity): void
                        /**
                         * Gets a copy of the {@link AgentData} associated with this {@link Agent}.
                         * @return A copy of the agent data
                         */
                        // @ts-ignore
                        getAgentData(): org.spongepowered.api.data.manipulator.mutable.entity.AgentData
                        /**
                         * Gets the {@link Value} for whether AI tasks are enabled or not.
                         * @return The value for the current "enabled" state of ai tasks
                         */
                        // @ts-ignore
                        aiEnabled(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        /**
                         * Gets a {@link Goal} based on the {@link GoalType}.
                         * @param type GoalType to lookup
                         * @param <T> Inferred agent type
                         * @return The goal or {#link Optional#empty()} if not found.
                         */
                        // @ts-ignore
                        getGoal<T extends org.spongepowered.api.entity.living.Agent>(type: org.spongepowered.api.entity.ai.GoalType): java.util.Optional<org.spongepowered.api.entity.ai.Goal<T>>
                    }
                }
            }
        }
    }
}
