declare namespace java {
    namespace util {
        namespace regex {
            /**
             * An engine that performs match operations on a {@linkplain java.lang.CharSequence
             * character sequence} by interpreting a {@link Pattern}.
             * <p> A matcher is created from a pattern by invoking the pattern's {@link
             * Pattern#matcher matcher} method.  Once created, a matcher can be used to
             * perform three different kinds of match operations:
             * <ul>
             * <li><p> The {@link #matches matches} method attempts to match the entire
             * input sequence against the pattern.  </p></li>
             * <li><p> The {@link #lookingAt lookingAt} method attempts to match the
             * input sequence, starting at the beginning, against the pattern.  </p></li>
             * <li><p> The {@link #find find} method scans the input sequence looking for
             * the next subsequence that matches the pattern.  </p></li>
             * </ul>
             * <p> Each of these methods returns a boolean indicating success or failure.
             * More information about a successful match can be obtained by querying the
             * state of the matcher.
             * <p> A matcher finds matches in a subset of its input called the
             * <i>region</i>. By default, the region contains all of the matcher's input.
             * The region can be modified via the{@link #region region} method and queried
             * via the {@link #regionStart regionStart} and {@link #regionEnd regionEnd}
             * methods. The way that the region boundaries interact with some pattern
             * constructs can be changed. See {@link #useAnchoringBounds
             * useAnchoringBounds} and {@link #useTransparentBounds useTransparentBounds}
             * for more details.
             * <p> This class also defines methods for replacing matched subsequences with
             * new strings whose contents can, if desired, be computed from the match
             * result.  The {@link #appendReplacement appendReplacement} and {@link
             * #appendTail appendTail} methods can be used in tandem in order to collect
             * the result into an existing string buffer, or the more convenient {@link
             * #replaceAll replaceAll} method can be used to create a string in which every
             * matching subsequence in the input sequence is replaced.
             * <p> The explicit state of a matcher includes the start and end indices of
             * the most recent successful match.  It also includes the start and end
             * indices of the input subsequence captured by each <a
             * href="Pattern.html#cg">capturing group</a> in the pattern as well as a total
             * count of such subsequences.  As a convenience, methods are also provided for
             * returning these captured subsequences in string form.
             * <p> The explicit state of a matcher is initially undefined; attempting to
             * query any part of it before a successful match will cause an {@link
             * IllegalStateException} to be thrown.  The explicit state of a matcher is
             * recomputed by every match operation.
             * <p> The implicit state of a matcher includes the input character sequence as
             * well as the <i>append position</i>, which is initially zero and is updated
             * by the {@link #appendReplacement appendReplacement} method.
             * <p> A matcher may be reset explicitly by invoking its {@link #reset()}
             * method or, if a new input sequence is desired, its {@link
             * #reset(java.lang.CharSequence) reset(CharSequence)} method.  Resetting a
             * matcher discards its explicit state information and sets the append position
             * to zero.
             * <p> Instances of this class are not safe for use by multiple concurrent
             * threads. </p>
             * @author Mike McCloskey
             * @author Mark Reinhold
             * @author JSR-51 Expert Group
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            class Matcher extends java.lang.Object implements java.util.regex.MatchResult {
                /**
                 * Returns the pattern that is interpreted by this matcher.
                 * @return The pattern for which this matcher was created
                 */
                // @ts-ignore
                pattern(): java.util.regex.Pattern
                /**
                 * Returns the match state of this matcher as a {@link MatchResult}.
                 * The result is unaffected by subsequent operations performed upon this
                 * matcher.
                 * @return a <code>MatchResult</code> with the state of this matcher
                 * @since 1.5
                 */
                // @ts-ignore
                toMatchResult(): java.util.regex.MatchResult
                /**
                 * Changes the <tt>Pattern</tt> that this <tt>Matcher</tt> uses to
                 * find matches with.
                 * <p> This method causes this matcher to lose information
                 * about the groups of the last match that occurred. The
                 * matcher's position in the input is maintained and its
                 * last append position is unaffected.</p>
                 * @param newPattern
                 *          The new pattern used by this matcher
                 * @return This matcher
                 * @throws IllegalArgumentException
                 *           If newPattern is <tt>null</tt>
                 * @since 1.5
                 */
                // @ts-ignore
                usePattern(newPattern: java.util.regex.Pattern): java.util.regex.Matcher
                /**
                 * Resets this matcher.
                 * <p> Resetting a matcher discards all of its explicit state information
                 * and sets its append position to zero. The matcher's region is set to the
                 * default region, which is its entire character sequence. The anchoring
                 * and transparency of this matcher's region boundaries are unaffected.
                 * @return This matcher
                 */
                // @ts-ignore
                reset(): java.util.regex.Matcher
                /**
                 * Resets this matcher with a new input sequence.
                 * <p> Resetting a matcher discards all of its explicit state information
                 * and sets its append position to zero.  The matcher's region is set to
                 * the default region, which is its entire character sequence.  The
                 * anchoring and transparency of this matcher's region boundaries are
                 * unaffected.
                 * @param input
                 *          The new input character sequence
                 * @return This matcher
                 */
                // @ts-ignore
                reset(input: java.lang.CharSequence): java.util.regex.Matcher
                /**
                 * Returns the start index of the previous match.
                 * @return The index of the first character matched
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 */
                // @ts-ignore
                start(): int
                /**
                 * Returns the start index of the subsequence captured by the given group
                 * during the previous match operation.
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <i>m.</i><tt>start(0)</tt> is equivalent to
                 * <i>m.</i><tt>start()</tt>.  </p>
                 * @param group
                 *          The index of a capturing group in this matcher's pattern
                 * @return The index of the first character captured by the group,
                 *           or <tt>-1</tt> if the match was successful but the group
                 *           itself did not match anything
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 * @throws IndexOutOfBoundsException
                 *           If there is no capturing group in the pattern
                 *           with the given index
                 */
                // @ts-ignore
                start(group: number /*int*/): int
                /**
                 * Returns the start index of the subsequence captured by the given
                 * <a href="Pattern.html#groupname">named-capturing group</a> during the
                 * previous match operation.
                 * @param name
                 *          The name of a named-capturing group in this matcher's pattern
                 * @return The index of the first character captured by the group,
                 *           or {#code -1} if the match was successful but the group
                 *           itself did not match anything
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 * @throws IllegalArgumentException
                 *           If there is no capturing group in the pattern
                 *           with the given name
                 * @since 1.8
                 */
                // @ts-ignore
                start(name: string): int
                /**
                 * Returns the offset after the last character matched.
                 * @return The offset after the last character matched
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 */
                // @ts-ignore
                end(): int
                /**
                 * Returns the offset after the last character of the subsequence
                 * captured by the given group during the previous match operation.
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <i>m.</i><tt>end(0)</tt> is equivalent to
                 * <i>m.</i><tt>end()</tt>.  </p>
                 * @param group
                 *          The index of a capturing group in this matcher's pattern
                 * @return The offset after the last character captured by the group,
                 *           or <tt>-1</tt> if the match was successful
                 *           but the group itself did not match anything
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 * @throws IndexOutOfBoundsException
                 *           If there is no capturing group in the pattern
                 *           with the given index
                 */
                // @ts-ignore
                end(group: number /*int*/): int
                /**
                 * Returns the offset after the last character of the subsequence
                 * captured by the given <a href="Pattern.html#groupname">named-capturing
                 * group</a> during the previous match operation.
                 * @param name
                 *          The name of a named-capturing group in this matcher's pattern
                 * @return The offset after the last character captured by the group,
                 *           or {#code -1} if the match was successful
                 *           but the group itself did not match anything
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 * @throws IllegalArgumentException
                 *           If there is no capturing group in the pattern
                 *           with the given name
                 * @since 1.8
                 */
                // @ts-ignore
                end(name: string): int
                /**
                 * Returns the input subsequence matched by the previous match.
                 * <p> For a matcher <i>m</i> with input sequence <i>s</i>,
                 * the expressions <i>m.</i><tt>group()</tt> and
                 * <i>s.</i><tt>substring(</tt><i>m.</i><tt>start(),</tt>&nbsp;<i>m.</i><tt>end())</tt>
                 * are equivalent.  </p>
                 * <p> Note that some patterns, for example <tt>a*</tt>, match the empty
                 * string.  This method will return the empty string when the pattern
                 * successfully matches the empty string in the input.  </p>
                 * @return The (possibly empty) subsequence matched by the previous match,
                 *          in string form
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 */
                // @ts-ignore
                group(): java.lang.String
                /**
                 * Returns the input subsequence captured by the given group during the
                 * previous match operation.
                 * <p> For a matcher <i>m</i>, input sequence <i>s</i>, and group index
                 * <i>g</i>, the expressions <i>m.</i><tt>group(</tt><i>g</i><tt>)</tt> and
                 * <i>s.</i><tt>substring(</tt><i>m.</i><tt>start(</tt><i>g</i><tt>),</tt>&nbsp;<i>m.</i><tt>end(</tt><i>g</i><tt>))</tt>
                 * are equivalent.  </p>
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <tt>m.group(0)</tt> is equivalent to <tt>m.group()</tt>.
                 * </p>
                 * <p> If the match was successful but the group specified failed to match
                 * any part of the input sequence, then <tt>null</tt> is returned. Note
                 * that some groups, for example <tt>(a*)</tt>, match the empty string.
                 * This method will return the empty string when such a group successfully
                 * matches the empty string in the input.  </p>
                 * @param group
                 *          The index of a capturing group in this matcher's pattern
                 * @return The (possibly empty) subsequence captured by the group
                 *           during the previous match, or <tt>null</tt> if the group
                 *           failed to match part of the input
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 * @throws IndexOutOfBoundsException
                 *           If there is no capturing group in the pattern
                 *           with the given index
                 */
                // @ts-ignore
                group(group: number /*int*/): java.lang.String
                /**
                 * Returns the input subsequence captured by the given
                 * <a href="Pattern.html#groupname">named-capturing group</a> during the previous
                 * match operation.
                 * <p> If the match was successful but the group specified failed to match
                 * any part of the input sequence, then <tt>null</tt> is returned. Note
                 * that some groups, for example <tt>(a*)</tt>, match the empty string.
                 * This method will return the empty string when such a group successfully
                 * matches the empty string in the input.  </p>
                 * @param name
                 *          The name of a named-capturing group in this matcher's pattern
                 * @return The (possibly empty) subsequence captured by the named group
                 *           during the previous match, or <tt>null</tt> if the group
                 *           failed to match part of the input
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 * @throws IllegalArgumentException
                 *           If there is no capturing group in the pattern
                 *           with the given name
                 * @since 1.7
                 */
                // @ts-ignore
                group(name: string): java.lang.String
                /**
                 * Returns the number of capturing groups in this matcher's pattern.
                 * <p> Group zero denotes the entire pattern by convention. It is not
                 * included in this count.
                 * <p> Any non-negative integer smaller than or equal to the value
                 * returned by this method is guaranteed to be a valid group index for
                 * this matcher.  </p>
                 * @return The number of capturing groups in this matcher's pattern
                 */
                // @ts-ignore
                groupCount(): int
                /**
                 * Attempts to match the entire region against the pattern.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods.  </p>
                 * @return <tt>true</tt> if, and only if, the entire region sequence
                 *           matches this matcher's pattern
                 */
                // @ts-ignore
                matches(): boolean
                /**
                 * Attempts to find the next subsequence of the input sequence that matches
                 * the pattern.
                 * <p> This method starts at the beginning of this matcher's region, or, if
                 * a previous invocation of the method was successful and the matcher has
                 * not since been reset, at the first character not matched by the previous
                 * match.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods.  </p>
                 * @return <tt>true</tt> if, and only if, a subsequence of the input
                 *           sequence matches this matcher's pattern
                 */
                // @ts-ignore
                find(): boolean
                /**
                 * Resets this matcher and then attempts to find the next subsequence of
                 * the input sequence that matches the pattern, starting at the specified
                 * index.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods, and subsequent
                 * invocations of the {@link #find()} method will start at the first
                 * character not matched by this match.  </p>
                 * @param start the index to start searching for a match
                 * @throws IndexOutOfBoundsException
                 *           If start is less than zero or if start is greater than the
                 *           length of the input sequence.
                 * @return <tt>true</tt> if, and only if, a subsequence of the input
                 *           sequence starting at the given index matches this matcher's
                 *           pattern
                 */
                // @ts-ignore
                find(start: number /*int*/): boolean
                /**
                 * Attempts to match the input sequence, starting at the beginning of the
                 * region, against the pattern.
                 * <p> Like the {@link #matches matches} method, this method always starts
                 * at the beginning of the region; unlike that method, it does not
                 * require that the entire region be matched.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods.  </p>
                 * @return <tt>true</tt> if, and only if, a prefix of the input
                 *           sequence matches this matcher's pattern
                 */
                // @ts-ignore
                lookingAt(): boolean
                /**
                 * Returns a literal replacement <code>String</code> for the specified
                 * <code>String</code>.
                 * This method produces a <code>String</code> that will work
                 * as a literal replacement <code>s</code> in the
                 * <code>appendReplacement</code> method of the {@link Matcher} class.
                 * The <code>String</code> produced will match the sequence of characters
                 * in <code>s</code> treated as a literal sequence. Slashes ('\') and
                 * dollar signs ('$') will be given no special meaning.
                 * @param s The string to be literalized
                 * @return A literal string replacement
                 * @since 1.5
                 */
                // @ts-ignore
                quoteReplacement(s: string): java.lang.String
                /**
                 * Implements a non-terminal append-and-replace step.
                 * <p> This method performs the following actions: </p>
                 * <ol>
                 * <li><p> It reads characters from the input sequence, starting at the
                 * append position, and appends them to the given string buffer.  It
                 * stops after reading the last character preceding the previous match,
                 * that is, the character at index {@link
                 * #start()}&nbsp;<tt>-</tt>&nbsp;<tt>1</tt>.  </p></li>
                 * <li><p> It appends the given replacement string to the string buffer.
                 * </p></li>
                 * <li><p> It sets the append position of this matcher to the index of
                 * the last character matched, plus one, that is, to {@link #end()}.
                 * </p></li>
                 * </ol>
                 * <p> The replacement string may contain references to subsequences
                 * captured during the previous match: Each occurrence of
                 * <tt>${</tt><i>name</i><tt>}</tt> or <tt>$</tt><i>g</i>
                 * will be replaced by the result of evaluating the corresponding
                 * {@link #group(String) group(name)} or {@link #group(int) group(g)}
                 * respectively. For  <tt>$</tt><i>g</i>,
                 * the first number after the <tt>$</tt> is always treated as part of
                 * the group reference. Subsequent numbers are incorporated into g if
                 * they would form a legal group reference. Only the numerals '0'
                 * through '9' are considered as potential components of the group
                 * reference. If the second group matched the string <tt>"foo"</tt>, for
                 * example, then passing the replacement string <tt>"$2bar"</tt> would
                 * cause <tt>"foobar"</tt> to be appended to the string buffer. A dollar
                 * sign (<tt>$</tt>) may be included as a literal in the replacement
                 * string by preceding it with a backslash (<tt>\$</tt>).
                 * <p> Note that backslashes (<tt>\</tt>) and dollar signs (<tt>$</tt>) in
                 * the replacement string may cause the results to be different than if it
                 * were being treated as a literal replacement string. Dollar signs may be
                 * treated as references to captured subsequences as described above, and
                 * backslashes are used to escape literal characters in the replacement
                 * string.
                 * <p> This method is intended to be used in a loop together with the
                 * {@link #appendTail appendTail} and {@link #find find} methods.  The
                 * following code, for example, writes <tt>one dog two dogs in the
                 * yard</tt> to the standard-output stream: </p>
                 * <blockquote><pre>
                 * Pattern p = Pattern.compile("cat");
                 * Matcher m = p.matcher("one cat two cats in the yard");
                 * StringBuffer sb = new StringBuffer();
                 * while (m.find()) {
                 * m.appendReplacement(sb, "dog");
                 * }
                 * m.appendTail(sb);
                 * System.out.println(sb.toString());</pre></blockquote>
                 * @param sb
                 *          The target string buffer
                 * @param replacement
                 *          The replacement string
                 * @return This matcher
                 * @throws IllegalStateException
                 *           If no match has yet been attempted,
                 *           or if the previous match operation failed
                 * @throws IllegalArgumentException
                 *           If the replacement string refers to a named-capturing
                 *           group that does not exist in the pattern
                 * @throws IndexOutOfBoundsException
                 *           If the replacement string refers to a capturing group
                 *           that does not exist in the pattern
                 */
                // @ts-ignore
                appendReplacement(sb: java.lang.StringBuffer, replacement: string): java.util.regex.Matcher
                /**
                 * Implements a terminal append-and-replace step.
                 * <p> This method reads characters from the input sequence, starting at
                 * the append position, and appends them to the given string buffer.  It is
                 * intended to be invoked after one or more invocations of the {@link
                 * #appendReplacement appendReplacement} method in order to copy the
                 * remainder of the input sequence.  </p>
                 * @param sb
                 *          The target string buffer
                 * @return The target string buffer
                 */
                // @ts-ignore
                appendTail(sb: java.lang.StringBuffer): java.lang.StringBuffer
                /**
                 * Replaces every subsequence of the input sequence that matches the
                 * pattern with the given replacement string.
                 * <p> This method first resets this matcher.  It then scans the input
                 * sequence looking for matches of the pattern.  Characters that are not
                 * part of any match are appended directly to the result string; each match
                 * is replaced in the result by the replacement string.  The replacement
                 * string may contain references to captured subsequences as in the {@link
                 * #appendReplacement appendReplacement} method.
                 * <p> Note that backslashes (<tt>\</tt>) and dollar signs (<tt>$</tt>) in
                 * the replacement string may cause the results to be different than if it
                 * were being treated as a literal replacement string. Dollar signs may be
                 * treated as references to captured subsequences as described above, and
                 * backslashes are used to escape literal characters in the replacement
                 * string.
                 * <p> Given the regular expression <tt>a*b</tt>, the input
                 * <tt>"aabfooaabfooabfoob"</tt>, and the replacement string
                 * <tt>"-"</tt>, an invocation of this method on a matcher for that
                 * expression would yield the string <tt>"-foo-foo-foo-"</tt>.
                 * <p> Invoking this method changes this matcher's state.  If the matcher
                 * is to be used in further matching operations then it should first be
                 * reset.  </p>
                 * @param replacement
                 *          The replacement string
                 * @return The string constructed by replacing each matching subsequence
                 *           by the replacement string, substituting captured subsequences
                 *           as needed
                 */
                // @ts-ignore
                replaceAll(replacement: string): java.lang.String
                /**
                 * Replaces the first subsequence of the input sequence that matches the
                 * pattern with the given replacement string.
                 * <p> This method first resets this matcher.  It then scans the input
                 * sequence looking for a match of the pattern.  Characters that are not
                 * part of the match are appended directly to the result string; the match
                 * is replaced in the result by the replacement string.  The replacement
                 * string may contain references to captured subsequences as in the {@link
                 * #appendReplacement appendReplacement} method.
                 * <p>Note that backslashes (<tt>\</tt>) and dollar signs (<tt>$</tt>) in
                 * the replacement string may cause the results to be different than if it
                 * were being treated as a literal replacement string. Dollar signs may be
                 * treated as references to captured subsequences as described above, and
                 * backslashes are used to escape literal characters in the replacement
                 * string.
                 * <p> Given the regular expression <tt>dog</tt>, the input
                 * <tt>"zzzdogzzzdogzzz"</tt>, and the replacement string
                 * <tt>"cat"</tt>, an invocation of this method on a matcher for that
                 * expression would yield the string <tt>"zzzcatzzzdogzzz"</tt>.  </p>
                 * <p> Invoking this method changes this matcher's state.  If the matcher
                 * is to be used in further matching operations then it should first be
                 * reset.  </p>
                 * @param replacement
                 *          The replacement string
                 * @return The string constructed by replacing the first matching
                 *           subsequence by the replacement string, substituting captured
                 *           subsequences as needed
                 */
                // @ts-ignore
                replaceFirst(replacement: string): java.lang.String
                /**
                 * Sets the limits of this matcher's region. The region is the part of the
                 * input sequence that will be searched to find a match. Invoking this
                 * method resets the matcher, and then sets the region to start at the
                 * index specified by the <code>start</code> parameter and end at the
                 * index specified by the <code>end</code> parameter.
                 * <p>Depending on the transparency and anchoring being used (see
                 * {@link #useTransparentBounds useTransparentBounds} and
                 * {@link #useAnchoringBounds useAnchoringBounds}), certain constructs such
                 * as anchors may behave differently at or around the boundaries of the
                 * region.
                 * @param start
                 *          The index to start searching at (inclusive)
                 * @param end
                 *          The index to end searching at (exclusive)
                 * @throws IndexOutOfBoundsException
                 *           If start or end is less than zero, if
                 *           start is greater than the length of the input sequence, if
                 *           end is greater than the length of the input sequence, or if
                 *           start is greater than end.
                 * @return this matcher
                 * @since 1.5
                 */
                // @ts-ignore
                region(start: number /*int*/, end: number /*int*/): java.util.regex.Matcher
                /**
                 * Reports the start index of this matcher's region. The
                 * searches this matcher conducts are limited to finding matches
                 * within {@link #regionStart regionStart} (inclusive) and
                 * {@link #regionEnd regionEnd} (exclusive).
                 * @return The starting point of this matcher's region
                 * @since 1.5
                 */
                // @ts-ignore
                regionStart(): int
                /**
                 * Reports the end index (exclusive) of this matcher's region.
                 * The searches this matcher conducts are limited to finding matches
                 * within {@link #regionStart regionStart} (inclusive) and
                 * {@link #regionEnd regionEnd} (exclusive).
                 * @return the ending point of this matcher's region
                 * @since 1.5
                 */
                // @ts-ignore
                regionEnd(): int
                /**
                 * Queries the transparency of region bounds for this matcher.
                 * <p> This method returns <tt>true</tt> if this matcher uses
                 * <i>transparent</i> bounds, <tt>false</tt> if it uses <i>opaque</i>
                 * bounds.
                 * <p> See {@link #useTransparentBounds useTransparentBounds} for a
                 * description of transparent and opaque bounds.
                 * <p> By default, a matcher uses opaque region boundaries.
                 * @return <tt>true</tt> iff this matcher is using transparent bounds,
                 *          <tt>false</tt> otherwise.
                 * @see java.util.regex.Matcher#useTransparentBounds(boolean)
                 * @since 1.5
                 */
                // @ts-ignore
                hasTransparentBounds(): boolean
                /**
                 * Sets the transparency of region bounds for this matcher.
                 * <p> Invoking this method with an argument of <tt>true</tt> will set this
                 * matcher to use <i>transparent</i> bounds. If the boolean
                 * argument is <tt>false</tt>, then <i>opaque</i> bounds will be used.
                 * <p> Using transparent bounds, the boundaries of this
                 * matcher's region are transparent to lookahead, lookbehind,
                 * and boundary matching constructs. Those constructs can see beyond the
                 * boundaries of the region to see if a match is appropriate.
                 * <p> Using opaque bounds, the boundaries of this matcher's
                 * region are opaque to lookahead, lookbehind, and boundary matching
                 * constructs that may try to see beyond them. Those constructs cannot
                 * look past the boundaries so they will fail to match anything outside
                 * of the region.
                 * <p> By default, a matcher uses opaque bounds.
                 * @param b a boolean indicating whether to use opaque or transparent
                 *          regions
                 * @return this matcher
                 * @see java.util.regex.Matcher#hasTransparentBounds
                 * @since 1.5
                 */
                // @ts-ignore
                useTransparentBounds(b: boolean): java.util.regex.Matcher
                /**
                 * Queries the anchoring of region bounds for this matcher.
                 * <p> This method returns <tt>true</tt> if this matcher uses
                 * <i>anchoring</i> bounds, <tt>false</tt> otherwise.
                 * <p> See {@link #useAnchoringBounds useAnchoringBounds} for a
                 * description of anchoring bounds.
                 * <p> By default, a matcher uses anchoring region boundaries.
                 * @return <tt>true</tt> iff this matcher is using anchoring bounds,
                 *          <tt>false</tt> otherwise.
                 * @see java.util.regex.Matcher#useAnchoringBounds(boolean)
                 * @since 1.5
                 */
                // @ts-ignore
                hasAnchoringBounds(): boolean
                /**
                 * Sets the anchoring of region bounds for this matcher.
                 * <p> Invoking this method with an argument of <tt>true</tt> will set this
                 * matcher to use <i>anchoring</i> bounds. If the boolean
                 * argument is <tt>false</tt>, then <i>non-anchoring</i> bounds will be
                 * used.
                 * <p> Using anchoring bounds, the boundaries of this
                 * matcher's region match anchors such as ^ and $.
                 * <p> Without anchoring bounds, the boundaries of this
                 * matcher's region will not match anchors such as ^ and $.
                 * <p> By default, a matcher uses anchoring region boundaries.
                 * @param b a boolean indicating whether or not to use anchoring bounds.
                 * @return this matcher
                 * @see java.util.regex.Matcher#hasAnchoringBounds
                 * @since 1.5
                 */
                // @ts-ignore
                useAnchoringBounds(b: boolean): java.util.regex.Matcher
                /**
                 * <p>Returns the string representation of this matcher. The
                 * string representation of a <code>Matcher</code> contains information
                 * that may be useful for debugging. The exact format is unspecified.
                 * @return The string representation of this matcher
                 * @since 1.5
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * <p>Returns true if the end of input was hit by the search engine in
                 * the last match operation performed by this matcher.
                 * <p>When this method returns true, then it is possible that more input
                 * would have changed the result of the last search.
                 * @return true iff the end of input was hit in the last match; false
                 *           otherwise
                 * @since 1.5
                 */
                // @ts-ignore
                hitEnd(): boolean
                /**
                 * <p>Returns true if more input could change a positive match into a
                 * negative one.
                 * <p>If this method returns true, and a match was found, then more
                 * input could cause the match to be lost. If this method returns false
                 * and a match was found, then more input might change the match but the
                 * match won't be lost. If a match was not found, then requireEnd has no
                 * meaning.
                 * @return true iff more input could change a positive match into a
                 *           negative one.
                 * @since 1.5
                 */
                // @ts-ignore
                requireEnd(): boolean
            }
        }
    }
}
