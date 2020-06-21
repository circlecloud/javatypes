declare namespace java {
    namespace awt {
        /**
         * {@code AWTEventMulticaster} implements efficient and thread-safe multi-cast
         * event dispatching for the AWT events defined in the {@code java.awt.event}
         * package.
         * <p>
         * The following example illustrates how to use this class:
         * <pre><code>
         * public myComponent extends Component {
         * ActionListener actionListener = null;
         * public synchronized void addActionListener(ActionListener l) {
         * actionListener = AWTEventMulticaster.add(actionListener, l);
         * }
         * public synchronized void removeActionListener(ActionListener l) {
         * actionListener = AWTEventMulticaster.remove(actionListener, l);
         * }
         * public void processEvent(AWTEvent e) {
         * // when event occurs which causes "action" semantic
         * ActionListener listener = actionListener;
         * if (listener != null) {
         * listener.actionPerformed(new ActionEvent());
         * }
         * }
         * }
         * </code></pre>
         * The important point to note is the first argument to the {@code
         * add} and {@code remove} methods is the field maintaining the
         * listeners. In addition you must assign the result of the {@code add}
         * and {@code remove} methods to the field maintaining the listeners.
         * <p>
         * {@code AWTEventMulticaster} is implemented as a pair of {@code
         * EventListeners} that are set at construction time. {@code
         * AWTEventMulticaster} is immutable. The {@code add} and {@code
         * remove} methods do not alter {@code AWTEventMulticaster} in
         * anyway. If necessary, a new {@code AWTEventMulticaster} is
         * created. In this way it is safe to add and remove listeners during
         * the process of an event dispatching.  However, event listeners
         * added during the process of an event dispatch operation are not
         * notified of the event currently being dispatched.
         * <p>
         * All of the {@code add} methods allow {@code null} arguments. If the
         * first argument is {@code null}, the second argument is returned. If
         * the first argument is not {@code null} and the second argument is
         * {@code null}, the first argument is returned. If both arguments are
         * {@code non-null}, a new {@code AWTEventMulticaster} is created using
         * the two arguments and returned.
         * <p>
         * For the {@code remove} methods that take two arguments, the following is
         * returned:
         * <ul>
         * <li>{@code null}, if the first argument is {@code null}, or
         * the arguments are equal, by way of {@code ==}.
         * <li>the first argument, if the first argument is not an instance of
         * {@code AWTEventMulticaster}.
         * <li>result of invoking {@code remove(EventListener)} on the
         * first argument, supplying the second argument to the
         * {@code remove(EventListener)} method.
         * </ul>
         * <p>Swing makes use of
         * {@link javax.swing.event.EventListenerList EventListenerList} for
         * similar logic. Refer to it for details.
         * @see javax.swing.event.EventListenerList
         * @author John Rose
         * @author Amy Fowler
         * @since 1.1
         */
        // @ts-ignore
        class AWTEventMulticaster extends java.lang.Object implements java.awt.event.ComponentListener, java.awt.event.ContainerListener, java.awt.event.FocusListener, java.awt.event.KeyListener, java.awt.event.MouseListener, java.awt.event.MouseMotionListener, java.awt.event.WindowListener, java.awt.event.WindowFocusListener, java.awt.event.WindowStateListener, java.awt.event.ActionListener, java.awt.event.ItemListener, java.awt.event.AdjustmentListener, java.awt.event.TextListener, java.awt.event.InputMethodListener, java.awt.event.HierarchyListener, java.awt.event.HierarchyBoundsListener, java.awt.event.MouseWheelListener {
            /**
             * Creates an event multicaster instance which chains listener-a
             * with listener-b. Input parameters <code>a</code> and <code>b</code>
             * should not be <code>null</code>, though implementations may vary in
             * choosing whether or not to throw <code>NullPointerException</code>
             * in that case.
             * @param a listener-a
             * @param b listener-b
             */
            // @ts-ignore
            constructor(a: java.util.EventListener, b: java.util.EventListener)
            // @ts-ignore
            readonly a: java.util.EventListener
            // @ts-ignore
            readonly b: java.util.EventListener
            /**
             * Removes a listener from this multicaster.
             * <p>
             * The returned multicaster contains all the listeners in this
             * multicaster with the exception of all occurrences of {@code oldl}.
             * If the resulting multicaster contains only one regular listener
             * the regular listener may be returned.  If the resulting multicaster
             * is empty, then {@code null} may be returned instead.
             * <p>
             * No exception is thrown if {@code oldl} is {@code null}.
             * @param oldl the listener to be removed
             * @return resulting listener
             */
            // @ts-ignore
            remove(oldl: java.util.EventListener): java.util.EventListener
            /**
             * Handles the componentResized event by invoking the
             * componentResized methods on listener-a and listener-b.
             * @param e the component event
             */
            // @ts-ignore
            public componentResized(e: java.awt.event.ComponentEvent): void
            /**
             * Handles the componentMoved event by invoking the
             * componentMoved methods on listener-a and listener-b.
             * @param e the component event
             */
            // @ts-ignore
            public componentMoved(e: java.awt.event.ComponentEvent): void
            /**
             * Handles the componentShown event by invoking the
             * componentShown methods on listener-a and listener-b.
             * @param e the component event
             */
            // @ts-ignore
            public componentShown(e: java.awt.event.ComponentEvent): void
            /**
             * Handles the componentHidden event by invoking the
             * componentHidden methods on listener-a and listener-b.
             * @param e the component event
             */
            // @ts-ignore
            public componentHidden(e: java.awt.event.ComponentEvent): void
            /**
             * Handles the componentAdded container event by invoking the
             * componentAdded methods on listener-a and listener-b.
             * @param e the component event
             */
            // @ts-ignore
            public componentAdded(e: java.awt.event.ContainerEvent): void
            /**
             * Handles the componentRemoved container event by invoking the
             * componentRemoved methods on listener-a and listener-b.
             * @param e the component event
             */
            // @ts-ignore
            public componentRemoved(e: java.awt.event.ContainerEvent): void
            /**
             * Handles the focusGained event by invoking the
             * focusGained methods on listener-a and listener-b.
             * @param e the focus event
             */
            // @ts-ignore
            public focusGained(e: java.awt.event.FocusEvent): void
            /**
             * Handles the focusLost event by invoking the
             * focusLost methods on listener-a and listener-b.
             * @param e the focus event
             */
            // @ts-ignore
            public focusLost(e: java.awt.event.FocusEvent): void
            /**
             * Handles the keyTyped event by invoking the
             * keyTyped methods on listener-a and listener-b.
             * @param e the key event
             */
            // @ts-ignore
            public keyTyped(e: java.awt.event.KeyEvent): void
            /**
             * Handles the keyPressed event by invoking the
             * keyPressed methods on listener-a and listener-b.
             * @param e the key event
             */
            // @ts-ignore
            public keyPressed(e: java.awt.event.KeyEvent): void
            /**
             * Handles the keyReleased event by invoking the
             * keyReleased methods on listener-a and listener-b.
             * @param e the key event
             */
            // @ts-ignore
            public keyReleased(e: java.awt.event.KeyEvent): void
            /**
             * Handles the mouseClicked event by invoking the
             * mouseClicked methods on listener-a and listener-b.
             * @param e the mouse event
             */
            // @ts-ignore
            public mouseClicked(e: java.awt.event.MouseEvent): void
            /**
             * Handles the mousePressed event by invoking the
             * mousePressed methods on listener-a and listener-b.
             * @param e the mouse event
             */
            // @ts-ignore
            public mousePressed(e: java.awt.event.MouseEvent): void
            /**
             * Handles the mouseReleased event by invoking the
             * mouseReleased methods on listener-a and listener-b.
             * @param e the mouse event
             */
            // @ts-ignore
            public mouseReleased(e: java.awt.event.MouseEvent): void
            /**
             * Handles the mouseEntered event by invoking the
             * mouseEntered methods on listener-a and listener-b.
             * @param e the mouse event
             */
            // @ts-ignore
            public mouseEntered(e: java.awt.event.MouseEvent): void
            /**
             * Handles the mouseExited event by invoking the
             * mouseExited methods on listener-a and listener-b.
             * @param e the mouse event
             */
            // @ts-ignore
            public mouseExited(e: java.awt.event.MouseEvent): void
            /**
             * Handles the mouseDragged event by invoking the
             * mouseDragged methods on listener-a and listener-b.
             * @param e the mouse event
             */
            // @ts-ignore
            public mouseDragged(e: java.awt.event.MouseEvent): void
            /**
             * Handles the mouseMoved event by invoking the
             * mouseMoved methods on listener-a and listener-b.
             * @param e the mouse event
             */
            // @ts-ignore
            public mouseMoved(e: java.awt.event.MouseEvent): void
            /**
             * Handles the windowOpened event by invoking the
             * windowOpened methods on listener-a and listener-b.
             * @param e the window event
             */
            // @ts-ignore
            public windowOpened(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowClosing event by invoking the
             * windowClosing methods on listener-a and listener-b.
             * @param e the window event
             */
            // @ts-ignore
            public windowClosing(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowClosed event by invoking the
             * windowClosed methods on listener-a and listener-b.
             * @param e the window event
             */
            // @ts-ignore
            public windowClosed(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowIconified event by invoking the
             * windowIconified methods on listener-a and listener-b.
             * @param e the window event
             */
            // @ts-ignore
            public windowIconified(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowDeiconfied event by invoking the
             * windowDeiconified methods on listener-a and listener-b.
             * @param e the window event
             */
            // @ts-ignore
            public windowDeiconified(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowActivated event by invoking the
             * windowActivated methods on listener-a and listener-b.
             * @param e the window event
             */
            // @ts-ignore
            public windowActivated(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowDeactivated event by invoking the
             * windowDeactivated methods on listener-a and listener-b.
             * @param e the window event
             */
            // @ts-ignore
            public windowDeactivated(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowStateChanged event by invoking the
             * windowStateChanged methods on listener-a and listener-b.
             * @param e the window event
             * @since 1.4
             */
            // @ts-ignore
            public windowStateChanged(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowGainedFocus event by invoking the windowGainedFocus
             * methods on listener-a and listener-b.
             * @param e the window event
             * @since 1.4
             */
            // @ts-ignore
            public windowGainedFocus(e: java.awt.event.WindowEvent): void
            /**
             * Handles the windowLostFocus event by invoking the windowLostFocus
             * methods on listener-a and listener-b.
             * @param e the window event
             * @since 1.4
             */
            // @ts-ignore
            public windowLostFocus(e: java.awt.event.WindowEvent): void
            /**
             * Handles the actionPerformed event by invoking the
             * actionPerformed methods on listener-a and listener-b.
             * @param e the action event
             */
            // @ts-ignore
            public actionPerformed(e: java.awt.event.ActionEvent): void
            /**
             * Handles the itemStateChanged event by invoking the
             * itemStateChanged methods on listener-a and listener-b.
             * @param e the item event
             */
            // @ts-ignore
            public itemStateChanged(e: java.awt.event.ItemEvent): void
            /**
             * Handles the adjustmentValueChanged event by invoking the
             * adjustmentValueChanged methods on listener-a and listener-b.
             * @param e the adjustment event
             */
            // @ts-ignore
            public adjustmentValueChanged(e: java.awt.event.AdjustmentEvent): void
            // @ts-ignore
            public textValueChanged(e: java.awt.event.TextEvent): void
            /**
             * Handles the inputMethodTextChanged event by invoking the
             * inputMethodTextChanged methods on listener-a and listener-b.
             * @param e the item event
             */
            // @ts-ignore
            public inputMethodTextChanged(e: java.awt.event.InputMethodEvent): void
            /**
             * Handles the caretPositionChanged event by invoking the
             * caretPositionChanged methods on listener-a and listener-b.
             * @param e the item event
             */
            // @ts-ignore
            public caretPositionChanged(e: java.awt.event.InputMethodEvent): void
            /**
             * Handles the hierarchyChanged event by invoking the
             * hierarchyChanged methods on listener-a and listener-b.
             * @param e the item event
             * @since 1.3
             */
            // @ts-ignore
            public hierarchyChanged(e: java.awt.event.HierarchyEvent): void
            /**
             * Handles the ancestorMoved event by invoking the
             * ancestorMoved methods on listener-a and listener-b.
             * @param e the item event
             * @since 1.3
             */
            // @ts-ignore
            public ancestorMoved(e: java.awt.event.HierarchyEvent): void
            /**
             * Handles the ancestorResized event by invoking the
             * ancestorResized methods on listener-a and listener-b.
             * @param e the item event
             * @since 1.3
             */
            // @ts-ignore
            public ancestorResized(e: java.awt.event.HierarchyEvent): void
            /**
             * Handles the mouseWheelMoved event by invoking the
             * mouseWheelMoved methods on listener-a and listener-b.
             * @param e the mouse event
             * @since 1.4
             */
            // @ts-ignore
            public mouseWheelMoved(e: java.awt.event.MouseWheelEvent): void
            /**
             * Adds component-listener-a with component-listener-b and
             * returns the resulting multicast listener.
             * @param a component-listener-a
             * @param b component-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.ComponentListener, b: java.awt.event.ComponentListener): java.awt.event.ComponentListener
            /**
             * Adds container-listener-a with container-listener-b and
             * returns the resulting multicast listener.
             * @param a container-listener-a
             * @param b container-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.ContainerListener, b: java.awt.event.ContainerListener): java.awt.event.ContainerListener
            /**
             * Adds focus-listener-a with focus-listener-b and
             * returns the resulting multicast listener.
             * @param a focus-listener-a
             * @param b focus-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.FocusListener, b: java.awt.event.FocusListener): java.awt.event.FocusListener
            /**
             * Adds key-listener-a with key-listener-b and
             * returns the resulting multicast listener.
             * @param a key-listener-a
             * @param b key-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.KeyListener, b: java.awt.event.KeyListener): java.awt.event.KeyListener
            /**
             * Adds mouse-listener-a with mouse-listener-b and
             * returns the resulting multicast listener.
             * @param a mouse-listener-a
             * @param b mouse-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.MouseListener, b: java.awt.event.MouseListener): java.awt.event.MouseListener
            /**
             * Adds mouse-motion-listener-a with mouse-motion-listener-b and
             * returns the resulting multicast listener.
             * @param a mouse-motion-listener-a
             * @param b mouse-motion-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.MouseMotionListener, b: java.awt.event.MouseMotionListener): java.awt.event.MouseMotionListener
            /**
             * Adds window-listener-a with window-listener-b and
             * returns the resulting multicast listener.
             * @param a window-listener-a
             * @param b window-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.WindowListener, b: java.awt.event.WindowListener): java.awt.event.WindowListener
            /**
             * Adds window-state-listener-a with window-state-listener-b
             * and returns the resulting multicast listener.
             * @param a window-state-listener-a
             * @param b window-state-listener-b
             * @since 1.4
             */
            // @ts-ignore
            public static add(a: java.awt.event.WindowStateListener, b: java.awt.event.WindowStateListener): java.awt.event.WindowStateListener
            /**
             * Adds window-focus-listener-a with window-focus-listener-b
             * and returns the resulting multicast listener.
             * @param a window-focus-listener-a
             * @param b window-focus-listener-b
             * @since 1.4
             */
            // @ts-ignore
            public static add(a: java.awt.event.WindowFocusListener, b: java.awt.event.WindowFocusListener): java.awt.event.WindowFocusListener
            /**
             * Adds action-listener-a with action-listener-b and
             * returns the resulting multicast listener.
             * @param a action-listener-a
             * @param b action-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.ActionListener, b: java.awt.event.ActionListener): java.awt.event.ActionListener
            /**
             * Adds item-listener-a with item-listener-b and
             * returns the resulting multicast listener.
             * @param a item-listener-a
             * @param b item-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.ItemListener, b: java.awt.event.ItemListener): java.awt.event.ItemListener
            /**
             * Adds adjustment-listener-a with adjustment-listener-b and
             * returns the resulting multicast listener.
             * @param a adjustment-listener-a
             * @param b adjustment-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.AdjustmentListener, b: java.awt.event.AdjustmentListener): java.awt.event.AdjustmentListener
            // @ts-ignore
            public static add(a: java.awt.event.TextListener, b: java.awt.event.TextListener): java.awt.event.TextListener
            /**
             * Adds input-method-listener-a with input-method-listener-b and
             * returns the resulting multicast listener.
             * @param a input-method-listener-a
             * @param b input-method-listener-b
             */
            // @ts-ignore
            public static add(a: java.awt.event.InputMethodListener, b: java.awt.event.InputMethodListener): java.awt.event.InputMethodListener
            /**
             * Adds hierarchy-listener-a with hierarchy-listener-b and
             * returns the resulting multicast listener.
             * @param a hierarchy-listener-a
             * @param b hierarchy-listener-b
             * @since 1.3
             */
            // @ts-ignore
            public static add(a: java.awt.event.HierarchyListener, b: java.awt.event.HierarchyListener): java.awt.event.HierarchyListener
            /**
             * Adds hierarchy-bounds-listener-a with hierarchy-bounds-listener-b and
             * returns the resulting multicast listener.
             * @param a hierarchy-bounds-listener-a
             * @param b hierarchy-bounds-listener-b
             * @since 1.3
             */
            // @ts-ignore
            public static add(a: java.awt.event.HierarchyBoundsListener, b: java.awt.event.HierarchyBoundsListener): java.awt.event.HierarchyBoundsListener
            /**
             * Adds mouse-wheel-listener-a with mouse-wheel-listener-b and
             * returns the resulting multicast listener.
             * @param a mouse-wheel-listener-a
             * @param b mouse-wheel-listener-b
             * @since 1.4
             */
            // @ts-ignore
            public static add(a: java.awt.event.MouseWheelListener, b: java.awt.event.MouseWheelListener): java.awt.event.MouseWheelListener
            /**
             * Removes the old component-listener from component-listener-l and
             * returns the resulting multicast listener.
             * @param l component-listener-l
             * @param oldl the component-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.ComponentListener, oldl: java.awt.event.ComponentListener): java.awt.event.ComponentListener
            /**
             * Removes the old container-listener from container-listener-l and
             * returns the resulting multicast listener.
             * @param l container-listener-l
             * @param oldl the container-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.ContainerListener, oldl: java.awt.event.ContainerListener): java.awt.event.ContainerListener
            /**
             * Removes the old focus-listener from focus-listener-l and
             * returns the resulting multicast listener.
             * @param l focus-listener-l
             * @param oldl the focus-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.FocusListener, oldl: java.awt.event.FocusListener): java.awt.event.FocusListener
            /**
             * Removes the old key-listener from key-listener-l and
             * returns the resulting multicast listener.
             * @param l key-listener-l
             * @param oldl the key-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.KeyListener, oldl: java.awt.event.KeyListener): java.awt.event.KeyListener
            /**
             * Removes the old mouse-listener from mouse-listener-l and
             * returns the resulting multicast listener.
             * @param l mouse-listener-l
             * @param oldl the mouse-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.MouseListener, oldl: java.awt.event.MouseListener): java.awt.event.MouseListener
            /**
             * Removes the old mouse-motion-listener from mouse-motion-listener-l
             * and returns the resulting multicast listener.
             * @param l mouse-motion-listener-l
             * @param oldl the mouse-motion-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.MouseMotionListener, oldl: java.awt.event.MouseMotionListener): java.awt.event.MouseMotionListener
            /**
             * Removes the old window-listener from window-listener-l and
             * returns the resulting multicast listener.
             * @param l window-listener-l
             * @param oldl the window-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.WindowListener, oldl: java.awt.event.WindowListener): java.awt.event.WindowListener
            /**
             * Removes the old window-state-listener from window-state-listener-l
             * and returns the resulting multicast listener.
             * @param l window-state-listener-l
             * @param oldl the window-state-listener being removed
             * @since 1.4
             */
            // @ts-ignore
            public static remove(l: java.awt.event.WindowStateListener, oldl: java.awt.event.WindowStateListener): java.awt.event.WindowStateListener
            /**
             * Removes the old window-focus-listener from window-focus-listener-l
             * and returns the resulting multicast listener.
             * @param l window-focus-listener-l
             * @param oldl the window-focus-listener being removed
             * @since 1.4
             */
            // @ts-ignore
            public static remove(l: java.awt.event.WindowFocusListener, oldl: java.awt.event.WindowFocusListener): java.awt.event.WindowFocusListener
            /**
             * Removes the old action-listener from action-listener-l and
             * returns the resulting multicast listener.
             * @param l action-listener-l
             * @param oldl the action-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.ActionListener, oldl: java.awt.event.ActionListener): java.awt.event.ActionListener
            /**
             * Removes the old item-listener from item-listener-l and
             * returns the resulting multicast listener.
             * @param l item-listener-l
             * @param oldl the item-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.ItemListener, oldl: java.awt.event.ItemListener): java.awt.event.ItemListener
            /**
             * Removes the old adjustment-listener from adjustment-listener-l and
             * returns the resulting multicast listener.
             * @param l adjustment-listener-l
             * @param oldl the adjustment-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.AdjustmentListener, oldl: java.awt.event.AdjustmentListener): java.awt.event.AdjustmentListener
            // @ts-ignore
            public static remove(l: java.awt.event.TextListener, oldl: java.awt.event.TextListener): java.awt.event.TextListener
            /**
             * Removes the old input-method-listener from input-method-listener-l and
             * returns the resulting multicast listener.
             * @param l input-method-listener-l
             * @param oldl the input-method-listener being removed
             */
            // @ts-ignore
            public static remove(l: java.awt.event.InputMethodListener, oldl: java.awt.event.InputMethodListener): java.awt.event.InputMethodListener
            /**
             * Removes the old hierarchy-listener from hierarchy-listener-l and
             * returns the resulting multicast listener.
             * @param l hierarchy-listener-l
             * @param oldl the hierarchy-listener being removed
             * @since 1.3
             */
            // @ts-ignore
            public static remove(l: java.awt.event.HierarchyListener, oldl: java.awt.event.HierarchyListener): java.awt.event.HierarchyListener
            /**
             * Removes the old hierarchy-bounds-listener from
             * hierarchy-bounds-listener-l and returns the resulting multicast
             * listener.
             * @param l hierarchy-bounds-listener-l
             * @param oldl the hierarchy-bounds-listener being removed
             * @since 1.3
             */
            // @ts-ignore
            public static remove(l: java.awt.event.HierarchyBoundsListener, oldl: java.awt.event.HierarchyBoundsListener): java.awt.event.HierarchyBoundsListener
            /**
             * Removes the old mouse-wheel-listener from mouse-wheel-listener-l
             * and returns the resulting multicast listener.
             * @param l mouse-wheel-listener-l
             * @param oldl the mouse-wheel-listener being removed
             * @since 1.4
             */
            // @ts-ignore
            public static remove(l: java.awt.event.MouseWheelListener, oldl: java.awt.event.MouseWheelListener): java.awt.event.MouseWheelListener
            /**
             * Returns the resulting multicast listener from adding listener-a
             * and listener-b together.
             * If listener-a is null, it returns listener-b;
             * If listener-b is null, it returns listener-a
             * If neither are null, then it creates and returns
             * a new AWTEventMulticaster instance which chains a with b.
             * @param a event listener-a
             * @param b event listener-b
             */
            // @ts-ignore
            static addInternal(a: java.util.EventListener, b: java.util.EventListener): java.util.EventListener
            /**
             * Returns the resulting multicast listener after removing the
             * old listener from listener-l.
             * If listener-l equals the old listener OR listener-l is null,
             * returns null.
             * Else if listener-l is an instance of AWTEventMulticaster,
             * then it removes the old listener from it.
             * Else, returns listener l.
             * @param l the listener being removed from
             * @param oldl the listener being removed
             */
            // @ts-ignore
            static removeInternal(l: java.util.EventListener, oldl: java.util.EventListener): java.util.EventListener
            // @ts-ignore
            saveInternal(s: java.io.ObjectOutputStream, k: java.lang.String | string): void
            // @ts-ignore
            static save(s: java.io.ObjectOutputStream, k: java.lang.String | string, l: java.util.EventListener): void
            /**
             * Returns an array of all the objects chained as
             * <code><em>Foo</em>Listener</code>s by the specified
             * <code>java.util.EventListener</code>.
             * <code><em>Foo</em>Listener</code>s are chained by the
             * <code>AWTEventMulticaster</code> using the
             * <code>add<em>Foo</em>Listener</code> method.
             * If a <code>null</code> listener is specified, this method returns an
             * empty array. If the specified listener is not an instance of
             * <code>AWTEventMulticaster</code>, this method returns an array which
             * contains only the specified listener. If no such listeners are chained,
             * this method returns an empty array.
             * @param l the specified <code>java.util.EventListener</code>
             * @param listenerType the type of listeners requested; this parameter
             *           should specify an interface that descends from
             *           <code>java.util.EventListener</code>
             * @return an array of all objects chained as
             *           <code><em>Foo</em>Listener</code>s by the specified multicast
             *           listener, or an empty array if no such listeners have been
             *           chained by the specified multicast listener
             * @exception NullPointerException if the specified
             *              {#code listenertype} parameter is {@code null}
             * @exception ClassCastException if <code>listenerType</code>
             *           doesn't specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @since 1.4
             */
            // @ts-ignore
            public static getListeners<T extends java.util.EventListener>(l: java.util.EventListener, listenerType: java.lang.Class<T>): T
        }
    }
}
