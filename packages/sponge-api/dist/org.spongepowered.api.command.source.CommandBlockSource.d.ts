declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    /**
                     * Represents a CommandBlock source, either a placed block or a
                     * CommandBlockMinecart.
                     */
                    // @ts-ignore
                    interface CommandBlockSource extends org.spongepowered.api.world.Locatable, org.spongepowered.api.command.CommandSource, org.spongepowered.api.data.DataHolder {
                        /**
                         * Gets the {@link CommandData} for this source.
                         * @return The command data
                         */
                        // @ts-ignore
                        getCommandData(): org.spongepowered.api.data.manipulator.mutable.CommandData
                        /**
                         * Gets the currently stored command.
                         * @return The command
                         */
                        // @ts-ignore
                        storedCommand(): org.spongepowered.api.data.value.mutable.Value<java.lang.String | string>
                        /**
                         * Gets the success count of the last executed command.
                         * <p>The success count is the number of times the most recently used
                         * command of this command block succeeded. Most commands can only succeed
                         * once per  execution, but certain commands (such as those which accept
                         * players as arguments) can succeed multiple times, and this value will be
                         * set accordingly. This success count can also be polled via a redstone
                         * comparator.</p>
                         * @return The last success count
                         */
                        // @ts-ignore
                        successCount(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer | number>
                        /**
                         * Gets whether this command block will keep track of the output from the
                         * last command it executed.
                         * @return Whether the command output is tracked
                         */
                        // @ts-ignore
                        doesTrackOutput(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        /**
                         * Gets the last command output.
                         * <p>This will only be available if {@link #doesTrackOutput()} is set to
                         * true, otherwise {@link Optional#empty()} will be returned.</p>
                         * @return The last command output, if available
                         */
                        // @ts-ignore
                        lastOutput(): org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.text.Text>
                    }
                }
            }
        }
    }
}
