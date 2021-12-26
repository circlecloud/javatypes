declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * A ConversationContext provides continuity between nodes in the prompt graph
             * by giving the developer access to the subject of the conversation and a
             * generic map for storing values that are shared between all {@link Prompt}
             * invocations.
             */
            // @ts-ignore
            class ConversationContext extends java.lang.Object {
                /**
                 * @param plugin The owning plugin.
                 * @param forWhom The subject of the conversation.
                 * @param initialSessionData Any initial values to put in the sessionData
                 *      map.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, initialSessionData: java.util.Map<java.lang.Object | any, java.lang.Object | any>)
                /**
                 * Gets the plugin that owns this conversation.
                 * @return The owning plugin.
                 */
                // @ts-ignore
                public getPlugin(): org.bukkit.plugin.Plugin
                /**
                 * Gets the subject of the conversation.
                 * @return The subject of the conversation.
                 */
                // @ts-ignore
                public getForWhom(): org.bukkit.conversations.Conversable
                /**
                 * Gets the underlying sessionData map.
                 * May be directly modified to manipulate session data.
                 * @return The full sessionData map.
                 */
                // @ts-ignore
                public getAllSessionData(): java.util.Map<java.lang.Object | any, java.lang.Object | any>
                /**
                 * Gets session data shared between all {@link Prompt} invocations. Use
                 * this as a way to pass data through each Prompt as the conversation
                 * develops.
                 * @param key The session data key.
                 * @return The requested session data.
                 */
                // @ts-ignore
                public getSessionData(key: java.lang.Object | any): any
                /**
                 * Sets session data shared between all {@link Prompt} invocations. Use
                 * this as a way to pass data through each prompt as the conversation
                 * develops.
                 * @param key The session data key.
                 * @param value The session data value.
                 */
                // @ts-ignore
                public setSessionData(key: java.lang.Object | any, value: java.lang.Object | any): void
            }
        }
    }
}
