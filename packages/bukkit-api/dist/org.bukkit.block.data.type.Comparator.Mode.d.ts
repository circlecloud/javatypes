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
                            public static readonly COMPARE: org.bukkit.block.data.type.Comparator.Mode
                            /**
                             * Alternate subtraction mode. The output signal strength will be equal
                             * to max(rear-max(left,right),0).
                             */
                            // @ts-ignore
                            public static readonly SUBTRACT: org.bukkit.block.data.type.Comparator.Mode
                            // @ts-ignore
                            public static values(): org.bukkit.block.data.type.Comparator.Mode[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Comparator.Mode
                        }
                    }
                }
            }
        }
    }
}
