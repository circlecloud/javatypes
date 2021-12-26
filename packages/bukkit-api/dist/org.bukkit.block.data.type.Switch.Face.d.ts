declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace Switch {
                        /**
                         * The face to which a switch type block is stuck.
                         * @deprecated use {#link AttachedFace}
                         */
                        // @ts-ignore
                        class Face extends java.lang.Enum<org.bukkit.block.data.type.Switch.Face> {
                            /**
                             * The switch is mounted to the floor and pointing upwards.
                             */
                            // @ts-ignore
                            public static readonly FLOOR: org.bukkit.block.data.type.Switch.Face
                            /**
                             * The switch is mounted to the wall.
                             */
                            // @ts-ignore
                            public static readonly WALL: org.bukkit.block.data.type.Switch.Face
                            /**
                             * The switch is mounted to the ceiling and pointing dowanrds.
                             */
                            // @ts-ignore
                            public static readonly CEILING: org.bukkit.block.data.type.Switch.Face
                            // @ts-ignore
                            public static values(): org.bukkit.block.data.type.Switch.Face[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Switch.Face
                        }
                    }
                }
            }
        }
    }
}
