declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace weather {
                    /**
                     * A universe affected by {@link Weather}.
                     */
                    // @ts-ignore
                    interface WeatherUniverse {
                        /**
                         * Gets the current {@link Weather} in this volume.
                         * @return The current weather.
                         */
                        // @ts-ignore
                        getWeather(): org.spongepowered.api.world.weather.Weather
                        /**
                         * Gets the remaining duration of the current {@link Weather}.
                         * @return The remaining weather duration.
                         */
                        // @ts-ignore
                        getRemainingDuration(): long
                        /**
                         * Gets the duration the current {@link Weather} has been running for.
                         * @return The running weather duration.
                         */
                        // @ts-ignore
                        getRunningDuration(): long
                        /**
                         * Sets the {@link Weather} of the volume with a random duration.
                         * @param weather The new {#link Weather}.
                         */
                        // @ts-ignore
                        setWeather(weather: org.spongepowered.api.world.weather.Weather): void
                        /**
                         * Sets the {@link Weather} of the volume with the specified duration.
                         * @param weather The new {#link Weather}.
                         * @param duration The specified duration.
                         */
                        // @ts-ignore
                        setWeather(weather: org.spongepowered.api.world.weather.Weather, duration: number /*long*/): void
                    }
                }
            }
        }
    }
}
