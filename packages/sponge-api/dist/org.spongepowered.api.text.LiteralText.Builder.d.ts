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
                        getContent(): java.lang.String
                        /**
                         * Sets the plain text content of this text.
                         * @param content The content of this text
                         * @return This text builder
                         * @see LiteralText#getContent()
                         */
                        // @ts-ignore
                        content(content: string): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        build(): org.spongepowered.api.text.LiteralText
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        append(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        append(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        append(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        remove(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        remove(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        remove(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.LiteralText.Builder
                        // @ts-ignore
                        removeAll(): org.spongepowered.api.text.LiteralText.Builder
                    }
                }
            }
        }
    }
}
