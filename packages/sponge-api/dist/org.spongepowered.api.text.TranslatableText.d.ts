declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents a {@link Text} containing a {@link Translation} identifier that
                 * gets translated into the current locale on the client.
                 * @see Builder
                 */
                // @ts-ignore
                class TranslatableText extends org.spongepowered.api.text.Text {
                    /**
                     * Returns the translation of this {@link Text}.
                     * @return The translation of this text
                     */
                    // @ts-ignore
                    getTranslation(): org.spongepowered.api.text.translation.Translation
                    /**
                     * Returns the list of {@link Translation} arguments used to format this
                     * {@link Text}.
                     * @return The list of translation arguments
                     */
                    // @ts-ignore
                    getArguments(): <any>
                    // @ts-ignore
                    toBuilder(): org.spongepowered.api.text.TranslatableText.Builder
                    // @ts-ignore
                    equals(o: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
