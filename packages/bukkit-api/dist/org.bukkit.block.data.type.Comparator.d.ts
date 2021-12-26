declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'mode' indicates what mode this comparator will operate in.
                     */
                    // @ts-ignore
                    interface Comparator extends org.bukkit.block.data.Directional, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'mode' property.
                         * @return the 'mode' value
                         */
                        // @ts-ignore
                        getMode(): org.bukkit.block.data.type.Comparator.Mode
                        /**
                         * Sets the value of the 'mode' property.
                         * @param mode the new 'mode' value
                         */
                        // @ts-ignore
                        setMode(mode: org.bukkit.block.data.type.Comparator.Mode): void
                    }
                }
            }
        }
    }
}
