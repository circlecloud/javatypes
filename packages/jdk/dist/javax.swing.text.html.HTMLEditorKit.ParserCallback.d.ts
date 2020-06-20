declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLEditorKit {
                    /**
                     * The result of parsing drives these callback methods.
                     * The open and close actions should be balanced.  The
                     * <code>flush</code> method will be the last method
                     * called, to give the receiver a chance to flush any
                     * pending data into the document.
                     * <p>Refer to DocumentParser, the default parser used, for further
                     * information on the contents of the AttributeSets, the positions, and
                     * other info.
                     * @see javax.swing.text.html.parser.DocumentParser
                     */
                    // @ts-ignore
                    class ParserCallback extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * This is passed as an attribute in the attributeset to indicate
                         * the element is implied eg, the string '&lt;&gt;foo&lt;\t&gt;'
                         * contains an implied html element and an implied body element.
                         * @since 1.3
                         */
                        // @ts-ignore
                        readonly IMPLIED: any
                        // @ts-ignore
                        flush(): void
                        // @ts-ignore
                        handleText(data: string[], pos: number /*int*/): void
                        // @ts-ignore
                        handleComment(data: string[], pos: number /*int*/): void
                        // @ts-ignore
                        handleStartTag(t: javax.swing.text.html.HTML.Tag, a: javax.swing.text.MutableAttributeSet, pos: number /*int*/): void
                        // @ts-ignore
                        handleEndTag(t: javax.swing.text.html.HTML.Tag, pos: number /*int*/): void
                        // @ts-ignore
                        handleSimpleTag(t: javax.swing.text.html.HTML.Tag, a: javax.swing.text.MutableAttributeSet, pos: number /*int*/): void
                        // @ts-ignore
                        handleError(errorMsg: string, pos: number /*int*/): void
                        /**
                         * This is invoked after the stream has been parsed, but before
                         * <code>flush</code>. <code>eol</code> will be one of \n, \r
                         * or \r\n, which ever is encountered the most in parsing the
                         * stream.
                         * @since 1.3
                         */
                        // @ts-ignore
                        handleEndOfLineString(eol: string): void
                    }
                }
            }
        }
    }
}
