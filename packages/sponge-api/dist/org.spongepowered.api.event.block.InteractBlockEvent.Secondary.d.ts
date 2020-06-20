declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace InteractBlockEvent {
                        /**
                         * An event where the targeted block is being interacted with the client's
                         * "secondary" button.
                         * <p>This is usually right-click.</p>
                         */
                        // @ts-ignore
                        interface Secondary extends org.spongepowered.api.event.block.InteractBlockEvent, org.spongepowered.api.event.entity.living.humanoid.HandInteractEvent {
                            // @ts-ignore
                            getOriginalUseItemResult(): org.spongepowered.api.util.Tristate
                            /**
                             * Gets the original {@link #getUseBlockResult}.
                             * @return The original {#link #getUseBlockResult}
                             */
                            // @ts-ignore
                            getOriginalUseBlockResult(): org.spongepowered.api.util.Tristate
                            /**
                             * Gets whether the {@link Player#getItemInHand} should be used.
                             * <ul>
                             * <li>FALSE: The {@link ItemStack} will never be used.</li>
                             * <li>UNDEFINED: The {@link ItemStack} will be used if the block fails.
                             * </li>
                             * <li>TRUE: The {@link ItemStack} will always be used.</li>
                             * </ul>
                             * <p>Note: These results may differ depending on implementation.</p>
                             * @return Whether the {#link Player#getItemInHand} should be used
                             */
                            // @ts-ignore
                            getUseItemResult(): org.spongepowered.api.util.Tristate
                            /**
                             * Gets whether the interacted {@link BlockSnapshot} should be used.
                             * <ul>
                             * <li>FALSE: {@link BlockSnapshot} will never be used.</li>
                             * <li>UNDEFINED: {@link BlockSnapshot} will be used as normal.</li>
                             * <li>TRUE: {@link BlockSnapshot} will always be used.</li>
                             * </ul>
                             * <p>Note: These results may differ depending on implementation.</p>
                             * @return Whether the interacted {#link BlockSnapshot} should be used
                             */
                            // @ts-ignore
                            getUseBlockResult(): org.spongepowered.api.util.Tristate
                            /**
                             * Sets whether the {@link Player#getItemInHand} should be used.
                             * <ul>
                             * <li>FALSE: The {@link ItemStack} will never be used.</li>
                             * <li>UNDEFINED: The {@link ItemStack} will be used if the block fails.
                             * </li>
                             * <li>TRUE: The {@link ItemStack} will always be used.</li>
                             * </ul>
                             * <p>Note: These results may differ depending on implementation.</p>
                             * @param result Whether the {#link Player#getItemInHand} should be used
                             */
                            // @ts-ignore
                            setUseItemResult(result: org.spongepowered.api.util.Tristate): void
                            /**
                             * Sets whether the interacted {@link BlockSnapshot} should be used.
                             * <ul>
                             * <li>FALSE: {@link BlockSnapshot} will never be used.</li>
                             * <li>UNDEFINED: {@link BlockSnapshot} will be used as normal.</li>
                             * <li>TRUE: {@link BlockSnapshot} will always be used.</li>
                             * </ul>
                             * <p>Note: These results may differ depending on implementation.</p>
                             * @param result Whether the interacted {#link BlockSnapshot} should be
                             *      used
                             */
                            // @ts-ignore
                            setUseBlockResult(result: org.spongepowered.api.util.Tristate): void
                        }
                    }
                }
            }
        }
    }
}
