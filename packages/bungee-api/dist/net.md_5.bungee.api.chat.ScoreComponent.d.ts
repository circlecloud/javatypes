declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    /**
                     * This component displays the score based on a player score on the scoreboard.
                     * <br>
                     * The <b>name</b> is the name of the player stored on the scoreboard, which may
                     * be a "fake" player. It can also be a target selector that <b>must</b> resolve
                     * to 1 target, and may target non-player entities.
                     * <br>
                     * With a book, /tellraw, or /title, using the wildcard '*' in the place of a
                     * name or target selector will cause all players to see their own score in the
                     * specified objective.
                     * <br>
                     * <b>Signs cannot use the '*' wildcard</b>
                     * <br>
                     * These values are filled in by the server-side implementation.
                     * <br>
                     * As of 1.12.2, a bug ( MC-56373 ) prevents full usage within hover events.
                     */
                    // @ts-ignore
                    class ScoreComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a new score component with the specified name and objective.<br>
                         * If not specifically set, value will default to an empty string;
                         * signifying that the scoreboard value should take precedence. If not null,
                         * nor empty, {@code value} will override any value found in the
                         * scoreboard.<br>
                         * The value defaults to an empty string.
                         * @param name the name of the entity, or an entity selector, whose score
                         *  should be displayed
                         * @param objective the internal name of the objective the entity's score is
                         *  attached to
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, objective: java.lang.String | string)
                        /**
                         * Creates a score component from the original to clone it.
                         * @param original the original for the new score component
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.ScoreComponent)
                        // @ts-ignore
                        constructor(name: java.lang.String | string, objective: java.lang.String | string, value: java.lang.String | string)
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.ScoreComponent
                        // @ts-ignore
                        toPlainText(builder: java.lang.StringBuilder): void
                        // @ts-ignore
                        toLegacyText(builder: java.lang.StringBuilder): void
                        /**
                         * The name of the entity whose score should be displayed.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * The internal name of the objective the score is attached to.
                         */
                        // @ts-ignore
                        public getObjective(): string
                        /**
                         * The optional value to use instead of the one present in the Scoreboard.
                         */
                        // @ts-ignore
                        public getValue(): string
                        /**
                         * The name of the entity whose score should be displayed.
                         */
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * The internal name of the objective the score is attached to.
                         */
                        // @ts-ignore
                        public setObjective(objective: java.lang.String | string): void
                        /**
                         * The optional value to use instead of the one present in the Scoreboard.
                         */
                        // @ts-ignore
                        public setValue(value: java.lang.String | string): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
