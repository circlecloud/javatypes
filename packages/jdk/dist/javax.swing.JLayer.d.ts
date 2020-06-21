declare namespace javax {
    namespace swing {
        /**
         * {@code JLayer} is a universal decorator for Swing components
         * which enables you to implement various advanced painting effects as well as
         * receive notifications of all {@code AWTEvent}s generated within its borders.
         * <p>
         * {@code JLayer} delegates the handling of painting and input events to a
         * {@link javax.swing.plaf.LayerUI} object, which performs the actual decoration.
         * <p>
         * The custom painting implemented in the {@code LayerUI} and events notification
         * work for the JLayer itself and all its subcomponents.
         * This combination enables you to enrich existing components
         * by adding new advanced functionality such as temporary locking of a hierarchy,
         * data tips for compound components, enhanced mouse scrolling etc and so on.
         * <p>
         * {@code JLayer} is a good solution if you only need to do custom painting
         * over compound component or catch input events from its subcomponents.
         * <pre>
         * import javax.swing.*;
         * import javax.swing.plaf.LayerUI;
         * import java.awt.*;
         * public class JLayerSample {
         * private static JLayer&lt;JComponent&gt; createLayer() {
         * // This custom layerUI will fill the layer with translucent green
         * // and print out all mouseMotion events generated within its borders
         * LayerUI&lt;JComponent&gt; layerUI = new LayerUI&lt;JComponent&gt;() {
         * public void paint(Graphics g, JComponent c) {
         * // paint the layer as is
         * super.paint(g, c);
         * // fill it with the translucent green
         * g.setColor(new Color(0, 128, 0, 128));
         * g.fillRect(0, 0, c.getWidth(), c.getHeight());
         * }
         * public void installUI(JComponent c) {
         * super.installUI(c);
         * // enable mouse motion events for the layer's subcomponents
         * ((JLayer) c).setLayerEventMask(AWTEvent.MOUSE_MOTION_EVENT_MASK);
         * }
         * public void uninstallUI(JComponent c) {
         * super.uninstallUI(c);
         * // reset the layer event mask
         * ((JLayer) c).setLayerEventMask(0);
         * }
         * // overridden method which catches MouseMotion events
         * public void eventDispatched(AWTEvent e, JLayer&lt;? extends JComponent&gt; l) {
         * System.out.println("AWTEvent detected: " + e);
         * }
         * };
         * // create a component to be decorated with the layer
         * JPanel panel = new JPanel();
         * panel.add(new JButton("JButton"));
         * // create the layer for the panel using our custom layerUI
         * return new JLayer&lt;JComponent&gt;(panel, layerUI);
         * }
         * private static void createAndShowGUI() {
         * final JFrame frame = new JFrame();
         * frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
         * // work with the layer as with any other Swing component
         * frame.add(createLayer());
         * frame.setSize(200, 200);
         * frame.setLocationRelativeTo(null);
         * frame.setVisible(true);
         * }
         * public static void main(String[] args) throws Exception {
         * SwingUtilities.invokeAndWait(new Runnable() {
         * public void run() {
         * createAndShowGUI();
         * }
         * });
         * }
         * }
         * </pre>
         * <b>Note:</b> {@code JLayer} doesn't support the following methods:
         * <ul>
         * <li>{@link Container#add(java.awt.Component)}</li>
         * <li>{@link Container#add(String, java.awt.Component)}</li>
         * <li>{@link Container#add(java.awt.Component, int)}</li>
         * <li>{@link Container#add(java.awt.Component, Object)}</li>
         * <li>{@link Container#add(java.awt.Component, Object, int)}</li>
         * </ul>
         * using any of of them will cause {@code UnsupportedOperationException} to be thrown,
         * to add a component to {@code JLayer}
         * use {@link #setView(Component)} or {@link #setGlassPane(JPanel)}.
         * @param <V> the type of {#code JLayer}'s view component
         * @see #JLayer(Component)
         * @see #setView(Component)
         * @see #getView()
         * @see javax.swing.plaf.LayerUI
         * @see #JLayer(Component, LayerUI)
         * @see #setUI(javax.swing.plaf.LayerUI)
         * @see #getUI()
         * @since 1.7
         * @author Alexander Potochkin
         */
        // @ts-ignore
        class JLayer<V extends java.awt.Component> extends javax.swing.JComponent implements javax.swing.Scrollable, java.beans.PropertyChangeListener, javax.accessibility.Accessible {
            /**
             * Creates a new {@code JLayer} object with a {@code null} view component
             * and default {@link javax.swing.plaf.LayerUI}.
             * @see #setView
             * @see #setUI
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new {@code JLayer} object
             * with default {@link javax.swing.plaf.LayerUI}.
             * @param view the component to be decorated by this {#code JLayer}
             * @see #setUI
             */
            // @ts-ignore
            constructor(view: V)
            /**
             * Creates a new {@code JLayer} object with the specified view component
             * and {@link javax.swing.plaf.LayerUI} object.
             * @param view the component to be decorated
             * @param ui the {#link javax.swing.plaf.LayerUI} delegate
             *  to be used by this {@code JLayer}
             */
            // @ts-ignore
            constructor(view: V, ui: javax.swing.plaf.LayerUI<V>)
            /**
             * Returns the {@code JLayer}'s view component or {@code null}.
             * <br>This is a bound property.
             * @return the {#code JLayer}'s view component
             *          or {@code null} if none exists
             * @see #setView(Component)
             */
            // @ts-ignore
            public getView(): V
            /**
             * Sets the {@code JLayer}'s view component, which can be {@code null}.
             * <br>This is a bound property.
             * @param view the view component for this {#code JLayer}
             * @see #getView()
             */
            // @ts-ignore
            public setView(view: V): void
            /**
             * Sets the {@link javax.swing.plaf.LayerUI} which will perform painting
             * and receive input events for this {@code JLayer}.
             * @param ui the {#link javax.swing.plaf.LayerUI} for this {@code JLayer}
             */
            // @ts-ignore
            public setUI(ui: javax.swing.plaf.LayerUI<any>): void
            /**
             * Returns the {@link javax.swing.plaf.LayerUI} for this {@code JLayer}.
             * @return the {#code LayerUI} for this {@code JLayer}
             */
            // @ts-ignore
            public getUI(): javax.swing.plaf.LayerUI<any>
            /**
             * Returns the {@code JLayer}'s glassPane component or {@code null}.
             * <br>This is a bound property.
             * @return the {#code JLayer}'s glassPane component
             *          or {@code null} if none exists
             * @see #setGlassPane(JPanel)
             */
            // @ts-ignore
            public getGlassPane(): javax.swing.JPanel
            /**
             * Sets the {@code JLayer}'s glassPane component, which can be {@code null}.
             * <br>This is a bound property.
             * @param glassPane the glassPane component of this {#code JLayer}
             * @see #getGlassPane()
             */
            // @ts-ignore
            public setGlassPane(glassPane: javax.swing.JPanel): void
            /**
             * Called by the constructor methods to create a default {@code glassPane}.
             * By default this method creates a new JPanel with visibility set to true
             * and opacity set to false.
             * @return the default {#code glassPane}
             */
            // @ts-ignore
            public createGlassPane(): javax.swing.JPanel
            /**
             * Sets the layout manager for this container.  This method is
             * overridden to prevent the layout manager from being set.
             * <p>Note:  If {@code mgr} is non-{@code null}, this
             * method will throw an exception as layout managers are not supported on
             * a {@code JLayer}.
             * @param mgr the specified layout manager
             * @exception IllegalArgumentException this method is not supported
             */
            // @ts-ignore
            public setLayout(mgr: java.awt.LayoutManager): void
            /**
             * A non-{@code null} border, or non-zero insets, isn't supported, to prevent the geometry
             * of this component from becoming complex enough to inhibit
             * subclassing of {@code LayerUI} class.  To create a {@code JLayer} with a border,
             * add it to a {@code JPanel} that has a border.
             * <p>Note:  If {@code border} is non-{@code null}, this
             * method will throw an exception as borders are not supported on
             * a {@code JLayer}.
             * @param border the {#code Border} to set
             * @exception IllegalArgumentException this method is not supported
             */
            // @ts-ignore
            public setBorder(border: javax.swing.border.Border): void
            /**
             * This method is not supported by {@code JLayer}
             * and always throws {@code UnsupportedOperationException}
             * @throws UnsupportedOperationException this method is not supported
             * @see #setView(Component)
             * @see #setGlassPane(JPanel)
             */
            // @ts-ignore
            addImpl(comp: java.awt.Component, constraints: java.lang.Object | any, index: number /*int*/): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public remove(comp: java.awt.Component): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public removeAll(): void
            /**
             * Always returns {@code true} to cause painting to originate from {@code JLayer},
             * or one of its ancestors.
             * @return true
             * @see JComponent#isPaintingOrigin()
             */
            // @ts-ignore
            isPaintingOrigin(): boolean
            /**
             * Delegates its functionality to the
             * {@link javax.swing.plaf.LayerUI#paintImmediately(int, int, int, int, JLayer)} method,
             * if {@code LayerUI} is set.
             * @param x  the x value of the region to be painted
             * @param y  the y value of the region to be painted
             * @param w  the width of the region to be painted
             * @param h  the height of the region to be painted
             */
            // @ts-ignore
            public paintImmediately(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
            /**
             * Delegates all painting to the {@link javax.swing.plaf.LayerUI} object.
             * @param g the {#code Graphics} to render to
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void
            /**
             * This method is empty, because all painting is done by
             * {@link #paint(Graphics)} and
             * {@link javax.swing.plaf.LayerUI#update(Graphics, JComponent)} methods
             */
            // @ts-ignore
            paintComponent(g: java.awt.Graphics): void
            /**
             * The {@code JLayer} overrides the default implementation of
             * this method (in {@code JComponent}) to return {@code false}.
             * This ensures
             * that the drawing machinery will call the {@code JLayer}'s
             * {@code paint}
             * implementation rather than messaging the {@code JLayer}'s
             * children directly.
             * @return false
             */
            // @ts-ignore
            public isOptimizedDrawingEnabled(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public propertyChange(evt: java.beans.PropertyChangeEvent): void
            /**
             * Enables the events from JLayer and <b>all its descendants</b>
             * defined by the specified event mask parameter
             * to be delivered to the
             * {@link LayerUI#eventDispatched(AWTEvent, JLayer)} method.
             * <p>
             * Events are delivered provided that {@code LayerUI} is set
             * for this {@code JLayer} and the {@code JLayer}
             * is displayable.
             * <p>
             * The following example shows how to correctly use this method
             * in the {@code LayerUI} implementations:
             * <pre>
             * public void installUI(JComponent c) {
             * super.installUI(c);
             * JLayer l = (JLayer) c;
             * // this LayerUI will receive only key and focus events
             * l.setLayerEventMask(AWTEvent.KEY_EVENT_MASK | AWTEvent.FOCUS_EVENT_MASK);
             * }
             * public void uninstallUI(JComponent c) {
             * super.uninstallUI(c);
             * JLayer l = (JLayer) c;
             * // JLayer must be returned to its initial state
             * l.setLayerEventMask(0);
             * }
             * </pre>
             * By default {@code JLayer} receives no events and its event mask is {@code 0}.
             * @param layerEventMask the bitmask of event types to receive
             * @see #getLayerEventMask()
             * @see LayerUI#eventDispatched(AWTEvent, JLayer)
             * @see Component#isDisplayable()
             */
            // @ts-ignore
            public setLayerEventMask(layerEventMask: number /*long*/): void
            /**
             * Returns the bitmap of event mask to receive by this {@code JLayer}
             * and its {@code LayerUI}.
             * <p>
             * It means that {@link javax.swing.plaf.LayerUI#eventDispatched(AWTEvent, JLayer)} method
             * will only receive events that match the event mask.
             * <p>
             * By default {@code JLayer} receives no events.
             * @return the bitmask of event types to receive for this {#code JLayer}
             */
            // @ts-ignore
            public getLayerEventMask(): number /*long*/
            /**
             * Delegates its functionality to the {@link javax.swing.plaf.LayerUI#updateUI(JLayer)} method,
             * if {@code LayerUI} is set.
             */
            // @ts-ignore
            public updateUI(): void
            /**
             * Returns the preferred size of the viewport for a view component.
             * <p>
             * If the view component of this layer implements {@link Scrollable}, this method delegates its
             * implementation to the view component.
             * @return the preferred size of the viewport for a view component
             * @see Scrollable
             */
            // @ts-ignore
            public getPreferredScrollableViewportSize(): java.awt.Dimension
            /**
             * Returns a scroll increment, which is required for components
             * that display logical rows or columns in order to completely expose
             * one block of rows or columns, depending on the value of orientation.
             * <p>
             * If the view component of this layer implements {@link Scrollable}, this method delegates its
             * implementation to the view component.
             * @return the "block" increment for scrolling in the specified direction
             * @see Scrollable
             */
            // @ts-ignore
            public getScrollableBlockIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): number /*int*/
            /**
             * Returns {@code false} to indicate that the height of the viewport does not
             * determine the height of the layer, unless the preferred height
             * of the layer is smaller than the height of the viewport.
             * <p>
             * If the view component of this layer implements {@link Scrollable}, this method delegates its
             * implementation to the view component.
             * @return whether the layer should track the height of the viewport
             * @see Scrollable
             */
            // @ts-ignore
            public getScrollableTracksViewportHeight(): boolean
            /**
             * Returns {@code false} to indicate that the width of the viewport does not
             * determine the width of the layer, unless the preferred width
             * of the layer is smaller than the width of the viewport.
             * <p>
             * If the view component of this layer implements {@link Scrollable}, this method delegates its
             * implementation to the view component.
             * @return whether the layer should track the width of the viewport
             * @see Scrollable
             */
            // @ts-ignore
            public getScrollableTracksViewportWidth(): boolean
            /**
             * Returns a scroll increment, which is required for components
             * that display logical rows or columns in order to completely expose
             * one new row or column, depending on the value of orientation.
             * Ideally, components should handle a partially exposed row or column
             * by returning the distance required to completely expose the item.
             * <p>
             * Scrolling containers, like {@code JScrollPane}, will use this method
             * each time the user requests a unit scroll.
             * <p>
             * If the view component of this layer implements {@link Scrollable}, this method delegates its
             * implementation to the view component.
             * @return The "unit" increment for scrolling in the specified direction.
             *          This value should always be positive.
             * @see Scrollable
             */
            // @ts-ignore
            public getScrollableUnitIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): number /*int*/
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Delegates its functionality to the {@link javax.swing.plaf.LayerUI#doLayout(JLayer)} method,
             * if {@code LayerUI} is set.
             */
            // @ts-ignore
            public doLayout(): void
            /**
             * Gets the AccessibleContext associated with this {@code JLayer}.
             * @return the AccessibleContext associated with this {#code JLayer}.
             */
            // @ts-ignore
            public getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
