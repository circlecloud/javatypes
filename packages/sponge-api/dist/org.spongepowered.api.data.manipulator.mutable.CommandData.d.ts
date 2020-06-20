declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * An {@link DataManipulator} handling all related {@link Value}s for command
                         * related {@link DataHolder}s, such as {@link CommandBlock}s and
                         * {@link CommandBlockMinecart}s.
                         */
                        // @ts-ignore
                        interface CommandData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.CommandData, org.spongepowered.api.data.manipulator.immutable.ImmutableCommandData> {
                            /**
                             * Gets the currently stored command.
                             * @return The command
                             * @see Keys#COMMAND
                             */
                            // @ts-ignore
                            storedCommand(): org.spongepowered.api.data.value.mutable.Value<java.lang.String>
                            /**
                             * Gets the success count of the last executed command.
                             * <p>The success count is the number of times the most recently used
                             * command of this command block succeeded. Most commands can only succeed
                             * once per  execution, but certain commands (such as those which accept
                             * players as arguments) can succeed multiple times, and this value will be
                             * set accordingly. This success count can also be polled via a redstone
                             * comparator.</p>
                             * @return The last success count
                             * @see Keys#SUCCESS_COUNT
                             */
                            // @ts-ignore
                            successCount(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>
                            /**
                             * Gets whether this command block will keep track of the output from the
                             * last command it executed.
                             * @return Whether the command output is tracked
                             * @see Keys#TRACKS_OUTPUT
                             */
                            // @ts-ignore
                            doesTrackOutput(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            /**
                             * Gets the last command output.
                             * <p>This will only be available if {@link #doesTrackOutput()} is set to
                             * true, otherwise {@link Optional#empty()} will be returned.</p>
                             * @return The last command output, if available
                             * @see Keys#LAST_COMMAND_OUTPUT
                             */
                            // @ts-ignore
                            lastOutput(): org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.text.Text>
                        }
                    }
                }
            }
        }
    }
}
