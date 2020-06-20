declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'short' denotes this piston head is shorter than the usual amount because it
                     * is currently retracting.
                     */
                    // @ts-ignore
                    interface PistonHead extends org.bukkit.block.data.type.TechnicalPiston {
                        /**
                         * Gets the value of the 'short' property.
                         * @return the 'short' value
                         */
                        // @ts-ignore
                        isShort(): boolean
                        /**
                         * Sets the value of the 'short' property.
                         * @param _short the new 'short' value
                         */
                        // @ts-ignore
                        setShort(_short: boolean): void
                    }
                }
            }
        }
    }
}
