declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'honey_level' represents the amount of honey stored in the hive.
                     */
                    // @ts-ignore
                    interface Beehive extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'honey_level' property.
                         * @return the 'honey_level' value
                         */
                        // @ts-ignore
                        getHoneyLevel(): int
                        /**
                         * Sets the value of the 'honey_level' property.
                         * @param honeyLevel the new 'honey_level' value
                         */
                        // @ts-ignore
                        setHoneyLevel(honeyLevel: number /*int*/): void
                        /**
                         * Gets the maximum allowed value of the 'honey_level' property.
                         * @return the maximum 'honey_level' value
                         */
                        // @ts-ignore
                        getMaximumHoneyLevel(): int
                    }
                }
            }
        }
    }
}
