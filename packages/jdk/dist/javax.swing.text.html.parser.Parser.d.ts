declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    /**
                     * A simple DTD-driven HTML parser. The parser reads an
                     * HTML file from an InputStream and calls various methods
                     * (which should be overridden in a subclass) when tags and
                     * data are encountered.
                     * <p>
                     * Unfortunately there are many badly implemented HTML parsers
                     * out there, and as a result there are many badly formatted
                     * HTML files. This parser attempts to parse most HTML files.
                     * This means that the implementation sometimes deviates from
                     * the SGML specification in favor of HTML.
                     * <p>
                     * The parser treats \r and \r\n as \n. Newlines after starttags
                     * and before end tags are ignored just as specified in the SGML/HTML
                     * specification.
                     * <p>
                     * The html spec does not specify how spaces are to be coalesced very well.
                     * Specifically, the following scenarios are not discussed (note that a
                     * space should be used here, but I am using &amp;nbsp to force the space to
                     * be displayed):
                     * <p>
                     * '&lt;b&gt;blah&nbsp;&lt;i&gt;&nbsp;&lt;strike&gt;&nbsp;foo' which can be treated as:
                     * '&lt;b&gt;blah&nbsp;&lt;i&gt;&lt;strike&gt;foo'
                     * <p>as well as:
                     * '&lt;p&gt;&lt;a href="xx"&gt;&nbsp;&lt;em&gt;Using&lt;/em&gt;&lt;/a&gt;&lt;/p&gt;'
                     * which appears to be treated as:
                     * '&lt;p&gt;&lt;a href="xx"&gt;&lt;em&gt;Using&lt;/em&gt;&lt;/a&gt;&lt;/p&gt;'
                     * <p>
                     * If <code>strict</code> is false, when a tag that breaks flow,
                     * (<code>TagElement.breaksFlows</code>) or trailing whitespace is
                     * encountered, all whitespace will be ignored until a non whitespace
                     * character is encountered. This appears to give behavior closer to
                     * the popular browsers.
                     * @see DTD
                     * @see TagElement
                     * @see SimpleAttributeSet
                     * @author Arthur van Hoff
                     * @author Sunita Mani
                     */
                    // @ts-ignore
                    class Parser extends java.lang.Object implements javax.swing.text.html.parser.DTDConstants {
                        // @ts-ignore
                        constructor(dtd: javax.swing.text.html.parser.DTD)
                        // @ts-ignore
                        dtd: javax.swing.text.html.parser.DTD
                        /**
                         * This flag determines whether or not the Parser will be strict
                         * in enforcing SGML compatibility.  If false, it will be lenient
                         * with certain common classes of erroneous HTML constructs.
                         * Strict or not, in either case an error will be recorded.
                         */
                        // @ts-ignore
                        strict: boolean
                        /**
                         * @return the line number of the line currently being parsed
                         */
                        // @ts-ignore
                        getCurrentLine(): number /*int*/
                        /**
                         * Makes a TagElement.
                         */
                        // @ts-ignore
                        makeTag(elem: javax.swing.text.html.parser.Element, fictional: boolean): javax.swing.text.html.parser.TagElement
                        // @ts-ignore
                        makeTag(elem: javax.swing.text.html.parser.Element): javax.swing.text.html.parser.TagElement
                        // @ts-ignore
                        getAttributes(): javax.swing.text.SimpleAttributeSet
                        // @ts-ignore
                        flushAttributes(): void
                        /**
                         * Called when PCDATA is encountered.
                         */
                        // @ts-ignore
                        handleText(text: string[]): void
                        /**
                         * Called when an HTML title tag is encountered.
                         */
                        // @ts-ignore
                        handleTitle(text: string[]): void
                        /**
                         * Called when an HTML comment is encountered.
                         */
                        // @ts-ignore
                        handleComment(text: string[]): void
                        // @ts-ignore
                        handleEOFInComment(): void
                        /**
                         * Called when an empty tag is encountered.
                         */
                        // @ts-ignore
                        handleEmptyTag(tag: javax.swing.text.html.parser.TagElement): void
                        /**
                         * Called when a start tag is encountered.
                         */
                        // @ts-ignore
                        handleStartTag(tag: javax.swing.text.html.parser.TagElement): void
                        /**
                         * Called when an end tag is encountered.
                         */
                        // @ts-ignore
                        handleEndTag(tag: javax.swing.text.html.parser.TagElement): void
                        /**
                         * An error has occurred.
                         */
                        // @ts-ignore
                        handleError(ln: number /*int*/, msg: java.lang.String | string): void
                        /**
                         * Invoke the error handler.
                         */
                        // @ts-ignore
                        error(err: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                        // @ts-ignore
                        error(err: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        // @ts-ignore
                        error(err: java.lang.String | string, arg1: java.lang.String | string): void
                        // @ts-ignore
                        error(err: java.lang.String | string): void
                        /**
                         * Handle a start tag. The new tag is pushed
                         * onto the tag stack. The attribute list is
                         * checked for required attributes.
                         */
                        // @ts-ignore
                        startTag(tag: javax.swing.text.html.parser.TagElement): void
                        /**
                         * Handle an end tag. The end tag is popped
                         * from the tag stack.
                         */
                        // @ts-ignore
                        endTag(omitted: boolean): void
                        /**
                         * Marks the first time a tag has been seen in a document
                         */
                        // @ts-ignore
                        markFirstTime(elem: javax.swing.text.html.parser.Element): void
                        /**
                         * Parses th Document Declaration Type markup declaration.
                         * Currently ignores it.
                         */
                        // @ts-ignore
                        public parseDTDMarkup(): string
                        /**
                         * Parse markup declarations.
                         * Currently only handles the Document Type Declaration markup.
                         * Returns true if it is a markup declaration false otherwise.
                         */
                        // @ts-ignore
                        parseMarkupDeclarations(strBuff: java.lang.StringBuffer): boolean
                        /**
                         * Parse an HTML stream, given a DTD.
                         */
                        // @ts-ignore
                        public parse(input: java.io.Reader): void
                        // @ts-ignore
                        getCurrentPos(): number /*int*/
                    }
                }
            }
        }
    }
}
