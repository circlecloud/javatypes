declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTML {
                    /**
                     * Typesafe enumeration for an HTML tag.  Although the
                     * set of HTML tags is a closed set, we have left the
                     * set open so that people can add their own tag types
                     * to their custom parser and still communicate to the
                     * reader.
                     */
                    // @ts-ignore
                    class Tag extends java.lang.Object {
                        /**
                         * @since 1.3
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new <code>Tag</code> with the specified <code>id</code>,
                         * and with <code>causesBreak</code> and <code>isBlock</code>
                         * set to <code>false</code>.
                         * @param id  the id of the new tag
                         */
                        // @ts-ignore
                        constructor(id: string)
                        /**
                         * Creates a new <code>Tag</code> with the specified <code>id</code>;
                         * <code>causesBreak</code> and <code>isBlock</code> are defined
                         * by the user.
                         * @param id the id of the new tag
                         * @param causesBreak  <code>true</code> if this tag
                         *     causes a break to the flow of data
                         * @param isBlock <code>true</code> if the tag is used
                         *     to add structure to a document
                         */
                        // @ts-ignore
                        constructor(id: string, causesBreak: boolean, isBlock: boolean)
                        // @ts-ignore
                        readonly A: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly ADDRESS: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly APPLET: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly AREA: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly B: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly BASE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly BASEFONT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly BIG: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly BLOCKQUOTE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly BODY: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly BR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly CAPTION: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly CENTER: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly CITE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly CODE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly DD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly DFN: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly DIR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly DIV: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly DL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly DT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly EM: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly FONT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly FORM: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly FRAME: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly FRAMESET: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly H1: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly H2: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly H3: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly H4: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly H5: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly H6: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly HEAD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly HR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly HTML: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly I: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly IMG: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly INPUT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly ISINDEX: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly KBD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly LI: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly LINK: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly MAP: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly MENU: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly META: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly NOFRAMES: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly OBJECT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly OL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly OPTION: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly P: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly PARAM: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly PRE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly SAMP: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly SCRIPT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly SELECT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly SMALL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly SPAN: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly STRIKE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly S: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly STRONG: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly STYLE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly SUB: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly SUP: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly TABLE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly TD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly TEXTAREA: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly TH: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly TITLE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly TR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly TT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly U: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly UL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        readonly VAR: javax.swing.text.html.HTML.Tag
                        /**
                         * All text content must be in a paragraph element.
                         * If a paragraph didn't exist when content was
                         * encountered, a paragraph is manufactured.
                         * <p>
                         * This is a tag synthesized by the HTML reader.
                         * Since elements are identified by their tag type,
                         * we create a some fake tag types to mark the elements
                         * that were manufactured.
                         */
                        // @ts-ignore
                        readonly IMPLIED: javax.swing.text.html.HTML.Tag
                        /**
                         * All text content is labeled with this tag.
                         * <p>
                         * This is a tag synthesized by the HTML reader.
                         * Since elements are identified by their tag type,
                         * we create a some fake tag types to mark the elements
                         * that were manufactured.
                         */
                        // @ts-ignore
                        readonly CONTENT: javax.swing.text.html.HTML.Tag
                        /**
                         * All comments are labeled with this tag.
                         * <p>
                         * This is a tag synthesized by the HTML reader.
                         * Since elements are identified by their tag type,
                         * we create a some fake tag types to mark the elements
                         * that were manufactured.
                         */
                        // @ts-ignore
                        readonly COMMENT: javax.swing.text.html.HTML.Tag
                        /**
                         * Returns <code>true</code> if this tag is a block
                         * tag, which is a tag used to add structure to a
                         * document.
                         * @return <code>true</code> if this tag is a block
                         *    tag, otherwise returns <code>false</code>
                         */
                        // @ts-ignore
                        isBlock(): boolean
                        /**
                         * Returns <code>true</code> if this tag causes a
                         * line break to the flow of data, otherwise returns
                         * <code>false</code>.
                         * @return <code>true</code> if this tag causes a
                         *    line break to the flow of data, otherwise returns
                         *    <code>false</code>
                         */
                        // @ts-ignore
                        breaksFlow(): boolean
                        /**
                         * Returns <code>true</code> if this tag is pre-formatted,
                         * which is true if the tag is either <code>PRE</code> or
                         * <code>TEXTAREA</code>.
                         * @return <code>true</code> if this tag is pre-formatted,
                         *    otherwise returns <code>false</code>
                         */
                        // @ts-ignore
                        isPreformatted(): boolean
                        /**
                         * Returns the string representation of the
                         * tag.
                         * @return the <code>String</code> representation of the tag
                         */
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
