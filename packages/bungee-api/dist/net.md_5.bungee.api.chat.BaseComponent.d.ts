declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                    abstract class BaseComponent extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Copies the events and formatting of a BaseComponent. Already set
                         * formatting will be replaced.
                         * @param component the component to copy from
                         */
                        // @ts-ignore
                        public copyFormatting(component: net.md_5.bungee.api.chat.BaseComponent): void
                        /**
                         * Copies the events and formatting of a BaseComponent.
                         * @param component the component to copy from
                         * @param replace if already set formatting should be replaced by the new
                         *  component
                         */
                        // @ts-ignore
                        public copyFormatting(component: net.md_5.bungee.api.chat.BaseComponent, replace: boolean): void
                        /**
                         * Copies the specified formatting of a BaseComponent.
                         * @param component the component to copy from
                         * @param retention the formatting to copy
                         * @param replace if already set formatting should be replaced by the new
                         *  component
                         */
                        // @ts-ignore
                        public copyFormatting(component: net.md_5.bungee.api.chat.BaseComponent, retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention, replace: boolean): void
                        /**
                         * Retains only the specified formatting.
                         * @param retention the formatting to retain
                         */
                        // @ts-ignore
                        public retain(retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention): void
                        /**
                         * Clones the BaseComponent and returns the clone.
                         * @return The duplicate of this BaseComponent
                         */
                        // @ts-ignore
                        public abstract duplicate(): net.md_5.bungee.api.chat.BaseComponent
                        /**
                         * Clones the BaseComponent without formatting and returns the clone.
                         * @return The duplicate of this BaseComponent
                         * @deprecated API use discouraged, use traditional duplicate
                         */
                        // @ts-ignore
                        public duplicateWithoutFormatting(): net.md_5.bungee.api.chat.BaseComponent
                        /**
                         * Converts the components to a string that uses the old formatting codes
                         * ({@link net.md_5.bungee.api.ChatColor#COLOR_CHAR}
                         * @param components the components to convert
                         * @return the string in the old format
                         */
                        // @ts-ignore
                        public static toLegacyText(...components: net.md_5.bungee.api.chat.BaseComponent[]): string
                        /**
                         * Converts the components into a string without any formatting
                         * @param components the components to convert
                         * @return the string as plain text
                         */
                        // @ts-ignore
                        public static toPlainText(...components: net.md_5.bungee.api.chat.BaseComponent[]): string
                        /**
                         * Returns the color of this component. This uses the parent's color if this
                         * component doesn't have one. {@link net.md_5.bungee.api.ChatColor#WHITE}
                         * is returned if no color is found.
                         * @return the color of this component
                         */
                        // @ts-ignore
                        public getColor(): net.md_5.bungee.api.ChatColor
                        /**
                         * Returns the color of this component without checking the parents color.
                         * May return null
                         * @return the color of this component
                         */
                        // @ts-ignore
                        public getColorRaw(): net.md_5.bungee.api.ChatColor
                        /**
                         * Returns whether this component is bold. This uses the parent's setting if
                         * this component hasn't been set. false is returned if none of the parent
                         * chain has been set.
                         * @return whether the component is bold
                         */
                        // @ts-ignore
                        public isBold(): boolean
                        /**
                         * Returns whether this component is bold without checking the parents
                         * setting. May return null
                         * @return whether the component is bold
                         */
                        // @ts-ignore
                        public isBoldRaw(): java.lang.Boolean
                        /**
                         * Returns whether this component is italic. This uses the parent's setting
                         * if this component hasn't been set. false is returned if none of the
                         * parent chain has been set.
                         * @return whether the component is italic
                         */
                        // @ts-ignore
                        public isItalic(): boolean
                        /**
                         * Returns whether this component is italic without checking the parents
                         * setting. May return null
                         * @return whether the component is italic
                         */
                        // @ts-ignore
                        public isItalicRaw(): java.lang.Boolean
                        /**
                         * Returns whether this component is underlined. This uses the parent's
                         * setting if this component hasn't been set. false is returned if none of
                         * the parent chain has been set.
                         * @return whether the component is underlined
                         */
                        // @ts-ignore
                        public isUnderlined(): boolean
                        /**
                         * Returns whether this component is underlined without checking the parents
                         * setting. May return null
                         * @return whether the component is underlined
                         */
                        // @ts-ignore
                        public isUnderlinedRaw(): java.lang.Boolean
                        /**
                         * Returns whether this component is strikethrough. This uses the parent's
                         * setting if this component hasn't been set. false is returned if none of
                         * the parent chain has been set.
                         * @return whether the component is strikethrough
                         */
                        // @ts-ignore
                        public isStrikethrough(): boolean
                        /**
                         * Returns whether this component is strikethrough without checking the
                         * parents setting. May return null
                         * @return whether the component is strikethrough
                         */
                        // @ts-ignore
                        public isStrikethroughRaw(): java.lang.Boolean
                        /**
                         * Returns whether this component is obfuscated. This uses the parent's
                         * setting if this component hasn't been set. false is returned if none of
                         * the parent chain has been set.
                         * @return whether the component is obfuscated
                         */
                        // @ts-ignore
                        public isObfuscated(): boolean
                        /**
                         * Returns whether this component is obfuscated without checking the parents
                         * setting. May return null
                         * @return whether the component is obfuscated
                         */
                        // @ts-ignore
                        public isObfuscatedRaw(): java.lang.Boolean
                        // @ts-ignore
                        public setExtra(components: java.util.List<net.md_5.bungee.api.chat.BaseComponent> | Array<net.md_5.bungee.api.chat.BaseComponent>): void
                        /**
                         * Appends a text element to the component. The text will inherit this
                         * component's formatting
                         * @param text the text to append
                         */
                        // @ts-ignore
                        public addExtra(text: java.lang.String | string): void
                        /**
                         * Appends a component to the component. The text will inherit this
                         * component's formatting
                         * @param component the component to append
                         */
                        // @ts-ignore
                        public addExtra(component: net.md_5.bungee.api.chat.BaseComponent): void
                        /**
                         * Returns whether the component has any formatting or events applied to it
                         * @return Whether any formatting or events are applied
                         */
                        // @ts-ignore
                        public hasFormatting(): boolean
                        /**
                         * Converts the component into a string without any formatting
                         * @return the string as plain text
                         */
                        // @ts-ignore
                        public toPlainText(): string
                        /**
                         * Converts the component to a string that uses the old formatting codes
                         * ({@link net.md_5.bungee.api.ChatColor#COLOR_CHAR}
                         * @return the string in the old format
                         */
                        // @ts-ignore
                        public toLegacyText(): string
                        /**
                         * The color of this component and any child components (unless overridden)
                         */
                        // @ts-ignore
                        public setColor(color: net.md_5.bungee.api.ChatColor): void
                        /**
                         * Whether this component and any child components (unless overridden) is
                         * bold
                         */
                        // @ts-ignore
                        public setBold(bold: java.lang.Boolean): void
                        /**
                         * Whether this component and any child components (unless overridden) is
                         * italic
                         */
                        // @ts-ignore
                        public setItalic(italic: java.lang.Boolean): void
                        /**
                         * Whether this component and any child components (unless overridden) is
                         * underlined
                         */
                        // @ts-ignore
                        public setUnderlined(underlined: java.lang.Boolean): void
                        /**
                         * Whether this component and any child components (unless overridden) is
                         * strikethrough
                         */
                        // @ts-ignore
                        public setStrikethrough(strikethrough: java.lang.Boolean): void
                        /**
                         * Whether this component and any child components (unless overridden) is
                         * obfuscated
                         */
                        // @ts-ignore
                        public setObfuscated(obfuscated: java.lang.Boolean): void
                        /**
                         * The text to insert into the chat when this component (and child
                         * components) are clicked while pressing the shift key
                         */
                        // @ts-ignore
                        public setInsertion(insertion: java.lang.String | string): void
                        /**
                         * The action to perform when this component (and child components) are
                         * clicked
                         */
                        // @ts-ignore
                        public setClickEvent(clickEvent: net.md_5.bungee.api.chat.ClickEvent): void
                        /**
                         * The action to perform when this component (and child components) are
                         * hovered over
                         */
                        // @ts-ignore
                        public setHoverEvent(hoverEvent: net.md_5.bungee.api.chat.HoverEvent): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        /**
                         * The text to insert into the chat when this component (and child
                         * components) are clicked while pressing the shift key
                         */
                        // @ts-ignore
                        public getInsertion(): string
                        /**
                         * Appended components that inherit this component's formatting and events
                         */
                        // @ts-ignore
                        public getExtra(): Array<net.md_5.bungee.api.chat.BaseComponent>
                        /**
                         * The action to perform when this component (and child components) are
                         * clicked
                         */
                        // @ts-ignore
                        public getClickEvent(): net.md_5.bungee.api.chat.ClickEvent
                        /**
                         * The action to perform when this component (and child components) are
                         * hovered over
                         */
                        // @ts-ignore
                        public getHoverEvent(): net.md_5.bungee.api.chat.HoverEvent
                    }
                }
            }
        }
    }
}
