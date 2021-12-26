declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'type' represents the type of piston which this (technical) block corresponds
                     * to.
                     */
                    // @ts-ignore
                    interface TechnicalPiston extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'type' property.
                         * @return the 'type' value
                         */
                        // @ts-ignore
                        getType(): org.bukkit.block.data.type.TechnicalPiston.Type
                        /**
                         * Sets the value of the 'type' property.
                         * @param type the new 'type' value
                         */
                        // @ts-ignore
                        setType(type: org.bukkit.block.data.type.TechnicalPiston.Type): void
                    }
                }
            }
        }
    }
}
