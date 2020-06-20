declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace CSS {
                    /**
                     * Definitions to be used as a key on AttributeSet's
                     * that might hold CSS attributes.  Since this is a
                     * closed set (i.e. defined exactly by the specification),
                     * it is final and cannot be extended.
                     */
                    // @ts-ignore
                    class Attribute extends java.lang.Object {
                        // @ts-ignore
                        readonly BACKGROUND: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BACKGROUND_ATTACHMENT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BACKGROUND_COLOR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BACKGROUND_IMAGE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BACKGROUND_POSITION: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BACKGROUND_REPEAT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_BOTTOM: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_BOTTOM_COLOR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_BOTTOM_STYLE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_BOTTOM_WIDTH: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_COLOR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_LEFT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_LEFT_COLOR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_LEFT_STYLE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_LEFT_WIDTH: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_RIGHT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_RIGHT_COLOR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_RIGHT_STYLE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_RIGHT_WIDTH: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_STYLE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_TOP: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_TOP_COLOR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_TOP_STYLE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_TOP_WIDTH: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly BORDER_WIDTH: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly CLEAR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly COLOR: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly DISPLAY: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly FLOAT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly FONT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly FONT_FAMILY: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly FONT_SIZE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly FONT_STYLE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly FONT_VARIANT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly FONT_WEIGHT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly HEIGHT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly LETTER_SPACING: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly LINE_HEIGHT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly LIST_STYLE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly LIST_STYLE_IMAGE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly LIST_STYLE_POSITION: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly LIST_STYLE_TYPE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly MARGIN: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly MARGIN_BOTTOM: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly MARGIN_LEFT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly MARGIN_RIGHT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly MARGIN_TOP: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly PADDING: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly PADDING_BOTTOM: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly PADDING_LEFT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly PADDING_RIGHT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly PADDING_TOP: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly TEXT_ALIGN: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly TEXT_DECORATION: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly TEXT_INDENT: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly TEXT_TRANSFORM: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly VERTICAL_ALIGN: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly WORD_SPACING: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly WHITE_SPACE: javax.swing.text.html.CSS.Attribute
                        // @ts-ignore
                        readonly WIDTH: javax.swing.text.html.CSS.Attribute
                        /**
                         * The string representation of the attribute.  This
                         * should exactly match the string specified in the
                         * CSS specification.
                         */
                        // @ts-ignore
                        toString(): java.lang.String
                        /**
                         * Fetch the default value for the attribute.
                         * If there is no default value (such as for
                         * composite attributes), null will be returned.
                         */
                        // @ts-ignore
                        getDefaultValue(): java.lang.String
                        /**
                         * Indicates if the attribute should be inherited
                         * from the parent or not.
                         */
                        // @ts-ignore
                        isInherited(): boolean
                    }
                }
            }
        }
    }
}
