declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Data regarding the toggle of AI tasks on an entity.
                             */
                            // @ts-ignore
                            interface AgentData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AgentData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAgentData> {
                                /**
                                 * Gets the {@link Value} for whether AI tasks are enabled or not.
                                 * @return The value for the current "enabled" state of ai tasks
                                 * @see Keys#AI_ENABLED
                                 */
                                // @ts-ignore
                                aiEnabled(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
