declare namespace java {
    namespace text {
        namespace spi {
            /**
             * An abstract class for service providers that
             * provide concrete implementations of the
             * {@link java.text.BreakIterator BreakIterator} class.
             * @since 1.6
             */
            // @ts-ignore
            class BreakIteratorProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#word">word breaks</a>
                 * for the given locale.
                 * @param locale the desired locale
                 * @return A break iterator for word breaks
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @see java.text.BreakIterator#getWordInstance(java.util.Locale)
                 */
                // @ts-ignore
                abstract getWordInstance(locale: java.util.Locale): java.text.BreakIterator
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#line">line breaks</a>
                 * for the given locale.
                 * @param locale the desired locale
                 * @return A break iterator for line breaks
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @see java.text.BreakIterator#getLineInstance(java.util.Locale)
                 */
                // @ts-ignore
                abstract getLineInstance(locale: java.util.Locale): java.text.BreakIterator
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#character">character breaks</a>
                 * for the given locale.
                 * @param locale the desired locale
                 * @return A break iterator for character breaks
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @see java.text.BreakIterator#getCharacterInstance(java.util.Locale)
                 */
                // @ts-ignore
                abstract getCharacterInstance(locale: java.util.Locale): java.text.BreakIterator
                /**
                 * Returns a new <code>BreakIterator</code> instance
                 * for <a href="../BreakIterator.html#sentence">sentence breaks</a>
                 * for the given locale.
                 * @param locale the desired locale
                 * @return A break iterator for sentence breaks
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @see java.text.BreakIterator#getSentenceInstance(java.util.Locale)
                 */
                // @ts-ignore
                abstract getSentenceInstance(locale: java.util.Locale): java.text.BreakIterator
            }
        }
    }
}
