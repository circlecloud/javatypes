declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * Interface for a generic styled document.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            interface StyledDocument extends javax.swing.text.Document {
                /**
                 * Adds a new style into the logical style hierarchy.  Style attributes
                 * resolve from bottom up so an attribute specified in a child
                 * will override an attribute specified in the parent.
                 * @param nm   the name of the style (must be unique within the
                 *    collection of named styles).  The name may be null if the style
                 *    is unnamed, but the caller is responsible
                 *    for managing the reference returned as an unnamed style can't
                 *    be fetched by name.  An unnamed style may be useful for things
                 *    like character attribute overrides such as found in a style
                 *    run.
                 * @param parent the parent style.  This may be null if unspecified
                 *    attributes need not be resolved in some other style.
                 * @return the style
                 */
                // @ts-ignore
                addStyle(nm: string, parent: javax.swing.text.Style): javax.swing.text.Style
                /**
                 * Removes a named style previously added to the document.
                 * @param nm  the name of the style to remove
                 */
                // @ts-ignore
                removeStyle(nm: string): void
                /**
                 * Fetches a named style previously added.
                 * @param nm  the name of the style
                 * @return the style
                 */
                // @ts-ignore
                getStyle(nm: string): javax.swing.text.Style
                /**
                 * Changes the content element attributes used for the given range of
                 * existing content in the document.  All of the attributes
                 * defined in the given Attributes argument are applied to the
                 * given range.  This method can be used to completely remove
                 * all content level attributes for the given range by
                 * giving an Attributes argument that has no attributes defined
                 * and setting replace to true.
                 * @param offset the start of the change &gt;= 0
                 * @param length the length of the change &gt;= 0
                 * @param s    the non-null attributes to change to.  Any attributes
                 *   defined will be applied to the text for the given range.
                 * @param replace indicates whether or not the previous
                 *   attributes should be cleared before the new attributes
                 *   as set.  If true, the operation will replace the
                 *   previous attributes entirely.  If false, the new
                 *   attributes will be merged with the previous attributes.
                 */
                // @ts-ignore
                setCharacterAttributes(offset: number /*int*/, length: number /*int*/, s: javax.swing.text.AttributeSet, replace: boolean): void
                /**
                 * Sets paragraph attributes.
                 * @param offset the start of the change &gt;= 0
                 * @param length the length of the change &gt;= 0
                 * @param s    the non-null attributes to change to.  Any attributes
                 *   defined will be applied to the text for the given range.
                 * @param replace indicates whether or not the previous
                 *   attributes should be cleared before the new attributes
                 *   are set.  If true, the operation will replace the
                 *   previous attributes entirely.  If false, the new
                 *   attributes will be merged with the previous attributes.
                 */
                // @ts-ignore
                setParagraphAttributes(offset: number /*int*/, length: number /*int*/, s: javax.swing.text.AttributeSet, replace: boolean): void
                /**
                 * Sets the logical style to use for the paragraph at the
                 * given position.  If attributes aren't explicitly set
                 * for character and paragraph attributes they will resolve
                 * through the logical style assigned to the paragraph, which
                 * in turn may resolve through some hierarchy completely
                 * independent of the element hierarchy in the document.
                 * @param pos the starting position &gt;= 0
                 * @param s the style to set
                 */
                // @ts-ignore
                setLogicalStyle(pos: number /*int*/, s: javax.swing.text.Style): void
                /**
                 * Gets a logical style for a given position in a paragraph.
                 * @param p the position &gt;= 0
                 * @return the style
                 */
                // @ts-ignore
                getLogicalStyle(p: number /*int*/): javax.swing.text.Style
                /**
                 * Gets the element that represents the paragraph that
                 * encloses the given offset within the document.
                 * @param pos the offset &gt;= 0
                 * @return the element
                 */
                // @ts-ignore
                getParagraphElement(pos: number /*int*/): javax.swing.text.Element
                /**
                 * Gets the element that represents the character that
                 * is at the given offset within the document.
                 * @param pos the offset &gt;= 0
                 * @return the element
                 */
                // @ts-ignore
                getCharacterElement(pos: number /*int*/): javax.swing.text.Element
                /**
                 * Takes a set of attributes and turn it into a foreground color
                 * specification.  This might be used to specify things
                 * like brighter, more hue, etc.
                 * @param attr the set of attributes
                 * @return the color
                 */
                // @ts-ignore
                getForeground(attr: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Takes a set of attributes and turn it into a background color
                 * specification.  This might be used to specify things
                 * like brighter, more hue, etc.
                 * @param attr the set of attributes
                 * @return the color
                 */
                // @ts-ignore
                getBackground(attr: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Takes a set of attributes and turn it into a font
                 * specification.  This can be used to turn things like
                 * family, style, size, etc into a font that is available
                 * on the system the document is currently being used on.
                 * @param attr the set of attributes
                 * @return the font
                 */
                // @ts-ignore
                getFont(attr: javax.swing.text.AttributeSet): java.awt.Font
            }
        }
    }
}
