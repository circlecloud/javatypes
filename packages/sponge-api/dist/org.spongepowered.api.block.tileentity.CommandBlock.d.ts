declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a Command Block.
                     */
                    // @ts-ignore
                    interface CommandBlock extends org.spongepowered.api.block.tileentity.TileEntity, org.spongepowered.api.command.source.CommandBlockSource {
                        /**
                         * Executes the currently stored command.
                         */
                        // @ts-ignore
                        execute(): void
                    }
                }
            }
        }
    }
}
