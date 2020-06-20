declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            // @ts-ignore
                            interface SwimmingAITask extends org.spongepowered.api.entity.ai.task.AITask<org.spongepowered.api.entity.living.Agent> {
                                /**
                                 * Creates a new {@link Builder} to build a new
                                 * {@link SwimmingAITask}.
                                 * @return A new builder
                                 */
                                // @ts-ignore
                                builder(): org.spongepowered.api.entity.ai.task.builtin.SwimmingAITask.Builder
                                /**
                                 * Gets the chance that the owning {@link Agent} will perform
                                 * a "jump". The chance is limited between {@code 0} and {@code 1},
                                 * to where the higher the chance, the more likely the entity will
                                 * "jump" to appear "swimming".
                                 * @return The chance that the owning entity will "swim"
                                 */
                                // @ts-ignore
                                getSwimChance(): float
                                /**
                                 * Sets the chance that the owning {@link Agent} will perform
                                 * a "jump". The chance is limited between {@code 0} and {@code 1},
                                 * to where the higher the chance, the more likely the entity will
                                 * "jump" to appear "swimming".
                                 * @param chance The chance that the entity will "swim"
                                 */
                                // @ts-ignore
                                setSwimChance(chance: number /*float*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
