declare namespace org {
    namespace bukkit {
        /**
         * Represents a mutually perpendicular axis in 3D Cartesian coordinates. In
         * Minecraft the x, z axes lie in the horizontal plane, whilst the y axis points
         * upwards.
         */
        // @ts-ignore
        class Axis extends java.lang.Enum<org.bukkit.Axis> {
            /**
             * The x axis.
             */
            // @ts-ignore
            public static readonly X: org.bukkit.Axis
            /**
             * The y axis.
             */
            // @ts-ignore
            public static readonly Y: org.bukkit.Axis
            /**
             * The z axis.
             */
            // @ts-ignore
            public static readonly Z: org.bukkit.Axis
            // @ts-ignore
            public static values(): org.bukkit.Axis[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.Axis
        }
    }
}
