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
                        public getScore(): org.spongepowered.api.scoreboard.Score
                        /**
                         * Sets the score of the text.
                         * @param score The score for this builder to use
                         * @return This text builder
                         * @see ScoreText#getScore()
                         */
                        // @ts-ignore
                        public score(score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText.Builder
                        /**
                         * Returns the current override of this builder.
                         * @return The current override, or {#link Optional#empty()} if none
                         * @see ScoreText#getOverride()
                         */
                        // @ts-ignore
                        public getOverride(): java.util.Optional<java.lang.String | string>
                        /**
                         * Overrides the real score and displays a custom text instead.
                         * @param override The text to override the score with or {#code null}
                         *         to reset
                         * @return This text builder
                         * @see ScoreText#getOverride()
                         */
                        // @ts-ignore
                        public override(override: java.lang.String | string): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public build(): org.spongepowered.api.text.ScoreText
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public append(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public append(children: java.lang.Iterable<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public append(children: java.util.Iterator<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.lang.Iterable<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Iterator<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public remove(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public remove(children: java.lang.Iterable<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public remove(children: java.util.Iterator<any>): org.spongepowered.api.text.ScoreText.Builder
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.ScoreText.Builder
                    }
                }
            }
        }
    }
}
