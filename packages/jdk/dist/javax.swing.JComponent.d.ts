declare namespace javax {
    namespace swing {
        /**
         * The base class for all Swing components except top-level containers.
         * To use a component that inherits from <code>JComponent</code>,
         * you must place the component in a containment hierarchy
         * whose root is a top-level Swing container.
         * Top-level Swing containers --
         * such as <code>JFrame</code>, <code>JDialog</code>,
         * and <code>JApplet</code> --
         * are specialized components
         * that provide a place for other Swing components to paint themselves.
         * For an explanation of containment hierarchies, see
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/toplevel.html">Swing Components and the Containment Hierarchy</a>,
         * a section in <em>The Java Tutorial</em>.
         * <p>
         * The <code>JComponent</code> class provides:
         * <ul>
         * <li>The base class for both standard and custom components
         * that use the Swing architecture.
         * <li>A "pluggable look and feel" (L&amp;F) that can be specified by the
         * programmer or (optionally) selected by the user at runtime.
         * The look and feel for each component is provided by a
         * <em>UI delegate</em> -- an object that descends from
         * {@link javax.swing.plaf.ComponentUI}.
         * See <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html">How
         * to Set the Look and Feel</a>
         * in <em>The Java Tutorial</em>
         * for more information.
         * <li>Comprehensive keystroke handling.
         * See the document <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/misc/keybinding.html">How to Use Key Bindings</a>,
         * an article in <em>The Java Tutorial</em>,
         * for more information.
         * <li>Support for tool tips --
         * short descriptions that pop up when the cursor lingers
         * over a component.
         * See <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/components/tooltip.html">How
         * to Use Tool Tips</a>
         * in <em>The Java Tutorial</em>
         * for more information.
         * <li>Support for accessibility.
         * <code>JComponent</code> contains all of the methods in the
         * <code>Accessible</code> interface,
         * but it doesn't actually implement the interface.  That is the
         * responsibility of the individual classes
         * that extend <code>JComponent</code>.
         * <li>Support for component-specific properties.
         * With the {@link #putClientProperty}
         * and {@link #getClientProperty} methods,
         * you can associate name-object pairs
         * with any object that descends from <code>JComponent</code>.
         * <li>An infrastructure for painting
         * that includes double buffering and support for borders.
         * For more information see <a
         * href="http://www.oracle.com/technetwork/java/painting-140037.html#swing">Painting</a> and
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/border.htmll">How
         * to Use Borders</a>,
         * both of which are sections in <em>The Java Tutorial</em>.
         * </ul>
         * For more information on these subjects, see the
         * <a href="package-summary.html#package_description">Swing package description</a>
         * and <em>The Java Tutorial</em> section
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/jcomponent.html">The JComponent Class</a>.
         * <p>
         * <code>JComponent</code> and its subclasses document default values
         * for certain properties.  For example, <code>JTable</code> documents the
         * default row height as 16.  Each <code>JComponent</code> subclass
         * that has a <code>ComponentUI</code> will create the
         * <code>ComponentUI</code> as part of its constructor.  In order
         * to provide a particular look and feel each
         * <code>ComponentUI</code> may set properties back on the
         * <code>JComponent</code> that created it.  For example, a custom
         * look and feel may require <code>JTable</code>s to have a row
         * height of 24. The documented defaults are the value of a property
         * BEFORE the <code>ComponentUI</code> has been installed.  If you
         * need a specific value for a particular property you should
         * explicitly set it.
         * <p>
         * In release 1.4, the focus subsystem was rearchitected.
         * For more information, see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
         * How to Use the Focus Subsystem</a>,
         * a section in <em>The Java Tutorial</em>.
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see KeyStroke
         * @see Action
         * @see #setBorder
         * @see #registerKeyboardAction
         * @see JOptionPane
         * @see #setDebugGraphicsOptions
         * @see #setToolTipText
         * @see #setAutoscrolls
         * @author Hans Muller
         * @author Arnaud Weber
         */
        // @ts-ignore
        abstract class JComponent extends java.awt.Container implements java.io.Serializable, javax.swing.TransferHandler.HasGetTransferHandler {
            /**
             * Default <code>JComponent</code> constructor.  This constructor does
             * very little initialization beyond calling the <code>Container</code>
             * constructor.  For example, the initial layout manager is
             * <code>null</code>. It does, however, set the component's locale
             * property to the value returned by
             * <code>JComponent.getDefaultLocale</code>.
             * @see #getDefaultLocale
             */
            // @ts-ignore
            constructor()
            /**
             * The look and feel delegate for this component.
             */
            // @ts-ignore
            ui: javax.swing.plaf.ComponentUI
            /**
             * A list of event listeners for this component.
             */
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            /**
             * Constant used for <code>registerKeyboardAction</code> that
             * means that the command should be invoked when
             * the component has the focus.
             */
            // @ts-ignore
            public static readonly WHEN_FOCUSED: number /*int*/
            /**
             * Constant used for <code>registerKeyboardAction</code> that
             * means that the command should be invoked when the receiving
             * component is an ancestor of the focused component or is
             * itself the focused component.
             */
            // @ts-ignore
            public static readonly WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number /*int*/
            /**
             * Constant used for <code>registerKeyboardAction</code> that
             * means that the command should be invoked when
             * the receiving component is in the window that has the focus
             * or is itself the focused component.
             */
            // @ts-ignore
            public static readonly WHEN_IN_FOCUSED_WINDOW: number /*int*/
            /**
             * Constant used by some of the APIs to mean that no condition is defined.
             */
            // @ts-ignore
            public static readonly UNDEFINED_CONDITION: number /*int*/
            /**
             * The comment to display when the cursor is over the component,
             * also known as a "value tip", "flyover help", or "flyover label".
             */
            // @ts-ignore
            public static readonly TOOL_TIP_TEXT_KEY: java.lang.String | string
            /**
             * Sets whether or not <code>getComponentPopupMenu</code> should delegate
             * to the parent if this component does not have a <code>JPopupMenu</code>
             * assigned to it.
             * <p>
             * The default value for this is false, but some <code>JComponent</code>
             * subclasses that are implemented as a number of <code>JComponent</code>s
             * may set this to true.
             * <p>
             * This is a bound property.
             * @param value whether or not the JPopupMenu is inherited
             * @see #setComponentPopupMenu
             * @beaninfo bound: true
             *   description: Whether or not the JPopupMenu is inherited
             * @since 1.5
             */
            // @ts-ignore
            public setInheritsPopupMenu(value: boolean): void
            /**
             * Returns true if the JPopupMenu should be inherited from the parent.
             * @see #setComponentPopupMenu
             * @since 1.5
             */
            // @ts-ignore
            public getInheritsPopupMenu(): boolean
            /**
             * Sets the <code>JPopupMenu</code> for this <code>JComponent</code>.
             * The UI is responsible for registering bindings and adding the necessary
             * listeners such that the <code>JPopupMenu</code> will be shown at
             * the appropriate time. When the <code>JPopupMenu</code> is shown
             * depends upon the look and feel: some may show it on a mouse event,
             * some may enable a key binding.
             * <p>
             * If <code>popup</code> is null, and <code>getInheritsPopupMenu</code>
             * returns true, then <code>getComponentPopupMenu</code> will be delegated
             * to the parent. This provides for a way to make all child components
             * inherit the popupmenu of the parent.
             * <p>
             * This is a bound property.
             * @param popup - the popup that will be assigned to this component
             *                 may be null
             * @see #getComponentPopupMenu
             * @beaninfo bound: true
             *     preferred: true
             *   description: Popup to show
             * @since 1.5
             */
            // @ts-ignore
            public setComponentPopupMenu(popup: javax.swing.JPopupMenu): void
            /**
             * Returns <code>JPopupMenu</code> that assigned for this component.
             * If this component does not have a <code>JPopupMenu</code> assigned
             * to it and <code>getInheritsPopupMenu</code> is true, this
             * will return <code>getParent().getComponentPopupMenu()</code> (assuming
             * the parent is valid.)
             * @return <code>JPopupMenu</code> assigned for this component
             *          or <code>null</code> if no popup assigned
             * @see #setComponentPopupMenu
             * @since 1.5
             */
            // @ts-ignore
            public getComponentPopupMenu(): javax.swing.JPopupMenu
            /**
             * Resets the UI property to a value from the current look and feel.
             * <code>JComponent</code> subclasses must override this method
             * like this:
             * <pre>
             * public void updateUI() {
             * setUI((SliderUI)UIManager.getUI(this);
             * }
             * </pre>
             * @see #setUI
             * @see UIManager#getLookAndFeel
             * @see UIManager#getUI
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Sets the look and feel delegate for this component.
             * <code>JComponent</code> subclasses generally override this method
             * to narrow the argument type. For example, in <code>JSlider</code>:
             * <pre>
             * public void setUI(SliderUI newUI) {
             * super.setUI(newUI);
             * }
             * </pre>
             * <p>
             * Additionally <code>JComponent</code> subclasses must provide a
             * <code>getUI</code> method that returns the correct type.  For example:
             * <pre>
             * public SliderUI getUI() {
             * return (SliderUI)ui;
             * }
             * </pre>
             * @param newUI the new UI delegate
             * @see #updateUI
             * @see UIManager#getLookAndFeel
             * @see UIManager#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The component's look and feel delegate.
             */
            // @ts-ignore
            setUI(newUI: javax.swing.plaf.ComponentUI): void
            /**
             * Returns the <code>UIDefaults</code> key used to
             * look up the name of the <code>swing.plaf.ComponentUI</code>
             * class that defines the look and feel
             * for this component.  Most applications will never need to
             * call this method.  Subclasses of <code>JComponent</code> that support
             * pluggable look and feel should override this method to
             * return a <code>UIDefaults</code> key that maps to the
             * <code>ComponentUI</code> subclass that defines their look and feel.
             * @return the <code>UIDefaults</code> key for a
             *           <code>ComponentUI</code> subclass
             * @see UIDefaults#getUI
             * @beaninfo expert: true
             *  description: UIClassID
             */
            // @ts-ignore
            public getUIClassID(): string
            /**
             * Returns the graphics object used to paint this component.
             * If <code>DebugGraphics</code> is turned on we create a new
             * <code>DebugGraphics</code> object if necessary.
             * Otherwise we just configure the
             * specified graphics object's foreground and font.
             * @param g the original <code>Graphics</code> object
             * @return a <code>Graphics</code> object configured for this component
             */
            // @ts-ignore
            getComponentGraphics(g: java.awt.Graphics): java.awt.Graphics
            /**
             * Calls the UI delegate's paint method, if the UI delegate
             * is non-<code>null</code>.  We pass the delegate a copy of the
             * <code>Graphics</code> object to protect the rest of the
             * paint code from irrevocable changes
             * (for example, <code>Graphics.translate</code>).
             * <p>
             * If you override this in a subclass you should not make permanent
             * changes to the passed in <code>Graphics</code>. For example, you
             * should not alter the clip <code>Rectangle</code> or modify the
             * transform. If you need to do these operations you may find it
             * easier to create a new <code>Graphics</code> from the passed in
             * <code>Graphics</code> and manipulate it. Further, if you do not
             * invoker super's implementation you must honor the opaque property,
             * that is
             * if this component is opaque, you must completely fill in the background
             * in a non-opaque color. If you do not honor the opaque property you
             * will likely see visual artifacts.
             * <p>
             * The passed in <code>Graphics</code> object might
             * have a transform other than the identify transform
             * installed on it.  In this case, you might get
             * unexpected results if you cumulatively apply
             * another transform.
             * @param g the <code>Graphics</code> object to protect
             * @see #paint
             * @see ComponentUI
             */
            // @ts-ignore
            paintComponent(g: java.awt.Graphics): void
            /**
             * Paints this component's children.
             * If <code>shouldUseBuffer</code> is true,
             * no component ancestor has a buffer and
             * the component children can use a buffer if they have one.
             * Otherwise, one ancestor has a buffer currently in use and children
             * should not use a buffer to paint.
             * @param g  the <code>Graphics</code> context in which to paint
             * @see #paint
             * @see java.awt.Container#paint
             */
            // @ts-ignore
            paintChildren(g: java.awt.Graphics): void
            /**
             * Paints the component's border.
             * <p>
             * If you override this in a subclass you should not make permanent
             * changes to the passed in <code>Graphics</code>. For example, you
             * should not alter the clip <code>Rectangle</code> or modify the
             * transform. If you need to do these operations you may find it
             * easier to create a new <code>Graphics</code> from the passed in
             * <code>Graphics</code> and manipulate it.
             * @param g  the <code>Graphics</code> context in which to paint
             * @see #paint
             * @see #setBorder
             */
            // @ts-ignore
            paintBorder(g: java.awt.Graphics): void
            /**
             * Calls <code>paint</code>.  Doesn't clear the background but see
             * <code>ComponentUI.update</code>, which is called by
             * <code>paintComponent</code>.
             * @param g the <code>Graphics</code> context in which to paint
             * @see #paint
             * @see #paintComponent
             * @see javax.swing.plaf.ComponentUI
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void
            /**
             * Invoked by Swing to draw components.
             * Applications should not invoke <code>paint</code> directly,
             * but should instead use the <code>repaint</code> method to
             * schedule the component for redrawing.
             * <p>
             * This method actually delegates the work of painting to three
             * protected methods: <code>paintComponent</code>,
             * <code>paintBorder</code>,
             * and <code>paintChildren</code>.  They're called in the order
             * listed to ensure that children appear on top of component itself.
             * Generally speaking, the component and its children should not
             * paint in the insets area allocated to the border. Subclasses can
             * just override this method, as always.  A subclass that just
             * wants to specialize the UI (look and feel) delegate's
             * <code>paint</code> method should just override
             * <code>paintComponent</code>.
             * @param g  the <code>Graphics</code> context in which to paint
             * @see #paintComponent
             * @see #paintBorder
             * @see #paintChildren
             * @see #getComponentGraphics
             * @see #repaint
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void
            /**
             * Invoke this method to print the component. This method invokes
             * <code>print</code> on the component.
             * @param g the <code>Graphics</code> context in which to paint
             * @see #print
             * @see #printComponent
             * @see #printBorder
             * @see #printChildren
             */
            // @ts-ignore
            public printAll(g: java.awt.Graphics): void
            /**
             * Invoke this method to print the component to the specified
             * <code>Graphics</code>. This method will result in invocations
             * of <code>printComponent</code>, <code>printBorder</code> and
             * <code>printChildren</code>. It is recommended that you override
             * one of the previously mentioned methods rather than this one if
             * your intention is to customize the way printing looks. However,
             * it can be useful to override this method should you want to prepare
             * state before invoking the superclass behavior. As an example,
             * if you wanted to change the component's background color before
             * printing, you could do the following:
             * <pre>
             * public void print(Graphics g) {
             * Color orig = getBackground();
             * setBackground(Color.WHITE);
             * // wrap in try/finally so that we always restore the state
             * try {
             * super.print(g);
             * } finally {
             * setBackground(orig);
             * }
             * }
             * </pre>
             * <p>
             * Alternatively, or for components that delegate painting to other objects,
             * you can query during painting whether or not the component is in the
             * midst of a print operation. The <code>isPaintingForPrint</code> method provides
             * this ability and its return value will be changed by this method: to
             * <code>true</code> immediately before rendering and to <code>false</code>
             * immediately after. With each change a property change event is fired on
             * this component with the name <code>"paintingForPrint"</code>.
             * <p>
             * This method sets the component's state such that the double buffer
             * will not be used: painting will be done directly on the passed in
             * <code>Graphics</code>.
             * @param g the <code>Graphics</code> context in which to paint
             * @see #printComponent
             * @see #printBorder
             * @see #printChildren
             * @see #isPaintingForPrint
             */
            // @ts-ignore
            public print(g: java.awt.Graphics): void
            /**
             * This is invoked during a printing operation. This is implemented to
             * invoke <code>paintComponent</code> on the component. Override this
             * if you wish to add special painting behavior when printing.
             * @param g the <code>Graphics</code> context in which to paint
             * @see #print
             * @since 1.3
             */
            // @ts-ignore
            printComponent(g: java.awt.Graphics): void
            /**
             * Prints this component's children. This is implemented to invoke
             * <code>paintChildren</code> on the component. Override this if you
             * wish to print the children differently than painting.
             * @param g the <code>Graphics</code> context in which to paint
             * @see #print
             * @since 1.3
             */
            // @ts-ignore
            printChildren(g: java.awt.Graphics): void
            /**
             * Prints the component's border. This is implemented to invoke
             * <code>paintBorder</code> on the component. Override this if you
             * wish to print the border differently that it is painted.
             * @param g the <code>Graphics</code> context in which to paint
             * @see #print
             * @since 1.3
             */
            // @ts-ignore
            printBorder(g: java.awt.Graphics): void
            /**
             * Returns true if the component is currently painting a tile.
             * If this method returns true, paint will be called again for another
             * tile. This method returns false if you are not painting a tile or
             * if the last tile is painted.
             * Use this method to keep some state you might need between tiles.
             * @return true if the component is currently painting a tile,
             *           false otherwise
             */
            // @ts-ignore
            public isPaintingTile(): boolean
            /**
             * Returns <code>true</code> if the current painting operation on this
             * component is part of a <code>print</code> operation. This method is
             * useful when you want to customize what you print versus what you show
             * on the screen.
             * <p>
             * You can detect changes in the value of this property by listening for
             * property change events on this component with name
             * <code>"paintingForPrint"</code>.
             * <p>
             * Note: This method provides complimentary functionality to that provided
             * by other high level Swing printing APIs. However, it deals strictly with
             * painting and should not be confused as providing information on higher
             * level print processes. For example, a {@link javax.swing.JTable#print()}
             * operation doesn't necessarily result in a continuous rendering of the
             * full component, and the return value of this method can change multiple
             * times during that operation. It is even possible for the component to be
             * painted to the screen while the printing process is ongoing. In such a
             * case, the return value of this method is <code>true</code> when, and only
             * when, the table is being painted as part of the printing process.
             * @return true if the current painting operation on this component
             *          is part of a print operation
             * @see #print
             * @since 1.6
             */
            // @ts-ignore
            public isPaintingForPrint(): boolean
            /**
             * In release 1.4, the focus subsystem was rearchitected.
             * For more information, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * <p>
             * Changes this <code>JComponent</code>'s focus traversal keys to
             * CTRL+TAB and CTRL+SHIFT+TAB. Also prevents
             * <code>SortingFocusTraversalPolicy</code> from considering descendants
             * of this JComponent when computing a focus traversal cycle.
             * @see java.awt.Component#setFocusTraversalKeys
             * @see SortingFocusTraversalPolicy
             * @deprecated As of 1.4, replaced by
             *    <code>Component.setFocusTraversalKeys(int, Set)</code> and
             *    <code>Container.setFocusCycleRoot(boolean)</code>.
             */
            // @ts-ignore
            public isManagingFocus(): boolean
            /**
             * In release 1.4, the focus subsystem was rearchitected.
             * For more information, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * <p>
             * Overrides the default <code>FocusTraversalPolicy</code> for this
             * <code>JComponent</code>'s focus traversal cycle by unconditionally
             * setting the specified <code>Component</code> as the next
             * <code>Component</code> in the cycle, and this <code>JComponent</code>
             * as the specified <code>Component</code>'s previous
             * <code>Component</code> in the cycle.
             * @param aComponent the <code>Component</code> that should follow this
             *         <code>JComponent</code> in the focus traversal cycle
             * @see #getNextFocusableComponent
             * @see java.awt.FocusTraversalPolicy
             * @deprecated As of 1.4, replaced by <code>FocusTraversalPolicy</code>
             */
            // @ts-ignore
            public setNextFocusableComponent(aComponent: java.awt.Component): void
            /**
             * In release 1.4, the focus subsystem was rearchitected.
             * For more information, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * <p>
             * Returns the <code>Component</code> set by a prior call to
             * <code>setNextFocusableComponent(Component)</code> on this
             * <code>JComponent</code>.
             * @return the <code>Component</code> that will follow this
             *         <code>JComponent</code> in the focus traversal cycle, or
             *         <code>null</code> if none has been explicitly specified
             * @see #setNextFocusableComponent
             * @deprecated As of 1.4, replaced by <code>FocusTraversalPolicy</code>.
             */
            // @ts-ignore
            public getNextFocusableComponent(): java.awt.Component
            /**
             * Provides a hint as to whether or not this <code>JComponent</code>
             * should get focus. This is only a hint, and it is up to consumers that
             * are requesting focus to honor this property. This is typically honored
             * for mouse operations, but not keyboard operations. For example, look
             * and feels could verify this property is true before requesting focus
             * during a mouse operation. This would often times be used if you did
             * not want a mouse press on a <code>JComponent</code> to steal focus,
             * but did want the <code>JComponent</code> to be traversable via the
             * keyboard. If you do not want this <code>JComponent</code> focusable at
             * all, use the <code>setFocusable</code> method instead.
             * <p>
             * Please see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>,
             * for more information.
             * @param requestFocusEnabled indicates whether you want this
             *         <code>JComponent</code> to be focusable or not
             * @see <a href="../../java/awt/doc-files/FocusSpec.html">Focus Specification</a>
             * @see java.awt.Component#setFocusable
             */
            // @ts-ignore
            public setRequestFocusEnabled(requestFocusEnabled: boolean): void
            /**
             * Returns <code>true</code> if this <code>JComponent</code> should
             * get focus; otherwise returns <code>false</code>.
             * <p>
             * Please see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>,
             * for more information.
             * @return <code>true</code> if this component should get focus,
             *      otherwise returns <code>false</code>
             * @see #setRequestFocusEnabled
             * @see <a href="../../java/awt/doc-files/FocusSpec.html">Focus
             *       Specification</a>
             * @see java.awt.Component#isFocusable
             */
            // @ts-ignore
            public isRequestFocusEnabled(): boolean
            /**
             * Requests that this <code>Component</code> gets the input focus.
             * Refer to {@link java.awt.Component#requestFocus()
             * Component.requestFocus()} for a complete description of
             * this method.
             * <p>
             * Note that the use of this method is discouraged because
             * its behavior is platform dependent. Instead we recommend the
             * use of {@link #requestFocusInWindow() requestFocusInWindow()}.
             * If you would like more information on focus, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * @see java.awt.Component#requestFocusInWindow()
             * @see java.awt.Component#requestFocusInWindow(boolean)
             * @since 1.4
             */
            // @ts-ignore
            public requestFocus(): void
            /**
             * Requests that this <code>Component</code> gets the input focus.
             * Refer to {@link java.awt.Component#requestFocus(boolean)
             * Component.requestFocus(boolean)} for a complete description of
             * this method.
             * <p>
             * Note that the use of this method is discouraged because
             * its behavior is platform dependent. Instead we recommend the
             * use of {@link #requestFocusInWindow(boolean)
             * requestFocusInWindow(boolean)}.
             * If you would like more information on focus, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * @param temporary boolean indicating if the focus change is temporary
             * @return <code>false</code> if the focus change request is guaranteed to
             *          fail; <code>true</code> if it is likely to succeed
             * @see java.awt.Component#requestFocusInWindow()
             * @see java.awt.Component#requestFocusInWindow(boolean)
             * @since 1.4
             */
            // @ts-ignore
            public requestFocus(temporary: boolean): boolean
            /**
             * Requests that this <code>Component</code> gets the input focus.
             * Refer to {@link java.awt.Component#requestFocusInWindow()
             * Component.requestFocusInWindow()} for a complete description of
             * this method.
             * <p>
             * If you would like more information on focus, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * @return <code>false</code> if the focus change request is guaranteed to
             *          fail; <code>true</code> if it is likely to succeed
             * @see java.awt.Component#requestFocusInWindow()
             * @see java.awt.Component#requestFocusInWindow(boolean)
             * @since 1.4
             */
            // @ts-ignore
            public requestFocusInWindow(): boolean
            /**
             * Requests that this <code>Component</code> gets the input focus.
             * Refer to {@link java.awt.Component#requestFocusInWindow(boolean)
             * Component.requestFocusInWindow(boolean)} for a complete description of
             * this method.
             * <p>
             * If you would like more information on focus, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * @param temporary boolean indicating if the focus change is temporary
             * @return <code>false</code> if the focus change request is guaranteed to
             *          fail; <code>true</code> if it is likely to succeed
             * @see java.awt.Component#requestFocusInWindow()
             * @see java.awt.Component#requestFocusInWindow(boolean)
             * @since 1.4
             */
            // @ts-ignore
            requestFocusInWindow(temporary: boolean): boolean
            /**
             * Requests that this Component get the input focus, and that this
             * Component's top-level ancestor become the focused Window. This component
             * must be displayable, visible, and focusable for the request to be
             * granted.
             * <p>
             * This method is intended for use by focus implementations. Client code
             * should not use this method; instead, it should use
             * <code>requestFocusInWindow()</code>.
             * @see #requestFocusInWindow()
             */
            // @ts-ignore
            public grabFocus(): void
            /**
             * Sets the value to indicate whether input verifier for the
             * current focus owner will be called before this component requests
             * focus. The default is true. Set to false on components such as a
             * Cancel button or a scrollbar, which should activate even if the
             * input in the current focus owner is not "passed" by the input
             * verifier for that component.
             * @param verifyInputWhenFocusTarget value for the
             *         <code>verifyInputWhenFocusTarget</code> property
             * @see InputVerifier
             * @see #setInputVerifier
             * @see #getInputVerifier
             * @see #getVerifyInputWhenFocusTarget
             * @since 1.3
             * @beaninfo bound: true
             *  description: Whether the Component verifies input before accepting
             *               focus.
             */
            // @ts-ignore
            public setVerifyInputWhenFocusTarget(verifyInputWhenFocusTarget: boolean): void
            /**
             * Returns the value that indicates whether the input verifier for the
             * current focus owner will be called before this component requests
             * focus.
             * @return value of the <code>verifyInputWhenFocusTarget</code> property
             * @see InputVerifier
             * @see #setInputVerifier
             * @see #getInputVerifier
             * @see #setVerifyInputWhenFocusTarget
             * @since 1.3
             */
            // @ts-ignore
            public getVerifyInputWhenFocusTarget(): boolean
            /**
             * Gets the <code>FontMetrics</code> for the specified <code>Font</code>.
             * @param font the font for which font metrics is to be
             *           obtained
             * @return the font metrics for <code>font</code>
             * @throws NullPointerException if <code>font</code> is null
             * @since 1.5
             */
            // @ts-ignore
            public getFontMetrics(font: java.awt.Font): java.awt.FontMetrics
            /**
             * Sets the preferred size of this component.
             * If <code>preferredSize</code> is <code>null</code>, the UI will
             * be asked for the preferred size.
             * @beaninfo preferred: true
             *        bound: true
             *  description: The preferred size of the component.
             */
            // @ts-ignore
            public setPreferredSize(preferredSize: java.awt.Dimension): void
            /**
             * If the <code>preferredSize</code> has been set to a
             * non-<code>null</code> value just returns it.
             * If the UI delegate's <code>getPreferredSize</code>
             * method returns a non <code>null</code> value then return that;
             * otherwise defer to the component's layout manager.
             * @return the value of the <code>preferredSize</code> property
             * @see #setPreferredSize
             * @see ComponentUI
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension
            /**
             * Sets the maximum size of this component to a constant
             * value.  Subsequent calls to <code>getMaximumSize</code> will always
             * return this value; the component's UI will not be asked
             * to compute it.  Setting the maximum size to <code>null</code>
             * restores the default behavior.
             * @param maximumSize a <code>Dimension</code> containing the
             *           desired maximum allowable size
             * @see #getMaximumSize
             * @beaninfo bound: true
             *  description: The maximum size of the component.
             */
            // @ts-ignore
            public setMaximumSize(maximumSize: java.awt.Dimension): void
            /**
             * If the maximum size has been set to a non-<code>null</code> value
             * just returns it.  If the UI delegate's <code>getMaximumSize</code>
             * method returns a non-<code>null</code> value then return that;
             * otherwise defer to the component's layout manager.
             * @return the value of the <code>maximumSize</code> property
             * @see #setMaximumSize
             * @see ComponentUI
             */
            // @ts-ignore
            public getMaximumSize(): java.awt.Dimension
            /**
             * Sets the minimum size of this component to a constant
             * value.  Subsequent calls to <code>getMinimumSize</code> will always
             * return this value; the component's UI will not be asked
             * to compute it.  Setting the minimum size to <code>null</code>
             * restores the default behavior.
             * @param minimumSize the new minimum size of this component
             * @see #getMinimumSize
             * @beaninfo bound: true
             *  description: The minimum size of the component.
             */
            // @ts-ignore
            public setMinimumSize(minimumSize: java.awt.Dimension): void
            /**
             * If the minimum size has been set to a non-<code>null</code> value
             * just returns it.  If the UI delegate's <code>getMinimumSize</code>
             * method returns a non-<code>null</code> value then return that; otherwise
             * defer to the component's layout manager.
             * @return the value of the <code>minimumSize</code> property
             * @see #setMinimumSize
             * @see ComponentUI
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension
            /**
             * Gives the UI delegate an opportunity to define the precise
             * shape of this component for the sake of mouse processing.
             * @return true if this component logically contains x,y
             * @see java.awt.Component#contains(int, int)
             * @see ComponentUI
             */
            // @ts-ignore
            public contains(x: number /*int*/, y: number /*int*/): boolean
            /**
             * Sets the border of this component.  The <code>Border</code> object is
             * responsible for defining the insets for the component
             * (overriding any insets set directly on the component) and
             * for optionally rendering any border decorations within the
             * bounds of those insets.  Borders should be used (rather
             * than insets) for creating both decorative and non-decorative
             * (such as margins and padding) regions for a swing component.
             * Compound borders can be used to nest multiple borders within a
             * single component.
             * <p>
             * Although technically you can set the border on any object
             * that inherits from <code>JComponent</code>, the look and
             * feel implementation of many standard Swing components
             * doesn't work well with user-set borders.  In general,
             * when you want to set a border on a standard Swing
             * component other than <code>JPanel</code> or <code>JLabel</code>,
             * we recommend that you put the component in a <code>JPanel</code>
             * and set the border on the <code>JPanel</code>.
             * <p>
             * This is a bound property.
             * @param border the border to be rendered for this component
             * @see Border
             * @see CompoundBorder
             * @beaninfo bound: true
             *     preferred: true
             *     attribute: visualUpdate true
             *   description: The component's border.
             */
            // @ts-ignore
            public setBorder(border: javax.swing.border.Border): void
            /**
             * Returns the border of this component or <code>null</code> if no
             * border is currently set.
             * @return the border object for this component
             * @see #setBorder
             */
            // @ts-ignore
            public getBorder(): javax.swing.border.Border
            /**
             * If a border has been set on this component, returns the
             * border's insets; otherwise calls <code>super.getInsets</code>.
             * @return the value of the insets property
             * @see #setBorder
             */
            // @ts-ignore
            public getInsets(): java.awt.Insets
            /**
             * Returns an <code>Insets</code> object containing this component's inset
             * values.  The passed-in <code>Insets</code> object will be reused
             * if possible.
             * Calling methods cannot assume that the same object will be returned,
             * however.  All existing values within this object are overwritten.
             * If <code>insets</code> is null, this will allocate a new one.
             * @param insets the <code>Insets</code> object, which can be reused
             * @return the <code>Insets</code> object
             * @see #getInsets
             * @beaninfo expert: true
             */
            // @ts-ignore
            public getInsets(insets: java.awt.Insets): java.awt.Insets
            /**
             * Overrides <code>Container.getAlignmentY</code> to return
             * the horizontal alignment.
             * @return the value of the <code>alignmentY</code> property
             * @see #setAlignmentY
             * @see java.awt.Component#getAlignmentY
             */
            // @ts-ignore
            public getAlignmentY(): number /*float*/
            /**
             * Sets the the horizontal alignment.
             * @param alignmentY  the new horizontal alignment
             * @see #getAlignmentY
             * @beaninfo description: The preferred vertical alignment of the component.
             */
            // @ts-ignore
            public setAlignmentY(alignmentY: number /*float*/): void
            /**
             * Overrides <code>Container.getAlignmentX</code> to return
             * the vertical alignment.
             * @return the value of the <code>alignmentX</code> property
             * @see #setAlignmentX
             * @see java.awt.Component#getAlignmentX
             */
            // @ts-ignore
            public getAlignmentX(): number /*float*/
            /**
             * Sets the the vertical alignment.
             * @param alignmentX  the new vertical alignment
             * @see #getAlignmentX
             * @beaninfo description: The preferred horizontal alignment of the component.
             */
            // @ts-ignore
            public setAlignmentX(alignmentX: number /*float*/): void
            /**
             * Sets the input verifier for this component.
             * @param inputVerifier the new input verifier
             * @since 1.3
             * @see InputVerifier
             * @beaninfo bound: true
             *  description: The component's input verifier.
             */
            // @ts-ignore
            public setInputVerifier(inputVerifier: javax.swing.InputVerifier): void
            /**
             * Returns the input verifier for this component.
             * @return the <code>inputVerifier</code> property
             * @since 1.3
             * @see InputVerifier
             */
            // @ts-ignore
            public getInputVerifier(): javax.swing.InputVerifier
            /**
             * Returns this component's graphics context, which lets you draw
             * on a component. Use this method to get a <code>Graphics</code> object and
             * then invoke operations on that object to draw on the component.
             * @return this components graphics context
             */
            // @ts-ignore
            public getGraphics(): java.awt.Graphics
            /**
             * Enables or disables diagnostic information about every graphics
             * operation performed within the component or one of its children.
             * @param debugOptions  determines how the component should display
             *          the information;  one of the following options:
             *  <ul>
             *  <li>DebugGraphics.LOG_OPTION - causes a text message to be printed.
             *  <li>DebugGraphics.FLASH_OPTION - causes the drawing to flash several
             *  times.
             *  <li>DebugGraphics.BUFFERED_OPTION - creates an
             *          <code>ExternalWindow</code> that displays the operations
             *          performed on the View's offscreen buffer.
             *  <li>DebugGraphics.NONE_OPTION disables debugging.
             *  <li>A value of 0 causes no changes to the debugging options.
             *  </ul>
             *  <code>debugOptions</code> is bitwise OR'd into the current value
             * @beaninfo preferred: true
             *         enum: NONE_OPTION DebugGraphics.NONE_OPTION
             *               LOG_OPTION DebugGraphics.LOG_OPTION
             *               FLASH_OPTION DebugGraphics.FLASH_OPTION
             *               BUFFERED_OPTION DebugGraphics.BUFFERED_OPTION
             *  description: Diagnostic options for graphics operations.
             */
            // @ts-ignore
            public setDebugGraphicsOptions(debugOptions: number /*int*/): void
            /**
             * Returns the state of graphics debugging.
             * @return a bitwise OR'd flag of zero or more of the following options:
             *  <ul>
             *  <li>DebugGraphics.LOG_OPTION - causes a text message to be printed.
             *  <li>DebugGraphics.FLASH_OPTION - causes the drawing to flash several
             *  times.
             *  <li>DebugGraphics.BUFFERED_OPTION - creates an
             *          <code>ExternalWindow</code> that displays the operations
             *          performed on the View's offscreen buffer.
             *  <li>DebugGraphics.NONE_OPTION disables debugging.
             *  <li>A value of 0 causes no changes to the debugging options.
             *  </ul>
             * @see #setDebugGraphicsOptions
             */
            // @ts-ignore
            public getDebugGraphicsOptions(): number /*int*/
            /**
             * This method is now obsolete, please use a combination of
             * <code>getActionMap()</code> and <code>getInputMap()</code> for
             * similar behavior. For example, to bind the <code>KeyStroke</code>
             * <code>aKeyStroke</code> to the <code>Action</code> <code>anAction</code>
             * now use:
             * <pre>
             * component.getInputMap().put(aKeyStroke, aCommand);
             * component.getActionMap().put(aCommmand, anAction);
             * </pre>
             * The above assumes you want the binding to be applicable for
             * <code>WHEN_FOCUSED</code>. To register bindings for other focus
             * states use the <code>getInputMap</code> method that takes an integer.
             * <p>
             * Register a new keyboard action.
             * <code>anAction</code> will be invoked if a key event matching
             * <code>aKeyStroke</code> occurs and <code>aCondition</code> is verified.
             * The <code>KeyStroke</code> object defines a
             * particular combination of a keyboard key and one or more modifiers
             * (alt, shift, ctrl, meta).
             * <p>
             * The <code>aCommand</code> will be set in the delivered event if
             * specified.
             * <p>
             * The <code>aCondition</code> can be one of:
             * <blockquote>
             * <DL>
             * <DT>WHEN_FOCUSED
             * <DD>The action will be invoked only when the keystroke occurs
             * while the component has the focus.
             * <DT>WHEN_IN_FOCUSED_WINDOW
             * <DD>The action will be invoked when the keystroke occurs while
             * the component has the focus or if the component is in the
             * window that has the focus. Note that the component need not
             * be an immediate descendent of the window -- it can be
             * anywhere in the window's containment hierarchy. In other
             * words, whenever <em>any</em> component in the window has the focus,
             * the action registered with this component is invoked.
             * <DT>WHEN_ANCESTOR_OF_FOCUSED_COMPONENT
             * <DD>The action will be invoked when the keystroke occurs while the
             * component has the focus or if the component is an ancestor of
             * the component that has the focus.
             * </DL>
             * </blockquote>
             * <p>
             * The combination of keystrokes and conditions lets you define high
             * level (semantic) action events for a specified keystroke+modifier
             * combination (using the KeyStroke class) and direct to a parent or
             * child of a component that has the focus, or to the component itself.
             * In other words, in any hierarchical structure of components, an
             * arbitrary key-combination can be immediately directed to the
             * appropriate component in the hierarchy, and cause a specific method
             * to be invoked (usually by way of adapter objects).
             * <p>
             * If an action has already been registered for the receiving
             * container, with the same charCode and the same modifiers,
             * <code>anAction</code> will replace the action.
             * @param anAction  the <code>Action</code> to be registered
             * @param aCommand  the command to be set in the delivered event
             * @param aKeyStroke the <code>KeyStroke</code> to bind to the action
             * @param aCondition the condition that needs to be met, see above
             * @see KeyStroke
             */
            // @ts-ignore
            public registerKeyboardAction(anAction: java.awt.event.ActionListener, aCommand: java.lang.String | string, aKeyStroke: javax.swing.KeyStroke, aCondition: number /*int*/): void
            /**
             * This method is now obsolete, please use a combination of
             * <code>getActionMap()</code> and <code>getInputMap()</code> for
             * similar behavior.
             */
            // @ts-ignore
            public registerKeyboardAction(anAction: java.awt.event.ActionListener, aKeyStroke: javax.swing.KeyStroke, aCondition: number /*int*/): void
            /**
             * This method is now obsolete. To unregister an existing binding
             * you can either remove the binding from the
             * <code>ActionMap/InputMap</code>, or place a dummy binding the
             * <code>InputMap</code>. Removing the binding from the
             * <code>InputMap</code> allows bindings in parent <code>InputMap</code>s
             * to be active, whereas putting a dummy binding in the
             * <code>InputMap</code> effectively disables
             * the binding from ever happening.
             * <p>
             * Unregisters a keyboard action.
             * This will remove the binding from the <code>ActionMap</code>
             * (if it exists) as well as the <code>InputMap</code>s.
             */
            // @ts-ignore
            public unregisterKeyboardAction(aKeyStroke: javax.swing.KeyStroke): void
            /**
             * Returns the <code>KeyStrokes</code> that will initiate
             * registered actions.
             * @return an array of <code>KeyStroke</code> objects
             * @see #registerKeyboardAction
             */
            // @ts-ignore
            public getRegisteredKeyStrokes(): javax.swing.KeyStroke[]
            /**
             * Returns the condition that determines whether a registered action
             * occurs in response to the specified keystroke.
             * <p>
             * For Java 2 platform v1.3, a <code>KeyStroke</code> can be associated
             * with more than one condition.
             * For example, 'a' could be bound for the two
             * conditions <code>WHEN_FOCUSED</code> and
             * <code>WHEN_IN_FOCUSED_WINDOW</code> condition.
             * @return the action-keystroke condition
             */
            // @ts-ignore
            public getConditionForKeyStroke(aKeyStroke: javax.swing.KeyStroke): number /*int*/
            /**
             * Returns the object that will perform the action registered for a
             * given keystroke.
             * @return the <code>ActionListener</code>
             *           object invoked when the keystroke occurs
             */
            // @ts-ignore
            public getActionForKeyStroke(aKeyStroke: javax.swing.KeyStroke): java.awt.event.ActionListener
            /**
             * Unregisters all the bindings in the first tier <code>InputMaps</code>
             * and <code>ActionMap</code>. This has the effect of removing any
             * local bindings, and allowing the bindings defined in parent
             * <code>InputMap/ActionMaps</code>
             * (the UI is usually defined in the second tier) to persist.
             */
            // @ts-ignore
            public resetKeyboardActions(): void
            /**
             * Sets the <code>InputMap</code> to use under the condition
             * <code>condition</code> to
             * <code>map</code>. A <code>null</code> value implies you
             * do not want any bindings to be used, even from the UI. This will
             * not reinstall the UI <code>InputMap</code> (if there was one).
             * <code>condition</code> has one of the following values:
             * <ul>
             * <li><code>WHEN_IN_FOCUSED_WINDOW</code>
             * <li><code>WHEN_FOCUSED</code>
             * <li><code>WHEN_ANCESTOR_OF_FOCUSED_COMPONENT</code>
             * </ul>
             * If <code>condition</code> is <code>WHEN_IN_FOCUSED_WINDOW</code>
             * and <code>map</code> is not a <code>ComponentInputMap</code>, an
             * <code>IllegalArgumentException</code> will be thrown.
             * Similarly, if <code>condition</code> is not one of the values
             * listed, an <code>IllegalArgumentException</code> will be thrown.
             * @param condition one of the values listed above
             * @param map  the <code>InputMap</code> to use for the given condition
             * @exception IllegalArgumentException if <code>condition</code> is
             *           <code>WHEN_IN_FOCUSED_WINDOW</code> and <code>map</code>
             *           is not an instance of <code>ComponentInputMap</code>; or
             *           if <code>condition</code> is not one of the legal values
             *           specified above
             * @since 1.3
             */
            // @ts-ignore
            public setInputMap(condition: number /*int*/, map: javax.swing.InputMap): void
            /**
             * Returns the <code>InputMap</code> that is used during
             * <code>condition</code>.
             * @param condition one of WHEN_IN_FOCUSED_WINDOW, WHEN_FOCUSED,
             *         WHEN_ANCESTOR_OF_FOCUSED_COMPONENT
             * @return the <code>InputMap</code> for the specified
             *           <code>condition</code>
             * @since 1.3
             */
            // @ts-ignore
            public getInputMap(condition: number /*int*/): javax.swing.InputMap
            /**
             * Returns the <code>InputMap</code> that is used when the
             * component has focus.
             * This is convenience method for <code>getInputMap(WHEN_FOCUSED)</code>.
             * @return the <code>InputMap</code> used when the component has focus
             * @since 1.3
             */
            // @ts-ignore
            public getInputMap(): javax.swing.InputMap
            /**
             * Sets the <code>ActionMap</code> to <code>am</code>. This does not set
             * the parent of the <code>am</code> to be the <code>ActionMap</code>
             * from the UI (if there was one), it is up to the caller to have done this.
             * @param am  the new <code>ActionMap</code>
             * @since 1.3
             */
            // @ts-ignore
            public setActionMap(am: javax.swing.ActionMap): void
            /**
             * Returns the <code>ActionMap</code> used to determine what
             * <code>Action</code> to fire for particular <code>KeyStroke</code>
             * binding. The returned <code>ActionMap</code>, unless otherwise
             * set, will have the <code>ActionMap</code> from the UI set as the parent.
             * @return the <code>ActionMap</code> containing the key/action bindings
             * @since 1.3
             */
            // @ts-ignore
            public getActionMap(): javax.swing.ActionMap
            /**
             * Returns the baseline.  The baseline is measured from the top of
             * the component.  This method is primarily meant for
             * <code>LayoutManager</code>s to align components along their
             * baseline.  A return value less than 0 indicates this component
             * does not have a reasonable baseline and that
             * <code>LayoutManager</code>s should not align this component on
             * its baseline.
             * <p>
             * This method calls into the <code>ComponentUI</code> method of the
             * same name.  If this component does not have a <code>ComponentUI</code>
             * -1 will be returned.  If a value &gt;= 0 is
             * returned, then the component has a valid baseline for any
             * size &gt;= the minimum size and <code>getBaselineResizeBehavior</code>
             * can be used to determine how the baseline changes with size.
             * @throws IllegalArgumentException {#inheritDoc}
             * @see #getBaselineResizeBehavior
             * @see java.awt.FontMetrics
             * @since 1.6
             */
            // @ts-ignore
            public getBaseline(width: number /*int*/, height: number /*int*/): number /*int*/
            /**
             * Returns an enum indicating how the baseline of the component
             * changes as the size changes.  This method is primarily meant for
             * layout managers and GUI builders.
             * <p>
             * This method calls into the <code>ComponentUI</code> method of
             * the same name.  If this component does not have a
             * <code>ComponentUI</code>
             * <code>BaselineResizeBehavior.OTHER</code> will be
             * returned.  Subclasses should
             * never return <code>null</code>; if the baseline can not be
             * calculated return <code>BaselineResizeBehavior.OTHER</code>.  Callers
             * should first ask for the baseline using
             * <code>getBaseline</code> and if a value &gt;= 0 is returned use
             * this method.  It is acceptable for this method to return a
             * value other than <code>BaselineResizeBehavior.OTHER</code> even if
             * <code>getBaseline</code> returns a value less than 0.
             * @see #getBaseline(int, int)
             * @since 1.6
             */
            // @ts-ignore
            public getBaselineResizeBehavior(): java.awt.Component.BaselineResizeBehavior
            /**
             * In release 1.4, the focus subsystem was rearchitected.
             * For more information, see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
             * How to Use the Focus Subsystem</a>,
             * a section in <em>The Java Tutorial</em>.
             * <p>
             * Requests focus on this <code>JComponent</code>'s
             * <code>FocusTraversalPolicy</code>'s default <code>Component</code>.
             * If this <code>JComponent</code> is a focus cycle root, then its
             * <code>FocusTraversalPolicy</code> is used. Otherwise, the
             * <code>FocusTraversalPolicy</code> of this <code>JComponent</code>'s
             * focus-cycle-root ancestor is used.
             * @see java.awt.FocusTraversalPolicy#getDefaultComponent
             * @deprecated As of 1.4, replaced by
             *  <code>FocusTraversalPolicy.getDefaultComponent(Container).requestFocus()</code>
             */
            // @ts-ignore
            public requestDefaultFocus(): boolean
            /**
             * Makes the component visible or invisible.
             * Overrides <code>Component.setVisible</code>.
             * @param aFlag  true to make the component visible; false to
             *           make it invisible
             * @beaninfo attribute: visualUpdate true
             */
            // @ts-ignore
            public setVisible(aFlag: boolean): void
            /**
             * Sets whether or not this component is enabled.
             * A component that is enabled may respond to user input,
             * while a component that is not enabled cannot respond to
             * user input.  Some components may alter their visual
             * representation when they are disabled in order to
             * provide feedback to the user that they cannot take input.
             * <p>Note: Disabling a component does not disable its children.
             * <p>Note: Disabling a lightweight component does not prevent it from
             * receiving MouseEvents.
             * @param enabled true if this component should be enabled, false otherwise
             * @see java.awt.Component#isEnabled
             * @see java.awt.Component#isLightweight
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: The enabled state of the component.
             */
            // @ts-ignore
            public setEnabled(enabled: boolean): void
            /**
             * Sets the foreground color of this component.  It is up to the
             * look and feel to honor this property, some may choose to ignore
             * it.
             * @param fg  the desired foreground <code>Color</code>
             * @see java.awt.Component#getForeground
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: The foreground color of the component.
             */
            // @ts-ignore
            public setForeground(fg: java.awt.Color): void
            /**
             * Sets the background color of this component.  The background
             * color is used only if the component is opaque, and only
             * by subclasses of <code>JComponent</code> or
             * <code>ComponentUI</code> implementations.  Direct subclasses of
             * <code>JComponent</code> must override
             * <code>paintComponent</code> to honor this property.
             * <p>
             * It is up to the look and feel to honor this property, some may
             * choose to ignore it.
             * @param bg the desired background <code>Color</code>
             * @see java.awt.Component#getBackground
             * @see #setOpaque
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: The background color of the component.
             */
            // @ts-ignore
            public setBackground(bg: java.awt.Color): void
            /**
             * Sets the font for this component.
             * @param font the desired <code>Font</code> for this component
             * @see java.awt.Component#getFont
             * @beaninfo preferred: true
             *         bound: true
             *     attribute: visualUpdate true
             *   description: The font for the component.
             */
            // @ts-ignore
            public setFont(font: java.awt.Font): void
            /**
             * Returns the default locale used to initialize each JComponent's
             * locale property upon creation.
             * The default locale has "AppContext" scope so that applets (and
             * potentially multiple lightweight applications running in a single VM)
             * can have their own setting. An applet can safely alter its default
             * locale because it will have no affect on other applets (or the browser).
             * @return the default <code>Locale</code>.
             * @see #setDefaultLocale
             * @see java.awt.Component#getLocale
             * @see #setLocale
             * @since 1.4
             */
            // @ts-ignore
            public static getDefaultLocale(): java.util.Locale
            /**
             * Sets the default locale used to initialize each JComponent's locale
             * property upon creation.  The initial value is the VM's default locale.
             * The default locale has "AppContext" scope so that applets (and
             * potentially multiple lightweight applications running in a single VM)
             * can have their own setting. An applet can safely alter its default
             * locale because it will have no affect on other applets (or the browser).
             * @param l the desired default <code>Locale</code> for new components.
             * @see #getDefaultLocale
             * @see java.awt.Component#getLocale
             * @see #setLocale
             * @since 1.4
             */
            // @ts-ignore
            public static setDefaultLocale(l: java.util.Locale): void
            /**
             * Processes any key events that the component itself
             * recognizes.  This is called after the focus
             * manager and any interested listeners have been
             * given a chance to steal away the event.  This
             * method is called only if the event has not
             * yet been consumed.  This method is called prior
             * to the keyboard UI logic.
             * <p>
             * This method is implemented to do nothing.  Subclasses would
             * normally override this method if they process some
             * key events themselves.  If the event is processed,
             * it should be consumed.
             */
            // @ts-ignore
            processComponentKeyEvent(e: java.awt.event.KeyEvent): void
            /**
             * Overrides <code>processKeyEvent</code> to process events.
             */
            // @ts-ignore
            processKeyEvent(e: java.awt.event.KeyEvent): void
            /**
             * Invoked to process the key bindings for <code>ks</code> as the result
             * of the <code>KeyEvent</code> <code>e</code>. This obtains
             * the appropriate <code>InputMap</code>,
             * gets the binding, gets the action from the <code>ActionMap</code>,
             * and then (if the action is found and the component
             * is enabled) invokes <code>notifyAction</code> to notify the action.
             * @param ks  the <code>KeyStroke</code> queried
             * @param e the <code>KeyEvent</code>
             * @param condition one of the following values:
             *  <ul>
             *  <li>JComponent.WHEN_FOCUSED
             *  <li>JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT
             *  <li>JComponent.WHEN_IN_FOCUSED_WINDOW
             *  </ul>
             * @param pressed true if the key is pressed
             * @return true if there was a binding to an action, and the action
             *          was enabled
             * @since 1.3
             */
            // @ts-ignore
            processKeyBinding(ks: javax.swing.KeyStroke, e: java.awt.event.KeyEvent, condition: number /*int*/, pressed: boolean): boolean
            /**
             * Registers the text to display in a tool tip.
             * The text displays when the cursor lingers over the component.
             * <p>
             * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/tooltip.html">How to Use Tool Tips</a>
             * in <em>The Java Tutorial</em>
             * for further documentation.
             * @param text  the string to display; if the text is <code>null</code>,
             *               the tool tip is turned off for this component
             * @see #TOOL_TIP_TEXT_KEY
             * @beaninfo preferred: true
             *  description: The text to display in a tool tip.
             */
            // @ts-ignore
            public setToolTipText(text: java.lang.String | string): void
            /**
             * Returns the tooltip string that has been set with
             * <code>setToolTipText</code>.
             * @return the text of the tool tip
             * @see #TOOL_TIP_TEXT_KEY
             */
            // @ts-ignore
            public getToolTipText(): string
            /**
             * Returns the string to be used as the tooltip for <i>event</i>.
             * By default this returns any string set using
             * <code>setToolTipText</code>.  If a component provides
             * more extensive API to support differing tooltips at different locations,
             * this method should be overridden.
             */
            // @ts-ignore
            public getToolTipText(event: java.awt.event.MouseEvent): string
            /**
             * Returns the tooltip location in this component's coordinate system.
             * If <code>null</code> is returned, Swing will choose a location.
             * The default implementation returns <code>null</code>.
             * @param event  the <code>MouseEvent</code> that caused the
             *           <code>ToolTipManager</code> to show the tooltip
             * @return always returns <code>null</code>
             */
            // @ts-ignore
            public getToolTipLocation(event: java.awt.event.MouseEvent): java.awt.Point
            /**
             * Returns the preferred location to display the popup menu in this
             * component's coordinate system. It is up to the look and feel to
             * honor this property, some may choose to ignore it.
             * If {@code null}, the look and feel will choose a suitable location.
             * @param event the {#code MouseEvent} that triggered the popup to be
             *         shown, or {@code null} if the popup is not being shown as the
             *         result of a mouse event
             * @return location to display the {#code JPopupMenu}, or {@code null}
             * @since 1.5
             */
            // @ts-ignore
            public getPopupLocation(event: java.awt.event.MouseEvent): java.awt.Point
            /**
             * Returns the instance of <code>JToolTip</code> that should be used
             * to display the tooltip.
             * Components typically would not override this method,
             * but it can be used to
             * cause different tooltips to be displayed differently.
             * @return the <code>JToolTip</code> used to display this toolTip
             */
            // @ts-ignore
            public createToolTip(): javax.swing.JToolTip
            /**
             * Forwards the <code>scrollRectToVisible()</code> message to the
             * <code>JComponent</code>'s parent. Components that can service
             * the request, such as <code>JViewport</code>,
             * override this method and perform the scrolling.
             * @param aRect the visible <code>Rectangle</code>
             * @see JViewport
             */
            // @ts-ignore
            public scrollRectToVisible(aRect: java.awt.Rectangle): void
            /**
             * Sets the <code>autoscrolls</code> property.
             * If <code>true</code> mouse dragged events will be
             * synthetically generated when the mouse is dragged
             * outside of the component's bounds and mouse motion
             * has paused (while the button continues to be held
             * down). The synthetic events make it appear that the
             * drag gesture has resumed in the direction established when
             * the component's boundary was crossed.  Components that
             * support autoscrolling must handle <code>mouseDragged</code>
             * events by calling <code>scrollRectToVisible</code> with a
             * rectangle that contains the mouse event's location.  All of
             * the Swing components that support item selection and are
             * typically displayed in a <code>JScrollPane</code>
             * (<code>JTable</code>, <code>JList</code>, <code>JTree</code>,
             * <code>JTextArea</code>, and <code>JEditorPane</code>)
             * already handle mouse dragged events in this way.  To enable
             * autoscrolling in any other component, add a mouse motion
             * listener that calls <code>scrollRectToVisible</code>.
             * For example, given a <code>JPanel</code>, <code>myPanel</code>:
             * <pre>
             * MouseMotionListener doScrollRectToVisible = new MouseMotionAdapter() {
             * public void mouseDragged(MouseEvent e) {
             * Rectangle r = new Rectangle(e.getX(), e.getY(), 1, 1);
             * ((JPanel)e.getSource()).scrollRectToVisible(r);
             * }
             * };
             * myPanel.addMouseMotionListener(doScrollRectToVisible);
             * </pre>
             * The default value of the <code>autoScrolls</code>
             * property is <code>false</code>.
             * @param autoscrolls if true, synthetic mouse dragged events
             *    are generated when the mouse is dragged outside of a component's
             *    bounds and the mouse button continues to be held down; otherwise
             *    false
             * @see #getAutoscrolls
             * @see JViewport
             * @see JScrollPane
             * @beaninfo expert: true
             *  description: Determines if this component automatically scrolls its contents when dragged.
             */
            // @ts-ignore
            public setAutoscrolls(autoscrolls: boolean): void
            /**
             * Gets the <code>autoscrolls</code> property.
             * @return the value of the <code>autoscrolls</code> property
             * @see JViewport
             * @see #setAutoscrolls
             */
            // @ts-ignore
            public getAutoscrolls(): boolean
            /**
             * Sets the {@code TransferHandler}, which provides support for transfer
             * of data into and out of this component via cut/copy/paste and drag
             * and drop. This may be {@code null} if the component does not support
             * data transfer operations.
             * <p>
             * If the new {@code TransferHandler} is not {@code null}, this method
             * also installs a <b>new</b> {@code DropTarget} on the component to
             * activate drop handling through the {@code TransferHandler} and activate
             * any built-in support (such as calculating and displaying potential drop
             * locations). If you do not wish for this component to respond in any way
             * to drops, you can disable drop support entirely either by removing the
             * drop target ({@code setDropTarget(null)}) or by de-activating it
             * ({@code getDropTaget().setActive(false)}).
             * <p>
             * If the new {@code TransferHandler} is {@code null}, this method removes
             * the drop target.
             * <p>
             * Under two circumstances, this method does not modify the drop target:
             * First, if the existing drop target on this component was explicitly
             * set by the developer to a {@code non-null} value. Second, if the
             * system property {@code suppressSwingDropSupport} is {@code true}. The
             * default value for the system property is {@code false}.
             * <p>
             * Please see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/dnd/index.html">
             * How to Use Drag and Drop and Data Transfer</a>,
             * a section in <em>The Java Tutorial</em>, for more information.
             * @param newHandler the new {#code TransferHandler}
             * @see TransferHandler
             * @see #getTransferHandler
             * @since 1.4
             * @beaninfo bound: true
             *        hidden: true
             *   description: Mechanism for transfer of data to and from the component
             */
            // @ts-ignore
            public setTransferHandler(newHandler: javax.swing.TransferHandler): void
            /**
             * Gets the <code>transferHandler</code> property.
             * @return the value of the <code>transferHandler</code> property
             * @see TransferHandler
             * @see #setTransferHandler
             * @since 1.4
             */
            // @ts-ignore
            public getTransferHandler(): javax.swing.TransferHandler
            /**
             * Processes mouse events occurring on this component by
             * dispatching them to any registered
             * <code>MouseListener</code> objects, refer to
             * {@link java.awt.Component#processMouseEvent(MouseEvent)}
             * for a complete description of this method.
             * @param e the mouse event
             * @see java.awt.Component#processMouseEvent
             * @since 1.5
             */
            // @ts-ignore
            processMouseEvent(e: java.awt.event.MouseEvent): void
            /**
             * Processes mouse motion events, such as MouseEvent.MOUSE_DRAGGED.
             * @param e the <code>MouseEvent</code>
             * @see MouseEvent
             */
            // @ts-ignore
            processMouseMotionEvent(e: java.awt.event.MouseEvent): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>java.awt.Component.setEnabled(boolean)</code>.
             */
            // @ts-ignore
            public enable(): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>java.awt.Component.setEnabled(boolean)</code>.
             */
            // @ts-ignore
            public disable(): void
            /**
             * Returns the value of the property with the specified key.  Only
             * properties added with <code>putClientProperty</code> will return
             * a non-<code>null</code> value.
             * @param key the being queried
             * @return the value of this property or <code>null</code>
             * @see #putClientProperty
             */
            // @ts-ignore
            public getClientProperty(key: java.lang.Object | any): any
            /**
             * Adds an arbitrary key/value "client property" to this component.
             * <p>
             * The <code>get/putClientProperty</code> methods provide access to
             * a small per-instance hashtable. Callers can use get/putClientProperty
             * to annotate components that were created by another module.
             * For example, a
             * layout manager might store per child constraints this way. For example:
             * <pre>
             * componentA.putClientProperty("to the left of", componentB);
             * </pre>
             * If value is <code>null</code> this method will remove the property.
             * Changes to client properties are reported with
             * <code>PropertyChange</code> events.
             * The name of the property (for the sake of PropertyChange
             * events) is <code>key.toString()</code>.
             * <p>
             * The <code>clientProperty</code> dictionary is not intended to
             * support large
             * scale extensions to JComponent nor should be it considered an
             * alternative to subclassing when designing a new component.
             * @param key the new client property key
             * @param value the new client property value; if <code>null</code>
             *           this method will remove the property
             * @see #getClientProperty
             * @see #addPropertyChangeListener
             */
            // @ts-ignore
            public putClientProperty(key: java.lang.Object | any, value: java.lang.Object | any): void
            /**
             * Sets the focus traversal keys for a given traversal operation for this
             * Component.
             * Refer to
             * {@link java.awt.Component#setFocusTraversalKeys}
             * for a complete description of this method.
             * <p>
             * This method may throw a {@code ClassCastException} if any {@code Object}
             * in {@code keystrokes} is not an {@code AWTKeyStroke}.
             * @param id one of KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS, or
             *         KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS
             * @param keystrokes the Set of AWTKeyStroke for the specified operation
             * @see java.awt.KeyboardFocusManager#FORWARD_TRAVERSAL_KEYS
             * @see java.awt.KeyboardFocusManager#BACKWARD_TRAVERSAL_KEYS
             * @see java.awt.KeyboardFocusManager#UP_CYCLE_TRAVERSAL_KEYS
             * @throws IllegalArgumentException if id is not one of
             *          KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *          KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS, or
             *          KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS, or if keystrokes
             *          contains null, or if any keystroke represents a KEY_TYPED event,
             *          or if any keystroke already maps to another focus traversal
             *          operation for this Component
             * @since 1.5
             * @beaninfo bound: true
             */
            // @ts-ignore
            public setFocusTraversalKeys(id: number /*int*/, keystrokes: java.util.Set<any> | Array<any>): void
            /**
             * Returns true if this component is lightweight, that is, if it doesn't
             * have a native window system peer.
             * @return true if this component is lightweight
             */
            // @ts-ignore
            public static isLightweightComponent(c: java.awt.Component): boolean
            /**
             * @deprecated As of JDK 5,
             *  replaced by <code>Component.setBounds(int, int, int, int)</code>.
             *  <p>
             *  Moves and resizes this component.
             * @param x  the new horizontal location
             * @param y  the new vertical location
             * @param w  the new width
             * @param h  the new height
             * @see java.awt.Component#setBounds
             */
            // @ts-ignore
            public reshape(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
            /**
             * Stores the bounds of this component into "return value"
             * <code>rv</code> and returns <code>rv</code>.
             * If <code>rv</code> is <code>null</code> a new <code>Rectangle</code>
             * is allocated.  This version of <code>getBounds</code> is useful
             * if the caller wants to avoid allocating a new <code>Rectangle</code>
             * object on the heap.
             * @param rv the return value, modified to the component's bounds
             * @return <code>rv</code>; if <code>rv</code> is <code>null</code>
             *           return a newly created <code>Rectangle</code> with this
             *           component's bounds
             */
            // @ts-ignore
            public getBounds(rv: java.awt.Rectangle): java.awt.Rectangle
            /**
             * Stores the width/height of this component into "return value"
             * <code>rv</code> and returns <code>rv</code>.
             * If <code>rv</code> is <code>null</code> a new <code>Dimension</code>
             * object is allocated.  This version of <code>getSize</code>
             * is useful if the caller wants to avoid allocating a new
             * <code>Dimension</code> object on the heap.
             * @param rv the return value, modified to the component's size
             * @return <code>rv</code>
             */
            // @ts-ignore
            public getSize(rv: java.awt.Dimension): java.awt.Dimension
            /**
             * Stores the x,y origin of this component into "return value"
             * <code>rv</code> and returns <code>rv</code>.
             * If <code>rv</code> is <code>null</code> a new <code>Point</code>
             * is allocated.  This version of <code>getLocation</code> is useful
             * if the caller wants to avoid allocating a new <code>Point</code>
             * object on the heap.
             * @param rv the return value, modified to the component's location
             * @return <code>rv</code>
             */
            // @ts-ignore
            public getLocation(rv: java.awt.Point): java.awt.Point
            /**
             * Returns the current x coordinate of the component's origin.
             * This method is preferable to writing
             * <code>component.getBounds().x</code>, or
             * <code>component.getLocation().x</code> because it doesn't cause any
             * heap allocations.
             * @return the current x coordinate of the component's origin
             */
            // @ts-ignore
            public getX(): number /*int*/
            /**
             * Returns the current y coordinate of the component's origin.
             * This method is preferable to writing
             * <code>component.getBounds().y</code>, or
             * <code>component.getLocation().y</code> because it doesn't cause any
             * heap allocations.
             * @return the current y coordinate of the component's origin
             */
            // @ts-ignore
            public getY(): number /*int*/
            /**
             * Returns the current width of this component.
             * This method is preferable to writing
             * <code>component.getBounds().width</code>, or
             * <code>component.getSize().width</code> because it doesn't cause any
             * heap allocations.
             * @return the current width of this component
             */
            // @ts-ignore
            public getWidth(): number /*int*/
            /**
             * Returns the current height of this component.
             * This method is preferable to writing
             * <code>component.getBounds().height</code>, or
             * <code>component.getSize().height</code> because it doesn't cause any
             * heap allocations.
             * @return the current height of this component
             */
            // @ts-ignore
            public getHeight(): number /*int*/
            /**
             * Returns true if this component is completely opaque.
             * <p>
             * An opaque component paints every pixel within its
             * rectangular bounds. A non-opaque component paints only a subset of
             * its pixels or none at all, allowing the pixels underneath it to
             * "show through".  Therefore, a component that does not fully paint
             * its pixels provides a degree of transparency.
             * <p>
             * Subclasses that guarantee to always completely paint their contents
             * should override this method and return true.
             * @return true if this component is completely opaque
             * @see #setOpaque
             */
            // @ts-ignore
            public isOpaque(): boolean
            /**
             * If true the component paints every pixel within its bounds.
             * Otherwise, the component may not paint some or all of its
             * pixels, allowing the underlying pixels to show through.
             * <p>
             * The default value of this property is false for <code>JComponent</code>.
             * However, the default value for this property on most standard
             * <code>JComponent</code> subclasses (such as <code>JButton</code> and
             * <code>JTree</code>) is look-and-feel dependent.
             * @param isOpaque  true if this component should be opaque
             * @see #isOpaque
             * @beaninfo bound: true
             *        expert: true
             *   description: The component's opacity
             */
            // @ts-ignore
            public setOpaque(isOpaque: boolean): void
            /**
             * Returns the <code>Component</code>'s "visible rect rectangle" -  the
             * intersection of the visible rectangles for this component
             * and all of its ancestors.  The return value is stored in
             * <code>visibleRect</code>.
             * @param visibleRect a <code>Rectangle</code> computed as the
             *           intersection of all visible rectangles for this
             *           component and all of its ancestors -- this is the return
             *           value for this method
             * @see #getVisibleRect
             */
            // @ts-ignore
            public computeVisibleRect(visibleRect: java.awt.Rectangle): void
            /**
             * Returns the <code>Component</code>'s "visible rectangle" -  the
             * intersection of this component's visible rectangle,
             * <code>new Rectangle(0, 0, getWidth(), getHeight())</code>,
             * and all of its ancestors' visible rectangles.
             * @return the visible rectangle
             */
            // @ts-ignore
            public getVisibleRect(): java.awt.Rectangle
            /**
             * Support for reporting bound property changes for boolean properties.
             * This method can be called when a bound property has changed and it will
             * send the appropriate PropertyChangeEvent to any registered
             * PropertyChangeListeners.
             * @param propertyName the property whose value has changed
             * @param oldValue the property's previous value
             * @param newValue the property's new value
             */
            // @ts-ignore
            public firePropertyChange(propertyName: java.lang.String | string, oldValue: boolean, newValue: boolean): void
            /**
             * Support for reporting bound property changes for integer properties.
             * This method can be called when a bound property has changed and it will
             * send the appropriate PropertyChangeEvent to any registered
             * PropertyChangeListeners.
             * @param propertyName the property whose value has changed
             * @param oldValue the property's previous value
             * @param newValue the property's new value
             */
            // @ts-ignore
            public firePropertyChange(propertyName: java.lang.String | string, oldValue: number /*int*/, newValue: number /*int*/): void
            // @ts-ignore
            public firePropertyChange(propertyName: java.lang.String | string, oldValue: string, newValue: string): void
            /**
             * Supports reporting constrained property changes.
             * This method can be called when a constrained property has changed
             * and it will send the appropriate <code>PropertyChangeEvent</code>
             * to any registered <code>VetoableChangeListeners</code>.
             * @param propertyName  the name of the property that was listened on
             * @param oldValue  the old value of the property
             * @param newValue  the new value of the property
             * @exception java.beans.PropertyVetoException when the attempt to set the
             *           property is vetoed by the component
             */
            // @ts-ignore
            fireVetoableChange(propertyName: java.lang.String | string, oldValue: java.lang.Object | any, newValue: java.lang.Object | any): void
            /**
             * Adds a <code>VetoableChangeListener</code> to the listener list.
             * The listener is registered for all properties.
             * @param listener  the <code>VetoableChangeListener</code> to be added
             */
            // @ts-ignore
            public addVetoableChangeListener(listener: java.beans.VetoableChangeListener): void
            /**
             * Removes a <code>VetoableChangeListener</code> from the listener list.
             * This removes a <code>VetoableChangeListener</code> that was registered
             * for all properties.
             * @param listener  the <code>VetoableChangeListener</code> to be removed
             */
            // @ts-ignore
            public removeVetoableChangeListener(listener: java.beans.VetoableChangeListener): void
            /**
             * Returns an array of all the vetoable change listeners
             * registered on this component.
             * @return all of the component's <code>VetoableChangeListener</code>s
             *          or an empty
             *          array if no vetoable change listeners are currently registered
             * @see #addVetoableChangeListener
             * @see #removeVetoableChangeListener
             * @since 1.4
             */
            // @ts-ignore
            public getVetoableChangeListeners(): java.beans.VetoableChangeListener[]
            /**
             * Returns the top-level ancestor of this component (either the
             * containing <code>Window</code> or <code>Applet</code>),
             * or <code>null</code> if this component has not
             * been added to any container.
             * @return the top-level <code>Container</code> that this component is in,
             *           or <code>null</code> if not in any container
             */
            // @ts-ignore
            public getTopLevelAncestor(): java.awt.Container
            /**
             * Registers <code>listener</code> so that it will receive
             * <code>AncestorEvents</code> when it or any of its ancestors
             * move or are made visible or invisible.
             * Events are also sent when the component or its ancestors are added
             * or removed from the containment hierarchy.
             * @param listener  the <code>AncestorListener</code> to register
             * @see AncestorEvent
             */
            // @ts-ignore
            public addAncestorListener(listener: javax.swing.event.AncestorListener): void
            /**
             * Unregisters <code>listener</code> so that it will no longer receive
             * <code>AncestorEvents</code>.
             * @param listener  the <code>AncestorListener</code> to be removed
             * @see #addAncestorListener
             */
            // @ts-ignore
            public removeAncestorListener(listener: javax.swing.event.AncestorListener): void
            /**
             * Returns an array of all the ancestor listeners
             * registered on this component.
             * @return all of the component's <code>AncestorListener</code>s
             *          or an empty
             *          array if no ancestor listeners are currently registered
             * @see #addAncestorListener
             * @see #removeAncestorListener
             * @since 1.4
             */
            // @ts-ignore
            public getAncestorListeners(): javax.swing.event.AncestorListener[]
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>JComponent</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal,
             * such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>JComponent</code> <code>c</code>
             * for its mouse listeners with the following code:
             * <pre>MouseListener[] mls = (MouseListener[])(c.getListeners(MouseListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             * @param listenerType the type of listeners requested; this parameter
             *           should specify an interface that descends from
             *           <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s on this component,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code>
             *           doesn't specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @since 1.3
             * @see #getVetoableChangeListeners
             * @see #getAncestorListeners
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Notifies this component that it now has a parent component.
             * When this method is invoked, the chain of parent components is
             * set up with <code>KeyboardAction</code> event listeners.
             * This method is called by the toolkit internally and should
             * not be called directly by programs.
             * @see #registerKeyboardAction
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Notifies this component that it no longer has a parent component.
             * When this method is invoked, any <code>KeyboardAction</code>s
             * set up in the the chain of parent components are removed.
             * This method is called by the toolkit internally and should
             * not be called directly by programs.
             * @see #registerKeyboardAction
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Adds the specified region to the dirty region list if the component
             * is showing.  The component will be repainted after all of the
             * currently pending events have been dispatched.
             * @param tm  this parameter is not used
             * @param x  the x value of the dirty region
             * @param y  the y value of the dirty region
             * @param width  the width of the dirty region
             * @param height  the height of the dirty region
             * @see #isPaintingOrigin()
             * @see java.awt.Component#isShowing
             * @see RepaintManager#addDirtyRegion
             */
            // @ts-ignore
            public repaint(tm: number /*long*/, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
            /**
             * Adds the specified region to the dirty region list if the component
             * is showing.  The component will be repainted after all of the
             * currently pending events have been dispatched.
             * @param r a <code>Rectangle</code> containing the dirty region
             * @see #isPaintingOrigin()
             * @see java.awt.Component#isShowing
             * @see RepaintManager#addDirtyRegion
             */
            // @ts-ignore
            public repaint(r: java.awt.Rectangle): void
            /**
             * Supports deferred automatic layout.
             * <p>
             * Calls <code>invalidate</code> and then adds this component's
             * <code>validateRoot</code> to a list of components that need to be
             * validated.  Validation will occur after all currently pending
             * events have been dispatched.  In other words after this method
             * is called,  the first validateRoot (if any) found when walking
             * up the containment hierarchy of this component will be validated.
             * By default, <code>JRootPane</code>, <code>JScrollPane</code>,
             * and <code>JTextField</code> return true
             * from <code>isValidateRoot</code>.
             * <p>
             * This method will automatically be called on this component
             * when a property value changes such that size, location, or
             * internal layout of this component has been affected.  This automatic
             * updating differs from the AWT because programs generally no
             * longer need to invoke <code>validate</code> to get the contents of the
             * GUI to update.
             * @see java.awt.Component#invalidate
             * @see java.awt.Container#validate
             * @see #isValidateRoot
             * @see RepaintManager#addInvalidComponent
             */
            // @ts-ignore
            public revalidate(): void
            /**
             * If this method returns true, <code>revalidate</code> calls by
             * descendants of this component will cause the entire tree
             * beginning with this root to be validated.
             * Returns false by default.  <code>JScrollPane</code> overrides
             * this method and returns true.
             * @return always returns false
             * @see #revalidate
             * @see java.awt.Component#invalidate
             * @see java.awt.Container#validate
             * @see java.awt.Container#isValidateRoot
             */
            // @ts-ignore
            public isValidateRoot(): boolean
            /**
             * Returns true if this component tiles its children -- that is, if
             * it can guarantee that the children will not overlap.  The
             * repainting system is substantially more efficient in this
             * common case.  <code>JComponent</code> subclasses that can't make this
             * guarantee, such as <code>JLayeredPane</code>,
             * should override this method to return false.
             * @return always returns true
             */
            // @ts-ignore
            public isOptimizedDrawingEnabled(): boolean
            /**
             * Returns {@code true} if a paint triggered on a child component should cause
             * painting to originate from this Component, or one of its ancestors.
             * <p>
             * Calling {@link #repaint} or {@link #paintImmediately(int, int, int, int)}
             * on a Swing component will result in calling
             * the {@link JComponent#paintImmediately(int, int, int, int)} method of
             * the first ancestor which {@code isPaintingOrigin()} returns {@code true}, if there are any.
             * <p>
             * {@code JComponent} subclasses that need to be painted when any of their
             * children are repainted should override this method to return {@code true}.
             * @return always returns {#code false}
             * @see #paintImmediately(int, int, int, int)
             */
            // @ts-ignore
            isPaintingOrigin(): boolean
            /**
             * Paints the specified region in this component and all of its
             * descendants that overlap the region, immediately.
             * <p>
             * It's rarely necessary to call this method.  In most cases it's
             * more efficient to call repaint, which defers the actual painting
             * and can collapse redundant requests into a single paint call.
             * This method is useful if one needs to update the display while
             * the current event is being dispatched.
             * <p>
             * This method is to be overridden when the dirty region needs to be changed
             * for components that are painting origins.
             * @param x  the x value of the region to be painted
             * @param y  the y value of the region to be painted
             * @param w  the width of the region to be painted
             * @param h  the height of the region to be painted
             * @see #repaint
             * @see #isPaintingOrigin()
             */
            // @ts-ignore
            public paintImmediately(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
            /**
             * Paints the specified region now.
             * @param r a <code>Rectangle</code> containing the region to be painted
             */
            // @ts-ignore
            public paintImmediately(r: java.awt.Rectangle): void
            /**
             * Sets whether this component should use a buffer to paint.
             * If set to true, all the drawing from this component will be done
             * in an offscreen painting buffer. The offscreen painting buffer will
             * the be copied onto the screen.
             * If a <code>Component</code> is buffered and one of its ancestor
             * is also buffered, the ancestor buffer will be used.
             * @param aFlag if true, set this component to be double buffered
             */
            // @ts-ignore
            public setDoubleBuffered(aFlag: boolean): void
            /**
             * Returns whether this component should use a buffer to paint.
             * @return true if this component is double buffered, otherwise false
             */
            // @ts-ignore
            public isDoubleBuffered(): boolean
            /**
             * Returns the <code>JRootPane</code> ancestor for this component.
             * @return the <code>JRootPane</code> that contains this component,
             *           or <code>null</code> if no <code>JRootPane</code> is found
             */
            // @ts-ignore
            public getRootPane(): javax.swing.JRootPane
            /**
             * Returns a string representation of this <code>JComponent</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JComponent</code>
             */
            // @ts-ignore
            paramString(): string
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public hide(): void
        }
    }
}
