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
            readonly NEVER: org.bukkit.FluidCollisionMode
            /**
             * Only collide with source fluid blocks.
             */
            // @ts-ignore
            readonly SOURCE_ONLY: org.bukkit.FluidCollisionMode
            /**
             * Collide with all fluids.
             */
            // @ts-ignore
            readonly ALWAYS: org.bukkit.FluidCollisionMode
            // @ts-ignore
            values(): org.bukkit.FluidCollisionMode[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.FluidCollisionMode
        }
    }
}
