declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    /**
                     * <p>
                     * ComponentBuilder simplifies creating basic messages by allowing the use of a
                     * chainable builder.
                     * </p>
                     * <pre>
                     * new ComponentBuilder("Hello ").color(ChatColor.RED).
                     * append("World").color(ChatColor.BLUE). append("!").bold(true).create();
                     * </pre>
                     * <p>
                     * All methods (excluding {@link #append(String)} and {@link #create()} work on
                     * the last part appended to the builder, so in the example above "Hello " would
                     * be {@link net.md_5.bungee.api.ChatColor#RED} and "World" would be
                     * {@link net.md_5.bungee.api.ChatColor#BLUE} but "!" would be bold and
                     * {@link net.md_5.bungee.api.ChatColor#BLUE} because append copies the previous
                     * part's formatting
                     * </p>
                     */
                    // @ts-ignore
                    class ComponentBuilder extends java.lang.Object {
                        /**
                         * Creates a ComponentBuilder from the other given ComponentBuilder to clone
                         * it.
                         * @param original the original for the new ComponentBuilder.
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.ComponentBuilder)
                        /**
                         * Creates a ComponentBuilder with the given text as the first part.
                         * @param text the first text element
                         */
                        // @ts-ignore
                        constructor(text: java.lang.String | string)
                        /**
                         * Creates a ComponentBuilder with the given component as the first part.
                         * @param component the first component element
                         */
                        // @ts-ignore
                        constructor(component: net.md_5.bungee.api.chat.BaseComponent)
                        // @ts-ignore
                        constructor()
                        /**
                         * Resets the cursor to index of the last element.
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public resetCursor(): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets the position of the current component to be modified
                         * @param pos the cursor position synonymous to an element position for a
                         *  list
                         * @return this ComponentBuilder for chaining
                         * @throws IndexOutOfBoundsException if the index is out of range
                         *  ({#code index < 0 || index >= size()})
                         */
                        // @ts-ignore
                        public setCursor(pos: number /*int*/): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Appends a component to the builder and makes it the current target for
                         * formatting. The component will have all the formatting from previous
                         * part.
                         * @param component the component to append
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(component: net.md_5.bungee.api.chat.BaseComponent): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Appends a component to the builder and makes it the current target for
                         * formatting. You can specify the amount of formatting retained from
                         * previous part.
                         * @param component the component to append
                         * @param retention the formatting to retain
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(component: net.md_5.bungee.api.chat.BaseComponent, retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Appends the components to the builder and makes the last element the
                         * current target for formatting. The components will have all the
                         * formatting from previous part.
                         * @param components the components to append
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(components: net.md_5.bungee.api.chat.BaseComponent[]): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Appends the components to the builder and makes the last element the
                         * current target for formatting. You can specify the amount of formatting
                         * retained from previous part.
                         * @param components the components to append
                         * @param retention the formatting to retain
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(components: net.md_5.bungee.api.chat.BaseComponent[], retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Appends the text to the builder and makes it the current target for
                         * formatting. The text will have all the formatting from previous part.
                         * @param text the text to append
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(text: java.lang.String | string): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Parse text to BaseComponent[] with colors and format, appends the text to
                         * the builder and makes it the current target for formatting. The component
                         * will have all the formatting from previous part.
                         * @param text the text to append
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public appendLegacy(text: java.lang.String | string): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Appends the text to the builder and makes it the current target for
                         * formatting. You can specify the amount of formatting retained from
                         * previous part.
                         * @param text the text to append
                         * @param retention the formatting to retain
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(text: java.lang.String | string, retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Allows joining additional components to this builder using the given
                         * {@link Joiner} and {@link FormatRetention#ALL}.
                         * Simply executes the provided joiner on this instance to facilitate a
                         * chain pattern.
                         * @param joiner joiner used for operation
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(joiner: net.md_5.bungee.api.chat.ComponentBuilder.Joiner): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Allows joining additional components to this builder using the given
                         * {@link Joiner}.
                         * Simply executes the provided joiner on this instance to facilitate a
                         * chain pattern.
                         * @param joiner joiner used for operation
                         * @param retention the formatting to retain
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public append(joiner: net.md_5.bungee.api.chat.ComponentBuilder.Joiner, retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Remove the component part at the position of given index.
                         * @param pos the index to remove at
                         * @throws IndexOutOfBoundsException if the index is out of range
                         *  ({#code index < 0 || index >= size()})
                         */
                        // @ts-ignore
                        public removeComponent(pos: number /*int*/): void
                        /**
                         * Gets the component part at the position of given index.
                         * @param pos the index to find
                         * @return the component
                         * @throws IndexOutOfBoundsException if the index is out of range
                         *  ({#code index < 0 || index >= size()})
                         */
                        // @ts-ignore
                        public getComponent(pos: number /*int*/): net.md_5.bungee.api.chat.BaseComponent
                        /**
                         * Gets the component at the position of the cursor.
                         * @return the active component or null if builder is empty
                         */
                        // @ts-ignore
                        public getCurrentComponent(): net.md_5.bungee.api.chat.BaseComponent
                        /**
                         * Sets the color of the current part.
                         * @param color the new color
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public color(color: net.md_5.bungee.api.ChatColor): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets whether the current part is bold.
                         * @param bold whether this part is bold
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public bold(bold: boolean): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets whether the current part is italic.
                         * @param italic whether this part is italic
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public italic(italic: boolean): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets whether the current part is underlined.
                         * @param underlined whether this part is underlined
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public underlined(underlined: boolean): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets whether the current part is strikethrough.
                         * @param strikethrough whether this part is strikethrough
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public strikethrough(strikethrough: boolean): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets whether the current part is obfuscated.
                         * @param obfuscated whether this part is obfuscated
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public obfuscated(obfuscated: boolean): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets the insertion text for the current part.
                         * @param insertion the insertion text
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public insertion(insertion: java.lang.String | string): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets the click event for the current part.
                         * @param clickEvent the click event
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public event(clickEvent: net.md_5.bungee.api.chat.ClickEvent): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets the hover event for the current part.
                         * @param hoverEvent the hover event
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public event(hoverEvent: net.md_5.bungee.api.chat.HoverEvent): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Sets the current part back to normal settings. Only text is kept.
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public reset(): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Retains only the specified formatting. Text is not modified.
                         * @param retention the formatting to retain
                         * @return this ComponentBuilder for chaining
                         */
                        // @ts-ignore
                        public retain(retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention): net.md_5.bungee.api.chat.ComponentBuilder
                        /**
                         * Returns the components needed to display the message created by this
                         * builder.git
                         * @return the created components
                         */
                        // @ts-ignore
                        public create(): net.md_5.bungee.api.chat.BaseComponent[]
                        /**
                         * The position for the current part to modify. Modified cursors will
                         * automatically reset to the last part after appending new components.
                         * Default value at -1 to assert that the builder has no parts.
                         */
                        // @ts-ignore
                        public getCursor(): number /*int*/
                        // @ts-ignore
                        public getParts(): Array<net.md_5.bungee.api.chat.BaseComponent>
                    }
                }
            }
        }
    }
}
