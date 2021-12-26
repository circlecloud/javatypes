declare namespace org {
    namespace bukkit {
        namespace conversations {
            /**
             * FixedSetPrompt is the base class for any prompt that requires a fixed set
             * response from the user.
             */
            // @ts-ignore
            abstract class FixedSetPrompt extends org.bukkit.conversations.ValidatingPrompt {
                /**
                 * Creates a FixedSetPrompt from a set of strings.
                 * <p>
                 * foo = new FixedSetPrompt("bar", "cheese", "panda");
                 * @param fixedSet A fixed set of strings, one of which the user must
                 *      type.
                 */
                // @ts-ignore
                constructor(...fixedSet: java.lang.String[] | string[])
                // @ts-ignore
                fixedSet: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                // @ts-ignore
                isInputValid(context: org.bukkit.conversations.ConversationContext, input: java.lang.String | string): boolean
                /**
                 * Utility function to create a formatted string containing all the
                 * options declared in the constructor.
                 * @return the options formatted like "[bar, cheese, panda]" if bar,
                 *      cheese, and panda were the options used
                 */
                // @ts-ignore
                formatFixedSet(): string
            }
        }
    }
}
