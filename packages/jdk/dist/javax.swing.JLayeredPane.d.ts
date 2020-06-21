declare namespace javax {
    namespace swing {
        /**
         * <code>JLayeredPane</code> adds depth to a JFC/Swing container,
         * allowing components to overlap each other when needed.
         * An <code>Integer</code> object specifies each component's depth in the
         * container, where higher-numbered components sit &quot;on top&quot; of other
         * components.
         * For task-oriented documentation and examples of using layered panes see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/layeredpane.html">How to Use a Layered Pane</a>,
         * a section in <em>The Java Tutorial</em>.
         * <TABLE STYLE="FLOAT:RIGHT" BORDER="0" SUMMARY="layout">
         * <TR>
         * <TD ALIGN="CENTER">
         * <P STYLE="TEXT-ALIGN:CENTER"><IMG SRC="doc-files/JLayeredPane-1.gif"
         * alt="The following text describes this image."
         * WIDTH="269" HEIGHT="264" STYLE="FLOAT:BOTTOM; BORDER=0">
         * </TD>
         * </TR>
         * </TABLE>
         * For convenience, <code>JLayeredPane</code> divides the depth-range
         * into several different layers. Putting a component into one of those
         * layers makes it easy to ensure that components overlap properly,
         * without having to worry about specifying numbers for specific depths:
         * <DL>
         * <DT><FONT SIZE="2">DEFAULT_LAYER</FONT></DT>
         * <DD>The standard layer, where most components go. This the bottommost
         * layer.
         * <DT><FONT SIZE="2">PALETTE_LAYER</FONT></DT>
         * <DD>The palette layer sits over the default layer. Useful for floating
         * toolbars and palettes, so they can be positioned above other components.
         * <DT><FONT SIZE="2">MODAL_LAYER</FONT></DT>
         * <DD>The layer used for modal dialogs. They will appear on top of any
         * toolbars, palettes, or standard components in the container.
         * <DT><FONT SIZE="2">POPUP_LAYER</FONT></DT>
         * <DD>The popup layer displays above dialogs. That way, the popup windows
         * associated with combo boxes, tooltips, and other help text will appear
         * above the component, palette, or dialog that generated them.
         * <DT><FONT SIZE="2">DRAG_LAYER</FONT></DT>
         * <DD>When dragging a component, reassigning it to the drag layer ensures
         * that it is positioned over every other component in the container. When
         * finished dragging, it can be reassigned to its normal layer.
         * </DL>
         * The <code>JLayeredPane</code> methods <code>moveToFront(Component)</code>,
         * <code>moveToBack(Component)</code> and <code>setPosition</code> can be used
         * to reposition a component within its layer. The <code>setLayer</code> method
         * can also be used to change the component's current layer.
         * <h2>Details</h2>
         * <code>JLayeredPane</code> manages its list of children like
         * <code>Container</code>, but allows for the definition of a several
         * layers within itself. Children in the same layer are managed exactly
         * like the normal <code>Container</code> object,
         * with the added feature that when children components overlap, children
         * in higher layers display above the children in lower layers.
         * <p>
         * Each layer is a distinct integer number. The layer attribute can be set
         * on a <code>Component</code> by passing an <code>Integer</code>
         * object during the add call.<br> For example:
         * <PRE>
         * layeredPane.add(child, JLayeredPane.DEFAULT_LAYER);
         * or
         * layeredPane.add(child, new Integer(10));
         * </PRE>
         * The layer attribute can also be set on a Component by calling<PRE>
         * layeredPaneParent.setLayer(child, 10)</PRE>
         * on the <code>JLayeredPane</code> that is the parent of component. The layer
         * should be set <i>before</i> adding the child to the parent.
         * <p>
         * Higher number layers display above lower number layers. So, using
         * numbers for the layers and letters for individual components, a
         * representative list order would look like this:<PRE>
         * 5a, 5b, 5c, 2a, 2b, 2c, 1a </PRE>
         * where the leftmost components are closest to the top of the display.
         * <p>
         * A component can be moved to the top or bottom position within its
         * layer by calling <code>moveToFront</code> or <code>moveToBack</code>.
         * <p>
         * The position of a component within a layer can also be specified directly.
         * Valid positions range from 0 up to one less than the number of
         * components in that layer. A value of -1 indicates the bottommost
         * position. A value of 0 indicates the topmost position. Unlike layer
         * numbers, higher position values are <i>lower</i> in the display.
         * <blockquote>
         * <b>Note:</b> This sequence (defined by java.awt.Container) is the reverse
         * of the layer numbering sequence. Usually though, you will use <code>moveToFront</code>,
         * <code>moveToBack</code>, and <code>setLayer</code>.
         * </blockquote>
         * Here are some examples using the method add(Component, layer, position):
         * Calling add(5x, 5, -1) results in:<PRE>
         * 5a, 5b, 5c, 5x, 2a, 2b, 2c, 1a </PRE>
         * Calling add(5z, 5, 2) results in:<PRE>
         * 5a, 5b, 5z, 5c, 5x, 2a, 2b, 2c, 1a </PRE>
         * Calling add(3a, 3, 7) results in:<PRE>
         * 5a, 5b, 5z, 5c, 5x, 3a, 2a, 2b, 2c, 1a </PRE>
         * Using normal paint/event mechanics results in 1a appearing at the bottom
         * and 5a being above all other components.
         * <p>
         * <b>Note:</b> that these layers are simply a logical construct and LayoutManagers
         * will affect all child components of this container without regard for
         * layer settings.
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
         * @author David Kloba
         */
        // @ts-ignore
        class JLayeredPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
            /**
             * Create a new JLayeredPane
             */
            // @ts-ignore
            constructor()
            /**
             * Convenience object defining the Default layer. Equivalent to new Integer(0).
             */
            // @ts-ignore
            public static readonly DEFAULT_LAYER: java.lang.Integer | number
            /**
             * Convenience object defining the Palette layer. Equivalent to new Integer(100).
             */
            // @ts-ignore
            public static readonly PALETTE_LAYER: java.lang.Integer | number
            /**
             * Convenience object defining the Modal layer. Equivalent to new Integer(200).
             */
            // @ts-ignore
            public static readonly MODAL_LAYER: java.lang.Integer | number
            /**
             * Convenience object defining the Popup layer. Equivalent to new Integer(300).
             */
            // @ts-ignore
            public static readonly POPUP_LAYER: java.lang.Integer | number
            /**
             * Convenience object defining the Drag layer. Equivalent to new Integer(400).
             */
            // @ts-ignore
            public static readonly DRAG_LAYER: java.lang.Integer | number
            /**
             * Convenience object defining the Frame Content layer.
             * This layer is normally only use to position the contentPane and menuBar
             * components of JFrame.
             * Equivalent to new Integer(-30000).
             * @see JFrame
             */
            // @ts-ignore
            public static readonly FRAME_CONTENT_LAYER: java.lang.Integer | number
            /**
             * Bound property
             */
            // @ts-ignore
            public static readonly LAYER_PROPERTY: java.lang.String | string
            // @ts-ignore
            addImpl(comp: java.awt.Component, constraints: java.lang.Object | any, index: number /*int*/): void
            /**
             * Remove the indexed component from this pane.
             * This is the absolute index, ignoring layers.
             * @param index  an int specifying the component to remove
             * @see #getIndexOf
             */
            // @ts-ignore
            public remove(index: number /*int*/): void
            /**
             * Removes all the components from this container.
             * @since 1.5
             */
            // @ts-ignore
            public removeAll(): void
            /**
             * Returns false if components in the pane can overlap, which makes
             * optimized drawing impossible. Otherwise, returns true.
             * @return false if components can overlap, else true
             * @see JComponent#isOptimizedDrawingEnabled
             */
            // @ts-ignore
            public isOptimizedDrawingEnabled(): boolean
            /**
             * Sets the layer property on a JComponent. This method does not cause
             * any side effects like setLayer() (painting, add/remove, etc).
             * Normally you should use the instance method setLayer(), in order to
             * get the desired side-effects (like repainting).
             * @param c      the JComponent to move
             * @param layer  an int specifying the layer to move it to
             * @see #setLayer
             */
            // @ts-ignore
            public static putLayer(c: javax.swing.JComponent, layer: number /*int*/): void
            /**
             * Gets the layer property for a JComponent, it
             * does not cause any side effects like setLayer(). (painting, add/remove, etc)
             * Normally you should use the instance method getLayer().
             * @param c  the JComponent to check
             * @return an int specifying the component's layer
             */
            // @ts-ignore
            public static getLayer(c: javax.swing.JComponent): number /*int*/
            /**
             * Convenience method that returns the first JLayeredPane which
             * contains the specified component. Note that all JFrames have a
             * JLayeredPane at their root, so any component in a JFrame will
             * have a JLayeredPane parent.
             * @param c the Component to check
             * @return the JLayeredPane that contains the component, or
             *          null if no JLayeredPane is found in the component
             *          hierarchy
             * @see JFrame
             * @see JRootPane
             */
            // @ts-ignore
            public static getLayeredPaneAbove(c: java.awt.Component): javax.swing.JLayeredPane
            /**
             * Sets the layer attribute on the specified component,
             * making it the bottommost component in that layer.
             * Should be called before adding to parent.
             * @param c     the Component to set the layer for
             * @param layer an int specifying the layer to set, where
             *               lower numbers are closer to the bottom
             */
            // @ts-ignore
            public setLayer(c: java.awt.Component, layer: number /*int*/): void
            /**
             * Sets the layer attribute for the specified component and
             * also sets its position within that layer.
             * @param c         the Component to set the layer for
             * @param layer     an int specifying the layer to set, where
             *                   lower numbers are closer to the bottom
             * @param position  an int specifying the position within the
             *                   layer, where 0 is the topmost position and -1
             *                   is the bottommost position
             */
            // @ts-ignore
            public setLayer(c: java.awt.Component, layer: number /*int*/, position: number /*int*/): void
            /**
             * Returns the layer attribute for the specified Component.
             * @param c  the Component to check
             * @return an int specifying the component's current layer
             */
            // @ts-ignore
            public getLayer(c: java.awt.Component): number /*int*/
            /**
             * Returns the index of the specified Component.
             * This is the absolute index, ignoring layers.
             * Index numbers, like position numbers, have the topmost component
             * at index zero. Larger numbers are closer to the bottom.
             * @param c  the Component to check
             * @return an int specifying the component's index
             */
            // @ts-ignore
            public getIndexOf(c: java.awt.Component): number /*int*/
            /**
             * Moves the component to the top of the components in its current layer
             * (position 0).
             * @param c the Component to move
             * @see #setPosition(Component, int)
             */
            // @ts-ignore
            public moveToFront(c: java.awt.Component): void
            /**
             * Moves the component to the bottom of the components in its current layer
             * (position -1).
             * @param c the Component to move
             * @see #setPosition(Component, int)
             */
            // @ts-ignore
            public moveToBack(c: java.awt.Component): void
            /**
             * Moves the component to <code>position</code> within its current layer,
             * where 0 is the topmost position within the layer and -1 is the bottommost
             * position.
             * <p>
             * <b>Note:</b> Position numbering is defined by java.awt.Container, and
             * is the opposite of layer numbering. Lower position numbers are closer
             * to the top (0 is topmost), and higher position numbers are closer to
             * the bottom.
             * @param c         the Component to move
             * @param position  an int in the range -1..N-1, where N is the number of
             *                   components in the component's current layer
             */
            // @ts-ignore
            public setPosition(c: java.awt.Component, position: number /*int*/): void
            /**
             * Get the relative position of the component within its layer.
             * @param c  the Component to check
             * @return an int giving the component's position, where 0 is the
             *          topmost position and the highest index value = the count
             *          count of components at that layer, minus 1
             * @see #getComponentCountInLayer
             */
            // @ts-ignore
            public getPosition(c: java.awt.Component): number /*int*/
            /**
             * Returns the highest layer value from all current children.
             * Returns 0 if there are no children.
             * @return an int indicating the layer of the topmost component in the
             *          pane, or zero if there are no children
             */
            // @ts-ignore
            public highestLayer(): number /*int*/
            /**
             * Returns the lowest layer value from all current children.
             * Returns 0 if there are no children.
             * @return an int indicating the layer of the bottommost component in the
             *          pane, or zero if there are no children
             */
            // @ts-ignore
            public lowestLayer(): number /*int*/
            /**
             * Returns the number of children currently in the specified layer.
             * @param layer  an int specifying the layer to check
             * @return an int specifying the number of components in that layer
             */
            // @ts-ignore
            public getComponentCountInLayer(layer: number /*int*/): number /*int*/
            /**
             * Returns an array of the components in the specified layer.
             * @param layer  an int specifying the layer to check
             * @return an array of Components contained in that layer
             */
            // @ts-ignore
            public getComponentsInLayer(layer: number /*int*/): java.awt.Component[]
            /**
             * Paints this JLayeredPane within the specified graphics context.
             * @param g  the Graphics context within which to paint
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void
            /**
             * Returns the hashtable that maps components to layers.
             * @return the Hashtable used to map components to their layers
             */
            // @ts-ignore
            getComponentToLayer(): java.util.Hashtable<java.awt.Component, java.lang.Integer | number>
            /**
             * Returns the Integer object associated with a specified layer.
             * @param layer an int specifying the layer
             * @return an Integer object for that layer
             */
            // @ts-ignore
            getObjectForLayer(layer: number /*int*/): number
            /**
             * Primitive method that determines the proper location to
             * insert a new child based on layer and position requests.
             * @param layer     an int specifying the layer
             * @param position  an int specifying the position within the layer
             * @return an int giving the (absolute) insertion-index
             * @see #getIndexOf
             */
            // @ts-ignore
            insertIndexForLayer(layer: number /*int*/, position: number /*int*/): number /*int*/
            /**
             * Returns a string representation of this JLayeredPane. This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this JLayeredPane.
             */
            // @ts-ignore
            paramString(): string
            /**
             * Gets the AccessibleContext associated with this JLayeredPane.
             * For layered panes, the AccessibleContext takes the form of an
             * AccessibleJLayeredPane.
             * A new AccessibleJLayeredPane instance is created if necessary.
             * @return an AccessibleJLayeredPane that serves as the
             *          AccessibleContext of this JLayeredPane
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
