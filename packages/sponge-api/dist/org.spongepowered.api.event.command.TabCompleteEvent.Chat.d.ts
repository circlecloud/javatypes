declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace command {
                    namespace TabCompleteEvent {
                        /**
                         * Fired when a {@link Player} sends a tab complete request for chat.
                         * <p>In Vanilla, this is fired when a {@link Player} presses the
                         * <code>TAB</code> key with anything other than a command in chat
                         * (the contents of chat does not start with <code>/</code>.</p>
                         */
                        // @ts-ignore
                        interface Chat extends org.spongepowered.api.event.command.TabCompleteEvent {
                        }
                    }
                }
            }
        }
    }
}
