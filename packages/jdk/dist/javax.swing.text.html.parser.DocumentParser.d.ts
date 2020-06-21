declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * A Parser for HTML Documents (actually, you can specify a DTD, but
                     * you should really only use this class with the html dtd in swing).
                     * Reads an InputStream of HTML and
                     * invokes the appropriate methods in the ParserCallback class. This
                     * is the default parser used by HTMLEditorKit to parse HTML url's.
                     * <p>This will message the callback for all valid tags, as well as
                     * tags that are implied but not explicitly specified. For example, the
                     * html string (&lt;p&gt;blah) only has a p tag defined. The callback
                     * will see the following methods:
                     * <ol><li><i>handleStartTag(html, ...)</i></li>
                     * <li><i>handleStartTag(head, ...)</i></li>
                     * <li><i>handleEndTag(head)</i></li>
                     * <li><i>handleStartTag(body, ...)</i></li>
                     * <li><i>handleStartTag(p, ...)</i></li>
                     * <li><i>handleText(...)</i></li>
                     * <li><i>handleEndTag(p)</i></li>
                     * <li><i>handleEndTag(body)</i></li>
                     * <li><i>handleEndTag(html)</i></li>
                     * </ol>
                     * The items in <i>italic</i> are implied, that is, although they were not
                     * explicitly specified, to be correct html they should have been present
                     * (head isn't necessary, but it is still generated). For tags that
                     * are implied, the AttributeSet argument will have a value of
                     * <code>Boolean.TRUE</code> for the key
                     * <code>HTMLEditorKit.ParserCallback.IMPLIED</code>.
                     * <p>HTML.Attributes defines a type safe enumeration of html attributes.
                     * If an attribute key of a tag is defined in HTML.Attribute, the
                     * HTML.Attribute will be used as the key, otherwise a String will be used.
                     * For example &lt;p foo=bar class=neat&gt; has two attributes. foo is
                     * not defined in HTML.Attribute, where as class is, therefore the
                     * AttributeSet will have two values in it, HTML.Attribute.CLASS with
                     * a String value of 'neat' and the String key 'foo' with a String value of
                     * 'bar'.
                     * <p>The position argument will indicate the start of the tag, comment
                     * or text. Similar to arrays, the first character in the stream has a
                     * position of 0. For tags that are
                     * implied the position will indicate
                     * the location of the next encountered tag. In the first example,
                     * the implied start body and html tags will have the same position as the
                     * p tag, and the implied end p, html and body tags will all have the same
                     * position.
                     * <p>As html skips whitespace the position for text will be the position
                     * of the first valid character, eg in the string '\n\n\nblah'
                     * the text 'blah' will have a position of 3, the newlines are skipped.
                     * <p>
                     * For attributes that do not have a value, eg in the html
                     * string <code>&lt;foo blah&gt;</code> the attribute <code>blah</code>
                     * does not have a value, there are two possible values that will be
                     * placed in the AttributeSet's value:
                     * <ul>
                     * <li>If the DTD does not contain an definition for the element, or the
                     * definition does not have an explicit value then the value in the
                     * AttributeSet will be <code>HTML.NULL_ATTRIBUTE_VALUE</code>.
                     * <li>If the DTD contains an explicit value, as in:
                     * <code>&lt;!ATTLIST OPTION selected (selected) #IMPLIED&gt;</code>
                     * this value from the dtd (in this case selected) will be used.
                     * </ul>
                     * <p>
                     * Once the stream has been parsed, the callback is notified of the most
                     * likely end of line string. The end of line string will be one of
                     * \n, \r or \r\n, which ever is encountered the most in parsing the
                     * stream.
                     * @author Sunita Mani
                     */
                    // @ts-ignore
                    class DocumentParser extends javax.swing.text.html.parser.Parser {
                        // @ts-ignore
                        constructor(dtd: javax.swing.text.html.parser.DTD)
                        // @ts-ignore
                        public parse(input: java.io.Reader, callback: javax.swing.text.html.HTMLEditorKit.ParserCallback, ignoreCharSet: boolean): void
                        /**
                         * Handle Start Tag.
                         */
                        // @ts-ignore
                        handleStartTag(tag: javax.swing.text.html.parser.TagElement): void
                        // @ts-ignore
                        handleComment(text: string[]): void
                        /**
                         * Handle Empty Tag.
                         */
                        // @ts-ignore
                        handleEmptyTag(tag: javax.swing.text.html.parser.TagElement): void
                        /**
                         * Handle End Tag.
                         */
                        // @ts-ignore
                        handleEndTag(tag: javax.swing.text.html.parser.TagElement): void
                        /**
                         * Handle Text.
                         */
                        // @ts-ignore
                        handleText(data: string[]): void
                        // @ts-ignore
                        handleError(ln: number /*int*/, errorMsg: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
