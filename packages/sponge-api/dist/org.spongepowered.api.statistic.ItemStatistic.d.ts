declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace statistic {
                /**
                 * Represents a {@link Statistic} on a particular {@link ItemType}.
                 */
                // @ts-ignore
                interface ItemStatistic extends org.spongepowered.api.statistic.Statistic {
                    /**
                     * Returns the {@link ItemType} this statistic is associated with.
                     * @return ItemType of statistic
                     */
                    // @ts-ignore
                    getItemType(): org.spongepowered.api.item.ItemType
                }
            }
        }
    }
}
