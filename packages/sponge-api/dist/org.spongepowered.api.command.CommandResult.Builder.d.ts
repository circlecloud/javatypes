declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace CommandResult {
                    /**
                     * A builder for {@link CommandResult}s.
                     */
                    // @ts-ignore
                    class Builder extends java.lang.Object {
                        /**
                         * Sets if the command has been processed.
                         * @param successCount If the command has been processed
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public successCount(successCount: java.lang.Integer | number): org.spongepowered.api.command.CommandResult.Builder
                        /**
                         * Sets the amount of blocks affected by the command.
                         * @param affectedBlocks The amount of blocks affected by the command
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public affectedBlocks(affectedBlocks: java.lang.Integer | number): org.spongepowered.api.command.CommandResult.Builder
                        /**
                         * Sets the amount of entities affected by the command.
                         * @param affectedEntities The amount of entities affected by the
                         *      command
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public affectedEntities(affectedEntities: java.lang.Integer | number): org.spongepowered.api.command.CommandResult.Builder
                        /**
                         * Sets the amount of items affected by the command.
                         * @param affectedItems The amount of items affected by the command
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public affectedItems(affectedItems: java.lang.Integer | number): org.spongepowered.api.command.CommandResult.Builder
                        /**
                         * Sets the query result of the command, e.g. the time of the day,
                         * an amount of money or a player's amount of XP.
                         * @param queryResult The query result of the command
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        public queryResult(queryResult: java.lang.Integer | number): org.spongepowered.api.command.CommandResult.Builder
                        /**
                         * Builds the {@link CommandResult}.
                         * @return A CommandResult with the specified settings
                         */
                        // @ts-ignore
                        public build(): org.spongepowered.api.command.CommandResult
                    }
                }
            }
        }
    }
}
