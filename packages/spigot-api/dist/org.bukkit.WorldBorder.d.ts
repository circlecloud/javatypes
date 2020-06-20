declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface WorldBorder {
            /**
             * Resets the border to default values.
             */
            // @ts-ignore
            reset(): void
            /**
             * Gets the current side length of the border.
             * @return The current side length of the border.
             */
            // @ts-ignore
            getSize(): double
            /**
             * Sets the border to a square region with the specified side length in blocks.
             * @param newSize The new size of the border.
             */
            // @ts-ignore
            setSize(newSize: number /*double*/): void
            /**
             * Sets the border to a square region with the specified side length in blocks.
             * @param newSize The new side length of the border.
             * @param seconds The time in seconds in which the border grows or shrinks from the previous size to that being set.
             */
            // @ts-ignore
            setSize(newSize: number /*double*/, seconds: number /*long*/): void
            /**
             * Gets the current border center.
             * @return The current border center.
             */
            // @ts-ignore
            getCenter(): org.bukkit.Location
            /**
             * Sets the new border center.
             * @param x The new center x-coordinate.
             * @param z The new center z-coordinate.
             */
            // @ts-ignore
            setCenter(x: number /*double*/, z: number /*double*/): void
            /**
             * Sets the new border center.
             * @param location The new location of the border center. (Only x/z used)
             */
            // @ts-ignore
            setCenter(location: org.bukkit.Location): void
            /**
             * Gets the current border damage buffer.
             * @return The current border damage buffer.
             */
            // @ts-ignore
            getDamageBuffer(): double
            /**
             * Sets the amount of blocks a player may safely be outside the border before taking damage.
             * @param blocks The amount of blocks. (The default is 5 blocks.)
             */
            // @ts-ignore
            setDamageBuffer(blocks: number /*double*/): void
            /**
             * Gets the current border damage amount.
             * @return The current border damage amount.
             */
            // @ts-ignore
            getDamageAmount(): double
            /**
             * Sets the amount of damage a player takes when outside the border plus the border buffer.
             * @param damage The amount of damage. (The default is 0.2 damage per second per block.)
             */
            // @ts-ignore
            setDamageAmount(damage: number /*double*/): void
            /**
             * Gets the current border warning time in seconds.
             * @return The current border warning time in seconds.
             */
            // @ts-ignore
            getWarningTime(): int
            /**
             * Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time.
             * @param seconds The amount of time in seconds. (The default is 15 seconds.)
             */
            // @ts-ignore
            setWarningTime(seconds: number /*int*/): void
            /**
             * Gets the current border warning distance.
             * @return The current border warning distance.
             */
            // @ts-ignore
            getWarningDistance(): int
            /**
             * Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border.
             * @param distance The distance in blocks. (The default is 5 blocks.)
             */
            // @ts-ignore
            setWarningDistance(distance: number /*int*/): void
            /**
             * Check if the specified location is inside this border.
             * @param location the location to check
             * @return if this location is inside the border or not
             */
            // @ts-ignore
            isInside(location: org.bukkit.Location): boolean
        }
    }
}
