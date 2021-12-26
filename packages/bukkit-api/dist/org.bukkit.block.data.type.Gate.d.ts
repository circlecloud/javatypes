declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'in_wall" indicates if the fence gate is attached to a wall, and if true the
                     * texture is lowered by a small amount to blend in better.
                     */
                    // @ts-ignore
                    interface Gate extends org.bukkit.block.data.Directional, org.bukkit.block.data.Openable, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'in_wall' property.
                         * @return the 'in_wall' value
                         */
                        // @ts-ignore
                        isInWall(): boolean
                        /**
                         * Sets the value of the 'in_wall' property.
                         * @param inWall the new 'in_wall' value
                         */
                        // @ts-ignore
                        setInWall(inWall: boolean): void
                    }
                }
            }
        }
    }
}
