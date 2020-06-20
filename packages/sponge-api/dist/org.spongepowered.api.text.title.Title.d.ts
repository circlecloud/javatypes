declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace title {
                    /**
                     * Represents an immutable configuration for an in-game title. Instances of this
                     * interface can be created through the {@link Builder} by calling
                     * {@link #builder()}.
                     * <p>All properties of a title are optional - if they are not set it will use
                     * the current default values from the client.</p>
                     */
                    // @ts-ignore
                    class Title extends java.lang.Object {
                        // @ts-ignore
                        readonly EMPTY: org.spongepowered.api.text.title.Title
                        // @ts-ignore
                        readonly CLEAR: org.spongepowered.api.text.title.Title
                        // @ts-ignore
                        readonly RESET: org.spongepowered.api.text.title.Title
                        /**
                         * Returns the title of this title configuration.
                         * @return The {#link Text} of the title, if it was configured
                         */
                        // @ts-ignore
                        getTitle(): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Returns the subtitle of this title configuration.
                         * @return The {#link Text} of the subtitle, if it was configured
                         */
                        // @ts-ignore
                        getSubtitle(): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Returns the action bar text of this title configuration.
                         * @return The {#link Text} of the action bar, if it was configured
                         */
                        // @ts-ignore
                        getActionBar(): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Returns the specified time to fade in the title on the client. Once this
                         * period of time is over, the title will stay for the amount of time from
                         * {@link #getStay}.
                         * <p>The default value for Vanilla is 20 (1 second).</p>
                         * @return The amount of ticks (1/20 second) for the fade in effect
                         */
                        // @ts-ignore
                        getFadeIn(): java.util.Optional<java.lang.Integer>
                        /**
                         * Returns the specified time how long the title should stay on the client.
                         * Once this period of time is over, the title will fade out using the
                         * duration specified from {@link #getFadeOut}.
                         * <p>The default value for Vanilla is 60 (3 second).</p>
                         * @return The amount of ticks (1/20 second) for the stay effect
                         */
                        // @ts-ignore
                        getStay(): java.util.Optional<java.lang.Integer>
                        /**
                         * Returns the specified time to fade out the title on the client.
                         * <p>The default value for Vanilla is 20 (1 second).</p>
                         * @return The amount of ticks (1/20 second) for the fade out effect
                         */
                        // @ts-ignore
                        getFadeOut(): java.util.Optional<java.lang.Integer>
                        /**
                         * Returns whether this configuration is clearing the current title from the
                         * screen.
                         * @return True if the current title will be removed from the client's
                         *          screen
                         */
                        // @ts-ignore
                        isClear(): boolean
                        /**
                         * Returns whether this configuration is clearing the current title from the
                         * screen and resetting the current configuration to the default values.
                         * <p>This is recommended when you want to make sure to display a single
                         * title.</p>
                         * @return True if the current settings will be reset to the defaults
                         */
                        // @ts-ignore
                        isReset(): boolean
                        /**
                         * Creates a new {@link Builder} using the configuration of this instance.
                         * @return A new builder to modify this Title configuration
                         */
                        // @ts-ignore
                        toBuilder(): org.spongepowered.api.text.title.Title.Builder
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                        /**
                         * Returns a {@link Title} that will simply do nothing when it is sent to
                         * the client.
                         * @return An empty title instance
                         */
                        // @ts-ignore
                        of(): org.spongepowered.api.text.title.Title
                        /**
                         * Returns a {@link Title} that will display the given main title on the
                         * player's screen.
                         * @param title The title to display
                         * @return The created title
                         */
                        // @ts-ignore
                        of(title: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title
                        /**
                         * Returns a {@link Title} that will display the given main and subtitle on
                         * the player's screen.
                         * @param title The title to display
                         * @param subtitle The subtitle to display
                         * @return The created title
                         */
                        // @ts-ignore
                        of(title: org.spongepowered.api.text.Text, subtitle: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title
                        /**
                         * Returns a {@link Title} that will clear the currently displayed
                         * {@link Title} from the player's screen.
                         * @return A title configuration that will clear
                         */
                        // @ts-ignore
                        clear(): org.spongepowered.api.text.title.Title
                        /**
                         * Returns a {@link Title} that will reset the current title back to default
                         * values on the client.
                         * @return A title configuration that will reset
                         */
                        // @ts-ignore
                        reset(): org.spongepowered.api.text.title.Title
                        /**
                         * Creates a new {@link Title} configuration builder that will reset the
                         * currently displayed Title on the client before displaying the new
                         * configured one.
                         * @return A new {#link Builder}
                         * @see #update
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.text.title.Title.Builder
                        /**
                         * Creates a new empty {@link Title} configuration builder. Unlike
                         * {@link #builder} this won't reset the current Title on the client before
                         * displaying the current one. This has less use cases but should be used if
                         * just the previously sent Title should be updated.
                         * @return A new {#link Builder}
                         * @see #builder
                         */
                        // @ts-ignore
                        update(): org.spongepowered.api.text.title.Title.Builder
                    }
                }
            }
        }
    }
}
