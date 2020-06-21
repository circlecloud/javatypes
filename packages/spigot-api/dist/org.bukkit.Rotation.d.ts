declare namespace org {
    namespace bukkit {
        /**
         * An enum to specify a rotation based orientation, like that on a clock.
         * <p>
         * It represents how something is viewed, as opposed to cardinal directions.
         */
        // @ts-ignore
        class Rotation extends java.lang.Enum<org.bukkit.Rotation> {
            /**
             * No rotation
             */
            // @ts-ignore
            readonly NONE: org.bukkit.Rotation
            /**
             * Rotated clockwise by 45 degrees
             */
            // @ts-ignore
            readonly CLOCKWISE_45: org.bukkit.Rotation
            /**
             * Rotated clockwise by 90 degrees
             */
            // @ts-ignore
            readonly CLOCKWISE: org.bukkit.Rotation
            /**
             * Rotated clockwise by 135 degrees
             */
            // @ts-ignore
            readonly CLOCKWISE_135: org.bukkit.Rotation
            /**
             * Flipped upside-down, a 180 degree rotation
             */
            // @ts-ignore
            readonly FLIPPED: org.bukkit.Rotation
            /**
             * Flipped upside-down + 45 degree rotation
             */
            // @ts-ignore
            readonly FLIPPED_45: org.bukkit.Rotation
            /**
             * Rotated counter-clockwise by 90 degrees
             */
            // @ts-ignore
            readonly COUNTER_CLOCKWISE: org.bukkit.Rotation
            /**
             * Rotated counter-clockwise by 45 degrees
             */
            // @ts-ignore
            readonly COUNTER_CLOCKWISE_45: org.bukkit.Rotation
            // @ts-ignore
            values(): org.bukkit.Rotation[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.Rotation
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
