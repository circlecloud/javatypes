declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace WorldBorder {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.WorldBorder, org.spongepowered.api.world.WorldBorder.Builder> {
                        /**
                         * Copies the required data from the passed {@code WorldBorder}.
                         * @param border The world border whose data is to be copied
                         * @return The builder, for chaining
                         */
                        // @ts-ignore
                        from(border: org.spongepowered.api.world.WorldBorder): org.spongepowered.api.world.WorldBorder.Builder
                        /**
                         * Sets the diameter of this world border.
                         * @param diameter The diameter that this border will have.
                         * @return The builder, for chaining.
                         * @see WorldBorder#setDiameter(double)
                         */
                        // @ts-ignore
                        diameter(diameter: number /*double*/): org.spongepowered.api.world.WorldBorder.Builder
                        /**
                         * Sets the centre of this world border.
                         * @param x The x-coordinate of the new centre
                         * @param z The z-coordinate of the new centre
                         * @return The builder, for chaining
                         * @see WorldBorder#setCenter(double, double)
                         */
                        // @ts-ignore
                        center(x: number /*double*/, z: number /*double*/): org.spongepowered.api.world.WorldBorder.Builder
                        /**
                         * Sets the warning time of this world border.
                         * @param time Warning time in seconds
                         * @return The builder, for chaining
                         * @see WorldBorder#setWarningTime(int)
                         */
                        // @ts-ignore
                        warningTime(time: number /*int*/): org.spongepowered.api.world.WorldBorder.Builder
                        /**
                         * Sets the warning distance of this world border.
                         * @param distance The warning distance in blocks
                         * @return The builder, for chaining
                         * @see WorldBorder#setWarningDistance(int)
                         */
                        // @ts-ignore
                        warningDistance(distance: number /*int*/): org.spongepowered.api.world.WorldBorder.Builder
                        /**
                         * Sets the damage threshold of this world border.
                         * @param distance The damage threshold in blocks
                         * @return The builder, for chaining
                         * @see WorldBorder#setDamageThreshold(double)
                         */
                        // @ts-ignore
                        damageThreshold(distance: number /*double*/): org.spongepowered.api.world.WorldBorder.Builder
                        /**
                         * Sets the damage amount of this world border.
                         * @param damage The damage amount
                         * @return The builder, for chaining
                         * @see WorldBorder#setDamageAmount(double)
                         */
                        // @ts-ignore
                        damageAmount(damage: number /*double*/): org.spongepowered.api.world.WorldBorder.Builder
                        /**
                         * Builds the world border from the information given. If no information
                         * is given, a {@code WorldBorder} with default properties is built.
                         * @return The built world border
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.world.WorldBorder
                    }
                }
            }
        }
    }
}
