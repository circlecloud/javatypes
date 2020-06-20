declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * FixedSetPrompt is the base class for any prompt that requires a fixed set
             * response from the user.
             */
            // @ts-ignore
            class FixedSetPrompt extends org.bukkit.conversations.ValidatingPrompt {
                /**
                 * Creates a FixedSetPrompt from a set of strings.
                 * <p>
                 * foo = new FixedSetPrompt("bar", "cheese", "panda");
                 * @param fixedSet A fixed set of strings, one of which the user must
                 *      type.
                 */
                // @ts-ignore
                constructor(...fixedSet: string[])
                // @ts-ignore
                fixedSet: Array<java.lang.String>
                // @ts-ignore
                isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean
                /**
                 * Utility function to create a formatted string containing all the
                 * options declared in the constructor.
                 * @return the options formatted like "[bar, cheese, panda]" if bar,
                 *      cheese, and panda were the options used
                 */
                // @ts-ignore
                formatFixedSet(): java.lang.String
            }
        }
    }
}
