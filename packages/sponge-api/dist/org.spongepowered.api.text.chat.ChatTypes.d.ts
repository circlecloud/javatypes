declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace chat {
                    /**
                     * ChatTypes is a list of the default chat types that are available in Vanilla
                     * Minecraft.
                     */
                    // @ts-ignore
                    class ChatTypes extends java.lang.Object {
                        /**
                         * The position right above the inventory, experience, health, item name,
                         * etc. bars.
                         */
                        // @ts-ignore
                        public static readonly ACTION_BAR: org.spongepowered.api.text.chat.ChatType
                        /**
                         * The standard chat position in prompt at the bottom-left.
                         */
                        // @ts-ignore
                        public static readonly CHAT: org.spongepowered.api.text.chat.ChatType
                        /**
                         * The same position as the {@link #CHAT} position, except messages sent to
                         * this position are still seen when chat is turned off on the Minecraft
                         * client.
                         */
                        // @ts-ignore
                        public static readonly SYSTEM: org.spongepowered.api.text.chat.ChatType
                    }
                }
            }
        }
    }
}
