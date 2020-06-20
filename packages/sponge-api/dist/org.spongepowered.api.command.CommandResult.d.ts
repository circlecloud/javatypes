declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * Represents the result of a command in Sponge.
                 */
                // @ts-ignore
                class CommandResult extends java.lang.Object {
                    /**
                     * Returns a {@link Builder}.
                     * @return A new command result builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.command.CommandResult.Builder
                    /**
                     * Returns a new {@link CommandResult} indicating that a command was
                     * processed.
                     * @return The command result
                     */
                    // @ts-ignore
                    empty(): org.spongepowered.api.command.CommandResult
                    /**
                     * Returns a result indicating the command was processed with a single
                     * success.
                     * @return The result
                     */
                    // @ts-ignore
                    success(): org.spongepowered.api.command.CommandResult
                    /**
                     * Returns a result indicating the command was processed with a single
                     * success.
                     * @param count The success count
                     * @return The result
                     */
                    // @ts-ignore
                    successCount(count: number /*int*/): org.spongepowered.api.command.CommandResult
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of affected blocks.
                     * @param count The amount of blocks affected
                     * @return The result
                     */
                    // @ts-ignore
                    affectedBlocks(count: number /*int*/): org.spongepowered.api.command.CommandResult
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of affected entities.
                     * @param count The amount of entities affected
                     * @return The result
                     */
                    // @ts-ignore
                    affectedEntities(count: number /*int*/): org.spongepowered.api.command.CommandResult
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of affected items.
                     * @param count The amount of items affected
                     * @return The result
                     */
                    // @ts-ignore
                    affectedItems(count: number /*int*/): org.spongepowered.api.command.CommandResult
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of queries.
                     * @param count The amount of queries
                     * @return The result
                     */
                    // @ts-ignore
                    queryResult(count: number /*int*/): org.spongepowered.api.command.CommandResult
                    /**
                     * Gets the success count of the command.
                     * @return The success count of the command
                     */
                    // @ts-ignore
                    getSuccessCount(): java.util.Optional<java.lang.Integer>
                    /**
                     * Gets the number of blocks affected by the command.
                     * @return The number of blocks affected by the command, if such a count
                     *          exists
                     */
                    // @ts-ignore
                    getAffectedBlocks(): java.util.Optional<java.lang.Integer>
                    /**
                     * Gets the number of entities affected by the command.
                     * @return The number of entities affected by the command, if such a count
                     *          exists
                     */
                    // @ts-ignore
                    getAffectedEntities(): java.util.Optional<java.lang.Integer>
                    /**
                     * Gets the number of items affected by the command.
                     * @return The number of items affected by the command, if such a count
                     *          exists
                     */
                    // @ts-ignore
                    getAffectedItems(): java.util.Optional<java.lang.Integer>
                    /**
                     * Gets the query result of the command, e.g. the time of the day,
                     * an amount of money or a player's amount of XP.
                     * @return The query result of the command, if one exists
                     */
                    // @ts-ignore
                    getQueryResult(): java.util.Optional<java.lang.Integer>
                }
            }
        }
    }
}
