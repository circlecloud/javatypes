declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace Text {
                    /**
                     * Represents a builder class to create immutable {@link Text} instances.
                     * @see Text
                     */
                    // @ts-ignore
                    abstract class Builder extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable {
                        /**
                         * Returns the current format of the {@link Text} in this builder.
                         * @return The current format
                         * @see Text#getFormat()
                         */
                        // @ts-ignore
                        public getFormat(): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Sets the {@link TextFormat} of this text.
                         * @param format The new text format for this text
                         * @return The text builder
                         * @see Text#getFormat()
                         */
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.Text.Builder
                        /**
                         * Returns the current color of the {@link Text} in this builder.
                         * @return The current color
                         * @see Text#getColor()
                         */
                        // @ts-ignore
                        public getColor(): org.spongepowered.api.text.format.TextColor
                        /**
                         * Sets the {@link TextColor} of this text.
                         * @param color The new text color for this text
                         * @return This text builder
                         * @see Text#getColor()
                         */
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.Text.Builder
                        /**
                         * Returns the current style of the {@link Text} in this builder.
                         * @return The current style
                         * @see Text#getStyle()
                         */
                        // @ts-ignore
                        public getStyle(): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Sets the text styles of this text. This will construct a composite
                         * {@link TextStyle} of the current style and the specified styles first
                         * and set it to the text.
                         * @param styles The text styles to apply
                         * @return This text builder
                         * @see Text#getStyle()
                         */
                        // @ts-ignore
                        public style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.Text.Builder
                        /**
                         * Returns the current {@link ClickAction} of this builder.
                         * @return The current click action or {#link Optional#empty()} if none
                         * @see Text#getClickAction()
                         */
                        // @ts-ignore
                        public getClickAction(): java.util.Optional<org.spongepowered.api.text.action.ClickAction<any>>
                        /**
                         * Sets the {@link ClickAction} that will be executed if the text is
                         * clicked in the chat.
                         * @param clickAction The new click action for the text
                         * @return This text builder
                         * @see Text#getClickAction()
                         */
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Returns the current {@link HoverAction} of this builder.
                         * @return The current hover action or {#link Optional#empty()} if none
                         * @see Text#getHoverAction()
                         */
                        // @ts-ignore
                        public getHoverAction(): java.util.Optional<org.spongepowered.api.text.action.HoverAction<any>>
                        /**
                         * Sets the {@link HoverAction} that will be executed if the text is
                         * hovered in the chat.
                         * @param hoverAction The new hover action for the text
                         * @return This text builder
                         * @see Text#getHoverAction()
                         */
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Returns the current {@link ShiftClickAction} of this builder.
                         * @return The current shift click action or {#link Optional#empty()} if
                         *          none
                         * @see Text#getShiftClickAction()
                         */
                        // @ts-ignore
                        public getShiftClickAction(): java.util.Optional<org.spongepowered.api.text.action.ShiftClickAction<any>>
                        /**
                         * Sets the {@link ShiftClickAction} that will be executed if the text
                         * is shift-clicked in the chat.
                         * @param shiftClickAction The new shift click action for the text
                         * @return This text builder
                         * @see Text#getShiftClickAction()
                         */
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Returns a view of the current children of this builder.
                         * <p>The returned list is unmodifiable, but not immutable. It will
                         * change if new children get added through this builder.</p>
                         * @return An unmodifiable list of the current children
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public getChildren(): Array<org.spongepowered.api.text.Text>
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         * @param children The texts to append
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.Text.Builder
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         * @param children The texts to append
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public append(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         * @param children The texts to append
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public append(children: java.lang.Iterable<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Appends the specified {@link Text} to the end of this text.
                         * @param children The texts to append
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public append(children: java.util.Iterator<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         * @param pos The position to insert the texts to
                         * @param children The texts to insert
                         * @return This text builder
                         * @throws IndexOutOfBoundsException If the position is out of bounds
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.Text.Builder
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         * @param pos The position to insert the texts to
                         * @param children The texts to insert
                         * @return This text builder
                         * @throws IndexOutOfBoundsException If the position is out of range
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         * @param pos The position to insert the texts to
                         * @param children The texts to insert
                         * @return This text builder
                         * @throws IndexOutOfBoundsException If the position is out of range
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.lang.Iterable<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Inserts the specified {@link Text} at the given position of this
                         * builder.
                         * @param pos The position to insert the texts to
                         * @param children The texts to insert
                         * @return This text builder
                         * @throws IndexOutOfBoundsException If the position is out of range
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Iterator<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes the last child in this builder.
                         * @return This text builder
                         * @see #remove(int)
                         */
                        // @ts-ignore
                        public removeLastChild(): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes the child at the given index.
                         * @param index The index of the child
                         * @return This text builder
                         * @throws IndexOutOfBoundsException if the given index is out of bounds
                         */
                        // @ts-ignore
                        public remove(index: number /*int*/): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes the specified {@link Text} from this builder.
                         * @param children The texts to remove
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes the specified {@link Text} from this builder.
                         * @param children The texts to remove
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public remove(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes the specified {@link Text} from this builder.
                         * @param children The texts to remove
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public remove(children: java.lang.Iterable<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes the specified {@link Text} from this builder.
                         * @param children The texts to remove
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public remove(children: java.util.Iterator<any>): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes all children from this builder.
                         * @return This text builder
                         * @see Text#getChildren()
                         */
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.Text.Builder
                        /**
                         * Removes all empty texts from the beginning and end of this
                         * builder.
                         * @return This builder
                         */
                        // @ts-ignore
                        public trim(): org.spongepowered.api.text.Text.Builder
                        /**
                         * Builds an immutable instance of the current state of this text
                         * builder.
                         * @return An immutable {#link Text} with the current properties of this
                         *          builder
                         */
                        // @ts-ignore
                        public abstract build(): org.spongepowered.api.text.Text
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public toText(): org.spongepowered.api.text.Text
                    }
                }
            }
        }
    }
}
