declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    /**
                     * Sign sources are {@link CommandSource}s that execute commands when a player
                     * clicks a sign. Their location is set to the sign's location.
                     */
                    // @ts-ignore
                    interface SignSource extends org.spongepowered.api.command.source.ProxySource, org.spongepowered.api.world.Locatable {
                        /**
                         * Gets the sign {@link TileEntity} that this source has been created for.
                         * @return The {#link Sign}
                         */
                        // @ts-ignore
                        getSign(): org.spongepowered.api.block.tileentity.Sign
                    }
                }
            }
        }
    }
}
