declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                /**
                 * A team member represents something which has a meaningful {@link Text}
                 * representation on a {@link Team}. The client may be able to link the team
                 * {@link Text} entry to a particular object, and perform extra functionality.
                 * <p>Examples include:</p>
                 * <ul>
                 * <li>{@link Player}s, represented in Vanilla by their name</li>
                 * <li>Other {@link Living living entities}, represented in Vanilla by their {@link UUID}</li>
                 * </ul>
                 */
                // @ts-ignore
                interface TeamMember {
                    /**
                     * Gets a {@link Text} representing this team member, suitable for adding
                     * to an {@link Team} with {@link Team#addMember(Text)}.
                     * @return an {#link Text} representing this team member
                     */
                    // @ts-ignore
                    getTeamRepresentation(): org.spongepowered.api.text.Text
                }
            }
        }
    }
}
