declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace action {
                    /**
                     * Utility methods to create instances of {@link TextAction}s.
                     */
                    // @ts-ignore
                    class TextActions extends java.lang.Object {
                        /**
                         * Creates a new {@link ClickAction} that will ask the player to open an URL
                         * when it is clicked.
                         * @param url The URL to open
                         * @return The created click action instance
                         */
                        // @ts-ignore
                        public static openUrl(url: java.net.URL): org.spongepowered.api.text.action.ClickAction.OpenUrl
                        /**
                         * Creates a new {@link ClickAction} that will type a command on the client
                         * when it is clicked.
                         * @param command The command to execute
                         * @return The created click action instance
                         */
                        // @ts-ignore
                        public static runCommand(command: java.lang.String | string): org.spongepowered.api.text.action.ClickAction.RunCommand
                        /**
                         * Creates a new {@link ClickAction} that will change the page in a book
                         * when it is clicked.
                         * @param page The book page to switch to
                         * @return The created click action instance
                         */
                        // @ts-ignore
                        public static changePage(page: number /*int*/): org.spongepowered.api.text.action.ClickAction.ChangePage
                        /**
                         * Creates a new {@link ClickAction} that will suggest the player a command
                         * when it is clicked.
                         * @param command The command to suggest
                         * @return The created click action instance
                         */
                        // @ts-ignore
                        public static suggestCommand(command: java.lang.String | string): org.spongepowered.api.text.action.ClickAction.SuggestCommand
                        /**
                         * Creates a new {@link ClickAction} that will execute the given runnable on
                         * the server when clicked. The callback will expire after some amount of
                         * time (not particularly instantly, but not like overnight really either).
                         * @param callback The callback to execute
                         * @return The created click action instance
                         */
                        // @ts-ignore
                        public static executeCallback(callback: java.util.function$.Consumer<org.spongepowered.api.command.CommandSource>): org.spongepowered.api.text.action.ClickAction.ExecuteCallback
                        /**
                         * Creates a new {@link HoverAction} that will show a text on the client
                         * when it is hovered.
                         * @param text The text to display
                         * @return The created hover action instance
                         */
                        // @ts-ignore
                        public static showText(text: org.spongepowered.api.text.Text): org.spongepowered.api.text.action.HoverAction.ShowText
                        /**
                         * Creates a new {@link HoverAction} that will show information about an
                         * item when it is hovered.
                         * @param item The item to display
                         * @return The created hover action instance
                         */
                        // @ts-ignore
                        public static showItem(item: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.text.action.HoverAction.ShowItem
                        /**
                         * Creates a new {@link HoverAction} that will show information about an
                         * entity when it is hovered.
                         * @param entity The entity to display
                         * @return The created hover action instance
                         */
                        // @ts-ignore
                        public static showEntity(entity: org.spongepowered.api.text.action.HoverAction.ShowEntity.Ref): org.spongepowered.api.text.action.HoverAction.ShowEntity
                        /**
                         * Creates a new {@link HoverAction} that will show information about an
                         * entity when it is hovered.
                         * @param uuid The UUID of the entity
                         * @param name The name of the entity
                         * @param type The type of the entity
                         * @return The created hover action instance
                         */
                        // @ts-ignore
                        public static showEntity(uuid: java.util.UUID, name: java.lang.String | string, type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.text.action.HoverAction.ShowEntity
                        /**
                         * Creates a new {@link HoverAction} that will show information about an
                         * entity when it is hovered.
                         * @param uuid The UUID of the entity
                         * @param name The name of the entity
                         * @return The created hover action instance
                         */
                        // @ts-ignore
                        public static showEntity(uuid: java.util.UUID, name: java.lang.String | string): org.spongepowered.api.text.action.HoverAction.ShowEntity
                        /**
                         * Creates a new {@link HoverAction} that will show information about an
                         * entity when it is hovered.
                         * @param entity The entity
                         * @param name The name of the entity
                         * @return The created hover action instance
                         */
                        // @ts-ignore
                        public static showEntity(entity: org.spongepowered.api.entity.Entity, name: java.lang.String | string): org.spongepowered.api.text.action.HoverAction.ShowEntity
                        /**
                         * Creates a new {@link ShiftClickAction} that will insert text at the
                         * current cursor position in the chat when it is shift-clicked.
                         * @param text The text to insert
                         * @return The created shift click action instance
                         */
                        // @ts-ignore
                        public static insertText(text: java.lang.String | string): org.spongepowered.api.text.action.ShiftClickAction.InsertText
                    }
                }
            }
        }
    }
}
