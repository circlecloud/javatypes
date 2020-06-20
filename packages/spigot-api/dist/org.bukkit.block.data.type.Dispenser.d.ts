declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * Similar to {@link Powerable}, 'triggered' indicates whether or not the
                     * dispenser is currently activated.
                     */
                    // @ts-ignore
                    interface Dispenser extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'triggered' property.
                         * @return the 'triggered' value
                         */
                        // @ts-ignore
                        isTriggered(): boolean
                        /**
                         * Sets the value of the 'triggered' property.
                         * @param triggered the new 'triggered' value
                         */
                        // @ts-ignore
                        setTriggered(triggered: boolean): void
                    }
                }
            }
        }
    }
}
