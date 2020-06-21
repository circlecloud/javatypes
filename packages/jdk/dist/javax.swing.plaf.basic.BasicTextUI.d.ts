declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * <p>
                 * Basis of a text components look-and-feel.  This provides the
                 * basic editor view and controller services that may be useful
                 * when creating a look-and-feel for an extension of
                 * <code>JTextComponent</code>.
                 * <p>
                 * Most state is held in the associated <code>JTextComponent</code>
                 * as bound properties, and the UI installs default values for the
                 * various properties.  This default will install something for
                 * all of the properties.  Typically, a LAF implementation will
                 * do more however.  At a minimum, a LAF would generally install
                 * key bindings.
                 * <p>
                 * This class also provides some concurrency support if the
                 * <code>Document</code> associated with the JTextComponent is a subclass of
                 * <code>AbstractDocument</code>.  Access to the View (or View hierarchy) is
                 * serialized between any thread mutating the model and the Swing
                 * event thread (which is expected to render, do model/view coordinate
                 * translation, etc).  <em>Any access to the root view should first
                 * acquire a read-lock on the AbstractDocument and release that lock
                 * in a finally block.</em>
                 * <p>
                 * An important method to define is the {@link #getPropertyPrefix} method
                 * which is used as the basis of the keys used to fetch defaults
                 * from the UIManager.  The string should reflect the type of
                 * TextUI (eg. TextField, TextArea, etc) without the particular
                 * LAF part of the name (eg Metal, Motif, etc).
                 * <p>
                 * To build a view of the model, one of the following strategies
                 * can be employed.
                 * <ol>
                 * <li>
                 * One strategy is to simply redefine the
                 * ViewFactory interface in the UI.  By default, this UI itself acts
                 * as the factory for View implementations.  This is useful
                 * for simple factories.  To do this reimplement the
                 * {@link #create} method.
                 * <li>
                 * A common strategy for creating more complex types of documents
                 * is to have the EditorKit implementation return a factory.  Since
                 * the EditorKit ties all of the pieces necessary to maintain a type
                 * of document, the factory is typically an important part of that
                 * and should be produced by the EditorKit implementation.
                 * </ol>
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Timothy Prinzing
                 * @author Shannon Hickey (drag and drop)
                 */
                // @ts-ignore
                abstract class BasicTextUI extends javax.swing.plaf.TextUI implements javax.swing.text.ViewFactory {
                    /**
                     * Creates a new UI.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates the object to use for a caret.  By default an
                     * instance of BasicCaret is created.  This method
                     * can be redefined to provide something else that implements
                     * the InputPosition interface or a subclass of JCaret.
                     * @return the caret object
                     */
                    // @ts-ignore
                    createCaret(): javax.swing.text.Caret
                    /**
                     * Creates the object to use for adding highlights.  By default
                     * an instance of BasicHighlighter is created.  This method
                     * can be redefined to provide something else that implements
                     * the Highlighter interface or a subclass of DefaultHighlighter.
                     * @return the highlighter
                     */
                    // @ts-ignore
                    createHighlighter(): javax.swing.text.Highlighter
                    /**
                     * Fetches the name of the keymap that will be installed/used
                     * by default for this UI. This is implemented to create a
                     * name based upon the classname.  The name is the the name
                     * of the class with the package prefix removed.
                     * @return the name
                     */
                    // @ts-ignore
                    getKeymapName(): string
                    /**
                     * Creates the keymap to use for the text component, and installs
                     * any necessary bindings into it.  By default, the keymap is
                     * shared between all instances of this type of TextUI. The
                     * keymap has the name defined by the getKeymapName method.  If the
                     * keymap is not found, then DEFAULT_KEYMAP from JTextComponent is used.
                     * <p>
                     * The set of bindings used to create the keymap is fetched
                     * from the UIManager using a key formed by combining the
                     * {@link #getPropertyPrefix} method
                     * and the string <code>.keyBindings</code>.  The type is expected
                     * to be <code>JTextComponent.KeyBinding[]</code>.
                     * @return the keymap
                     * @see #getKeymapName
                     * @see javax.swing.text.JTextComponent
                     */
                    // @ts-ignore
                    createKeymap(): javax.swing.text.Keymap
                    /**
                     * This method gets called when a bound property is changed
                     * on the associated JTextComponent.  This is a hook
                     * which UI implementations may change to reflect how the
                     * UI displays bound properties of JTextComponent subclasses.
                     * This is implemented to do nothing (i.e. the response to
                     * properties in JTextComponent itself are handled prior
                     * to calling this method).
                     * This implementation updates the background of the text
                     * component if the editable and/or enabled state changes.
                     * @param evt the property change event
                     */
                    // @ts-ignore
                    propertyChange(evt: java.beans.PropertyChangeEvent): void
                    /**
                     * Gets the name used as a key to look up properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name
                     */
                    // @ts-ignore
                    abstract getPropertyPrefix(): string
                    /**
                     * Initializes component properties, such as font, foreground,
                     * background, caret color, selection color, selected text color,
                     * disabled text color, and border color.  The font, foreground, and
                     * background properties are only set if their current value is either null
                     * or a UIResource, other properties are set if the current
                     * value is null.
                     * @see #uninstallDefaults
                     * @see #installUI
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Sets the component properties that have not been explicitly overridden
                     * to {@code null}.  A property is considered overridden if its current
                     * value is not a {@code UIResource}.
                     * @see #installDefaults
                     * @see #uninstallUI
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * Installs listeners for the UI.
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Uninstalls listeners for the UI.
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Paints a background for the view.  This will only be
                     * called if isOpaque() on the associated component is
                     * true.  The default is to paint the background color
                     * of the component.
                     * @param g the graphics context
                     */
                    // @ts-ignore
                    paintBackground(g: java.awt.Graphics): void
                    /**
                     * Fetches the text component associated with this
                     * UI implementation.  This will be null until
                     * the ui has been installed.
                     * @return the editor component
                     */
                    // @ts-ignore
                    getComponent(): javax.swing.text.JTextComponent
                    /**
                     * Flags model changes.
                     * This is called whenever the model has changed.
                     * It is implemented to rebuild the view hierarchy
                     * to represent the default root element of the
                     * associated model.
                     */
                    // @ts-ignore
                    modelChanged(): void
                    /**
                     * Sets the current root of the view hierarchy and calls invalidate().
                     * If there were any child components, they will be removed (i.e.
                     * there are assumed to have come from components embedded in views).
                     * @param v the root view
                     */
                    // @ts-ignore
                    setView(v: javax.swing.text.View): void
                    /**
                     * Paints the interface safely with a guarantee that
                     * the model won't change from the view of this thread.
                     * This does the following things, rendering from
                     * back to front.
                     * <ol>
                     * <li>
                     * If the component is marked as opaque, the background
                     * is painted in the current background color of the
                     * component.
                     * <li>
                     * The highlights (if any) are painted.
                     * <li>
                     * The view hierarchy is painted.
                     * <li>
                     * The caret is painted.
                     * </ol>
                     * @param g the graphics context
                     */
                    // @ts-ignore
                    paintSafely(g: java.awt.Graphics): void
                    /**
                     * Installs the UI for a component.  This does the following
                     * things.
                     * <ol>
                     * <li>
                     * Sets the associated component to opaque if the opaque property
                     * has not already been set by the client program. This will cause the
                     * component's background color to be painted.
                     * <li>
                     * Installs the default caret and highlighter into the
                     * associated component. These properties are only set if their
                     * current value is either {@code null} or an instance of
                     * {@link UIResource}.
                     * <li>
                     * Attaches to the editor and model.  If there is no
                     * model, a default one is created.
                     * <li>
                     * Creates the view factory and the view hierarchy used
                     * to represent the model.
                     * </ol>
                     * @param c the editor component
                     * @see ComponentUI#installUI
                     */
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * Deinstalls the UI for a component.  This removes the listeners,
                     * uninstalls the highlighter, removes views, and nulls out the keymap.
                     * @param c the editor component
                     * @see ComponentUI#uninstallUI
                     */
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Superclass paints background in an uncontrollable way
                     * (i.e. one might want an image tiled into the background).
                     * To prevent this from happening twice, this method is
                     * reimplemented to simply paint.
                     * <p>
                     * <em>NOTE:</em> NOTE: Superclass is also not thread-safe in its
                     * rendering of the background, although that is not an issue with the
                     * default rendering.
                     */
                    // @ts-ignore
                    public update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Paints the interface.  This is routed to the
                     * paintSafely method under the guarantee that
                     * the model won't change from the view of this thread
                     * while it's rendering (if the associated model is
                     * derived from AbstractDocument).  This enables the
                     * model to potentially be updated asynchronously.
                     * @param g the graphics context
                     * @param c the editor component
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Gets the preferred size for the editor component.  If the component
                     * has been given a size prior to receiving this request, it will
                     * set the size of the view hierarchy to reflect the size of the component
                     * before requesting the preferred size of the view hierarchy.  This
                     * allows formatted views to format to the current component size before
                     * answering the request.  Other views don't care about currently formatted
                     * size and give the same answer either way.
                     * @param c the editor component
                     * @return the size
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Gets the minimum size for the editor component.
                     * @param c the editor component
                     * @return the size
                     */
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Gets the maximum size for the editor component.
                     * @param c the editor component
                     * @return the size
                     */
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Gets the allocation to give the root View.  Due
                     * to an unfortunate set of historical events this
                     * method is inappropriately named.  The Rectangle
                     * returned has nothing to do with visibility.
                     * The component must have a non-zero positive size for
                     * this translation to be computed.
                     * @return the bounding box for the root view
                     */
                    // @ts-ignore
                    getVisibleEditorRect(): java.awt.Rectangle
                    /**
                     * Converts the given location in the model to a place in
                     * the view coordinate system.
                     * The component must have a non-zero positive size for
                     * this translation to be computed.
                     * @param tc the text component for which this UI is installed
                     * @param pos the local location in the model to translate &gt;= 0
                     * @return the coordinates as a rectangle, null if the model is not painted
                     * @exception BadLocationException  if the given position does not
                     *    represent a valid location in the associated document
                     * @see TextUI#modelToView
                     */
                    // @ts-ignore
                    public modelToView(tc: javax.swing.text.JTextComponent, pos: number /*int*/): java.awt.Rectangle
                    /**
                     * Converts the given location in the model to a place in
                     * the view coordinate system.
                     * The component must have a non-zero positive size for
                     * this translation to be computed.
                     * @param tc the text component for which this UI is installed
                     * @param pos the local location in the model to translate &gt;= 0
                     * @return the coordinates as a rectangle, null if the model is not painted
                     * @exception BadLocationException  if the given position does not
                     *    represent a valid location in the associated document
                     * @see TextUI#modelToView
                     */
                    // @ts-ignore
                    public modelToView(tc: javax.swing.text.JTextComponent, pos: number /*int*/, bias: javax.swing.text.Position.Bias): java.awt.Rectangle
                    /**
                     * Converts the given place in the view coordinate system
                     * to the nearest representative location in the model.
                     * The component must have a non-zero positive size for
                     * this translation to be computed.
                     * @param tc the text component for which this UI is installed
                     * @param pt the location in the view to translate.  This
                     *   should be in the same coordinate system as the mouse events.
                     * @return the offset from the start of the document &gt;= 0,
                     *    -1 if not painted
                     * @see TextUI#viewToModel
                     */
                    // @ts-ignore
                    public viewToModel(tc: javax.swing.text.JTextComponent, pt: java.awt.Point): number /*int*/
                    /**
                     * Converts the given place in the view coordinate system
                     * to the nearest representative location in the model.
                     * The component must have a non-zero positive size for
                     * this translation to be computed.
                     * @param tc the text component for which this UI is installed
                     * @param pt the location in the view to translate.  This
                     *   should be in the same coordinate system as the mouse events.
                     * @return the offset from the start of the document &gt;= 0,
                     *    -1 if the component doesn't yet have a positive size.
                     * @see TextUI#viewToModel
                     */
                    // @ts-ignore
                    public viewToModel(tc: javax.swing.text.JTextComponent, pt: java.awt.Point, biasReturn: javax.swing.text.Position.Bias[]): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getNextVisualPositionFrom(t: javax.swing.text.JTextComponent, pos: number /*int*/, b: javax.swing.text.Position.Bias, direction: number /*int*/, biasRet: javax.swing.text.Position.Bias[]): number /*int*/
                    /**
                     * Causes the portion of the view responsible for the
                     * given part of the model to be repainted.  Does nothing if
                     * the view is not currently painted.
                     * @param tc the text component for which this UI is installed
                     * @param p0 the beginning of the range &gt;= 0
                     * @param p1 the end of the range &gt;= p0
                     * @see TextUI#damageRange
                     */
                    // @ts-ignore
                    public damageRange(tc: javax.swing.text.JTextComponent, p0: number /*int*/, p1: number /*int*/): void
                    /**
                     * Causes the portion of the view responsible for the
                     * given part of the model to be repainted.
                     * @param p0 the beginning of the range &gt;= 0
                     * @param p1 the end of the range &gt;= p0
                     */
                    // @ts-ignore
                    public damageRange(t: javax.swing.text.JTextComponent, p0: number /*int*/, p1: number /*int*/, p0Bias: javax.swing.text.Position.Bias, p1Bias: javax.swing.text.Position.Bias): void
                    /**
                     * Fetches the EditorKit for the UI.
                     * @param tc the text component for which this UI is installed
                     * @return the editor capabilities
                     * @see TextUI#getEditorKit
                     */
                    // @ts-ignore
                    public getEditorKit(tc: javax.swing.text.JTextComponent): javax.swing.text.EditorKit
                    /**
                     * Fetches a View with the allocation of the associated
                     * text component (i.e. the root of the hierarchy) that
                     * can be traversed to determine how the model is being
                     * represented spatially.
                     * <p>
                     * <font color=red><b>NOTE:</b>The View hierarchy can
                     * be traversed from the root view, and other things
                     * can be done as well.  Things done in this way cannot
                     * be protected like simple method calls through the TextUI.
                     * Therefore, proper operation in the presence of concurrency
                     * must be arranged by any logic that calls this method!
                     * </font>
                     * @param tc the text component for which this UI is installed
                     * @return the view
                     * @see TextUI#getRootView
                     */
                    // @ts-ignore
                    public getRootView(tc: javax.swing.text.JTextComponent): javax.swing.text.View
                    /**
                     * Returns the string to be used as the tooltip at the passed in location.
                     * This forwards the method onto the root View.
                     * @see javax.swing.text.JTextComponent#getToolTipText
                     * @see javax.swing.text.View#getToolTipText
                     * @since 1.4
                     */
                    // @ts-ignore
                    public getToolTipText(t: javax.swing.text.JTextComponent, pt: java.awt.Point): string
                    /**
                     * Creates a view for an element.
                     * If a subclass wishes to directly implement the factory
                     * producing the view(s), it should reimplement this
                     * method.  By default it simply returns null indicating
                     * it is unable to represent the element.
                     * @param elem the element
                     * @return the view
                     */
                    // @ts-ignore
                    public create(elem: javax.swing.text.Element): javax.swing.text.View
                    /**
                     * Creates a view for an element.
                     * If a subclass wishes to directly implement the factory
                     * producing the view(s), it should reimplement this
                     * method.  By default it simply returns null indicating
                     * it is unable to represent the part of the element.
                     * @param elem the element
                     * @param p0 the starting offset &gt;= 0
                     * @param p1 the ending offset &gt;= p0
                     * @return the view
                     */
                    // @ts-ignore
                    public create(elem: javax.swing.text.Element, p0: number /*int*/, p1: number /*int*/): javax.swing.text.View
                }
            }
        }
    }
}
