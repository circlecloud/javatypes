declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'eye' denotes whether this end portal frame has been activated by having an
                     * eye of ender placed in it.
                     */
                    // @ts-ignore
                    interface EndPortalFrame extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'eye' property.
                         * @return the 'eye' value
                         */
                        // @ts-ignore
                        hasEye(): boolean
                        /**
                         * Sets the value of the 'eye' property.
                         * @param eye the new 'eye' value
                         */
                        // @ts-ignore
                        setEye(eye: boolean): void
                    }
                }
            }
        }
    }
}
