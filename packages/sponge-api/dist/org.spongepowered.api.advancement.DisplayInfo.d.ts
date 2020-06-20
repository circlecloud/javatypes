declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                // @ts-ignore
                interface DisplayInfo {
                    /**
                     * Creates a new {@link Builder} to create {@link DisplayInfo}s.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.advancement.DisplayInfo.Builder
                    /**
                     * Gets the {@link AdvancementType}.
                     * @return The advancement type
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.advancement.AdvancementType
                    /**
                     * Gets the description.
                     * @return The description
                     */
                    // @ts-ignore
                    getDescription(): org.spongepowered.api.text.Text
                    /**
                     * Gets the icon.
                     * @return The icon
                     */
                    // @ts-ignore
                    getIcon(): org.spongepowered.api.item.inventory.ItemStackSnapshot
                    /**
                     * Gets the title.
                     * @return The title
                     */
                    // @ts-ignore
                    getTitle(): org.spongepowered.api.text.Text
                    /**
                     * Gets whether a toast should be shown.
                     * <p>The toast is the notification that will be displayed
                     * in the top right corner.</p>
                     * @return Show toast
                     */
                    // @ts-ignore
                    doesShowToast(): boolean
                    /**
                     * Gets whether a notification should be shown in the global chat.
                     * @return Announce to chat
                     */
                    // @ts-ignore
                    doesAnnounceToChat(): boolean
                    /**
                     * Gets whether this advancement is hidden.
                     * <p>Hidden advancements will only appear in the tree once they
                     * are unlocked. The lines that connect them to other advancements
                     * are still present.</p>
                     * @return Is hidden
                     */
                    // @ts-ignore
                    isHidden(): boolean
                }
            }
        }
    }
}
