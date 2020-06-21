declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * RegexPrompt is the base class for any prompt that requires an input
             * validated by a regular expression.
             */
            // @ts-ignore
            abstract class RegexPrompt extends org.bukkit.conversations.ValidatingPrompt {
                // @ts-ignore
                constructor(regex: java.lang.String | string)
                // @ts-ignore
                constructor(pattern: java.util.regex.Pattern)
                // @ts-ignore
                isInputValid(context: org.bukkit.conversations.ConversationContext, input: java.lang.String | string): boolean
            }
        }
    }
}
