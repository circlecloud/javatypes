declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockState {
                    /**
                     * An {@link ImmutableDataBuilder} for a {@link BlockState}. Just like the
                     * {@link ImmutableDataBuilder}, the {@link DataManipulator}s passed in to
                     * create a {@link BlockState} are copied on creation.
                     * <p>Note that upon creation, the {@link BlockType} must be set for validation
                     * of {@link DataManipulator}s, otherwise exceptions may be thrown.</p>
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder<org.spongepowered.api.block.BlockState, org.spongepowered.api.block.BlockState.Builder> {
                        /**
                         * Sets the {@link BlockType} for the {@link BlockState} to build.
                         * <p>The {@link BlockType} is used for some pre-validation on addition of
                         * {@link DataManipulator}s through {@link #add(DataManipulator)}. It is
                         * important to understand that not all manipulators are compatible with
                         * all {@link BlockType}s.</p>
                         * @param blockType The block type
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        blockType(blockType: org.spongepowered.api.block.BlockType): org.spongepowered.api.block.BlockState.Builder
                    }
                }
            }
        }
    }
}
