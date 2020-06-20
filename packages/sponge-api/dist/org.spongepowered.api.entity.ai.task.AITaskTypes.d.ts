declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        // @ts-ignore
                        class AITaskTypes extends java.lang.Object {
                            /**
                             * {@link AITask} where {@link Creature}s avoid other {@link Agent}s based on a {@link Predicate}.
                             */
                            // @ts-ignore
                            readonly AVOID_ENTITY: org.spongepowered.api.entity.ai.task.AITaskType
                            /**
                             * {@link AITask} where {@link RideableHorse}s run around while {@link Humanoid}s attempt to tame them.
                             */
                            // @ts-ignore
                            readonly RUN_AROUND_LIKE_CRAZY: org.spongepowered.api.entity.ai.task.AITaskType
                            /**
                             * {@link AITask} where {@link Agent}s swim in liquids.
                             */
                            // @ts-ignore
                            readonly SWIMMING: org.spongepowered.api.entity.ai.task.AITaskType
                            /**
                             * {@link AITask} where {@link Creature}s walk around.
                             */
                            // @ts-ignore
                            readonly WANDER: org.spongepowered.api.entity.ai.task.AITaskType
                            /**
                             * {@link AITask} where {@link Agent}s will "watch" other {@link Entity}s.
                             */
                            // @ts-ignore
                            readonly WATCH_CLOSEST: org.spongepowered.api.entity.ai.task.AITaskType
                        }
                    }
                }
            }
        }
    }
}
