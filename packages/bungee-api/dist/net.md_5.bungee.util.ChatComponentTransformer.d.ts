declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace util {
                /**
                 * This class transforms chat components by attempting to replace transformable
                 * fields with the appropriate value.
                 * <br>
                 * ScoreComponents are transformed by replacing their
                 * {@link ScoreComponent#getName()}} into the matching entity's name as well as
                 * replacing the {@link ScoreComponent#getValue()} with the matching value in
                 * the {@link net.md_5.bungee.api.score.Scoreboard} if and only if the
                 * {@link ScoreComponent#getValue()} is not present.
                 */
                // @ts-ignore
                class ChatComponentTransformer extends java.lang.Object {
                    // @ts-ignore
                    public static getInstance(): net.md_5.bungee.util.ChatComponentTransformer
                    /**
                     * Transform a set of components, and attempt to transform the transformable
                     * fields. Entity selectors <b>cannot</b> be evaluated. This will
                     * recursively search for all extra components (see
                     * {@link BaseComponent#getExtra()}).
                     * @param player player
                     * @param component the component to transform
                     * @return the transformed component, or an array containing a single empty
                     *  TextComponent if the components are null or empty
                     * @throws IllegalArgumentException if an entity selector pattern is present
                     */
                    // @ts-ignore
                    public transform(player: ProxiedPlayer, ...component: BaseComponent[]): BaseComponent[]
                    /**
                     * Checks if the given string is an entity selector.
                     * @param pattern the pattern to check
                     * @return true if it is an entity selector
                     */
                    // @ts-ignore
                    public isSelectorPattern(pattern: java.lang.String | string): boolean
                }
            }
        }
    }
}
