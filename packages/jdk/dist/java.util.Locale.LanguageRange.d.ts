declare namespace java {
    namespace util {
        namespace Locale {
            /**
             * This class expresses a <em>Language Range</em> defined in
             * <a href="http://tools.ietf.org/html/rfc4647">RFC 4647 Matching of
             * Language Tags</a>. A language range is an identifier which is used to
             * select language tag(s) meeting specific requirements by using the
             * mechanisms described in <a href="Locale.html#LocaleMatching">Locale
             * Matching</a>. A list which represents a user's preferences and consists
             * of language ranges is called a <em>Language Priority List</em>.
             * <p>There are two types of language ranges: basic and extended. In RFC
             * 4647, the syntax of language ranges is expressed in
             * <a href="http://tools.ietf.org/html/rfc4234">ABNF</a> as follows:
             * <blockquote>
             * <pre>
             * basic-language-range    = (1*8ALPHA *("-" 1*8alphanum)) / "*"
             * extended-language-range = (1*8ALPHA / "*")
             * *("-" (1*8alphanum / "*"))
             * alphanum                = ALPHA / DIGIT
             * </pre>
             * </blockquote>
             * For example, {@code "en"} (English), {@code "ja-JP"} (Japanese, Japan),
             * {@code "*"} (special language range which matches any language tag) are
             * basic language ranges, whereas {@code "*-CH"} (any languages,
             * Switzerland), {@code "es-*"} (Spanish, any regions), and
             * {@code "zh-Hant-*"} (Traditional Chinese, any regions) are extended
             * language ranges.
             * @see #filter
             * @see #filterTags
             * @see #lookup
             * @see #lookupTag
             * @since 1.8
             */
            // @ts-ignore
            class LanguageRange extends java.lang.Object {
                /**
                 * Constructs a {@code LanguageRange} using the given {@code range}.
                 * Note that no validation is done against the IANA Language Subtag
                 * Registry at time of construction.
                 * <p>This is equivalent to {@code LanguageRange(range, MAX_WEIGHT)}.
                 * @param range a language range
                 * @throws NullPointerException if the given {#code range} is
                 *      {@code null}
                 */
                // @ts-ignore
                constructor(range: java.lang.String | string)
                /**
                 * Constructs a {@code LanguageRange} using the given {@code range} and
                 * {@code weight}. Note that no validation is done against the IANA
                 * Language Subtag Registry at time of construction.
                 * @param range  a language range
                 * @param weight a weight value between {#code MIN_WEIGHT} and
                 *      {@code MAX_WEIGHT}
                 * @throws NullPointerException if the given {#code range} is
                 *      {@code null}
                 * @throws IllegalArgumentException if the given {#code weight} is less
                 *      than {@code MIN_WEIGHT} or greater than {@code MAX_WEIGHT}
                 */
                // @ts-ignore
                constructor(range: java.lang.String | string, weight: number /*double*/)
                /**
                 * A constant holding the maximum value of weight, 1.0, which indicates
                 * that the language range is a good fit for the user.
                 */
                // @ts-ignore
                public static readonly MAX_WEIGHT: number /*double*/
                /**
                 * A constant holding the minimum value of weight, 0.0, which indicates
                 * that the language range is not a good fit for the user.
                 */
                // @ts-ignore
                public static readonly MIN_WEIGHT: number /*double*/
                /**
                 * Returns the language range of this {@code LanguageRange}.
                 * @return the language range.
                 */
                // @ts-ignore
                public getRange(): string
                /**
                 * Returns the weight of this {@code LanguageRange}.
                 * @return the weight value.
                 */
                // @ts-ignore
                public getWeight(): number /*double*/
                /**
                 * Parses the given {@code ranges} to generate a Language Priority List.
                 * <p>This method performs a syntactic check for each language range in
                 * the given {@code ranges} but doesn't do validation using the IANA
                 * Language Subtag Registry.
                 * <p>The {@code ranges} to be given can take one of the following
                 * forms:
                 * <pre>
                 * "Accept-Language: ja,en;q=0.4"  (weighted list with Accept-Language prefix)
                 * "ja,en;q=0.4"                   (weighted list)
                 * "ja,en"                         (prioritized list)
                 * </pre>
                 * In a weighted list, each language range is given a weight value.
                 * The weight value is identical to the "quality value" in
                 * <a href="http://tools.ietf.org/html/rfc2616">RFC 2616</a>, and it
                 * expresses how much the user prefers  the language. A weight value is
                 * specified after a corresponding language range followed by
                 * {@code ";q="}, and the default weight value is {@code MAX_WEIGHT}
                 * when it is omitted.
                 * <p>Unlike a weighted list, language ranges in a prioritized list
                 * are sorted in the descending order based on its priority. The first
                 * language range has the highest priority and meets the user's
                 * preference most.
                 * <p>In either case, language ranges are sorted in descending order in
                 * the Language Priority List based on priority or weight. If a
                 * language range appears in the given {@code ranges} more than once,
                 * only the first one is included on the Language Priority List.
                 * <p>The returned list consists of language ranges from the given
                 * {@code ranges} and their equivalents found in the IANA Language
                 * Subtag Registry. For example, if the given {@code ranges} is
                 * {@code "Accept-Language: iw,en-us;q=0.7,en;q=0.3"}, the elements in
                 * the list to be returned are:
                 * <pre>
                 * <b>Range</b>                                   <b>Weight</b>
                 * "iw" (older tag for Hebrew)             1.0
                 * "he" (new preferred code for Hebrew)    1.0
                 * "en-us" (English, United States)        0.7
                 * "en" (English)                          0.3
                 * </pre>
                 * Two language ranges, {@code "iw"} and {@code "he"}, have the same
                 * highest priority in the list. By adding {@code "he"} to the user's
                 * Language Priority List, locale-matching method can find Hebrew as a
                 * matching locale (or language tag) even if the application or system
                 * offers only {@code "he"} as a supported locale (or language tag).
                 * @param ranges a list of comma-separated language ranges or a list of
                 *      language ranges in the form of the "Accept-Language" header
                 *      defined in <a href="http://tools.ietf.org/html/rfc2616">RFC
                 *      2616</a>
                 * @return a Language Priority List consisting of language ranges
                 *      included in the given {#code ranges} and their equivalent
                 *      language ranges if available. The list is modifiable.
                 * @throws NullPointerException if {#code ranges} is null
                 * @throws IllegalArgumentException if a language range or a weight
                 *      found in the given {#code ranges} is ill-formed
                 */
                // @ts-ignore
                public static parse(ranges: java.lang.String | string): Array<java.util.Locale.LanguageRange>
                /**
                 * Parses the given {@code ranges} to generate a Language Priority
                 * List, and then customizes the list using the given {@code map}.
                 * This method is equivalent to
                 * {@code mapEquivalents(parse(ranges), map)}.
                 * @param ranges a list of comma-separated language ranges or a list
                 *      of language ranges in the form of the "Accept-Language" header
                 *      defined in <a href="http://tools.ietf.org/html/rfc2616">RFC
                 *      2616</a>
                 * @param map a map containing information to customize language ranges
                 * @return a Language Priority List with customization. The list is
                 *      modifiable.
                 * @throws NullPointerException if {#code ranges} is null
                 * @throws IllegalArgumentException if a language range or a weight
                 *      found in the given {#code ranges} is ill-formed
                 * @see #parse(String)
                 * @see #mapEquivalents
                 */
                // @ts-ignore
                public static parse(ranges: java.lang.String | string, map: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): Array<java.util.Locale.LanguageRange>
                /**
                 * Generates a new customized Language Priority List using the given
                 * {@code priorityList} and {@code map}. If the given {@code map} is
                 * empty, this method returns a copy of the given {@code priorityList}.
                 * <p>In the map, a key represents a language range whereas a value is
                 * a list of equivalents of it. {@code '*'} cannot be used in the map.
                 * Each equivalent language range has the same weight value as its
                 * original language range.
                 * <pre>
                 * An example of map:
                 * <b>Key</b>                            <b>Value</b>
                 * "zh" (Chinese)                 "zh",
                 * "zh-Hans"(Simplified Chinese)
                 * "zh-HK" (Chinese, Hong Kong)   "zh-HK"
                 * "zh-TW" (Chinese, Taiwan)      "zh-TW"
                 * </pre>
                 * The customization is performed after modification using the IANA
                 * Language Subtag Registry.
                 * <p>For example, if a user's Language Priority List consists of five
                 * language ranges ({@code "zh"}, {@code "zh-CN"}, {@code "en"},
                 * {@code "zh-TW"}, and {@code "zh-HK"}), the newly generated Language
                 * Priority List which is customized using the above map example will
                 * consists of {@code "zh"}, {@code "zh-Hans"}, {@code "zh-CN"},
                 * {@code "zh-Hans-CN"}, {@code "en"}, {@code "zh-TW"}, and
                 * {@code "zh-HK"}.
                 * <p>{@code "zh-HK"} and {@code "zh-TW"} aren't converted to
                 * {@code "zh-Hans-HK"} nor {@code "zh-Hans-TW"} even if they are
                 * included in the Language Priority List. In this example, mapping
                 * is used to clearly distinguish Simplified Chinese and Traditional
                 * Chinese.
                 * <p>If the {@code "zh"}-to-{@code "zh"} mapping isn't included in the
                 * map, a simple replacement will be performed and the customized list
                 * won't include {@code "zh"} and {@code "zh-CN"}.
                 * @param priorityList user's Language Priority List
                 * @param map a map containing information to customize language ranges
                 * @return a new Language Priority List with customization. The list is
                 *      modifiable.
                 * @throws NullPointerException if {#code priorityList} is {@code null}
                 * @see #parse(String, Map)
                 */
                // @ts-ignore
                public static mapEquivalents(priorityList: java.util.List<java.util.Locale.LanguageRange> | Array<java.util.Locale.LanguageRange>, map: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): Array<java.util.Locale.LanguageRange>
                /**
                 * Returns a hash code value for the object.
                 * @return a hash code value for this object.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Compares this object to the specified object. The result is true if
                 * and only if the argument is not {@code null} and is a
                 * {@code LanguageRange} object that contains the same {@code range}
                 * and {@code weight} values as this object.
                 * @param obj the object to compare with
                 * @return {#code true} if this object's {@code range} and
                 *      {@code weight} are the same as the {@code obj}'s; {@code false}
                 *      otherwise.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
            }
        }
    }
}
