declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'north', 'east', 'south', 'west' represent the types of connections this
                     * redstone wire has to adjacent blocks.
                     */
                    // @ts-ignore
                    interface RedstoneWire extends org.bukkit.block.data.AnaloguePowerable {
                        /**
                         * Checks the type of connection on the specified face.
                         * @param face to check
                         * @return connection type
                         */
                        // @ts-ignore
                        getFace(face: org.bukkit.block.BlockFace): org.bukkit.block.data.type.RedstoneWire.Connection
                        /**
                         * Sets the type of connection on the specified face.
                         * @param face to set
                         * @param connection the connection type
                         */
                        // @ts-ignore
                        setFace(face: org.bukkit.block.BlockFace, connection: org.bukkit.block.data.type.RedstoneWire.Connection): void
                        /**
                         * Gets all of this faces which may be set on this block.
                         * @return all allowed faces
                         */
                        // @ts-ignore
                        getAllowedFaces(): Array<org.bukkit.block.BlockFace>
                    }
                }
            }
        }
    }
}
