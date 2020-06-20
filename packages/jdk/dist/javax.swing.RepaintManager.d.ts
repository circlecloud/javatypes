declare namespace javax {
    namespace swing {
        /**
         * This class manages repaint requests, allowing the number
         * of repaints to be minimized, for example by collapsing multiple
         * requests into a single repaint for members of a component tree.
         * <p>
         * As of 1.6 <code>RepaintManager</code> handles repaint requests
         * for Swing's top level components (<code>JApplet</code>,
         * <code>JWindow</code>, <code>JFrame</code> and <code>JDialog</code>).
         * Any calls to <code>repaint</code> on one of these will call into the
         * appropriate <code>addDirtyRegion</code> method.
         * @author Arnaud Weber
         */
        // @ts-ignore
        class RepaintManager extends java.lang.Object {
            /**
             * Create a new RepaintManager instance. You rarely call this constructor.
             * directly. To get the default RepaintManager, use
             * RepaintManager.currentManager(JComponent) (normally "this").
             */
            // @ts-ignore
            constructor()
            /**
             * Return the RepaintManager for the calling thread given a Component.
             * @param c a Component -- unused in the default implementation, but could
             *           be used by an overridden version to return a different RepaintManager
             *           depending on the Component
             * @return the RepaintManager object
             */
            // @ts-ignore
            currentManager(c: java.awt.Component): javax.swing.RepaintManager
            /**
             * Return the RepaintManager for the calling thread given a JComponent.
             * <p>
             * Note: This method exists for backward binary compatibility with earlier
             * versions of the Swing library. It simply returns the result returned by
             * {@link #currentManager(Component)}.
             * @param c a JComponent -- unused
             * @return the RepaintManager object
             */
            // @ts-ignore
            currentManager(c: javax.swing.JComponent): javax.swing.RepaintManager
            /**
             * Set the RepaintManager that should be used for the calling
             * thread. <b>aRepaintManager</b> will become the current RepaintManager
             * for the calling thread's thread group.
             * @param aRepaintManager  the RepaintManager object to use
             */
            // @ts-ignore
            setCurrentManager(aRepaintManager: javax.swing.RepaintManager): void
            /**
             * Mark the component as in need of layout and queue a runnable
             * for the event dispatching thread that will validate the components
             * first isValidateRoot() ancestor.
             * @see JComponent#isValidateRoot
             * @see #removeInvalidComponent
             */
            // @ts-ignore
            addInvalidComponent(invalidComponent: javax.swing.JComponent): void
            /**
             * Remove a component from the list of invalid components.
             * @see #addInvalidComponent
             */
            // @ts-ignore
            removeInvalidComponent(component: javax.swing.JComponent): void
            /**
             * Add a component in the list of components that should be refreshed.
             * If <i>c</i> already has a dirty region, the rectangle <i>(x,y,w,h)</i>
             * will be unioned with the region that should be redrawn.
             * @param c Component to repaint, null results in nothing happening.
             * @param x X coordinate of the region to repaint
             * @param y Y coordinate of the region to repaint
             * @param w Width of the region to repaint
             * @param h Height of the region to repaint
             * @see JComponent#repaint
             */
            // @ts-ignore
            addDirtyRegion(c: javax.swing.JComponent, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
            /**
             * Adds <code>window</code> to the list of <code>Component</code>s that
             * need to be repainted.
             * @param window Window to repaint, null results in nothing happening.
             * @param x X coordinate of the region to repaint
             * @param y Y coordinate of the region to repaint
             * @param w Width of the region to repaint
             * @param h Height of the region to repaint
             * @see JFrame#repaint
             * @see JWindow#repaint
             * @see JDialog#repaint
             * @since 1.6
             */
            // @ts-ignore
            addDirtyRegion(window: java.awt.Window, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
            /**
             * Adds <code>applet</code> to the list of <code>Component</code>s that
             * need to be repainted.
             * @param applet Applet to repaint, null results in nothing happening.
             * @param x X coordinate of the region to repaint
             * @param y Y coordinate of the region to repaint
             * @param w Width of the region to repaint
             * @param h Height of the region to repaint
             * @see JApplet#repaint
             * @since 1.6
             */
            // @ts-ignore
            addDirtyRegion(applet: java.applet.Applet, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
            /**
             * Return the current dirty region for a component.
             * Return an empty rectangle if the component is not
             * dirty.
             */
            // @ts-ignore
            getDirtyRegion(aComponent: javax.swing.JComponent): java.awt.Rectangle
            /**
             * Mark a component completely dirty. <b>aComponent</b> will be
             * completely painted during the next paintDirtyRegions() call.
             */
            // @ts-ignore
            markCompletelyDirty(aComponent: javax.swing.JComponent): void
            /**
             * Mark a component completely clean. <b>aComponent</b> will not
             * get painted during the next paintDirtyRegions() call.
             */
            // @ts-ignore
            markCompletelyClean(aComponent: javax.swing.JComponent): void
            /**
             * Convenience method that returns true if <b>aComponent</b> will be completely
             * painted during the next paintDirtyRegions(). If computing dirty regions is
             * expensive for your component, use this method and avoid computing dirty region
             * if it return true.
             */
            // @ts-ignore
            isCompletelyDirty(aComponent: javax.swing.JComponent): boolean
            /**
             * Validate all of the components that have been marked invalid.
             * @see #addInvalidComponent
             */
            // @ts-ignore
            validateInvalidComponents(): void
            /**
             * Paint all of the components that have been marked dirty.
             * @see #addDirtyRegion
             */
            // @ts-ignore
            paintDirtyRegions(): void
            /**
             * Returns a string that displays and identifies this
             * object's properties.
             * @return a String representation of this object
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Return the offscreen buffer that should be used as a double buffer with
             * the component <code>c</code>.
             * By default there is a double buffer per RepaintManager.
             * The buffer might be smaller than <code>(proposedWidth,proposedHeight)</code>
             * This happens when the maximum double buffer size as been set for the receiving
             * repaint manager.
             */
            // @ts-ignore
            getOffscreenBuffer(c: java.awt.Component, proposedWidth: number /*int*/, proposedHeight: number /*int*/): java.awt.Image
            /**
             * Return a volatile offscreen buffer that should be used as a
             * double buffer with the specified component <code>c</code>.
             * The image returned will be an instance of VolatileImage, or null
             * if a VolatileImage object could not be instantiated.
             * This buffer might be smaller than <code>(proposedWidth,proposedHeight)</code>.
             * This happens when the maximum double buffer size has been set for this
             * repaint manager.
             * @see java.awt.image.VolatileImage
             * @since 1.4
             */
            // @ts-ignore
            getVolatileOffscreenBuffer(c: java.awt.Component, proposedWidth: number /*int*/, proposedHeight: number /*int*/): java.awt.Image
            /**
             * Set the maximum double buffer size.
             */
            // @ts-ignore
            setDoubleBufferMaximumSize(d: java.awt.Dimension): void
            /**
             * Returns the maximum double buffer size.
             * @return a Dimension object representing the maximum size
             */
            // @ts-ignore
            getDoubleBufferMaximumSize(): java.awt.Dimension
            /**
             * Enables or disables double buffering in this RepaintManager.
             * CAUTION: The default value for this property is set for optimal
             * paint performance on the given platform and it is not recommended
             * that programs modify this property directly.
             * @param aFlag  true to activate double buffering
             * @see #isDoubleBufferingEnabled
             */
            // @ts-ignore
            setDoubleBufferingEnabled(aFlag: boolean): void
            /**
             * Returns true if this RepaintManager is double buffered.
             * The default value for this property may vary from platform
             * to platform.  On platforms where native double buffering
             * is supported in the AWT, the default value will be <code>false</code>
             * to avoid unnecessary buffering in Swing.
             * On platforms where native double buffering is not supported,
             * the default value will be <code>true</code>.
             * @return true if this object is double buffered
             */
            // @ts-ignore
            isDoubleBufferingEnabled(): boolean
        }
    }
}
