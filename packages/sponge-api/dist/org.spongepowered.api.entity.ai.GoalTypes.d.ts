declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    // @ts-ignore
                    class GoalTypes extends java.lang.Object {
                        /**
                         * {@link Goal} that is the default set of tasks for most {@link Agent}s.
                         */
                        // @ts-ignore
                        readonly NORMAL: org.spongepowered.api.entity.ai.GoalType
                        /**
                         * {@link Goal} that is the "target" set of tasks.
                         * <p>In this goal, the objective is to formulate the target so that the
                         * {@link Agent} can act on it. The best example is how monsters like zombie
                         * and skeleton attack enemies: they seek out a target and if a task in
                         * their normal goal sees that they have a target, they act accordingly.</p>
                         */
                        // @ts-ignore
                        readonly TARGET: org.spongepowered.api.entity.ai.GoalType
                    }
                }
            }
        }
    }
}
