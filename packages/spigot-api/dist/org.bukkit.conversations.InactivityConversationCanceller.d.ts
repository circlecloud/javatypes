declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * An InactivityConversationCanceller will cancel a {@link Conversation} after
             * a period of inactivity by the user.
             */
            // @ts-ignore
            class InactivityConversationCanceller extends java.lang.Object implements org.bukkit.conversations.ConversationCanceller {
                /**
                 * Creates an InactivityConversationCanceller.
                 * @param plugin The owning plugin.
                 * @param timeoutSeconds The number of seconds of inactivity to wait.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, timeoutSeconds: number /*int*/)
                // @ts-ignore
                plugin: org.bukkit.plugin.Plugin
                // @ts-ignore
                timeoutSeconds: number /*int*/
                // @ts-ignore
                conversation: org.bukkit.conversations.Conversation
                // @ts-ignore
                setConversation(conversation: org.bukkit.conversations.Conversation): void
                // @ts-ignore
                cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean
                // @ts-ignore
                clone(): org.bukkit.conversations.ConversationCanceller
                /**
                 * Subclasses of InactivityConversationCanceller can override this method
                 * to take additional actions when the inactivity timer abandons the
                 * conversation.
                 * @param conversation The conversation being abandoned.
                 */
                // @ts-ignore
                cancelling(conversation: org.bukkit.conversations.Conversation): void
            }
        }
    }
}
