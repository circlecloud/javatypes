declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'extended' denotes whether the piston head is currently extended or not.
                     */
                    // @ts-ignore
                    interface Piston extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'extended' property.
                         * @return the 'extended' value
                         */
                        // @ts-ignore
                        isExtended(): boolean
                        /**
                         * Sets the value of the 'extended' property.
                         * @param extended the new 'extended' value
                         */
                        // @ts-ignore
                        setExtended(extended: boolean): void
                    }
                }
            }
        }
    }
}
