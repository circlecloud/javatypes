declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * Constants used in the <code>HTMLDocument</code>.  These
                 * are basically tag and attribute definitions.
                 * @author Timothy Prinzing
                 * @author Sunita Mani
                 */
                // @ts-ignore
                class HTML extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly NULL_ATTRIBUTE_VALUE: string
                    /**
                     * Returns the set of actual HTML tags that
                     * are recognized by the default HTML reader.
                     * This set does not include tags that are
                     * manufactured by the reader.
                     */
                    // @ts-ignore
                    getAllTags(): javax.swing.text.html.HTML.Tag[]
                    /**
                     * Fetches a tag constant for a well-known tag name (i.e. one of
                     * the tags in the set {A, ADDRESS, APPLET, AREA, B,
                     * BASE, BASEFONT, BIG,
                     * BLOCKQUOTE, BODY, BR, CAPTION, CENTER, CITE, CODE,
                     * DD, DFN, DIR, DIV, DL, DT, EM, FONT, FORM, FRAME,
                     * FRAMESET, H1, H2, H3, H4, H5, H6, HEAD, HR, HTML,
                     * I, IMG, INPUT, ISINDEX, KBD, LI, LINK, MAP, MENU,
                     * META, NOBR, NOFRAMES, OBJECT, OL, OPTION, P, PARAM,
                     * PRE, SAMP, SCRIPT, SELECT, SMALL, SPAN, STRIKE, S,
                     * STRONG, STYLE, SUB, SUP, TABLE, TD, TEXTAREA,
                     * TH, TITLE, TR, TT, U, UL, VAR}.  If the given
                     * name does not represent one of the well-known tags, then
                     * <code>null</code> will be returned.
                     * @param tagName the <code>String</code> name requested
                     * @return a tag constant corresponding to the <code>tagName</code>,
                     *     or <code>null</code> if not found
                     */
                    // @ts-ignore
                    getTag(tagName: string): javax.swing.text.html.HTML.Tag
                    /**
                     * Fetches an integer attribute value.  Attribute values
                     * are stored as a string, and this is a convenience method
                     * to convert to an actual integer.
                     * @param attr the set of attributes to use to try to fetch a value
                     * @param key the key to use to fetch the value
                     * @param def the default value to use if the attribute isn't
                     *   defined or there is an error converting to an integer
                     */
                    // @ts-ignore
                    getIntegerAttributeValue(attr: javax.swing.text.AttributeSet, key: javax.swing.text.html.HTML.Attribute, def: number /*int*/): int
                    /**
                     * Returns the set of HTML attributes recognized.
                     * @return the set of HTML attributes recognized
                     */
                    // @ts-ignore
                    getAllAttributeKeys(): javax.swing.text.html.HTML.Attribute[]
                    /**
                     * Fetches an attribute constant for a well-known attribute name
                     * (i.e. one of the attributes in the set {FACE, COMMENT, SIZE,
                     * COLOR, CLEAR, BACKGROUND, BGCOLOR, TEXT, LINK, VLINK, ALINK,
                     * WIDTH, HEIGHT, ALIGN, NAME, HREF, REL, REV, TITLE, TARGET,
                     * SHAPE, COORDS, ISMAP, NOHREF, ALT, ID, SRC, HSPACE, VSPACE,
                     * USEMAP, LOWSRC, CODEBASE, CODE, ARCHIVE, VALUE, VALUETYPE,
                     * TYPE, CLASS, STYLE, LANG, DIR, DECLARE, CLASSID, DATA, CODETYPE,
                     * STANDBY, BORDER, SHAPES, NOSHADE, COMPACT, START, ACTION, METHOD,
                     * ENCTYPE, CHECKED, MAXLENGTH, MULTIPLE, SELECTED, ROWS, COLS,
                     * DUMMY, CELLSPACING, CELLPADDING, VALIGN, HALIGN, NOWRAP, ROWSPAN,
                     * COLSPAN, PROMPT, HTTPEQUIV, CONTENT, LANGUAGE, VERSION, N,
                     * FRAMEBORDER, MARGINWIDTH, MARGINHEIGHT, SCROLLING, NORESIZE,
                     * MEDIA, ENDTAG}).
                     * If the given name does not represent one of the well-known attributes,
                     * then <code>null</code> will be returned.
                     * @param attName the <code>String</code> requested
                     * @return the <code>Attribute</code> corresponding to <code>attName</code>
                     */
                    // @ts-ignore
                    getAttributeKey(attName: string): javax.swing.text.html.HTML.Attribute
                }
            }
        }
    }
}
