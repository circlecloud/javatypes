declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace command {
                    namespace TabCompleteEvent {
                        /**
                         * Fired when a {@link Player} sends a tab complete request for a command.
                         * <p>In Vanilla, this is fired when a {@link Player} presses the
                         * <code>TAB</code> key with a command in chat (a string starting with
                         * <code>/</code>).</p>
                         */
                        // @ts-ignore
                        interface Command extends org.spongepowered.api.event.command.TabCompleteEvent {
                            /**
                             * Gets the command as a string, without any sort of command prefix.
                             * <p>For example, if the message was {@code /example bob 3 -f},
                             * then the command would be {@code example}.</p>
                             * @return The commands
                             */
                            // @ts-ignore
                            getCommand(): java.lang.String
                            /**
                             * Gets the arguments as a string.
                             * <p>For example, if the message was {@code /example bob 3 -f},
                             * then the arguments would be {@code bob 3 -f}.</p>
                             * @return The arguments
                             */
                            // @ts-ignore
                            getArguments(): java.lang.String
                        }
                    }
                }
            }
        }
    }
}
