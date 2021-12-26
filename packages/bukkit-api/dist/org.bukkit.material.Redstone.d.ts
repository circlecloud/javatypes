declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Indicated a Material that may carry or create a Redstone current
             */
            // @ts-ignore
            interface Redstone {
                /**
                 * Gets the current state of this Material, indicating if it's powered or
                 * unpowered
                 * @return true if powered, otherwise false
                 */
                // @ts-ignore
                isPowered(): boolean
            }
        }
    }
}
