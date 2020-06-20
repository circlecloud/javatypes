declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace statistic {
                /**
                 * Represents a {@link Statistic} on a particular {@link BlockType}.
                 */
                // @ts-ignore
                interface BlockStatistic extends org.spongepowered.api.statistic.ItemStatistic {
                    /**
                     * Returns the statistic's {@link BlockType}.
                     * @return BlockType
                     */
                    // @ts-ignore
                    getBlockType(): org.spongepowered.api.block.BlockType
                }
            }
        }
    }
}
