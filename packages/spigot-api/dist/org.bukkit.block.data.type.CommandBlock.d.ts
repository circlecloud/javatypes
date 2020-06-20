declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'conditional' denotes whether this command block is conditional or not, i.e.
                     * will only execute if the preceeding command block also executed successfully.
                     */
                    // @ts-ignore
                    interface CommandBlock extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'conditional' property.
                         * @return the 'conditional' value
                         */
                        // @ts-ignore
                        isConditional(): boolean
                        /**
                         * Sets the value of the 'conditional' property.
                         * @param conditional the new 'conditional' value
                         */
                        // @ts-ignore
                        setConditional(conditional: boolean): void
                    }
                }
            }
        }
    }
}
