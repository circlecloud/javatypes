declare namespace org {
    namespace bukkit {
        /**
         * An enum to specify a rotation based orientation, like that on a clock.
         * <p>
         * It represents how something is viewed, as opposed to cardinal directions.
         */
        // @ts-ignore
        class Rotation extends java.lang.Enum<org.bukkit.Rotation> {
            // @ts-ignore
            values(): org.bukkit.Rotation[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Rotation
            /**
             * Rotate clockwise by 90 degrees.
             * @return the relative rotation
             */
            // @ts-ignore
            rotateClockwise(): org.bukkit.Rotation
            /**
             * Rotate counter-clockwise by 90 degrees.
             * @return the relative rotation
             */
            // @ts-ignore
            rotateCounterClockwise(): org.bukkit.Rotation
        }
    }
}
