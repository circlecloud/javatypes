declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Support for providing html views for the swing components.
                 * This translates a simple html string to a javax.swing.text.View
                 * implementation that can render the html and provide the necessary
                 * layout semantics.
                 * @author Timothy Prinzing
                 * @since 1.3
                 */
                // @ts-ignore
                class BasicHTML extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Key to use for the html renderer when stored as a
                     * client property of a JComponent.
                     */
                    // @ts-ignore
                    public static readonly propertyKey: java.lang.String | string
                    /**
                     * Key stored as a client property to indicate the base that relative
                     * references are resolved against. For example, lets say you keep
                     * your images in the directory resources relative to the code path,
                     * you would use the following the set the base:
                     * <pre>
                     * jComponent.putClientProperty(documentBaseKey,
                     * xxx.class.getResource("resources/"));
                     * </pre>
                     */
                    // @ts-ignore
                    public static readonly documentBaseKey: java.lang.String | string
                    /**
                     * Create an html renderer for the given component and
                     * string of html.
                     */
                    // @ts-ignore
                    public static createHTMLView(c: javax.swing.JComponent, html: java.lang.String | string): javax.swing.text.View
                    /**
                     * Returns the baseline for the html renderer.
                     * @param view the View to get the baseline for
                     * @param w the width to get the baseline for
                     * @param h the height to get the baseline for
                     * @throws IllegalArgumentException if width or height is &lt; 0
                     * @return baseline or a value &lt; 0 indicating there is no reasonable
                     *                   baseline
                     * @see java.awt.FontMetrics
                     * @see javax.swing.JComponent#getBaseline(int,int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public static getHTMLBaseline(view: javax.swing.text.View, w: number /*int*/, h: number /*int*/): number /*int*/
                    /**
                     * Check the given string to see if it should trigger the
                     * html rendering logic in a non-text component that supports
                     * html rendering.
                     */
                    // @ts-ignore
                    public static isHTMLString(s: java.lang.String | string): boolean
                    /**
                     * Stash the HTML render for the given text into the client
                     * properties of the given JComponent. If the given text is
                     * <em>NOT HTML</em> the property will be cleared of any
                     * renderer.
                     * <p>
                     * This method is useful for ComponentUI implementations
                     * that are static (i.e. shared) and get their state
                     * entirely from the JComponent.
                     */
                    // @ts-ignore
                    public static updateRenderer(c: javax.swing.JComponent, text: java.lang.String | string): void
                }
            }
        }
    }
}
