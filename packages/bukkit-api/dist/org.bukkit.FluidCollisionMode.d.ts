declare namespace org {
    namespace bukkit {
        /**
         * Determines the collision behavior when fluids get hit during ray tracing.
         */
        // @ts-ignore
        class FluidCollisionMode extends java.lang.Enum<org.bukkit.FluidCollisionMode> {
            /**
             * Ignore fluids.
             */
            // @ts-ignore
            public static readonly NEVER: org.bukkit.FluidCollisionMode
            /**
             * Only collide with source fluid blocks.
             */
            // @ts-ignore
            public static readonly SOURCE_ONLY: org.bukkit.FluidCollisionMode
            /**
             * Collide with all fluids.
             */
            // @ts-ignore
            public static readonly ALWAYS: org.bukkit.FluidCollisionMode
            // @ts-ignore
            public static values(): org.bukkit.FluidCollisionMode[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.FluidCollisionMode
        }
    }
}
