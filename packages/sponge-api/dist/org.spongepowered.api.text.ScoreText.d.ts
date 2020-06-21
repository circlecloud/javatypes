declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents a {@link Text} displaying the current score of a player.
                 * @see Score
                 * @see Builder
                 */
                // @ts-ignore
                class ScoreText extends org.spongepowered.api.text.Text {
                    /**
                     * Returns the score displayed by this {@link Text}.
                     * @return The score in this text
                     */
                    // @ts-ignore
                    public getScore(): org.spongepowered.api.scoreboard.Score
                    /**
                     * Returns a value that is displayed instead of the real score.
                     * @return The value displayed instead of the real score, or
                     *          {#link Optional#empty()} if the real score will be displayed
                     *          instead
                     */
                    // @ts-ignore
                    public getOverride(): java.util.Optional<java.lang.String | string>
                    // @ts-ignore
                    public toBuilder(): org.spongepowered.api.text.ScoreText.Builder
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
