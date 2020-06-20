declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents an End Gateway.
                     * @see EndGatewayData
                     */
                    // @ts-ignore
                    interface EndGateway extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets a copy of the {@link EndGatewayData} containing all available
                         * data this {@link EndGateway} has.
                         * @return A copy of the end gateway data
                         */
                        // @ts-ignore
                        getEndGatewayData(): org.spongepowered.api.data.manipulator.mutable.tileentity.EndGatewayData
                    }
                }
            }
        }
    }
}
