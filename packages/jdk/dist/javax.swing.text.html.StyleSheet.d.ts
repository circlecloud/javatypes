declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                /**
                 * Support for defining the visual characteristics of
                 * HTML views being rendered.  The StyleSheet is used to
                 * translate the HTML model into visual characteristics.
                 * This enables views to be customized by a look-and-feel,
                 * multiple views over the same model can be rendered
                 * differently, etc.  This can be thought of as a CSS
                 * rule repository.  The key for CSS attributes is an
                 * object of type CSS.Attribute.  The type of the value
                 * is up to the StyleSheet implementation, but the
                 * <code>toString</code> method is required
                 * to return a string representation of CSS value.
                 * <p>
                 * The primary entry point for HTML View implementations
                 * to get their attributes is the
                 * {@link #getViewAttributes getViewAttributes}
                 * method.  This should be implemented to establish the
                 * desired policy used to associate attributes with the view.
                 * Each HTMLEditorKit (i.e. and therefore each associated
                 * JEditorPane) can have its own StyleSheet, but by default one
                 * sheet will be shared by all of the HTMLEditorKit instances.
                 * HTMLDocument instance can also have a StyleSheet, which
                 * holds the document-specific CSS specifications.
                 * <p>
                 * In order for Views to store less state and therefore be
                 * more lightweight, the StyleSheet can act as a factory for
                 * painters that handle some of the rendering tasks.  This allows
                 * implementations to determine what they want to cache
                 * and have the sharing potentially at the level that a
                 * selector is common to multiple views.  Since the StyleSheet
                 * may be used by views over multiple documents and typically
                 * the HTML attributes don't effect the selector being used,
                 * the potential for sharing is significant.
                 * <p>
                 * The rules are stored as named styles, and other information
                 * is stored to translate the context of an element to a
                 * rule quickly.  The following code fragment will display
                 * the named styles, and therefore the CSS rules contained.
                 * <pre><code>
                 * &nbsp;
                 * &nbsp; import java.util.*;
                 * &nbsp; import javax.swing.text.*;
                 * &nbsp; import javax.swing.text.html.*;
                 * &nbsp;
                 * &nbsp; public class ShowStyles {
                 * &nbsp;
                 * &nbsp;     public static void main(String[] args) {
                 * &nbsp;       HTMLEditorKit kit = new HTMLEditorKit();
                 * &nbsp;       HTMLDocument doc = (HTMLDocument) kit.createDefaultDocument();
                 * &nbsp;       StyleSheet styles = doc.getStyleSheet();
                 * &nbsp;
                 * &nbsp;       Enumeration rules = styles.getStyleNames();
                 * &nbsp;       while (rules.hasMoreElements()) {
                 * &nbsp;           String name = (String) rules.nextElement();
                 * &nbsp;           Style rule = styles.getStyle(name);
                 * &nbsp;           System.out.println(rule.toString());
                 * &nbsp;       }
                 * &nbsp;       System.exit(0);
                 * &nbsp;     }
                 * &nbsp; }
                 * &nbsp;
                 * </code></pre>
                 * <p>
                 * The semantics for when a CSS style should overide visual attributes
                 * defined by an element are not well defined. For example, the html
                 * <code>&lt;body bgcolor=red&gt;</code> makes the body have a red
                 * background. But if the html file also contains the CSS rule
                 * <code>body { background: blue }</code> it becomes less clear as to
                 * what color the background of the body should be. The current
                 * implementation gives visual attributes defined in the element the
                 * highest precedence, that is they are always checked before any styles.
                 * Therefore, in the previous example the background would have a
                 * red color as the body element defines the background color to be red.
                 * <p>
                 * As already mentioned this supports CSS. We don't support the full CSS
                 * spec. Refer to the javadoc of the CSS class to see what properties
                 * we support. The two major CSS parsing related
                 * concepts we do not currently
                 * support are pseudo selectors, such as <code>A:link { color: red }</code>,
                 * and the <code>important</code> modifier.
                 * <p>
                 * <font color="red">Note: This implementation is currently
                 * incomplete.  It can be replaced with alternative implementations
                 * that are complete.  Future versions of this class will provide
                 * better CSS support.</font>
                 * @author Timothy Prinzing
                 * @author Sunita Mani
                 * @author Sara Swanson
                 * @author Jill Nakata
                 */
                // @ts-ignore
                class StyleSheet extends javax.swing.text.StyleContext {
                    /**
                     * Construct a StyleSheet
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Fetches the style to use to render the given type
                     * of HTML tag.  The element given is representing
                     * the tag and can be used to determine the nesting
                     * for situations where the attributes will differ
                     * if nesting inside of elements.
                     * @param t the type to translate to visual attributes
                     * @param e the element representing the tag; the element
                     *   can be used to determine the nesting for situations where
                     *   the attributes will differ if nested inside of other
                     *   elements
                     * @return the set of CSS attributes to use to render
                     *   the tag
                     */
                    // @ts-ignore
                    getRule(t: javax.swing.text.html.HTML.Tag, e: javax.swing.text.Element): javax.swing.text.Style
                    /**
                     * Fetches the rule that best matches the selector given
                     * in string form. Where <code>selector</code> is a space separated
                     * String of the element names. For example, <code>selector</code>
                     * might be 'html body tr td''<p>
                     * The attributes of the returned Style will change
                     * as rules are added and removed. That is if you to ask for a rule
                     * with a selector "table p" and a new rule was added with a selector
                     * of "p" the returned Style would include the new attributes from
                     * the rule "p".
                     */
                    // @ts-ignore
                    getRule(selector: string): javax.swing.text.Style
                    /**
                     * Adds a set of rules to the sheet.  The rules are expected to
                     * be in valid CSS format.  Typically this would be called as
                     * a result of parsing a &lt;style&gt; tag.
                     */
                    // @ts-ignore
                    addRule(rule: string): void
                    /**
                     * Translates a CSS declaration to an AttributeSet that represents
                     * the CSS declaration.  Typically this would be called as a
                     * result of encountering an HTML style attribute.
                     */
                    // @ts-ignore
                    getDeclaration(decl: string): javax.swing.text.AttributeSet
                    /**
                     * Loads a set of rules that have been specified in terms of
                     * CSS1 grammar.  If there are collisions with existing rules,
                     * the newly specified rule will win.
                     * @param in the stream to read the CSS grammar from
                     * @param ref the reference URL.  This value represents the
                     *   location of the stream and may be null.  All relative
                     *   URLs specified in the stream will be based upon this
                     *   parameter.
                     */
                    // @ts-ignore
                    loadRules(input: java.io.Reader, ref: java.net.URL): void
                    /**
                     * Fetches a set of attributes to use in the view for
                     * displaying.  This is basically a set of attributes that
                     * can be used for View.getAttributes.
                     */
                    // @ts-ignore
                    getViewAttributes(v: javax.swing.text.View): javax.swing.text.AttributeSet
                    /**
                     * Removes a named style previously added to the document.
                     * @param nm  the name of the style to remove
                     */
                    // @ts-ignore
                    removeStyle(nm: string): void
                    /**
                     * Adds the rules from the StyleSheet <code>ss</code> to those of
                     * the receiver. <code>ss's</code> rules will override the rules of
                     * any previously added style sheets. An added StyleSheet will never
                     * override the rules of the receiving style sheet.
                     * @since 1.3
                     */
                    // @ts-ignore
                    addStyleSheet(ss: javax.swing.text.html.StyleSheet): void
                    /**
                     * Removes the StyleSheet <code>ss</code> from those of the receiver.
                     * @since 1.3
                     */
                    // @ts-ignore
                    removeStyleSheet(ss: javax.swing.text.html.StyleSheet): void
                    /**
                     * Returns an array of the linked StyleSheets. Will return null
                     * if there are no linked StyleSheets.
                     * @since 1.3
                     */
                    // @ts-ignore
                    getStyleSheets(): javax.swing.text.html.StyleSheet[]
                    /**
                     * Imports a style sheet from <code>url</code>. The resulting rules
                     * are directly added to the receiver. If you do not want the rules
                     * to become part of the receiver, create a new StyleSheet and use
                     * addStyleSheet to link it in.
                     * @since 1.3
                     */
                    // @ts-ignore
                    importStyleSheet(url: java.net.URL): void
                    /**
                     * Sets the base. All import statements that are relative, will be
                     * relative to <code>base</code>.
                     * @since 1.3
                     */
                    // @ts-ignore
                    setBase(base: java.net.URL): void
                    /**
                     * Returns the base.
                     * @since 1.3
                     */
                    // @ts-ignore
                    getBase(): java.net.URL
                    /**
                     * Adds a CSS attribute to the given set.
                     * @since 1.3
                     */
                    // @ts-ignore
                    addCSSAttribute(attr: javax.swing.text.MutableAttributeSet, key: javax.swing.text.html.CSS.Attribute, value: string): void
                    /**
                     * Adds a CSS attribute to the given set.
                     * @since 1.3
                     */
                    // @ts-ignore
                    addCSSAttributeFromHTML(attr: javax.swing.text.MutableAttributeSet, key: javax.swing.text.html.CSS.Attribute, value: string): boolean
                    /**
                     * Converts a set of HTML attributes to an equivalent
                     * set of CSS attributes.
                     * @param htmlAttrSet AttributeSet containing the HTML attributes.
                     */
                    // @ts-ignore
                    translateHTMLToCSS(htmlAttrSet: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
                    /**
                     * Adds an attribute to the given set, and returns
                     * the new representative set.  This is reimplemented to
                     * convert StyleConstant attributes to CSS prior to forwarding
                     * to the superclass behavior.  The StyleConstants attribute
                     * has no corresponding CSS entry, the StyleConstants attribute
                     * is stored (but will likely be unused).
                     * @param old the old attribute set
                     * @param key the non-null attribute key
                     * @param value the attribute value
                     * @return the updated attribute set
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    addAttribute(old: javax.swing.text.AttributeSet, key: any, value: any): javax.swing.text.AttributeSet
                    /**
                     * Adds a set of attributes to the element.  If any of these attributes
                     * are StyleConstants attributes, they will be converted to CSS prior
                     * to forwarding to the superclass behavior.
                     * @param old the old attribute set
                     * @param attr the attributes to add
                     * @return the updated attribute set
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    addAttributes(old: javax.swing.text.AttributeSet, attr: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
                    /**
                     * Removes an attribute from the set.  If the attribute is a StyleConstants
                     * attribute, the request will be converted to a CSS attribute prior to
                     * forwarding to the superclass behavior.
                     * @param old the old set of attributes
                     * @param key the non-null attribute name
                     * @return the updated attribute set
                     * @see MutableAttributeSet#removeAttribute
                     */
                    // @ts-ignore
                    removeAttribute(old: javax.swing.text.AttributeSet, key: any): javax.swing.text.AttributeSet
                    /**
                     * Removes a set of attributes for the element.  If any of the attributes
                     * is a StyleConstants attribute, the request will be converted to a CSS
                     * attribute prior to forwarding to the superclass behavior.
                     * @param old the old attribute set
                     * @param names the attribute names
                     * @return the updated attribute set
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    removeAttributes(old: javax.swing.text.AttributeSet, names: java.util.Enumeration<any>): javax.swing.text.AttributeSet
                    /**
                     * Removes a set of attributes. If any of the attributes
                     * is a StyleConstants attribute, the request will be converted to a CSS
                     * attribute prior to forwarding to the superclass behavior.
                     * @param old the old attribute set
                     * @param attrs the attributes
                     * @return the updated attribute set
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    removeAttributes(old: javax.swing.text.AttributeSet, attrs: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
                    /**
                     * Creates a compact set of attributes that might be shared.
                     * This is a hook for subclasses that want to alter the
                     * behavior of SmallAttributeSet.  This can be reimplemented
                     * to return an AttributeSet that provides some sort of
                     * attribute conversion.
                     * @param a The set of attributes to be represented in the
                     *   the compact form.
                     */
                    // @ts-ignore
                    createSmallAttributeSet(a: javax.swing.text.AttributeSet): javax.swing.text.StyleContext.SmallAttributeSet
                    /**
                     * Creates a large set of attributes that should trade off
                     * space for time.  This set will not be shared.  This is
                     * a hook for subclasses that want to alter the behavior
                     * of the larger attribute storage format (which is
                     * SimpleAttributeSet by default).   This can be reimplemented
                     * to return a MutableAttributeSet that provides some sort of
                     * attribute conversion.
                     * @param a The set of attributes to be represented in the
                     *   the larger form.
                     */
                    // @ts-ignore
                    createLargeAttributeSet(a: javax.swing.text.AttributeSet): javax.swing.text.MutableAttributeSet
                    /**
                     * Fetches the font to use for the given set of attributes.
                     */
                    // @ts-ignore
                    getFont(a: javax.swing.text.AttributeSet): java.awt.Font
                    /**
                     * Takes a set of attributes and turn it into a foreground color
                     * specification.  This might be used to specify things
                     * like brighter, more hue, etc.
                     * @param a the set of attributes
                     * @return the color
                     */
                    // @ts-ignore
                    getForeground(a: javax.swing.text.AttributeSet): java.awt.Color
                    /**
                     * Takes a set of attributes and turn it into a background color
                     * specification.  This might be used to specify things
                     * like brighter, more hue, etc.
                     * @param a the set of attributes
                     * @return the color
                     */
                    // @ts-ignore
                    getBackground(a: javax.swing.text.AttributeSet): java.awt.Color
                    /**
                     * Fetches the box formatter to use for the given set
                     * of CSS attributes.
                     */
                    // @ts-ignore
                    getBoxPainter(a: javax.swing.text.AttributeSet): javax.swing.text.html.StyleSheet.BoxPainter
                    /**
                     * Fetches the list formatter to use for the given set
                     * of CSS attributes.
                     */
                    // @ts-ignore
                    getListPainter(a: javax.swing.text.AttributeSet): javax.swing.text.html.StyleSheet.ListPainter
                    /**
                     * Sets the base font size, with valid values between 1 and 7.
                     */
                    // @ts-ignore
                    setBaseFontSize(sz: number /*int*/): void
                    /**
                     * Sets the base font size from the passed in String. The string
                     * can either identify a specific font size, with legal values between
                     * 1 and 7, or identify a relative font size such as +1 or -2.
                     */
                    // @ts-ignore
                    setBaseFontSize(size: string): void
                    // @ts-ignore
                    getIndexOfSize(pt: number /*float*/): int
                    /**
                     * Returns the point size, given a size index.
                     */
                    // @ts-ignore
                    getPointSize(index: number /*int*/): float
                    /**
                     * Given a string such as "+2", "-2", or "2",
                     * returns a point size value.
                     */
                    // @ts-ignore
                    getPointSize(size: string): float
                    /**
                     * Converts a color string such as "RED" or "#NNNNNN" to a Color.
                     * Note: This will only convert the HTML3.2 color strings
                     * or a string of length 7;
                     * otherwise, it will return null.
                     */
                    // @ts-ignore
                    stringToColor(string: string): java.awt.Color
                }
            }
        }
    }
}
