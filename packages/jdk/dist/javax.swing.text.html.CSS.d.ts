declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * Defines a set of
                 * <a href="http://www.w3.org/TR/REC-CSS1">CSS attributes</a>
                 * as a typesafe enumeration.  The HTML View implementations use
                 * CSS attributes to determine how they will render. This also defines
                 * methods to map between CSS/HTML/StyleConstants. Any shorthand
                 * properties, such as font, are mapped to the intrinsic properties.
                 * <p>The following describes the CSS properties that are supported by the
                 * rendering engine:
                 * <ul><li>font-family
                 * <li>font-style
                 * <li>font-size (supports relative units)
                 * <li>font-weight
                 * <li>font
                 * <li>color
                 * <li>background-color (with the exception of transparent)
                 * <li>background-image
                 * <li>background-repeat
                 * <li>background-position
                 * <li>background
                 * <li>text-decoration (with the exception of blink and overline)
                 * <li>vertical-align (only sup and super)
                 * <li>text-align (justify is treated as center)
                 * <li>margin-top
                 * <li>margin-right
                 * <li>margin-bottom
                 * <li>margin-left
                 * <li>margin
                 * <li>padding-top
                 * <li>padding-right
                 * <li>padding-bottom
                 * <li>padding-left
                 * <li>padding
                 * <li>border-top-style
                 * <li>border-right-style
                 * <li>border-bottom-style
                 * <li>border-left-style
                 * <li>border-style (only supports inset, outset and none)
                 * <li>border-top-color
                 * <li>border-right-color
                 * <li>border-bottom-color
                 * <li>border-left-color
                 * <li>border-color
                 * <li>list-style-image
                 * <li>list-style-type
                 * <li>list-style-position
                 * </ul>
                 * The following are modeled, but currently not rendered.
                 * <ul><li>font-variant
                 * <li>background-attachment (background always treated as scroll)
                 * <li>word-spacing
                 * <li>letter-spacing
                 * <li>text-indent
                 * <li>text-transform
                 * <li>line-height
                 * <li>border-top-width (this is used to indicate if a border should be used)
                 * <li>border-right-width
                 * <li>border-bottom-width
                 * <li>border-left-width
                 * <li>border-width
                 * <li>border-top
                 * <li>border-right
                 * <li>border-bottom
                 * <li>border-left
                 * <li>border
                 * <li>width
                 * <li>height
                 * <li>float
                 * <li>clear
                 * <li>display
                 * <li>white-space
                 * <li>list-style
                 * </ul>
                 * <p><b>Note: for the time being we do not fully support relative units,
                 * unless noted, so that
                 * p { margin-top: 10% } will be treated as if no margin-top was specified.</b>
                 * @author Timothy Prinzing
                 * @author Scott Violet
                 * @see StyleSheet
                 */
                // @ts-ignore
                class CSS extends java.lang.Object implements java.io.Serializable {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the set of all possible CSS attribute keys.
                     */
                    // @ts-ignore
                    getAllAttributeKeys(): javax.swing.text.html.CSS.Attribute[]
                    /**
                     * Translates a string to a <code>CSS.Attribute</code> object.
                     * This will return <code>null</code> if there is no attribute
                     * by the given name.
                     * @param name the name of the CSS attribute to fetch the
                     *   typesafe enumeration for
                     * @return the <code>CSS.Attribute</code> object,
                     *   or <code>null</code> if the string
                     *   doesn't represent a valid attribute key
                     */
                    // @ts-ignore
                    getAttribute(name: string): javax.swing.text.html.CSS.Attribute
                }
            }
        }
    }
}
