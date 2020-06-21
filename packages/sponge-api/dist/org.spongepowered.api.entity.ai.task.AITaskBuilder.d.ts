declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        /**
                         * A utility to assist in building {@link AITask}s.
                         * @param <O> The type of agent
                         * @param <A> The type of task
                         * @param <B> The type of builder, self-referencing
                         */
                        // @ts-ignore
                        interface AITaskBuilder<O extends org.spongepowered.api.entity.living.Agent, A extends org.spongepowered.api.entity.ai.task.AITask<O>, B extends org.spongepowered.api.entity.ai.task.AITaskBuilder<O, A, B>> extends org.spongepowered.api.util.ResettableBuilder<A, B> {
                            /**
                             * Builds the {@link AITask}.
                             * @param owner The owner of the task
                             * @return The task
                             */
                            // @ts-ignore
                            build(owner: O): A
                        }
                    }
                }
            }
        }
    }
}
