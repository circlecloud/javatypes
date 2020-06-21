declare namespace java {
    namespace util {
        namespace Locale {
            /**
             * <code>Builder</code> is used to build instances of <code>Locale</code>
             * from values configured by the setters.  Unlike the <code>Locale</code>
             * constructors, the <code>Builder</code> checks if a value configured by a
             * setter satisfies the syntax requirements defined by the <code>Locale</code>
             * class.  A <code>Locale</code> object created by a <code>Builder</code> is
             * well-formed and can be transformed to a well-formed IETF BCP 47 language tag
             * without losing information.
             * <p><b>Note:</b> The <code>Locale</code> class does not provide any
             * syntactic restrictions on variant, while BCP 47 requires each variant
             * subtag to be 5 to 8 alphanumerics or a single numeric followed by 3
             * alphanumerics.  The method <code>setVariant</code> throws
             * <code>IllformedLocaleException</code> for a variant that does not satisfy
             * this restriction. If it is necessary to support such a variant, use a
             * Locale constructor.  However, keep in mind that a <code>Locale</code>
             * object created this way might lose the variant information when
             * transformed to a BCP 47 language tag.
             * <p>The following example shows how to create a <code>Locale</code> object
             * with the <code>Builder</code>.
             * <blockquote>
             * <pre>
             * Locale aLocale = new Builder().setLanguage("sr").setScript("Latn").setRegion("RS").build();
             * </pre>
             * </blockquote>
             * <p>Builders can be reused; <code>clear()</code> resets all
             * fields to their default values.
             * @see Locale#forLanguageTag
             * @since 1.7
             */
            // @ts-ignore
            class Builder extends java.lang.Object {
                /**
                 * Constructs an empty Builder. The default value of all
                 * fields, extensions, and private use information is the
                 * empty string.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Resets the <code>Builder</code> to match the provided
                 * <code>locale</code>.  Existing state is discarded.
                 * <p>All fields of the locale must be well-formed, see {@link Locale}.
                 * <p>Locales with any ill-formed fields cause
                 * <code>IllformedLocaleException</code> to be thrown, except for the
                 * following three cases which are accepted for compatibility
                 * reasons:<ul>
                 * <li>Locale("ja", "JP", "JP") is treated as "ja-JP-u-ca-japanese"
                 * <li>Locale("th", "TH", "TH") is treated as "th-TH-u-nu-thai"
                 * <li>Locale("no", "NO", "NY") is treated as "nn-NO"</ul>
                 * @param locale the locale
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>locale</code> has
                 *  any ill-formed fields.
                 * @throws NullPointerException if <code>locale</code> is null.
                 */
                // @ts-ignore
                public setLocale(locale: java.util.Locale): java.util.Locale.Builder
                /**
                 * Resets the Builder to match the provided IETF BCP 47
                 * language tag.  Discards the existing state.  Null and the
                 * empty string cause the builder to be reset, like {@link
                 * #clear}.  Grandfathered tags (see {@link
                 * Locale#forLanguageTag}) are converted to their canonical
                 * form before being processed.  Otherwise, the language tag
                 * must be well-formed (see {@link Locale}) or an exception is
                 * thrown (unlike <code>Locale.forLanguageTag</code>, which
                 * just discards ill-formed and following portions of the
                 * tag).
                 * @param languageTag the language tag
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>languageTag</code> is ill-formed
                 * @see Locale#forLanguageTag(String)
                 */
                // @ts-ignore
                public setLanguageTag(languageTag: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Sets the language.  If <code>language</code> is the empty string or
                 * null, the language in this <code>Builder</code> is removed.  Otherwise,
                 * the language must be <a href="./Locale.html#def_language">well-formed</a>
                 * or an exception is thrown.
                 * <p>The typical language value is a two or three-letter language
                 * code as defined in ISO639.
                 * @param language the language
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>language</code> is ill-formed
                 */
                // @ts-ignore
                public setLanguage(language: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Sets the script. If <code>script</code> is null or the empty string,
                 * the script in this <code>Builder</code> is removed.
                 * Otherwise, the script must be <a href="./Locale.html#def_script">well-formed</a> or an
                 * exception is thrown.
                 * <p>The typical script value is a four-letter script code as defined by ISO 15924.
                 * @param script the script
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>script</code> is ill-formed
                 */
                // @ts-ignore
                public setScript(script: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Sets the region.  If region is null or the empty string, the region
                 * in this <code>Builder</code> is removed.  Otherwise,
                 * the region must be <a href="./Locale.html#def_region">well-formed</a> or an
                 * exception is thrown.
                 * <p>The typical region value is a two-letter ISO 3166 code or a
                 * three-digit UN M.49 area code.
                 * <p>The country value in the <code>Locale</code> created by the
                 * <code>Builder</code> is always normalized to upper case.
                 * @param region the region
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>region</code> is ill-formed
                 */
                // @ts-ignore
                public setRegion(region: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Sets the variant.  If variant is null or the empty string, the
                 * variant in this <code>Builder</code> is removed.  Otherwise, it
                 * must consist of one or more <a href="./Locale.html#def_variant">well-formed</a>
                 * subtags, or an exception is thrown.
                 * <p><b>Note:</b> This method checks if <code>variant</code>
                 * satisfies the IETF BCP 47 variant subtag's syntax requirements,
                 * and normalizes the value to lowercase letters.  However,
                 * the <code>Locale</code> class does not impose any syntactic
                 * restriction on variant, and the variant value in
                 * <code>Locale</code> is case sensitive.  To set such a variant,
                 * use a Locale constructor.
                 * @param variant the variant
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>variant</code> is ill-formed
                 */
                // @ts-ignore
                public setVariant(variant: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Sets the extension for the given key. If the value is null or the
                 * empty string, the extension is removed.  Otherwise, the extension
                 * must be <a href="./Locale.html#def_extensions">well-formed</a> or an exception
                 * is thrown.
                 * <p><b>Note:</b> The key {@link Locale#UNICODE_LOCALE_EXTENSION
                 * UNICODE_LOCALE_EXTENSION} ('u') is used for the Unicode locale extension.
                 * Setting a value for this key replaces any existing Unicode locale key/type
                 * pairs with those defined in the extension.
                 * <p><b>Note:</b> The key {@link Locale#PRIVATE_USE_EXTENSION
                 * PRIVATE_USE_EXTENSION} ('x') is used for the private use code. To be
                 * well-formed, the value for this key needs only to have subtags of one to
                 * eight alphanumeric characters, not two to eight as in the general case.
                 * @param key the extension key
                 * @param value the extension value
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>key</code> is illegal
                 *  or <code>value</code> is ill-formed
                 * @see #setUnicodeLocaleKeyword(String, String)
                 */
                // @ts-ignore
                public setExtension(key: string, value: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Sets the Unicode locale keyword type for the given key.  If the type
                 * is null, the Unicode keyword is removed.  Otherwise, the key must be
                 * non-null and both key and type must be <a
                 * href="./Locale.html#def_locale_extension">well-formed</a> or an exception
                 * is thrown.
                 * <p>Keys and types are converted to lower case.
                 * <p><b>Note</b>:Setting the 'u' extension via {@link #setExtension}
                 * replaces all Unicode locale keywords with those defined in the
                 * extension.
                 * @param key the Unicode locale key
                 * @param type the Unicode locale type
                 * @return This builder.
                 * @throws IllformedLocaleException if <code>key</code> or <code>type</code>
                 *  is ill-formed
                 * @throws NullPointerException if <code>key</code> is null
                 * @see #setExtension(char, String)
                 */
                // @ts-ignore
                public setUnicodeLocaleKeyword(key: java.lang.String | string, type: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Adds a unicode locale attribute, if not already present, otherwise
                 * has no effect.  The attribute must not be null and must be <a
                 * href="./Locale.html#def_locale_extension">well-formed</a> or an exception
                 * is thrown.
                 * @param attribute the attribute
                 * @return This builder.
                 * @throws NullPointerException if <code>attribute</code> is null
                 * @throws IllformedLocaleException if <code>attribute</code> is ill-formed
                 * @see #setExtension(char, String)
                 */
                // @ts-ignore
                public addUnicodeLocaleAttribute(attribute: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Removes a unicode locale attribute, if present, otherwise has no
                 * effect.  The attribute must not be null and must be <a
                 * href="./Locale.html#def_locale_extension">well-formed</a> or an exception
                 * is thrown.
                 * <p>Attribute comparision for removal is case-insensitive.
                 * @param attribute the attribute
                 * @return This builder.
                 * @throws NullPointerException if <code>attribute</code> is null
                 * @throws IllformedLocaleException if <code>attribute</code> is ill-formed
                 * @see #setExtension(char, String)
                 */
                // @ts-ignore
                public removeUnicodeLocaleAttribute(attribute: java.lang.String | string): java.util.Locale.Builder
                /**
                 * Resets the builder to its initial, empty state.
                 * @return This builder.
                 */
                // @ts-ignore
                public clear(): java.util.Locale.Builder
                /**
                 * Resets the extensions to their initial, empty state.
                 * Language, script, region and variant are unchanged.
                 * @return This builder.
                 * @see #setExtension(char, String)
                 */
                // @ts-ignore
                public clearExtensions(): java.util.Locale.Builder
                /**
                 * Returns an instance of <code>Locale</code> created from the fields set
                 * on this builder.
                 * <p>This applies the conversions listed in {@link Locale#forLanguageTag}
                 * when constructing a Locale. (Grandfathered tags are handled in
                 * {@link #setLanguageTag}.)
                 * @return A Locale.
                 */
                // @ts-ignore
                public build(): java.util.Locale
            }
        }
    }
}
