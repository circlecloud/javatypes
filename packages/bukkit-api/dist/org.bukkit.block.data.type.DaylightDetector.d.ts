declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'inverted' denotes whether this daylight detector is in the inverted mode,
                     * i.e. activates in the absence of light rather than presence."
                     */
                    // @ts-ignore
                    interface DaylightDetector extends org.bukkit.block.data.AnaloguePowerable {
                        /**
                         * Gets the value of the 'inverted' property.
                         * @return the 'inverted' value
                         */
                        // @ts-ignore
                        isInverted(): boolean
                        /**
                         * Sets the value of the 'inverted' property.
                         * @param inverted the new 'inverted' value
                         */
                        // @ts-ignore
                        setInverted(inverted: boolean): void
                    }
                }
            }
        }
    }
}
