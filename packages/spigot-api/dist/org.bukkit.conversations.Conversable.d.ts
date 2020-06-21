declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * The Conversable interface is used to indicate objects that can have
             * conversations.
             */
            // @ts-ignore
            interface Conversable {
                /**
                 * Tests to see of a Conversable object is actively engaged in a
                 * conversation.
                 * @return True if a conversation is in progress
                 */
                // @ts-ignore
                isConversing(): boolean
                /**
                 * Accepts input into the active conversation. If no conversation is in
                 * progress, this method does nothing.
                 * @param input The input message into the conversation
                 */
                // @ts-ignore
                acceptConversationInput(input: java.lang.String | string): void
                /**
                 * Enters into a dialog with a Conversation object.
                 * @param conversation The conversation to begin
                 * @return True if the conversation should proceed, false if it has been
                 *      enqueued
                 */
                // @ts-ignore
                beginConversation(conversation: org.bukkit.conversations.Conversation): boolean
                /**
                 * Abandons an active conversation.
                 * @param conversation The conversation to abandon
                 */
                // @ts-ignore
                abandonConversation(conversation: org.bukkit.conversations.Conversation): void
                /**
                 * Abandons an active conversation.
                 * @param conversation The conversation to abandon
                 * @param details Details about why the conversation was abandoned
                 */
                // @ts-ignore
                abandonConversation(conversation: org.bukkit.conversations.Conversation, details: org.bukkit.conversations.ConversationAbandonedEvent): void
                /**
                 * Sends this sender a message raw
                 * @param message Message to be displayed
                 */
                // @ts-ignore
                sendRawMessage(message: java.lang.String | string): void
            }
        }
    }
}
