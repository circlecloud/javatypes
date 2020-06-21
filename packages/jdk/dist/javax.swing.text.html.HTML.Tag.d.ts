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
                        constructor(id: java.lang.String | string)
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
                        constructor(id: java.lang.String | string, causesBreak: boolean, isBlock: boolean)
                        // @ts-ignore
                        public static readonly A: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly ADDRESS: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly APPLET: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly AREA: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly B: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly BASE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly BASEFONT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly BIG: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly BLOCKQUOTE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly BODY: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly BR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly CAPTION: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly CENTER: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly CITE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly CODE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly DD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly DFN: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly DIR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly DIV: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly DL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly DT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly EM: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly FONT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly FORM: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly FRAME: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly FRAMESET: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly H1: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly H2: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly H3: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly H4: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly H5: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly H6: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly HEAD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly HR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly HTML: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly I: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly IMG: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly INPUT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly ISINDEX: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly KBD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly LI: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly LINK: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly MAP: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly MENU: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly META: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly NOFRAMES: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly OBJECT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly OL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly OPTION: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly P: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly PARAM: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly PRE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly SAMP: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly SCRIPT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly SELECT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly SMALL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly SPAN: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly STRIKE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly S: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly STRONG: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly STYLE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly SUB: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly SUP: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly TABLE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly TD: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly TEXTAREA: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly TH: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly TITLE: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly TR: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly TT: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly U: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly UL: javax.swing.text.html.HTML.Tag
                        // @ts-ignore
                        public static readonly VAR: javax.swing.text.html.HTML.Tag
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
                        public static readonly IMPLIED: javax.swing.text.html.HTML.Tag
                        /**
                         * All text content is labeled with this tag.
                         * <p>
                         * This is a tag synthesized by the HTML reader.
                         * Since elements are identified by their tag type,
                         * we create a some fake tag types to mark the elements
                         * that were manufactured.
                         */
                        // @ts-ignore
                        public static readonly CONTENT: javax.swing.text.html.HTML.Tag
                        /**
                         * All comments are labeled with this tag.
                         * <p>
                         * This is a tag synthesized by the HTML reader.
                         * Since elements are identified by their tag type,
                         * we create a some fake tag types to mark the elements
                         * that were manufactured.
                         */
                        // @ts-ignore
                        public static readonly COMMENT: javax.swing.text.html.HTML.Tag
                        /**
                         * Returns <code>true</code> if this tag is a block
                         * tag, which is a tag used to add structure to a
                         * document.
                         * @return <code>true</code> if this tag is a block
                         *    tag, otherwise returns <code>false</code>
                         */
                        // @ts-ignore
                        public isBlock(): boolean
                        /**
                         * Returns <code>true</code> if this tag causes a
                         * line break to the flow of data, otherwise returns
                         * <code>false</code>.
                         * @return <code>true</code> if this tag causes a
                         *    line break to the flow of data, otherwise returns
                         *    <code>false</code>
                         */
                        // @ts-ignore
                        public breaksFlow(): boolean
                        /**
                         * Returns <code>true</code> if this tag is pre-formatted,
                         * which is true if the tag is either <code>PRE</code> or
                         * <code>TEXTAREA</code>.
                         * @return <code>true</code> if this tag is pre-formatted,
                         *    otherwise returns <code>false</code>
                         */
                        // @ts-ignore
                        public isPreformatted(): boolean
                        /**
                         * Returns the string representation of the
                         * tag.
                         * @return the <code>String</code> representation of the tag
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
