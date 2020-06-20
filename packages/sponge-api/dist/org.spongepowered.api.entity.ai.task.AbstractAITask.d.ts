declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        /**
                         * An abstract implementation of a {@link AITask} that a {@link Goal} can run.
                         * <p>It is required for anyone wanting to write their own logic that a Goal can
                         * run to utilize this class. If you desire to use the builtin AI included with
                         * Minecraft, use {@link GameRegistry#createBuilder(Class)} and pass a builder to
                         * it instead.</p>
                         * <p>At the beginning of every "AI" tick, all {@link AITask}s that are added to
                         * the parent {@link Goal} are iterated through. If an {@link AITask} is already
                         * marked as "in use", that task's {@link #continueUpdating()} is checked for
                         * {@code true}. If {@link #continueUpdating()} is {@code false}, {@link #reset()}
                         * is invoked, and the {@link AITask} is "flagged" as unused for the parent {@link Goal}.
                         * If {@link #continueUpdating()} is {@code true}, {@link #update()} is invoked
                         * to perform any major logic.</p>
                         * <p>If an {@link AITask} is not currently flagged as "in use", then {@link #shouldUpdate()}
                         * is invoked. If {@link #shouldUpdate()} is {@code true}, the {@link AITask} is
                         * marked as "in use", and {@link #start()} is invoked. After {@link #start()}
                         * is called, {@link #update()} will be invoked to be used for the first time
                         * in this "AI tick".</p>
                         * <p>Regardless whether the {@link AITask} was "in use" or not, if the {@link AITask}
                         * is now "in use", {@link #continueUpdating()} is called to verify the validity of the
                         * task. If {@link #continueUpdating()} is {@code false}, {@link #reset()} is called
                         * to clean up the {@link AITask}.</p>
                         * @param <O> The type of Agent
                         */
                        // @ts-ignore
                        class AbstractAITask<O extends org.spongepowered.api.entity.living.Agent> extends java.lang.Object implements org.spongepowered.api.entity.ai.task.AITask<O> {
                            /**
                             * Creates a new {@link AbstractAITask} with the provided
                             * {@link AITask}.
                             * @param type The type
                             */
                            // @ts-ignore
                            constructor(type: org.spongepowered.api.entity.ai.task.AITaskType)
                            // @ts-ignore
                            getType(): org.spongepowered.api.entity.ai.task.AITaskType
                            // @ts-ignore
                            getGoal(): java.util.Optional<org.spongepowered.api.entity.ai.Goal<O>>
                            /**
                             * Invoked when the task is "started". A "start" of a task occurs at the
                             * "start" of the "AI" is "ticking". Depending on the case where
                             * {@link #shouldUpdate()} returns {@code false}, an {@link AITask} is
                             * <strong>NOT</strong> going to be called, so this method would not be
                             * called at the "start" of the tick to "prepare" for {@link #update()}.
                             */
                            // @ts-ignore
                            abstract start(): void
                            /**
                             * Determines whether this {@link AITask} should be considered for "ticking"
                             * or {@link #start()}, {@link #update()}, and {@link #reset()} are called
                             * for that "AI" tick.
                             * @return Whether this task should be marked for use in the current tick
                             */
                            // @ts-ignore
                            abstract shouldUpdate(): boolean
                            /**
                             * Performs any customary logic for this "task" to modify the parent
                             * {@link Agent} in any way, including navigation, health, potion effects,
                             * etc. Only called when {@link #shouldUpdate()} returns {@code true},
                             * and after {@link #start()} has completed. Likewise, if
                             * {@link #continueUpdating()}
                             */
                            // @ts-ignore
                            abstract update(): void
                            /**
                             * Called to verify that this {@link AITask} needs to {@link #update()}
                             * in this tick. If this returns {@code false}, this {@link AITask}
                             * is removed from use and {@link #reset()} is called.
                             * @return Whether this task should update this "tick" or not
                             */
                            // @ts-ignore
                            abstract continueUpdating(): boolean
                            /**
                             * Performs any reset necessary for this task during the current tick.
                             * <p>Note that this may be called during any state during {@link #start()}
                             * or {@link #update()} such that the task is removed from use for the
                             * current "AI" tick.</p>
                             */
                            // @ts-ignore
                            abstract reset(): void
                        }
                    }
                }
            }
        }
    }
}
