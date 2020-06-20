declare namespace javax {
    namespace accessibility {
        /**
         * The AccessibleComponent interface should be supported by any object
         * that is rendered on the screen.  This interface provides the standard
         * mechanism for an assistive technology to determine and set the
         * graphical representation of an object.  Applications can determine
         * if an object supports the AccessibleComponent interface by first
         * obtaining its AccessibleContext
         * and then calling the
         * {@link AccessibleContext#getAccessibleComponent} method.
         * If the return value is not null, the object supports this interface.
         * @see Accessible
         * @see Accessible#getAccessibleContext
         * @see AccessibleContext
         * @see AccessibleContext#getAccessibleComponent
         * @author Peter Korn
         * @author Hans Muller
         * @author Willie Walker
         */
        // @ts-ignore
        interface AccessibleComponent {
            /**
             * Gets the background color of this object.
             * @return the background color, if supported, of the object;
             *  otherwise, null
             * @see #setBackground
             */
            // @ts-ignore
            getBackground(): java.awt.Color
            /**
             * Sets the background color of this object.
             * @param c the new Color for the background
             * @see #setBackground
             */
            // @ts-ignore
            setBackground(c: java.awt.Color): void
            /**
             * Gets the foreground color of this object.
             * @return the foreground color, if supported, of the object;
             *  otherwise, null
             * @see #setForeground
             */
            // @ts-ignore
            getForeground(): java.awt.Color
            /**
             * Sets the foreground color of this object.
             * @param c the new Color for the foreground
             * @see #getForeground
             */
            // @ts-ignore
            setForeground(c: java.awt.Color): void
            /**
             * Gets the Cursor of this object.
             * @return the Cursor, if supported, of the object; otherwise, null
             * @see #setCursor
             */
            // @ts-ignore
            getCursor(): java.awt.Cursor
            /**
             * Sets the Cursor of this object.
             * @param cursor  the new Cursor for the object
             * @see #getCursor
             */
            // @ts-ignore
            setCursor(cursor: java.awt.Cursor): void
            /**
             * Gets the Font of this object.
             * @return the Font,if supported, for the object; otherwise, null
             * @see #setFont
             */
            // @ts-ignore
            getFont(): java.awt.Font
            /**
             * Sets the Font of this object.
             * @param f the new Font for the object
             * @see #getFont
             */
            // @ts-ignore
            setFont(f: java.awt.Font): void
            /**
             * Gets the FontMetrics of this object.
             * @param f the Font
             * @return the FontMetrics, if supported, the object; otherwise, null
             * @see #getFont
             */
            // @ts-ignore
            getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
            /**
             * Determines if the object is enabled.  Objects that are enabled
             * will also have the AccessibleState.ENABLED state set in their
             * AccessibleStateSets.
             * @return true if object is enabled; otherwise, false
             * @see #setEnabled
             * @see AccessibleContext#getAccessibleStateSet
             * @see AccessibleState#ENABLED
             * @see AccessibleStateSet
             */
            // @ts-ignore
            isEnabled(): boolean
            /**
             * Sets the enabled state of the object.
             * @param b if true, enables this object; otherwise, disables it
             * @see #isEnabled
             */
            // @ts-ignore
            setEnabled(b: boolean): void
            /**
             * Determines if the object is visible.  Note: this means that the
             * object intends to be visible; however, it may not be
             * showing on the screen because one of the objects that this object
             * is contained by is currently not visible.  To determine if an object is
             * showing on the screen, use isShowing().
             * <p>Objects that are visible will also have the
             * AccessibleState.VISIBLE state set in their AccessibleStateSets.
             * @return true if object is visible; otherwise, false
             * @see #setVisible
             * @see AccessibleContext#getAccessibleStateSet
             * @see AccessibleState#VISIBLE
             * @see AccessibleStateSet
             */
            // @ts-ignore
            isVisible(): boolean
            /**
             * Sets the visible state of the object.
             * @param b if true, shows this object; otherwise, hides it
             * @see #isVisible
             */
            // @ts-ignore
            setVisible(b: boolean): void
            /**
             * Determines if the object is showing.  This is determined by checking
             * the visibility of the object and its ancestors.
             * Note: this
             * will return true even if the object is obscured by another (for example,
             * it is underneath a menu that was pulled down).
             * @return true if object is showing; otherwise, false
             */
            // @ts-ignore
            isShowing(): boolean
            /**
             * Checks whether the specified point is within this object's bounds,
             * where the point's x and y coordinates are defined to be relative to the
             * coordinate system of the object.
             * @param p the Point relative to the coordinate system of the object
             * @return true if object contains Point; otherwise false
             * @see #getBounds
             */
            // @ts-ignore
            contains(p: java.awt.Point): boolean
            /**
             * Returns the location of the object on the screen.
             * @return the location of the object on screen; null if this object
             *  is not on the screen
             * @see #getBounds
             * @see #getLocation
             */
            // @ts-ignore
            getLocationOnScreen(): java.awt.Point
            /**
             * Gets the location of the object relative to the parent in the form
             * of a point specifying the object's top-left corner in the screen's
             * coordinate space.
             * @return An instance of Point representing the top-left corner of the
             *  object's bounds in the coordinate space of the screen; null if
             *  this object or its parent are not on the screen
             * @see #getBounds
             * @see #getLocationOnScreen
             */
            // @ts-ignore
            getLocation(): java.awt.Point
            /**
             * Sets the location of the object relative to the parent.
             * @param p the new position for the top-left corner
             * @see #getLocation
             */
            // @ts-ignore
            setLocation(p: java.awt.Point): void
            /**
             * Gets the bounds of this object in the form of a Rectangle object.
             * The bounds specify this object's width, height, and location
             * relative to its parent.
             * @return A rectangle indicating this component's bounds; null if
             *  this object is not on the screen.
             * @see #contains
             */
            // @ts-ignore
            getBounds(): java.awt.Rectangle
            /**
             * Sets the bounds of this object in the form of a Rectangle object.
             * The bounds specify this object's width, height, and location
             * relative to its parent.
             * @param r rectangle indicating this component's bounds
             * @see #getBounds
             */
            // @ts-ignore
            setBounds(r: java.awt.Rectangle): void
            /**
             * Returns the size of this object in the form of a Dimension object.
             * The height field of the Dimension object contains this object's
             * height, and the width field of the Dimension object contains this
             * object's width.
             * @return A Dimension object that indicates the size of this component;
             *  null if this object is not on the screen
             * @see #setSize
             */
            // @ts-ignore
            getSize(): java.awt.Dimension
            /**
             * Resizes this object so that it has width and height.
             * @param d The dimension specifying the new size of the object.
             * @see #getSize
             */
            // @ts-ignore
            setSize(d: java.awt.Dimension): void
            /**
             * Returns the Accessible child, if one exists, contained at the local
             * coordinate Point.
             * @param p The point relative to the coordinate system of this object.
             * @return the Accessible, if it exists, at the specified location;
             *  otherwise null
             */
            // @ts-ignore
            getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
            /**
             * Returns whether this object can accept focus or not.   Objects that
             * can accept focus will also have the AccessibleState.FOCUSABLE state
             * set in their AccessibleStateSets.
             * @return true if object can accept focus; otherwise false
             * @see AccessibleContext#getAccessibleStateSet
             * @see AccessibleState#FOCUSABLE
             * @see AccessibleState#FOCUSED
             * @see AccessibleStateSet
             */
            // @ts-ignore
            isFocusTraversable(): boolean
            /**
             * Requests focus for this object.  If this object cannot accept focus,
             * nothing will happen.  Otherwise, the object will attempt to take
             * focus.
             * @see #isFocusTraversable
             */
            // @ts-ignore
            requestFocus(): void
            /**
             * Adds the specified focus listener to receive focus events from this
             * component.
             * @param l the focus listener
             * @see #removeFocusListener
             */
            // @ts-ignore
            addFocusListener(l: java.awt.event.FocusListener): void
            /**
             * Removes the specified focus listener so it no longer receives focus
             * events from this component.
             * @param l the focus listener
             * @see #addFocusListener
             */
            // @ts-ignore
            removeFocusListener(l: java.awt.event.FocusListener): void
        }
    }
}
