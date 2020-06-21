declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace command {
                    /**
                     * Fired when a {@link Player} send a tab complete requests.
                     * <p>In Vanilla, this is done by pressing the <code>TAB</code> key while chat
                     * is open.</p>
                     */
                    // @ts-ignore
                    interface TabCompleteEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the message sent to the server for tab completion.
                         * <p>The Vanilla client does not send the entire contents of the chat box.
                         * Instead, it sends the contents of the chat box up to the cursor position
                         * (excluding the character after the cursor).
                         * @return the message sent to the server for tab completion.
                         */
                        // @ts-ignore
                        getRawMessage(): string
                        /**
                         * Gets the immutable list of the suggestions originally generated.
                         * <p>In Vanilla, these suggestions are usually player names, in the case
                         * of {@link Chat}.</p>
                         * <p>Note: Entries *should not* contain spaces, as they produce strange
                         * behavior on the Vanilla client (tabbing between entries causes them
                         * to be appended to the text box, instead of replacing the existing
                         * entry.</p>
                         * @return the immutable list of original suggestions
                         */
                        // @ts-ignore
                        getOriginalTabCompletions(): Array<java.lang.String | string>
                        /**
                         * Gets the list of available suggestions. This list is mutable, so
                         * any modifications should happen to this list. All suggestions will
                         * replace the last word in the arguments on the client.
                         * @return The list of suggestion
                         */
                        // @ts-ignore
                        getTabCompletions(): Array<java.lang.String | string>
                        /**
                         * Gets the location of the block that the player is looking at, if
                         * available.
                         * <p>In Vanilla, this will be available if the player is looking at
                         * a block within mineable range (the wireframe is displayed on
                         * the client).</p>
                         * @return The target position
                         */
                        // @ts-ignore
                        getTargetPos(): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                        /**
                         * Gets whether the player is tab completing from a block's GUI.
                         * <p>In Vanilla, this will be <code>true</code> if the player is tab
                         * completing in a commandblock or commandblock minecart's GUI, and
                         * <code>false</code> otherwise.</p>
                         * @return Whether this event is being used in a block
                         */
                        // @ts-ignore
                        isUsingBlock(): boolean
                    }
                }
            }
        }
    }
}
