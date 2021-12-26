declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * This class encompasses the 'north', 'east', 'south', 'west', height flags
                     * which are used to set the height of a wall.
                     * 'up' denotes whether the well has a center post.
                     */
                    // @ts-ignore
                    interface Wall extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'up' property.
                         * @return the 'up' value
                         */
                        // @ts-ignore
                        isUp(): boolean
                        /**
                         * Sets the value of the 'up' property.
                         * @param up the new 'up' value
                         */
                        // @ts-ignore
                        setUp(up: boolean): void
                        /**
                         * Gets the height of the specified face.
                         * @param face to check
                         * @return if face is enabled
                         */
                        // @ts-ignore
                        getHeight(face: org.bukkit.block.BlockFace): org.bukkit.block.data.type.Wall.Height
                        /**
                         * Set the height of the specified face.
                         * @param face to set
                         * @param height the height
                         */
                        // @ts-ignore
                        setHeight(face: org.bukkit.block.BlockFace, height: org.bukkit.block.data.type.Wall.Height): void
                    }
                }
            }
        }
    }
}
