declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * Similar to {@link Bisected}, 'part' denotes which half of the bed this block
                     * corresponds to.
                     * <br>
                     * 'occupied' property is a quick flag to check if a player is currently
                     * sleeping in this bed block.
                     */
                    // @ts-ignore
                    interface Bed extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'part' property.
                         * @return the 'part' value
                         */
                        // @ts-ignore
                        getPart(): org.bukkit.block.data.type.Bed.Part
                        /**
                         * Sets the value of the 'part' property.
                         * @param part the new 'part' value
                         */
                        // @ts-ignore
                        setPart(part: org.bukkit.block.data.type.Bed.Part): void
                        /**
                         * Gets the value of the 'occupied' property.
                         * @return the 'occupied' value
                         */
                        // @ts-ignore
                        isOccupied(): boolean
                    }
                }
            }
        }
    }
}
