declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace chat {
                    /**
                     * Represents a visibility mode for a client's chat.
                     */
                    // @ts-ignore
                    interface ChatVisibility extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Tests whether the given chat type will be visible to a player's chat.
                         * @param chatType The {#link ChatType} to test
                         * @return Whether or not it's visible with this {#link ChatVisibility}
                         */
                        // @ts-ignore
                        isVisible(chatType: org.spongepowered.api.text.chat.ChatType): boolean
                    }
                }
            }
        }
    }
}
