declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace ScoreText {
                    /**
                     * Represents a {@link Text.Builder} creating immutable {@link ScoreText}
                     * instances.
                     * @see ScoreText
                     */
                    // @ts-ignore
                    class Builder extends org.spongepowered.api.text.Text.Builder {
                        /**
                         * Returns the current score of this builder.
                         * @return The current score
                         * @see ScoreText#getScore()
                         */
                        // @ts-ignore
                        getScore(): org.spongepowered.api.scoreboard.Score
                        /**
                         * Sets the score of the text.
                         * @param score The score for this builder to use
                         * @return This text builder
                         * @see ScoreText#getScore()
                         */
                        // @ts-ignore
                        score(score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText.Builder
                        /**
                         * Returns the current override of this builder.
                         * @return The current override, or {#link Optional#empty()} if none
                         * @see ScoreText#getOverride()
                         */
                        // @ts-ignore
                        getOverride(): java.util.Optional<java.lang.String>
                        /**
                         * Overrides the real score and displays a custom text instead.
                         * @param override The text to override the score with or {#code null}
                         *         to reset
                         * @return This text builder
                         * @see ScoreText#getOverride()
                         */
                        // @ts-ignore
                        override(override: string): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        build(): org.spongepowered.api.text.ScoreText
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        append(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        append(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        append(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        remove(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        remove(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        remove(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        removeAll(): org.spongepowered.api.text.ScoreText.Builder
                    }
                }
            }
        }
    }
}
