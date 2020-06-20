declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Profile predicate that may be {@linkplain Environment#acceptsProfiles(Profiles)
                 * accepted} by an {@link Environment}.
                 * <p>May be implemented directly or, more usually, created using the
                 * {@link #of(String...) of(...)} factory method.
                 * @author Phillip Webb
                 * @since 5.1
                 */
                // @ts-ignore
                interface Profiles {
                    /**
                     * Test if this {@code Profiles} instance <em>matches</em> against the given
                     * active profiles predicate.
                     * @param activeProfiles predicate that tests whether a given profile is
                     *  currently active
                     */
                    // @ts-ignore
                    matches(activeProfiles: java.util.function.Predicate<java.lang.String> | java.util.function$.Predicate<java.lang.String>): boolean
                    /**
                     * Create a new {@link Profiles} instance that checks for matches against
                     * the given <em>profile strings</em>.
                     * <p>The returned instance will {@linkplain Profiles#matches(Predicate) match}
                     * if any one of the given profile strings matches.
                     * <p>A profile string may contain a simple profile name (for example
                     * {@code "production"}) or a profile expression. A profile expression allows
                     * for more complicated profile logic to be expressed, for example
                     * {@code "production & cloud"}.
                     * <p>The following operators are supported in profile expressions:
                     * <ul>
                     * <li>{@code !} - A logical <em>not</em> of the profile</li>
                     * <li>{@code &} - A logical <em>and</em> of the profiles</li>
                     * <li>{@code |} - A logical <em>or</em> of the profiles</li>
                     * </ul>
                     * <p>Please note that the {@code &} and {@code |} operators may not be mixed
                     * without using parentheses. For example {@code "a & b | c"} is not a valid
                     * expression; it must be expressed as {@code "(a & b) | c"} or
                     * {@code "a & (b | c)"}.
                     * @param profiles the <em>profile strings</em> to include
                     * @return a new {#link Profiles} instance
                     */
                    // @ts-ignore
                    of(...profiles: string[]): org.springframework.core.env.Profiles
                }
            }
        }
    }
}
