declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace DisplayInfo {
                    /**
                     * A builder to create {@link DisplayInfo}s.
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.advancement.DisplayInfo, org.spongepowered.api.advancement.DisplayInfo.Builder> {
                        /**
                         * Sets the {@link AdvancementType}. Defaults
                         * to {@link AdvancementTypes#TASK}.
                         * @param advancementType The advancement type
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        type(advancementType: org.spongepowered.api.advancement.AdvancementType): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets the description. Defaults to {@link Text#EMPTY}.
                         * @param description The description
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        description(description: org.spongepowered.api.text.Text): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets the title.
                         * @param title The title
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        title(title: org.spongepowered.api.text.Text): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets the icon of the advancement with the
                         * specified {@link ItemType}.
                         * @param itemType The item type
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        icon(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets the icon of the advancement with the
                         * specified {@link ItemStack}.
                         * @param itemStack The item stack
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        icon(itemStack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets the icon of the advancement with the
                         * specified {@link ItemStackSnapshot}.
                         * @param itemStackSnapshot The item stack snapshot
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        icon(itemStackSnapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets whether a toast should be shown. This is the notification
                         * that will be displayed in the top right corner.
                         * <p>Defaults to {@code true}.</p>
                         * @param showToast Whether a toast should be shown
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        showToast(showToast: boolean): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets whether a notification should be shown in the global chat.
                         * <p>Defaults to {@code true}.</p>
                         * @param announceToChat Whether a notification should be shown in
                         *      the chat
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        announceToChat(announceToChat: boolean): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Sets whether the {@link Advancement} should be hidden.
                         * <p>Hidden advancements will only appear in the tree once they
                         * are unlocked. The lines that connect them to other advancements
                         * are still present.</p>
                         * @param hidden Is hidden
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        hidden(hidden: boolean): org.spongepowered.api.advancement.DisplayInfo.Builder
                        /**
                         * Builds the {@link DisplayInfo}.
                         * @return The display info
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.advancement.DisplayInfo
                    }
                }
            }
        }
    }
}
