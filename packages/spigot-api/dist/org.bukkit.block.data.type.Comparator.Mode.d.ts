declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace Comparator {
                        /**
                         * The mode in which a comparator will operate in.
                         */
                        // @ts-ignore
                        class Mode extends java.lang.Enum<org.bukkit.block.data.type.Comparator.Mode> {
                            /**
                             * The default mode, similar to a transistor. The comparator will turn
                             * off if either side input is greater than the rear input.
                             */
                            // @ts-ignore
                            readonly COMPARE: org.bukkit.block.data.type.Comparator.Mode
                            /**
                             * Alternate subtraction mode. The output signal strength will be equal
                             * to max(rear-max(left,right),0).
                             */
                            // @ts-ignore
                            readonly SUBTRACT: org.bukkit.block.data.type.Comparator.Mode
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.Comparator.Mode[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Comparator.Mode
                        }
                    }
                }
            }
        }
    }
}
