declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'disarmed' denotes that the tripwire was broken with shears and will not
                     * subsequently produce a current when destroyed.
                     */
                    // @ts-ignore
                    interface Tripwire extends org.bukkit.block.data.Attachable, org.bukkit.block.data.MultipleFacing, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'disarmed' property.
                         * @return the 'disarmed' value
                         */
                        // @ts-ignore
                        isDisarmed(): boolean
                        /**
                         * Sets the value of the 'disarmed' property.
                         * @param disarmed the new 'disarmed' value
                         */
                        // @ts-ignore
                        setDisarmed(disarmed: boolean): void
                    }
                }
            }
        }
    }
}
