declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    /**
                     * Called when a {@link WeatherUniverse}'s {@link Weather} changes.
                     */
                    // @ts-ignore
                    interface ChangeWorldWeatherEvent extends org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original {@link Weather} that the event is creating.
                         * @return The original Weather
                         */
                        // @ts-ignore
                        getOriginalWeather(): org.spongepowered.api.world.weather.Weather
                        /**
                         * Gets the {@link Weather} that was happening before this event.
                         * @return The Weather before the event was called
                         */
                        // @ts-ignore
                        getInitialWeather(): org.spongepowered.api.world.weather.Weather
                        /**
                         * Gets the {@link Weather} that this event is creating.
                         * @return The Weather after this event is called
                         */
                        // @ts-ignore
                        getWeather(): org.spongepowered.api.world.weather.Weather
                        /**
                         * Sets what the new {@link Weather} should be with a random duration.
                         * @param weather The new Weather
                         */
                        // @ts-ignore
                        setWeather(weather: org.spongepowered.api.world.weather.Weather): void
                        /**
                         * Gets the original duration of {@link ChangeWorldWeatherEvent#getWeather()} that would run after event.
                         * @return The original duration
                         */
                        // @ts-ignore
                        getOriginalDuration(): number /*int*/
                        /**
                         * Sets the duration of the {@link Weather} (in ticks).
                         * @return The duration of the weather (in ticks)
                         */
                        // @ts-ignore
                        getDuration(): number /*int*/
                        /**
                         * Sets the duration of the {@link Weather} (in ticks).
                         * @param duration The duration of the weather (in ticks)
                         */
                        // @ts-ignore
                        setDuration(duration: number /*int*/): void
                    }
                }
            }
        }
    }
}
