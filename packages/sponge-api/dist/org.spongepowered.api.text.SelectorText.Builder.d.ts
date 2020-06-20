declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace SelectorText {
                    /**
                     * Represents a {@link Text.Builder} creating immutable {@link SelectorText}
                     * instances.
                     * @see SelectorText
                     */
                    // @ts-ignore
                    class Builder extends org.spongepowered.api.text.Text.Builder {
                        /**
                         * Returns the current selector of this builder.
                         * @return The current selector
                         * @see SelectorText#getSelector()
                         */
                        // @ts-ignore
                        getSelector(): org.spongepowered.api.text.selector.Selector
                        /**
                         * Sets the selector of the text.
                         * @param selector The selector for this builder to use
                         * @return This text builder
                         * @see SelectorText#getSelector()
                         */
                        // @ts-ignore
                        selector(selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        build(): org.spongepowered.api.text.SelectorText
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        append(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        append(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        append(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        remove(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        remove(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        remove(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.SelectorText.Builder
                        // @ts-ignore
                        removeAll(): org.spongepowered.api.text.SelectorText.Builder
                    }
                }
            }
        }
    }
}
