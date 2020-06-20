declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                /**
                 * Represents the progress of a {@link Advancement}.
                 */
                // @ts-ignore
                interface AdvancementProgress extends org.spongepowered.api.advancement.Progressable {
                    /**
                     * Gets the {@link Advancement}.
                     * @return The advancement
                     */
                    // @ts-ignore
                    getAdvancement(): org.spongepowered.api.advancement.Advancement
                    /**
                     * Gets the {@link CriterionProgress} for the given
                     * {@link AdvancementCriterion} if the specified criterion is
                     * present on the {@link Advancement}.
                     * <p>For AND and OR criteria will wrapped {@link CriterionProgress} be
                     * provided that will interact with the {@link CriterionProgress}s
                     * for every child {@link AdvancementCriterion}s.</p>
                     * @param criterion The criterion
                     * @return The criterion progress
                     */
                    // @ts-ignore
                    get(criterion: org.spongepowered.api.advancement.criteria.AdvancementCriterion): java.util.Optional<org.spongepowered.api.advancement.criteria.CriterionProgress>
                    /**
                     * Gets the {@link ScoreCriterionProgress} for the given
                     * {@link ScoreAdvancementCriterion} if the specified criterion is
                     * present on the {@link Advancement}.
                     * @param criterion The score criterion
                     * @return The score criterion progress
                     */
                    // @ts-ignore
                    get(criterion: org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion): java.util.Optional<org.spongepowered.api.advancement.criteria.ScoreCriterionProgress>
                    /**
                     * Gets the {@link CriterionProgress} for the
                     * given {@link AdvancementCriterion}.
                     * <p>For AND and OR criteria will wrapped {@link CriterionProgress} be
                     * provided that will interact with the {@link CriterionProgress}s
                     * for every child {@link AdvancementCriterion}s.</p>
                     * @param criterion The criterion
                     * @return The criterion progress
                     */
                    // @ts-ignore
                    require(criterion: org.spongepowered.api.advancement.criteria.AdvancementCriterion): org.spongepowered.api.advancement.criteria.CriterionProgress
                    /**
                     * Gets the {@link ScoreCriterionProgress} for the
                     * given {@link ScoreAdvancementCriterion}.
                     * @param criterion The score criterion
                     * @return The score criterion progress
                     */
                    // @ts-ignore
                    require(criterion: org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion): org.spongepowered.api.advancement.criteria.ScoreCriterionProgress
                }
            }
        }
    }
}
