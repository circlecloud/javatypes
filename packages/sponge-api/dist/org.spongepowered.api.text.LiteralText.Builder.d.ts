declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace LiteralText {
                    /**
                     * Represents a {@link Text.Builder} creating immutable {@link LiteralText}
                     * instances.
                     * @see LiteralText
                     */
                    // @ts-ignore
                    class Builder extends org.spongepowered.api.text.Text.Builder {
                        /**
                         * Returns the current content of this builder.
                         * @return The current content
                         * @see LiteralText#getContent()
                         */
                        // @ts-ignore
                        public getContent(): string
                        /**
                         * Sets the plain text content of this text.
                         * @param content The content of this text
                         * @return This text builder
                         * @see LiteralText#getContent()
                         */
                        // @ts-ignore
                        public content(content: java.lang.String | string): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public build(): org.spongepowered.api.text.LiteralText
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public append(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public append(children: java.lang.Iterable<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public append(children: java.util.Iterator<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.lang.Iterable<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Iterator<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public remove(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public remove(children: java.lang.Iterable<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public remove(children: java.util.Iterator<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.LiteralText.Builder
                    }
                }
            }
        }
    }
}
