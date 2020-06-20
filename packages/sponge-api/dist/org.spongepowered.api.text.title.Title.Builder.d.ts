declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace title {
                    namespace Title {
                        /**
                         * Represents a builder class to create immutable {@link Title}
                         * configurations.
                         * @see Title
                         */
                        // @ts-ignore
                        class Builder extends java.lang.Object {
                            /**
                             * Returns the current title of this builder.
                             * @return The current main title, or {#link Optional#empty()} if none
                             * @see Title#getTitle()
                             */
                            // @ts-ignore
                            getTitle(): java.util.Optional<org.spongepowered.api.text.Text>
                            /**
                             * Sets the title to send to the player.
                             * @param title The text to use as the title, or {#code null} to reset
                             * @return This title builder
                             * @see Title#getTitle()
                             */
                            // @ts-ignore
                            title(title: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Returns the current subtitle of this builder.
                             * @return The current subtitle, or {#link Optional#empty()} if none
                             * @see Title#getSubtitle()
                             */
                            // @ts-ignore
                            getSubtitle(): java.util.Optional<org.spongepowered.api.text.Text>
                            /**
                             * Sets the subtitle to send to the player.
                             * @param subtitle The text to use as the subtitle, or {#code null} to
                             *         reset
                             * @return This title builder
                             * @see Title#getSubtitle()
                             */
                            // @ts-ignore
                            subtitle(subtitle: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Returns the current action bar text of this builder.
                             * @return The current action bar text, or {#link Optional#empty()} if none
                             * @see Title#getActionBar()
                             */
                            // @ts-ignore
                            getActionBar(): java.util.Optional<org.spongepowered.api.text.Text>
                            /**
                             * Sets the action bar text to send to the player.
                             * @param actionBar The text to use for the action bar, or {#code null}
                             *      to reset
                             * @return This title builder
                             * @see Title#getActionBar()
                             */
                            // @ts-ignore
                            actionBar(actionBar: org.spongepowered.api.text.Text): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Returns the current fade in effect time of the title.
                             * @return The current fade in time, or {#link Optional#empty()} if none
                             * @see Title#getFadeIn()
                             */
                            // @ts-ignore
                            getFadeIn(): java.util.Optional<java.lang.Integer>
                            /**
                             * Sets the duration in ticks of the fade in effect of the title. Once
                             * this period of time is over the title will stay for the amount of
                             * time specified in {@link #stay(Integer)}.
                             * <p>The default value for Vanilla is 20 (1 second).</p>
                             * @param fadeIn The amount of ticks (1/20 second) for the fade in
                             *         effect, or {#code null} to reset
                             * @return This title builder
                             * @see Title#getFadeIn()
                             */
                            // @ts-ignore
                            fadeIn(fadeIn: number): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Returns the current stay effect time of the title.
                             * @return The current stay time, or {#link Optional#empty()} if none
                             * @see Title#getStay()
                             */
                            // @ts-ignore
                            getStay(): java.util.Optional<java.lang.Integer>
                            /**
                             * Sets the duration in ticks how long the title should stay on the
                             * screen. Once this period of time is over the title will fade out
                             * using the duration specified in {@link #fadeOut(Integer)}.
                             * <p>The default value for Vanilla is 60 (3 seconds).</p>
                             * @param stay The amount of ticks (1/20 second) to stay, or
                             *         {#code null} to reset
                             * @return This title builder
                             * @see Title#getStay()
                             */
                            // @ts-ignore
                            stay(stay: number): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Returns the current fade out effect time of the title.
                             * @return The current fade out time, or {#link Optional#empty()} if
                             *          none
                             * @see Title#getFadeOut()
                             */
                            // @ts-ignore
                            getFadeOut(): java.util.Optional<java.lang.Integer>
                            /**
                             * Sets the duration in ticks of the fade out effect of the title.
                             * <p>The default value for Vanilla is 20 (1 second).</p>
                             * @param fadeOut The amount of ticks (1/20 second) for the fade out
                             *         effect, or {#code null} to reset
                             * @return This title builder
                             * @see Title#getFadeOut()
                             */
                            // @ts-ignore
                            fadeOut(fadeOut: number): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Returns whether this builder is currently configured to clear.
                             * @return {#code true} if the title will clear
                             * @see Title#isClear()
                             */
                            // @ts-ignore
                            isClear(): boolean
                            /**
                             * Removes the currently displayed title from the player's screen. This
                             * will keep the currently used display times and will only remove the
                             * title.
                             * @return This title builder
                             * @see Title#isClear()
                             */
                            // @ts-ignore
                            clear(): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Sets whether the the currently displayed title should be removed from
                             * the player's screen and will keep the currently used display times.
                             * @param clear Whether this title should clear
                             * @return This title builder
                             * @see Title#isClear()
                             */
                            // @ts-ignore
                            clear(clear: boolean): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Returns whether this builder is currently configured to reset.
                             * @return {#code true} if the title will reset
                             * @see Title#isReset()
                             */
                            // @ts-ignore
                            isReset(): boolean
                            /**
                             * Removes the currently displayed title from the player's screen and
                             * set the configuration back to the default values.
                             * @return This title builder
                             * @see Title#isReset()
                             */
                            // @ts-ignore
                            reset(): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Sets whether the currently displayed title should be removed from the
                             * player's screen and the configuration set back to the default values.
                             * @param reset Whether this title should reset
                             * @return This title builder
                             * @see Title#isReset()
                             */
                            // @ts-ignore
                            reset(reset: boolean): org.spongepowered.api.text.title.Title.Builder
                            /**
                             * Builds an immutable instance of the current configuration.
                             * @return An immutable {#link Title} with the currently configured
                             *          settings
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.text.title.Title
                            // @ts-ignore
                            equals(o: any): boolean
                            // @ts-ignore
                            hashCode(): int
                            // @ts-ignore
                            toString(): java.lang.String
                        }
                    }
                }
            }
        }
    }
}
