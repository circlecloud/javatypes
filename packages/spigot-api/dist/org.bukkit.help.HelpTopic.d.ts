declare namespace org {
    namespace bukkit {
        namespace help {
            /**
             * HelpTopic implementations are displayed to the user when the user uses the
             * /help command.
             * <p>
             * Custom implementations of this class can work at two levels. A simple
             * implementation only needs to set the value of {@code name}, {@code
             * shortText}, and {@code fullText} in the constructor. This base class will
             * take care of the rest.
             * <p>
             * Complex implementations can be created by overriding the behavior of all
             * the methods in this class.
             */
            // @ts-ignore
            abstract class HelpTopic extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                name: java.lang.String | string
                // @ts-ignore
                shortText: java.lang.String | string
                // @ts-ignore
                fullText: java.lang.String | string
                // @ts-ignore
                amendedPermission: java.lang.String | string
                /**
                 * Determines if a {@link Player} is allowed to see this help topic.
                 * <p>
                 * HelpTopic implementations should take server administrator wishes into
                 * account as set by the {@link HelpTopic#amendCanSee(String)} function.
                 * @param player The Player in question.
                 * @return True of the Player can see this help topic, false otherwise.
                 */
                // @ts-ignore
                public abstract canSee(player: org.bukkit.command.CommandSender): boolean
                /**
                 * Allows the server administrator to override the permission required to
                 * see a help topic.
                 * <p>
                 * HelpTopic implementations should take this into account when
                 * determining topic visibility on the {@link
                 * HelpTopic#canSee(org.bukkit.command.CommandSender)} function.
                 * @param amendedPermission The permission node the server administrator
                 *      wishes to apply to this topic.
                 */
                // @ts-ignore
                public amendCanSee(amendedPermission: java.lang.String | string): void
                /**
                 * Returns the name of this help topic.
                 * @return The topic name.
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Returns a brief description that will be displayed in the topic index.
                 * @return A brief topic description.
                 */
                // @ts-ignore
                public getShortText(): string
                /**
                 * Returns the full description of this help topic that is displayed when
                 * the user requests this topic's details.
                 * <p>
                 * The result will be paginated to properly fit the user's client.
                 * @param forWho The player or console requesting the full text. Useful
                 *      for further security trimming the command's full text based on
                 *      sub-permissions in custom implementations.
                 * @return A full topic description.
                 */
                // @ts-ignore
                public getFullText(forWho: org.bukkit.command.CommandSender): string
                /**
                 * Allows the server admin (or another plugin) to add or replace the
                 * contents of a help topic.
                 * <p>
                 * A null in either parameter will leave that part of the topic unchanged.
                 * In either amending parameter, the string {@literal <text>} is replaced
                 * with the existing contents in the help topic. Use this to append or
                 * prepend additional content into an automatically generated help topic.
                 * @param amendedShortText The new topic short text to use, or null to
                 *      leave alone.
                 * @param amendedFullText The new topic full text to use, or null to leave
                 *      alone.
                 */
                // @ts-ignore
                public amendTopic(amendedShortText: java.lang.String | string, amendedFullText: java.lang.String | string): void
                /**
                 * Developers implementing their own custom HelpTopic implementations can
                 * use this utility method to ensure their implementations comply with the
                 * expected behavior of the {@link HelpTopic#amendTopic(String, String)}
                 * method.
                 * @param baseText The existing text of the help topic.
                 * @param amendment The amending text from the amendTopic() method.
                 * @return The application of the amending text to the existing text,
                 *      according to the expected rules of amendTopic().
                 */
                // @ts-ignore
                applyAmendment(baseText: java.lang.String | string, amendment: java.lang.String | string): string
            }
        }
    }
}
