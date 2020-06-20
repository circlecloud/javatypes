declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace statistic {
                /**
                 * Represents some statistic in Minecraft with a string ID.
                 */
                // @ts-ignore
                interface Statistic extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                    /**
                     * Returns the objective {@link Criterion} for this statistic.
                     * @return Objective criterion
                     */
                    // @ts-ignore
                    getCriterion(): java.util.Optional<org.spongepowered.api.scoreboard.critieria.Criterion>
                    /**
                     * Returns the {@link NumberFormat} used to format the value of this
                     * statistic.
                     * @return Statistic's number format
                     */
                    // @ts-ignore
                    getFormat(): java.text.NumberFormat
                    /**
                     * Returns this statistic's {@link StatisticType}.
                     * @return Statistic type
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.statistic.StatisticType
                }
            }
        }
    }
}
