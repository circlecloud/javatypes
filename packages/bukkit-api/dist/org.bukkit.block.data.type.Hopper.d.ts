declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * Similar to {@link Powerable}, 'enabled' indicates whether or not the hopper
                     * is currently activated.
                     * <br>
                     * Unlike most other blocks, a hopper is only enabled when it is <b>not</b>
                     * receiving any power.
                     */
                    // @ts-ignore
                    interface Hopper extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'enabled' property.
                         * @return the 'enabled' value
                         */
                        // @ts-ignore
                        isEnabled(): boolean
                        /**
                         * Sets the value of the 'enabled' property.
                         * @param enabled the new 'enabled' value
                         */
                        // @ts-ignore
                        setEnabled(enabled: boolean): void
                    }
                }
            }
        }
    }
}
