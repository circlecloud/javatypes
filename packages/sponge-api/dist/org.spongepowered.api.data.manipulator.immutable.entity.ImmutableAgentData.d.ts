declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for toggling AI tasks on {@link Agent}s.
                             */
                            // @ts-ignore
                            interface ImmutableAgentData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAgentData, org.spongepowered.api.data.manipulator.mutable.entity.AgentData> {
                                /**
                                 * Gets the {@link ImmutableValue} for whether AI tasks are enabled or not.
                                 * @return The immutable value for the current "enabled" state of ai tasks
                                 */
                                // @ts-ignore
                                aiEnabled(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
