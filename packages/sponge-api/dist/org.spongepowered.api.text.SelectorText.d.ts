declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents a {@link Text} containing a selector that will be replaced by the
                 * names of the matching entities on the client.
                 * @see Selector
                 * @see Builder
                 */
                // @ts-ignore
                class SelectorText extends org.spongepowered.api.text.Text {
                    /**
                     * Returns the selector used in this {@link Text}.
                     * @return The selector of this text
                     */
                    // @ts-ignore
                    public getSelector(): org.spongepowered.api.text.selector.Selector
                    // @ts-ignore
                    public toBuilder(): org.spongepowered.api.text.SelectorText.Builder
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
