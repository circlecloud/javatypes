declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace statistic {
                /**
                 * Represents a statistic on a particular {@link EntityType}.
                 */
                // @ts-ignore
                interface EntityStatistic extends org.spongepowered.api.statistic.Statistic {
                    /**
                     * Returns the {@link EntityType} of this statistic.
                     * @return EntityType
                     */
                    // @ts-ignore
                    getEntityType(): org.spongepowered.api.entity.EntityType
                }
            }
        }
    }
}
