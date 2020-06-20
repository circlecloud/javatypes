declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>JTextComponent</code> is the base class for swing text
             * components.  It tries to be compatible with the
             * <code>java.awt.TextComponent</code> class
             * where it can reasonably do so.  Also provided are other services
             * for additional flexibility (beyond the pluggable UI and bean
             * support).
             * You can find information on how to use the functionality
             * this class provides in
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/generaltext.html">General Rules for Using Text Components</a>,
             * a section in <em>The Java Tutorial.</em>
             * <dl>
             * <dt><b><font size=+1>Caret Changes</font></b>
             * <dd>
             * The caret is a pluggable object in swing text components.
             * Notification of changes to the caret position and the selection
             * are sent to implementations of the <code>CaretListener</code>
             * interface that have been registered with the text component.
             * The UI will install a default caret unless a customized caret
             * has been set. <br>
             * By default the caret tracks all the document changes
             * performed on the Event Dispatching Thread and updates it's position
             * accordingly if an insertion occurs before or at the caret position
             * or a removal occurs before the caret position. <code>DefaultCaret</code>
             * tries to make itself visible which may lead to scrolling
             * of a text component within <code>JScrollPane</code>. The default caret
             * behavior can be changed by the {@link DefaultCaret#setUpdatePolicy} method.
             * <br>
             * <b>Note</b>: Non-editable text components also have a caret though
             * it may not be painted.
             * <dt><b><font size=+1>Commands</font></b>
             * <dd>
             * Text components provide a number of commands that can be used
             * to manipulate the component.  This is essentially the way that
             * the component expresses its capabilities.  These are expressed
             * in terms of the swing <code>Action</code> interface,
             * using the <code>TextAction</code> implementation.
             * The set of commands supported by the text component can be
             * found with the {@link #getActions} method.  These actions
             * can be bound to key events, fired from buttons, etc.
             * <dt><b><font size=+1>Text Input</font></b>
             * <dd>
             * The text components support flexible and internationalized text input, using
             * keymaps and the input method framework, while maintaining compatibility with
             * the AWT listener model.
             * <p>
             * A {@link javax.swing.text.Keymap} lets an application bind key
             * strokes to actions.
             * In order to allow keymaps to be shared across multiple text components, they
             * can use actions that extend <code>TextAction</code>.
             * <code>TextAction</code> can determine which <code>JTextComponent</code>
             * most recently has or had focus and therefore is the subject of
             * the action (In the case that the <code>ActionEvent</code>
             * sent to the action doesn't contain the target text component as its source).
             * <p>
             * The <a href="../../../../technotes/guides/imf/spec.html">input method framework</a>
             * lets text components interact with input methods, separate software
             * components that preprocess events to let users enter thousands of
             * different characters using keyboards with far fewer keys.
             * <code>JTextComponent</code> is an <em>active client</em> of
             * the framework, so it implements the preferred user interface for interacting
             * with input methods. As a consequence, some key events do not reach the text
             * component because they are handled by an input method, and some text input
             * reaches the text component as committed text within an {@link
             * java.awt.event.InputMethodEvent} instead of as a key event.
             * The complete text input is the combination of the characters in
             * <code>keyTyped</code> key events and committed text in input method events.
             * <p>
             * The AWT listener model lets applications attach event listeners to
             * components in order to bind events to actions. Swing encourages the
             * use of keymaps instead of listeners, but maintains compatibility
             * with listeners by giving the listeners a chance to steal an event
             * by consuming it.
             * <p>
             * Keyboard event and input method events are handled in the following stages,
             * with each stage capable of consuming the event:
             * <table border=1 summary="Stages of keyboard and input method event handling">
             * <tr>
             * <th id="stage"><p style="text-align:left">Stage</p></th>
             * <th id="ke"><p style="text-align:left">KeyEvent</p></th>
             * <th id="ime"><p style="text-align:left">InputMethodEvent</p></th></tr>
             * <tr><td headers="stage">1.   </td>
             * <td headers="ke">input methods </td>
             * <td headers="ime">(generated here)</td></tr>
             * <tr><td headers="stage">2.   </td>
             * <td headers="ke">focus manager </td>
             * <td headers="ime"></td>
             * </tr>
             * <tr>
             * <td headers="stage">3.   </td>
             * <td headers="ke">registered key listeners</td>
             * <td headers="ime">registered input method listeners</tr>
             * <tr>
             * <td headers="stage">4.   </td>
             * <td headers="ke"></td>
             * <td headers="ime">input method handling in JTextComponent</tr>
             * <tr>
             * <td headers="stage">5.   </td><td headers="ke ime" colspan=2>keymap handling using the current keymap</td></tr>
             * <tr><td headers="stage">6.   </td><td headers="ke">keyboard handling in JComponent (e.g. accelerators, component navigation, etc.)</td>
             * <td headers="ime"></td></tr>
             * </table>
             * <p>
             * To maintain compatibility with applications that listen to key
             * events but are not aware of input method events, the input
             * method handling in stage 4 provides a compatibility mode for
             * components that do not process input method events. For these
             * components, the committed text is converted to keyTyped key events
             * and processed in the key event pipeline starting at stage 3
             * instead of in the input method event pipeline.
             * <p>
             * By default the component will create a keymap (named <b>DEFAULT_KEYMAP</b>)
             * that is shared by all JTextComponent instances as the default keymap.
             * Typically a look-and-feel implementation will install a different keymap
             * that resolves to the default keymap for those bindings not found in the
             * different keymap. The minimal bindings include:
             * <ul>
             * <li>inserting content into the editor for the
             * printable keys.
             * <li>removing content with the backspace and del
             * keys.
             * <li>caret movement forward and backward
             * </ul>
             * <dt><b><font size=+1>Model/View Split</font></b>
             * <dd>
             * The text components have a model-view split.  A text component pulls
             * together the objects used to represent the model, view, and controller.
             * The text document model may be shared by other views which act as observers
             * of the model (e.g. a document may be shared by multiple components).
             * <p style="text-align:center"><img src="doc-files/editor.gif" alt="Diagram showing interaction between Controller, Document, events, and ViewFactory"
             * HEIGHT=358 WIDTH=587></p>
             * <p>
             * The model is defined by the {@link Document} interface.
             * This is intended to provide a flexible text storage mechanism
             * that tracks change during edits and can be extended to more sophisticated
             * models.  The model interfaces are meant to capture the capabilities of
             * expression given by SGML, a system used to express a wide variety of
             * content.
             * Each modification to the document causes notification of the
             * details of the change to be sent to all observers in the form of a
             * {@link DocumentEvent} which allows the views to stay up to date with the model.
             * This event is sent to observers that have implemented the
             * {@link DocumentListener}
             * interface and registered interest with the model being observed.
             * <dt><b><font size=+1>Location Information</font></b>
             * <dd>
             * The capability of determining the location of text in
             * the view is provided.  There are two methods, {@link #modelToView}
             * and {@link #viewToModel} for determining this information.
             * <dt><b><font size=+1>Undo/Redo support</font></b>
             * <dd>
             * Support for an edit history mechanism is provided to allow
             * undo/redo operations.  The text component does not itself
             * provide the history buffer by default, but does provide
             * the <code>UndoableEdit</code> records that can be used in conjunction
             * with a history buffer to provide the undo/redo support.
             * The support is provided by the Document model, which allows
             * one to attach UndoableEditListener implementations.
             * <dt><b><font size=+1>Thread Safety</font></b>
             * <dd>
             * The swing text components provide some support of thread
             * safe operations.  Because of the high level of configurability
             * of the text components, it is possible to circumvent the
             * protection provided.  The protection primarily comes from
             * the model, so the documentation of <code>AbstractDocument</code>
             * describes the assumptions of the protection provided.
             * The methods that are safe to call asynchronously are marked
             * with comments.
             * <dt><b><font size=+1>Newlines</font></b>
             * <dd>
             * For a discussion on how newlines are handled, see
             * <a href="DefaultEditorKit.html">DefaultEditorKit</a>.
             * <dt><b><font size=+1>Printing support</font></b>
             * <dd>
             * Several {@link #print print} methods are provided for basic
             * document printing.  If more advanced printing is needed, use the
             * {@link #getPrintable} method.
             * </dl>
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @beaninfo attribute: isContainer false
             * @author Timothy Prinzing
             * @author Igor Kushnirskiy (printing support)
             * @see Document
             * @see DocumentEvent
             * @see DocumentListener
             * @see Caret
             * @see CaretEvent
             * @see CaretListener
             * @see TextUI
             * @see View
             * @see ViewFactory
             */
            // @ts-ignore
            class JTextComponent extends javax.swing.JComponent implements javax.swing.Scrollable, javax.accessibility.Accessible {
                /**
                 * Creates a new <code>JTextComponent</code>.
                 * Listeners for caret events are established, and the pluggable
                 * UI installed.  The component is marked as editable.  No layout manager
                 * is used, because layout is managed by the view subsystem of text.
                 * The document model is set to <code>null</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The bound property name for the focus accelerator.
                 */
                // @ts-ignore
                readonly FOCUS_ACCELERATOR_KEY: string
                /**
                 * The default keymap that will be shared by all
                 * <code>JTextComponent</code> instances unless they
                 * have had a different keymap set.
                 */
                // @ts-ignore
                readonly DEFAULT_KEYMAP: string
                /**
                 * Fetches the user-interface factory for this text-oriented editor.
                 * @return the factory
                 */
                // @ts-ignore
                getUI(): javax.swing.plaf.TextUI
                /**
                 * Sets the user-interface factory for this text-oriented editor.
                 * @param ui the factory
                 */
                // @ts-ignore
                setUI(ui: javax.swing.plaf.TextUI): void
                /**
                 * Reloads the pluggable UI.  The key used to fetch the
                 * new interface is <code>getUIClassID()</code>.  The type of
                 * the UI is <code>TextUI</code>.  <code>invalidate</code>
                 * is called after setting the UI.
                 */
                // @ts-ignore
                updateUI(): void
                /**
                 * Adds a caret listener for notification of any changes
                 * to the caret.
                 * @param listener the listener to be added
                 * @see javax.swing.event.CaretEvent
                 */
                // @ts-ignore
                addCaretListener(listener: javax.swing.event.CaretListener): void
                /**
                 * Removes a caret listener.
                 * @param listener the listener to be removed
                 * @see javax.swing.event.CaretEvent
                 */
                // @ts-ignore
                removeCaretListener(listener: javax.swing.event.CaretListener): void
                /**
                 * Returns an array of all the caret listeners
                 * registered on this text component.
                 * @return all of this component's <code>CaretListener</code>s
                 *          or an empty
                 *          array if no caret listeners are currently registered
                 * @see #addCaretListener
                 * @see #removeCaretListener
                 * @since 1.4
                 */
                // @ts-ignore
                getCaretListeners(): javax.swing.event.CaretListener[]
                /**
                 * Notifies all listeners that have registered interest for
                 * notification on this event type.  The event instance
                 * is lazily created using the parameters passed into
                 * the fire method.  The listener list is processed in a
                 * last-to-first manner.
                 * @param e the event
                 * @see EventListenerList
                 */
                // @ts-ignore
                fireCaretUpdate(e: javax.swing.event.CaretEvent): void
                /**
                 * Associates the editor with a text document.
                 * The currently registered factory is used to build a view for
                 * the document, which gets displayed by the editor after revalidation.
                 * A PropertyChange event ("document") is propagated to each listener.
                 * @param doc  the document to display/edit
                 * @see #getDocument
                 * @beaninfo description: the text document model
                 *         bound: true
                 *        expert: true
                 */
                // @ts-ignore
                setDocument(doc: javax.swing.text.Document): void
                /**
                 * Fetches the model associated with the editor.  This is
                 * primarily for the UI to get at the minimal amount of
                 * state required to be a text editor.  Subclasses will
                 * return the actual type of the model which will typically
                 * be something that extends Document.
                 * @return the model
                 */
                // @ts-ignore
                getDocument(): javax.swing.text.Document
                // @ts-ignore
                setComponentOrientation(o: java.awt.ComponentOrientation): void
                /**
                 * Fetches the command list for the editor.  This is
                 * the list of commands supported by the plugged-in UI
                 * augmented by the collection of commands that the
                 * editor itself supports.  These are useful for binding
                 * to events, such as in a keymap.
                 * @return the command list
                 */
                // @ts-ignore
                getActions(): javax.swing.Action[]
                /**
                 * Sets margin space between the text component's border
                 * and its text.  The text component's default <code>Border</code>
                 * object will use this value to create the proper margin.
                 * However, if a non-default border is set on the text component,
                 * it is that <code>Border</code> object's responsibility to create the
                 * appropriate margin space (else this property will effectively
                 * be ignored).  This causes a redraw of the component.
                 * A PropertyChange event ("margin") is sent to all listeners.
                 * @param m the space between the border and the text
                 * @beaninfo description: desired space between the border and text area
                 *         bound: true
                 */
                // @ts-ignore
                setMargin(m: java.awt.Insets): void
                /**
                 * Returns the margin between the text component's border and
                 * its text.
                 * @return the margin
                 */
                // @ts-ignore
                getMargin(): java.awt.Insets
                /**
                 * Sets the <code>NavigationFilter</code>. <code>NavigationFilter</code>
                 * is used by <code>DefaultCaret</code> and the default cursor movement
                 * actions as a way to restrict the cursor movement.
                 * @since 1.4
                 */
                // @ts-ignore
                setNavigationFilter(filter: javax.swing.text.NavigationFilter): void
                /**
                 * Returns the <code>NavigationFilter</code>. <code>NavigationFilter</code>
                 * is used by <code>DefaultCaret</code> and the default cursor movement
                 * actions as a way to restrict the cursor movement. A null return value
                 * implies the cursor movement and selection should not be restricted.
                 * @since 1.4
                 * @return the NavigationFilter
                 */
                // @ts-ignore
                getNavigationFilter(): javax.swing.text.NavigationFilter
                /**
                 * Fetches the caret that allows text-oriented navigation over
                 * the view.
                 * @return the caret
                 */
                // @ts-ignore
                getCaret(): javax.swing.text.Caret
                /**
                 * Sets the caret to be used.  By default this will be set
                 * by the UI that gets installed.  This can be changed to
                 * a custom caret if desired.  Setting the caret results in a
                 * PropertyChange event ("caret") being fired.
                 * @param c the caret
                 * @see #getCaret
                 * @beaninfo description: the caret used to select/navigate
                 *         bound: true
                 *        expert: true
                 */
                // @ts-ignore
                setCaret(c: javax.swing.text.Caret): void
                /**
                 * Fetches the object responsible for making highlights.
                 * @return the highlighter
                 */
                // @ts-ignore
                getHighlighter(): javax.swing.text.Highlighter
                /**
                 * Sets the highlighter to be used.  By default this will be set
                 * by the UI that gets installed.  This can be changed to
                 * a custom highlighter if desired.  The highlighter can be set to
                 * <code>null</code> to disable it.
                 * A PropertyChange event ("highlighter") is fired
                 * when a new highlighter is installed.
                 * @param h the highlighter
                 * @see #getHighlighter
                 * @beaninfo description: object responsible for background highlights
                 *         bound: true
                 *        expert: true
                 */
                // @ts-ignore
                setHighlighter(h: javax.swing.text.Highlighter): void
                /**
                 * Sets the keymap to use for binding events to
                 * actions.  Setting to <code>null</code> effectively disables
                 * keyboard input.
                 * A PropertyChange event ("keymap") is fired when a new keymap
                 * is installed.
                 * @param map the keymap
                 * @see #getKeymap
                 * @beaninfo description: set of key event to action bindings to use
                 *         bound: true
                 */
                // @ts-ignore
                setKeymap(map: javax.swing.text.Keymap): void
                /**
                 * Turns on or off automatic drag handling. In order to enable automatic
                 * drag handling, this property should be set to {@code true}, and the
                 * component's {@code TransferHandler} needs to be {@code non-null}.
                 * The default value of the {@code dragEnabled} property is {@code false}.
                 * <p>
                 * The job of honoring this property, and recognizing a user drag gesture,
                 * lies with the look and feel implementation, and in particular, the component's
                 * {@code TextUI}. When automatic drag handling is enabled, most look and
                 * feels (including those that subclass {@code BasicLookAndFeel}) begin a
                 * drag and drop operation whenever the user presses the mouse button over
                 * a selection and then moves the mouse a few pixels. Setting this property to
                 * {@code true} can therefore have a subtle effect on how selections behave.
                 * <p>
                 * If a look and feel is used that ignores this property, you can still
                 * begin a drag and drop operation by calling {@code exportAsDrag} on the
                 * component's {@code TransferHandler}.
                 * @param b whether or not to enable automatic drag handling
                 * @exception HeadlessException if
                 *             <code>b</code> is <code>true</code> and
                 *             <code>GraphicsEnvironment.isHeadless()</code>
                 *             returns <code>true</code>
                 * @see java.awt.GraphicsEnvironment#isHeadless
                 * @see #getDragEnabled
                 * @see #setTransferHandler
                 * @see TransferHandler
                 * @since 1.4
                 * @beaninfo description: determines whether automatic drag handling is enabled
                 *         bound: false
                 */
                // @ts-ignore
                setDragEnabled(b: boolean): void
                /**
                 * Returns whether or not automatic drag handling is enabled.
                 * @return the value of the {#code dragEnabled} property
                 * @see #setDragEnabled
                 * @since 1.4
                 */
                // @ts-ignore
                getDragEnabled(): boolean
                /**
                 * Sets the drop mode for this component. For backward compatibility,
                 * the default for this property is <code>DropMode.USE_SELECTION</code>.
                 * Usage of <code>DropMode.INSERT</code> is recommended, however,
                 * for an improved user experience. It offers similar behavior of dropping
                 * between text locations, but does so without affecting the actual text
                 * selection and caret location.
                 * <p>
                 * <code>JTextComponents</code> support the following drop modes:
                 * <ul>
                 * <li><code>DropMode.USE_SELECTION</code></li>
                 * <li><code>DropMode.INSERT</code></li>
                 * </ul>
                 * <p>
                 * The drop mode is only meaningful if this component has a
                 * <code>TransferHandler</code> that accepts drops.
                 * @param dropMode the drop mode to use
                 * @throws IllegalArgumentException if the drop mode is unsupported
                 *          or <code>null</code>
                 * @see #getDropMode
                 * @see #getDropLocation
                 * @see #setTransferHandler
                 * @see javax.swing.TransferHandler
                 * @since 1.6
                 */
                // @ts-ignore
                setDropMode(dropMode: javax.swing.DropMode): void
                /**
                 * Returns the drop mode for this component.
                 * @return the drop mode for this component
                 * @see #setDropMode
                 * @since 1.6
                 */
                // @ts-ignore
                getDropMode(): javax.swing.DropMode
                /**
                 * Returns the location that this component should visually indicate
                 * as the drop location during a DnD operation over the component,
                 * or {@code null} if no location is to currently be shown.
                 * <p>
                 * This method is not meant for querying the drop location
                 * from a {@code TransferHandler}, as the drop location is only
                 * set after the {@code TransferHandler}'s <code>canImport</code>
                 * has returned and has allowed for the location to be shown.
                 * <p>
                 * When this property changes, a property change event with
                 * name "dropLocation" is fired by the component.
                 * @return the drop location
                 * @see #setDropMode
                 * @see TransferHandler#canImport(TransferHandler.TransferSupport)
                 * @since 1.6
                 */
                // @ts-ignore
                getDropLocation(): javax.swing.text.JTextComponent.DropLocation
                /**
                 * Fetches the keymap currently active in this text
                 * component.
                 * @return the keymap
                 */
                // @ts-ignore
                getKeymap(): javax.swing.text.Keymap
                /**
                 * Adds a new keymap into the keymap hierarchy.  Keymap bindings
                 * resolve from bottom up so an attribute specified in a child
                 * will override an attribute specified in the parent.
                 * @param nm   the name of the keymap (must be unique within the
                 *    collection of named keymaps in the document); the name may
                 *    be <code>null</code> if the keymap is unnamed,
                 *    but the caller is responsible for managing the reference
                 *    returned as an unnamed keymap can't
                 *    be fetched by name
                 * @param parent the parent keymap; this may be <code>null</code> if
                 *    unspecified bindings need not be resolved in some other keymap
                 * @return the keymap
                 */
                // @ts-ignore
                addKeymap(nm: string, parent: javax.swing.text.Keymap): javax.swing.text.Keymap
                /**
                 * Removes a named keymap previously added to the document.  Keymaps
                 * with <code>null</code> names may not be removed in this way.
                 * @param nm  the name of the keymap to remove
                 * @return the keymap that was removed
                 */
                // @ts-ignore
                removeKeymap(nm: string): javax.swing.text.Keymap
                /**
                 * Fetches a named keymap previously added to the document.
                 * This does not work with <code>null</code>-named keymaps.
                 * @param nm  the name of the keymap
                 * @return the keymap
                 */
                // @ts-ignore
                getKeymap(nm: string): javax.swing.text.Keymap
                /**
                 * <p>
                 * Loads a keymap with a bunch of
                 * bindings.  This can be used to take a static table of
                 * definitions and load them into some keymap.  The following
                 * example illustrates an example of binding some keys to
                 * the cut, copy, and paste actions associated with a
                 * JTextComponent.  A code fragment to accomplish
                 * this might look as follows:
                 * <pre><code>
                 * static final JTextComponent.KeyBinding[] defaultBindings = {
                 * new JTextComponent.KeyBinding(
                 * KeyStroke.getKeyStroke(KeyEvent.VK_C, InputEvent.CTRL_MASK),
                 * DefaultEditorKit.copyAction),
                 * new JTextComponent.KeyBinding(
                 * KeyStroke.getKeyStroke(KeyEvent.VK_V, InputEvent.CTRL_MASK),
                 * DefaultEditorKit.pasteAction),
                 * new JTextComponent.KeyBinding(
                 * KeyStroke.getKeyStroke(KeyEvent.VK_X, InputEvent.CTRL_MASK),
                 * DefaultEditorKit.cutAction),
                 * };
                 * JTextComponent c = new JTextPane();
                 * Keymap k = c.getKeymap();
                 * JTextComponent.loadKeymap(k, defaultBindings, c.getActions());
                 * </code></pre>
                 * The sets of bindings and actions may be empty but must be
                 * non-<code>null</code>.
                 * @param map the keymap
                 * @param bindings the bindings
                 * @param actions the set of actions
                 */
                // @ts-ignore
                loadKeymap(map: javax.swing.text.Keymap, bindings: javax.swing.text.JTextComponent.KeyBinding[], actions: javax.swing.Action[]): void
                /**
                 * Fetches the current color used to render the
                 * caret.
                 * @return the color
                 */
                // @ts-ignore
                getCaretColor(): java.awt.Color
                /**
                 * Sets the current color used to render the caret.
                 * Setting to <code>null</code> effectively restores the default color.
                 * Setting the color results in a PropertyChange event ("caretColor")
                 * being fired.
                 * @param c the color
                 * @see #getCaretColor
                 * @beaninfo description: the color used to render the caret
                 *         bound: true
                 *     preferred: true
                 */
                // @ts-ignore
                setCaretColor(c: java.awt.Color): void
                /**
                 * Fetches the current color used to render the
                 * selection.
                 * @return the color
                 */
                // @ts-ignore
                getSelectionColor(): java.awt.Color
                /**
                 * Sets the current color used to render the selection.
                 * Setting the color to <code>null</code> is the same as setting
                 * <code>Color.white</code>.  Setting the color results in a
                 * PropertyChange event ("selectionColor").
                 * @param c the color
                 * @see #getSelectionColor
                 * @beaninfo description: color used to render selection background
                 *         bound: true
                 *     preferred: true
                 */
                // @ts-ignore
                setSelectionColor(c: java.awt.Color): void
                /**
                 * Fetches the current color used to render the
                 * selected text.
                 * @return the color
                 */
                // @ts-ignore
                getSelectedTextColor(): java.awt.Color
                /**
                 * Sets the current color used to render the selected text.
                 * Setting the color to <code>null</code> is the same as
                 * <code>Color.black</code>. Setting the color results in a
                 * PropertyChange event ("selectedTextColor") being fired.
                 * @param c the color
                 * @see #getSelectedTextColor
                 * @beaninfo description: color used to render selected text
                 *         bound: true
                 *     preferred: true
                 */
                // @ts-ignore
                setSelectedTextColor(c: java.awt.Color): void
                /**
                 * Fetches the current color used to render the
                 * disabled text.
                 * @return the color
                 */
                // @ts-ignore
                getDisabledTextColor(): java.awt.Color
                /**
                 * Sets the current color used to render the
                 * disabled text.  Setting the color fires off a
                 * PropertyChange event ("disabledTextColor").
                 * @param c the color
                 * @see #getDisabledTextColor
                 * @beaninfo description: color used to render disabled text
                 *         bound: true
                 *     preferred: true
                 */
                // @ts-ignore
                setDisabledTextColor(c: java.awt.Color): void
                /**
                 * Replaces the currently selected content with new content
                 * represented by the given string.  If there is no selection
                 * this amounts to an insert of the given text.  If there
                 * is no replacement text this amounts to a removal of the
                 * current selection.
                 * <p>
                 * This is the method that is used by the default implementation
                 * of the action for inserting content that gets bound to the
                 * keymap actions.
                 * @param content  the content to replace the selection with
                 */
                // @ts-ignore
                replaceSelection(content: string): void
                /**
                 * Fetches a portion of the text represented by the
                 * component.  Returns an empty string if length is 0.
                 * @param offs the offset &ge; 0
                 * @param len the length &ge; 0
                 * @return the text
                 * @exception BadLocationException if the offset or length are invalid
                 */
                // @ts-ignore
                getText(offs: number /*int*/, len: number /*int*/): java.lang.String
                /**
                 * Converts the given location in the model to a place in
                 * the view coordinate system.
                 * The component must have a positive size for
                 * this translation to be computed (i.e. layout cannot
                 * be computed until the component has been sized).  The
                 * component does not have to be visible or painted.
                 * @param pos the position &ge; 0
                 * @return the coordinates as a rectangle, with (r.x, r.y) as the location
                 *    in the coordinate system, or null if the component does
                 *    not yet have a positive size.
                 * @exception BadLocationException if the given position does not
                 *    represent a valid location in the associated document
                 * @see TextUI#modelToView
                 */
                // @ts-ignore
                modelToView(pos: number /*int*/): java.awt.Rectangle
                /**
                 * Converts the given place in the view coordinate system
                 * to the nearest representative location in the model.
                 * The component must have a positive size for
                 * this translation to be computed (i.e. layout cannot
                 * be computed until the component has been sized).  The
                 * component does not have to be visible or painted.
                 * @param pt the location in the view to translate
                 * @return the offset &ge; 0 from the start of the document,
                 *    or -1 if the component does not yet have a positive
                 *    size.
                 * @see TextUI#viewToModel
                 */
                // @ts-ignore
                viewToModel(pt: java.awt.Point): int
                /**
                 * Transfers the currently selected range in the associated
                 * text model to the system clipboard, removing the contents
                 * from the model.  The current selection is reset.  Does nothing
                 * for <code>null</code> selections.
                 * @see java.awt.Toolkit#getSystemClipboard
                 * @see java.awt.datatransfer.Clipboard
                 */
                // @ts-ignore
                cut(): void
                /**
                 * Transfers the currently selected range in the associated
                 * text model to the system clipboard, leaving the contents
                 * in the text model.  The current selection remains intact.
                 * Does nothing for <code>null</code> selections.
                 * @see java.awt.Toolkit#getSystemClipboard
                 * @see java.awt.datatransfer.Clipboard
                 */
                // @ts-ignore
                copy(): void
                /**
                 * Transfers the contents of the system clipboard into the
                 * associated text model.  If there is a selection in the
                 * associated view, it is replaced with the contents of the
                 * clipboard.  If there is no selection, the clipboard contents
                 * are inserted in front of the current insert position in
                 * the associated view.  If the clipboard is empty, does nothing.
                 * @see #replaceSelection
                 * @see java.awt.Toolkit#getSystemClipboard
                 * @see java.awt.datatransfer.Clipboard
                 */
                // @ts-ignore
                paste(): void
                /**
                 * Moves the caret to a new position, leaving behind a mark
                 * defined by the last time <code>setCaretPosition</code> was
                 * called.  This forms a selection.
                 * If the document is <code>null</code>, does nothing. The position
                 * must be between 0 and the length of the component's text or else
                 * an exception is thrown.
                 * @param pos the position
                 * @exception IllegalArgumentException if the value supplied
                 *                for <code>position</code> is less than zero or greater
                 *                than the component's text length
                 * @see #setCaretPosition
                 */
                // @ts-ignore
                moveCaretPosition(pos: number /*int*/): void
                /**
                 * Sets the key accelerator that will cause the receiving text
                 * component to get the focus.  The accelerator will be the
                 * key combination of the platform-specific modifier key and
                 * the character given (converted to upper case).  For example,
                 * the ALT key is used as a modifier on Windows and the CTRL+ALT
                 * combination is used on Mac.  By default, there is no focus
                 * accelerator key.  Any previous key accelerator setting will be
                 * superseded.  A '\0' key setting will be registered, and has the
                 * effect of turning off the focus accelerator.  When the new key
                 * is set, a PropertyChange event (FOCUS_ACCELERATOR_KEY) will be fired.
                 * @param aKey the key
                 * @see #getFocusAccelerator
                 * @beaninfo description: accelerator character used to grab focus
                 *         bound: true
                 */
                // @ts-ignore
                setFocusAccelerator(aKey: string): void
                /**
                 * Returns the key accelerator that will cause the receiving
                 * text component to get the focus.  Return '\0' if no focus
                 * accelerator has been set.
                 * @return the key
                 */
                // @ts-ignore
                getFocusAccelerator(): char
                /**
                 * Initializes from a stream.  This creates a
                 * model of the type appropriate for the component
                 * and initializes the model from the stream.
                 * By default this will load the model as plain
                 * text.  Previous contents of the model are discarded.
                 * @param in the stream to read from
                 * @param desc an object describing the stream; this
                 *    might be a string, a File, a URL, etc.  Some kinds
                 *    of documents (such as html for example) might be
                 *    able to make use of this information; if non-<code>null</code>,
                 *    it is added as a property of the document
                 * @exception IOException as thrown by the stream being
                 *   used to initialize
                 * @see EditorKit#createDefaultDocument
                 * @see #setDocument
                 * @see PlainDocument
                 */
                // @ts-ignore
                read(input: java.io.Reader, desc: any): void
                /**
                 * Stores the contents of the model into the given
                 * stream.  By default this will store the model as plain
                 * text.
                 * @param out the output stream
                 * @exception IOException on any I/O error
                 */
                // @ts-ignore
                write(out: java.io.Writer): void
                // @ts-ignore
                removeNotify(): void
                /**
                 * Sets the position of the text insertion caret for the
                 * <code>TextComponent</code>.  Note that the caret tracks change,
                 * so this may move if the underlying text of the component is changed.
                 * If the document is <code>null</code>, does nothing. The position
                 * must be between 0 and the length of the component's text or else
                 * an exception is thrown.
                 * @param position the position
                 * @exception IllegalArgumentException if the value supplied
                 *                for <code>position</code> is less than zero or greater
                 *                than the component's text length
                 * @beaninfo description: the caret position
                 */
                // @ts-ignore
                setCaretPosition(position: number /*int*/): void
                /**
                 * Returns the position of the text insertion caret for the
                 * text component.
                 * @return the position of the text insertion caret for the
                 *   text component &ge; 0
                 */
                // @ts-ignore
                getCaretPosition(): int
                /**
                 * Sets the text of this <code>TextComponent</code>
                 * to the specified text.  If the text is <code>null</code>
                 * or empty, has the effect of simply deleting the old text.
                 * When text has been inserted, the resulting caret location
                 * is determined by the implementation of the caret class.
                 * <p>
                 * Note that text is not a bound property, so no <code>PropertyChangeEvent
                 * </code> is fired when it changes. To listen for changes to the text,
                 * use <code>DocumentListener</code>.
                 * @param t the new text to be set
                 * @see #getText
                 * @see DefaultCaret
                 * @beaninfo description: the text of this component
                 */
                // @ts-ignore
                setText(t: string): void
                /**
                 * Returns the text contained in this <code>TextComponent</code>.
                 * If the underlying document is <code>null</code>,
                 * will give a <code>NullPointerException</code>.
                 * Note that text is not a bound property, so no <code>PropertyChangeEvent
                 * </code> is fired when it changes. To listen for changes to the text,
                 * use <code>DocumentListener</code>.
                 * @return the text
                 * @exception NullPointerException if the document is <code>null</code>
                 * @see #setText
                 */
                // @ts-ignore
                getText(): java.lang.String
                /**
                 * Returns the selected text contained in this
                 * <code>TextComponent</code>.  If the selection is
                 * <code>null</code> or the document empty, returns <code>null</code>.
                 * @return the text
                 * @exception IllegalArgumentException if the selection doesn't
                 *   have a valid mapping into the document for some reason
                 * @see #setText
                 */
                // @ts-ignore
                getSelectedText(): java.lang.String
                /**
                 * Returns the boolean indicating whether this
                 * <code>TextComponent</code> is editable or not.
                 * @return the boolean value
                 * @see #setEditable
                 */
                // @ts-ignore
                isEditable(): boolean
                /**
                 * Sets the specified boolean to indicate whether or not this
                 * <code>TextComponent</code> should be editable.
                 * A PropertyChange event ("editable") is fired when the
                 * state is changed.
                 * @param b the boolean to be set
                 * @see #isEditable
                 * @beaninfo description: specifies if the text can be edited
                 *        bound: true
                 */
                // @ts-ignore
                setEditable(b: boolean): void
                /**
                 * Returns the selected text's start position.  Return 0 for an
                 * empty document, or the value of dot if no selection.
                 * @return the start position &ge; 0
                 */
                // @ts-ignore
                getSelectionStart(): int
                /**
                 * Sets the selection start to the specified position.  The new
                 * starting point is constrained to be before or at the current
                 * selection end.
                 * <p>
                 * This is available for backward compatibility to code
                 * that called this method on <code>java.awt.TextComponent</code>.
                 * This is implemented to forward to the <code>Caret</code>
                 * implementation which is where the actual selection is maintained.
                 * @param selectionStart the start position of the text &ge; 0
                 * @beaninfo description: starting location of the selection.
                 */
                // @ts-ignore
                setSelectionStart(selectionStart: number /*int*/): void
                /**
                 * Returns the selected text's end position.  Return 0 if the document
                 * is empty, or the value of dot if there is no selection.
                 * @return the end position &ge; 0
                 */
                // @ts-ignore
                getSelectionEnd(): int
                /**
                 * Sets the selection end to the specified position.  The new
                 * end point is constrained to be at or after the current
                 * selection start.
                 * <p>
                 * This is available for backward compatibility to code
                 * that called this method on <code>java.awt.TextComponent</code>.
                 * This is implemented to forward to the <code>Caret</code>
                 * implementation which is where the actual selection is maintained.
                 * @param selectionEnd the end position of the text &ge; 0
                 * @beaninfo description: ending location of the selection.
                 */
                // @ts-ignore
                setSelectionEnd(selectionEnd: number /*int*/): void
                /**
                 * Selects the text between the specified start and end positions.
                 * <p>
                 * This method sets the start and end positions of the
                 * selected text, enforcing the restriction that the start position
                 * must be greater than or equal to zero.  The end position must be
                 * greater than or equal to the start position, and less than or
                 * equal to the length of the text component's text.
                 * <p>
                 * If the caller supplies values that are inconsistent or out of
                 * bounds, the method enforces these constraints silently, and
                 * without failure. Specifically, if the start position or end
                 * position is greater than the length of the text, it is reset to
                 * equal the text length. If the start position is less than zero,
                 * it is reset to zero, and if the end position is less than the
                 * start position, it is reset to the start position.
                 * <p>
                 * This call is provided for backward compatibility.
                 * It is routed to a call to <code>setCaretPosition</code>
                 * followed by a call to <code>moveCaretPosition</code>.
                 * The preferred way to manage selection is by calling
                 * those methods directly.
                 * @param selectionStart the start position of the text
                 * @param selectionEnd the end position of the text
                 * @see #setCaretPosition
                 * @see #moveCaretPosition
                 */
                // @ts-ignore
                select(selectionStart: number /*int*/, selectionEnd: number /*int*/): void
                /**
                 * Selects all the text in the <code>TextComponent</code>.
                 * Does nothing on a <code>null</code> or empty document.
                 */
                // @ts-ignore
                selectAll(): void
                /**
                 * Returns the string to be used as the tooltip for <code>event</code>.
                 * This will return one of:
                 * <ol>
                 * <li>If <code>setToolTipText</code> has been invoked with a
                 * non-<code>null</code>
                 * value, it will be returned, otherwise
                 * <li>The value from invoking <code>getToolTipText</code> on
                 * the UI will be returned.
                 * </ol>
                 * By default <code>JTextComponent</code> does not register
                 * itself with the <code>ToolTipManager</code>.
                 * This means that tooltips will NOT be shown from the
                 * <code>TextUI</code> unless <code>registerComponent</code> has
                 * been invoked on the <code>ToolTipManager</code>.
                 * @param event the event in question
                 * @return the string to be used as the tooltip for <code>event</code>
                 * @see javax.swing.JComponent#setToolTipText
                 * @see javax.swing.plaf.TextUI#getToolTipText
                 * @see javax.swing.ToolTipManager#registerComponent
                 */
                // @ts-ignore
                getToolTipText(event: java.awt.event.MouseEvent): java.lang.String
                /**
                 * Returns the preferred size of the viewport for a view component.
                 * This is implemented to do the default behavior of returning
                 * the preferred size of the component.
                 * @return the <code>preferredSize</code> of a <code>JViewport</code>
                 *  whose view is this <code>Scrollable</code>
                 */
                // @ts-ignore
                getPreferredScrollableViewportSize(): java.awt.Dimension
                /**
                 * Components that display logical rows or columns should compute
                 * the scroll increment that will completely expose one new row
                 * or column, depending on the value of orientation.  Ideally,
                 * components should handle a partially exposed row or column by
                 * returning the distance required to completely expose the item.
                 * <p>
                 * The default implementation of this is to simply return 10% of
                 * the visible area.  Subclasses are likely to be able to provide
                 * a much more reasonable value.
                 * @param visibleRect the view area visible within the viewport
                 * @param orientation either <code>SwingConstants.VERTICAL</code> or
                 *    <code>SwingConstants.HORIZONTAL</code>
                 * @param direction less than zero to scroll up/left, greater than
                 *    zero for down/right
                 * @return the "unit" increment for scrolling in the specified direction
                 * @exception IllegalArgumentException for an invalid orientation
                 * @see JScrollBar#setUnitIncrement
                 */
                // @ts-ignore
                getScrollableUnitIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): int
                /**
                 * Components that display logical rows or columns should compute
                 * the scroll increment that will completely expose one block
                 * of rows or columns, depending on the value of orientation.
                 * <p>
                 * The default implementation of this is to simply return the visible
                 * area.  Subclasses will likely be able to provide a much more
                 * reasonable value.
                 * @param visibleRect the view area visible within the viewport
                 * @param orientation either <code>SwingConstants.VERTICAL</code> or
                 *    <code>SwingConstants.HORIZONTAL</code>
                 * @param direction less than zero to scroll up/left, greater than zero
                 *   for down/right
                 * @return the "block" increment for scrolling in the specified direction
                 * @exception IllegalArgumentException for an invalid orientation
                 * @see JScrollBar#setBlockIncrement
                 */
                // @ts-ignore
                getScrollableBlockIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): int
                /**
                 * Returns true if a viewport should always force the width of this
                 * <code>Scrollable</code> to match the width of the viewport.
                 * For example a normal text view that supported line wrapping
                 * would return true here, since it would be undesirable for
                 * wrapped lines to disappear beyond the right
                 * edge of the viewport.  Note that returning true for a
                 * <code>Scrollable</code> whose ancestor is a <code>JScrollPane</code>
                 * effectively disables horizontal scrolling.
                 * <p>
                 * Scrolling containers, like <code>JViewport</code>,
                 * will use this method each time they are validated.
                 * @return true if a viewport should force the <code>Scrollable</code>s
                 *    width to match its own
                 */
                // @ts-ignore
                getScrollableTracksViewportWidth(): boolean
                /**
                 * Returns true if a viewport should always force the height of this
                 * <code>Scrollable</code> to match the height of the viewport.
                 * For example a columnar text view that flowed text in left to
                 * right columns could effectively disable vertical scrolling by
                 * returning true here.
                 * <p>
                 * Scrolling containers, like <code>JViewport</code>,
                 * will use this method each time they are validated.
                 * @return true if a viewport should force the Scrollables height
                 *    to match its own
                 */
                // @ts-ignore
                getScrollableTracksViewportHeight(): boolean
                /**
                 * A convenience print method that displays a print dialog, and then
                 * prints this {@code JTextComponent} in <i>interactive</i> mode with no
                 * header or footer text. Note: this method
                 * blocks until printing is done.
                 * <p>
                 * Note: In <i>headless</i> mode, no dialogs will be shown.
                 * <p> This method calls the full featured
                 * {@link #print(MessageFormat, MessageFormat, boolean, PrintService, PrintRequestAttributeSet, boolean)
                 * print} method to perform printing.
                 * @return {#code true}, unless printing is canceled by the user
                 * @throws PrinterException if an error in the print system causes the job
                 *          to be aborted
                 * @throws SecurityException if this thread is not allowed to
                 *                            initiate a print job request
                 * @see #print(MessageFormat, MessageFormat, boolean, PrintService, PrintRequestAttributeSet, boolean)
                 * @since 1.6
                 */
                // @ts-ignore
                print(): boolean
                /**
                 * A convenience print method that displays a print dialog, and then
                 * prints this {@code JTextComponent} in <i>interactive</i> mode with
                 * the specified header and footer text. Note: this method
                 * blocks until printing is done.
                 * <p>
                 * Note: In <i>headless</i> mode, no dialogs will be shown.
                 * <p> This method calls the full featured
                 * {@link #print(MessageFormat, MessageFormat, boolean, PrintService, PrintRequestAttributeSet, boolean)
                 * print} method to perform printing.
                 * @param headerFormat the text, in {#code MessageFormat}, to be
                 *         used as the header, or {@code null} for no header
                 * @param footerFormat the text, in {#code MessageFormat}, to be
                 *         used as the footer, or {@code null} for no footer
                 * @return {#code true}, unless printing is canceled by the user
                 * @throws PrinterException if an error in the print system causes the job
                 *          to be aborted
                 * @throws SecurityException if this thread is not allowed to
                 *                            initiate a print job request
                 * @see #print(MessageFormat, MessageFormat, boolean, PrintService, PrintRequestAttributeSet, boolean)
                 * @see java.text.MessageFormat
                 * @since 1.6
                 */
                // @ts-ignore
                print(headerFormat: java.text.MessageFormat, footerFormat: java.text.MessageFormat): boolean
                /**
                 * Prints the content of this {@code JTextComponent}. Note: this method
                 * blocks until printing is done.
                 * <p>
                 * Page header and footer text can be added to the output by providing
                 * {@code MessageFormat} arguments. The printing code requests
                 * {@code Strings} from the formats, providing a single item which may be
                 * included in the formatted string: an {@code Integer} representing the
                 * current page number.
                 * <p>
                 * {@code showPrintDialog boolean} parameter allows you to specify whether
                 * a print dialog is displayed to the user. When it is, the user
                 * may use the dialog to change printing attributes or even cancel the
                 * print.
                 * <p>
                 * {@code service} allows you to provide the initial
                 * {@code PrintService} for the print dialog, or to specify
                 * {@code PrintService} to print to when the dialog is not shown.
                 * <p>
                 * {@code attributes} can be used to provide the
                 * initial values for the print dialog, or to supply any needed
                 * attributes when the dialog is not shown. {@code attributes} can
                 * be used to control how the job will print, for example
                 * <i>duplex</i> or <i>single-sided</i>.
                 * <p>
                 * {@code interactive boolean} parameter allows you to specify
                 * whether to perform printing in <i>interactive</i>
                 * mode. If {@code true}, a progress dialog, with an abort option,
                 * is displayed for the duration of printing.  This dialog is
                 * <i>modal</i> when {@code print} is invoked on the <i>Event Dispatch
                 * Thread</i> and <i>non-modal</i> otherwise. <b>Warning</b>:
                 * calling this method on the <i>Event Dispatch Thread</i> with {@code
                 * interactive false} blocks <i>all</i> events, including repaints, from
                 * being processed until printing is complete. It is only
                 * recommended when printing from an application with no
                 * visible GUI.
                 * <p>
                 * Note: In <i>headless</i> mode, {@code showPrintDialog} and
                 * {@code interactive} parameters are ignored and no dialogs are
                 * shown.
                 * <p>
                 * This method ensures the {@code document} is not mutated during printing.
                 * To indicate it visually, {@code setEnabled(false)} is set for the
                 * duration of printing.
                 * <p>
                 * This method uses {@link #getPrintable} to render document content.
                 * <p>
                 * This method is thread-safe, although most Swing methods are not. Please
                 * see <A
                 * HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">
                 * Concurrency in Swing</A> for more information.
                 * <p>
                 * <b>Sample Usage</b>. This code snippet shows a cross-platform print
                 * dialog and then prints the {@code JTextComponent} in <i>interactive</i> mode
                 * unless the user cancels the dialog:
                 * <pre>
                 * textComponent.print(new MessageFormat(&quot;My text component header&quot;),
                 * new MessageFormat(&quot;Footer. Page - {0}&quot;), true, null, null, true);
                 * </pre>
                 * <p>
                 * Executing this code off the <i>Event Dispatch Thread</i>
                 * performs printing on the <i>background</i>.
                 * The following pattern might be used for <i>background</i>
                 * printing:
                 * <pre>
                 * FutureTask&lt;Boolean&gt; future =
                 * new FutureTask&lt;Boolean&gt;(
                 * new Callable&lt;Boolean&gt;() {
                 * public Boolean call() {
                 * return textComponent.print(.....);
                 * }
                 * });
                 * executor.execute(future);
                 * </pre>
                 * @param headerFormat the text, in {#code MessageFormat}, to be
                 *         used as the header, or {@code null} for no header
                 * @param footerFormat the text, in {#code MessageFormat}, to be
                 *         used as the footer, or {@code null} for no footer
                 * @param showPrintDialog {#code true} to display a print dialog,
                 *         {@code false} otherwise
                 * @param service initial {#code PrintService}, or {@code null} for the
                 *         default
                 * @param attributes the job attributes to be applied to the print job, or
                 *         {#code null} for none
                 * @param interactive whether to print in an interactive mode
                 * @return {#code true}, unless printing is canceled by the user
                 * @throws PrinterException if an error in the print system causes the job
                 *          to be aborted
                 * @throws SecurityException if this thread is not allowed to
                 *                            initiate a print job request
                 * @see #getPrintable
                 * @see java.text.MessageFormat
                 * @see java.awt.GraphicsEnvironment#isHeadless
                 * @see java.util.concurrent.FutureTask
                 * @since 1.6
                 */
                // @ts-ignore
                print(headerFormat: java.text.MessageFormat, footerFormat: java.text.MessageFormat, showPrintDialog: boolean, service: javax.print.PrintService, attributes: javax.print.attribute.PrintRequestAttributeSet, interactive: boolean): boolean
                /**
                 * Returns a {@code Printable} to use for printing the content of this
                 * {@code JTextComponent}. The returned {@code Printable} prints
                 * the document as it looks on the screen except being reformatted
                 * to fit the paper.
                 * The returned {@code Printable} can be wrapped inside another
                 * {@code Printable} in order to create complex reports and
                 * documents.
                 * <p>
                 * The returned {@code Printable} shares the {@code document} with this
                 * {@code JTextComponent}. It is the responsibility of the developer to
                 * ensure that the {@code document} is not mutated while this {@code Printable}
                 * is used. Printing behavior is undefined when the {@code document} is
                 * mutated during printing.
                 * <p>
                 * Page header and footer text can be added to the output by providing
                 * {@code MessageFormat} arguments. The printing code requests
                 * {@code Strings} from the formats, providing a single item which may be
                 * included in the formatted string: an {@code Integer} representing the
                 * current page number.
                 * <p>
                 * The returned {@code Printable} when printed, formats the
                 * document content appropriately for the page size. For correct
                 * line wrapping the {@code imageable width} of all pages must be the
                 * same. See {@link java.awt.print.PageFormat#getImageableWidth}.
                 * <p>
                 * This method is thread-safe, although most Swing methods are not. Please
                 * see <A
                 * HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">
                 * Concurrency in Swing</A> for more information.
                 * <p>
                 * The returned {@code Printable} can be printed on any thread.
                 * <p>
                 * This implementation returned {@code Printable} performs all painting on
                 * the <i>Event Dispatch Thread</i>, regardless of what thread it is
                 * used on.
                 * @param headerFormat the text, in {#code MessageFormat}, to be
                 *         used as the header, or {@code null} for no header
                 * @param footerFormat the text, in {#code MessageFormat}, to be
                 *         used as the footer, or {@code null} for no footer
                 * @return a {#code Printable} for use in printing content of this
                 *          {@code JTextComponent}
                 * @see java.awt.print.Printable
                 * @see java.awt.print.PageFormat
                 * @see javax.swing.text.Document#render(java.lang.Runnable)
                 * @since 1.6
                 */
                // @ts-ignore
                getPrintable(headerFormat: java.text.MessageFormat, footerFormat: java.text.MessageFormat): java.awt.print.Printable
                /**
                 * Gets the <code>AccessibleContext</code> associated with this
                 * <code>JTextComponent</code>. For text components,
                 * the <code>AccessibleContext</code> takes the form of an
                 * <code>AccessibleJTextComponent</code>.
                 * A new <code>AccessibleJTextComponent</code> instance
                 * is created if necessary.
                 * @return an <code>AccessibleJTextComponent</code> that serves as the
                 *          <code>AccessibleContext</code> of this
                 *          <code>JTextComponent</code>
                 */
                // @ts-ignore
                getAccessibleContext(): javax.accessibility.AccessibleContext
                /**
                 * Returns a string representation of this <code>JTextComponent</code>.
                 * This method is intended to be used only for debugging purposes, and the
                 * content and format of the returned string may vary between
                 * implementations. The returned string may be empty but may not
                 * be <code>null</code>.
                 * <P>
                 * Overriding <code>paramString</code> to provide information about the
                 * specific new aspects of the JFC components.
                 * @return a string representation of this <code>JTextComponent</code>
                 */
                // @ts-ignore
                paramString(): java.lang.String
                // @ts-ignore
                processInputMethodEvent(e: java.awt.event.InputMethodEvent): void
                // @ts-ignore
                getInputMethodRequests(): java.awt.im.InputMethodRequests
                // @ts-ignore
                addInputMethodListener(l: java.awt.event.InputMethodListener): void
                /**
                 * Saves composed text around the specified position.
                 * The composed text (if any) around the specified position is saved
                 * in a backing store and removed from the document.
                 * @param pos  document position to identify the composed text location
                 * @return {#code true} if the composed text exists and is saved,
                 *           {@code false} otherwise
                 * @see #restoreComposedText
                 * @since 1.7
                 */
                // @ts-ignore
                saveComposedText(pos: number /*int*/): boolean
                /**
                 * Restores composed text previously saved by {@code saveComposedText}.
                 * The saved composed text is inserted back into the document. This method
                 * should be invoked only if {@code saveComposedText} returns {@code true}.
                 * @see #saveComposedText
                 * @since 1.7
                 */
                // @ts-ignore
                restoreComposedText(): void
            }
        }
    }
}
