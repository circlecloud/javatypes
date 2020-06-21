declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                /**
                 * Represents a scheduled block update. SBUs with higher priorities are
                 * processed first.
                 */
                // @ts-ignore
                interface ScheduledBlockUpdate extends org.spongepowered.api.world.Locatable {
                    /**
                     * Gets the amount of ticks until this SBU should cause the block to update.
                     * @return The amount of ticks until this SBU should cause the block to
                     *          update.
                     */
                    // @ts-ignore
                    getTicks(): number /*int*/
                    /**
                     * Sets the amount of ticks until this SBU should cause the block to update.
                     * @param ticks The new amount of ticks until this SBU should cause the
                     *         block to update.
                     */
                    // @ts-ignore
                    setTicks(ticks: number /*int*/): void
                    /**
                     * Gets the priority of this scheduled block update.
                     * @return The priority of this scheduled block update
                     */
                    // @ts-ignore
                    getPriority(): number /*int*/
                    /**
                     * Sets the priority of this scheduled block update.
                     * @param priority The new priority of this scheduled block update
                     */
                    // @ts-ignore
                    setPriority(priority: number /*int*/): void
                }
            }
        }
    }
}
