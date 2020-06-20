declare namespace java {
    namespace beans {
        /**
         * This is a support class to help build property editors.
         * <p>
         * It can be used either as a base class or as a delegate.
         */
        // @ts-ignore
        class PropertyEditorSupport extends java.lang.Object implements java.beans.PropertyEditor {
            /**
             * Constructs a <code>PropertyEditorSupport</code> object.
             * @since 1.5
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>PropertyEditorSupport</code> object.
             * @param source the source used for event firing
             * @since 1.5
             */
            // @ts-ignore
            constructor(source: any)
            /**
             * Returns the bean that is used as the
             * source of events. If the source has not
             * been explicitly set then this instance of
             * <code>PropertyEditorSupport</code> is returned.
             * @return the source object or this instance
             * @since 1.5
             */
            // @ts-ignore
            getSource(): java.lang.Object
            /**
             * Sets the source bean.
             * <p>
             * The source bean is used as the source of events
             * for the property changes. This source should be used for information
             * purposes only and should not be modified by the PropertyEditor.
             * @param source source object to be used for events
             * @since 1.5
             */
            // @ts-ignore
            setSource(source: any): void
            /**
             * Set (or change) the object that is to be edited.
             * @param value The new target object to be edited.  Note that this
             *      object should not be modified by the PropertyEditor, rather
             *      the PropertyEditor should create a new object to hold any
             *      modified value.
             */
            // @ts-ignore
            setValue(value: any): void
            /**
             * Gets the value of the property.
             * @return The value of the property.
             */
            // @ts-ignore
            getValue(): java.lang.Object
            /**
             * Determines whether the class will honor the paintValue method.
             * @return True if the class will honor the paintValue method.
             */
            // @ts-ignore
            isPaintable(): boolean
            /**
             * Paint a representation of the value into a given area of screen
             * real estate.  Note that the propertyEditor is responsible for doing
             * its own clipping so that it fits into the given rectangle.
             * <p>
             * If the PropertyEditor doesn't honor paint requests (see isPaintable)
             * this method should be a silent noop.
             * @param gfx  Graphics object to paint into.
             * @param box  Rectangle within graphics object into which we should paint.
             */
            // @ts-ignore
            paintValue(gfx: java.awt.Graphics, box: java.awt.Rectangle): void
            /**
             * This method is intended for use when generating Java code to set
             * the value of the property.  It should return a fragment of Java code
             * that can be used to initialize a variable with the current property
             * value.
             * <p>
             * Example results are "2", "new Color(127,127,34)", "Color.orange", etc.
             * @return A fragment of Java code representing an initializer for the
             *           current value.
             */
            // @ts-ignore
            getJavaInitializationString(): java.lang.String
            /**
             * Gets the property value as a string suitable for presentation
             * to a human to edit.
             * @return The property value as a string suitable for presentation
             *        to a human to edit.
             *  <p>   Returns null if the value can't be expressed as a string.
             *  <p>   If a non-null value is returned, then the PropertyEditor should
             *        be prepared to parse that string back in setAsText().
             */
            // @ts-ignore
            getAsText(): java.lang.String
            /**
             * Sets the property value by parsing a given String.  May raise
             * java.lang.IllegalArgumentException if either the String is
             * badly formatted or if this kind of property can't be expressed
             * as text.
             * @param text  The string to be parsed.
             */
            // @ts-ignore
            setAsText(text: string): void
            /**
             * If the property value must be one of a set of known tagged values,
             * then this method should return an array of the tag values.  This can
             * be used to represent (for example) enum values.  If a PropertyEditor
             * supports tags, then it should support the use of setAsText with
             * a tag value as a way of setting the value.
             * @return The tag values for this property.  May be null if this
             *    property cannot be represented as a tagged value.
             */
            // @ts-ignore
            getTags(): java.lang.String[]
            /**
             * A PropertyEditor may chose to make available a full custom Component
             * that edits its property value.  It is the responsibility of the
             * PropertyEditor to hook itself up to its editor Component itself and
             * to report property value changes by firing a PropertyChange event.
             * <P>
             * The higher-level code that calls getCustomEditor may either embed
             * the Component in some larger property sheet, or it may put it in
             * its own individual dialog, or ...
             * @return A java.awt.Component that will allow a human to directly
             *       edit the current property value.  May be null if this is
             *       not supported.
             */
            // @ts-ignore
            getCustomEditor(): java.awt.Component
            /**
             * Determines whether the propertyEditor can provide a custom editor.
             * @return True if the propertyEditor can provide a custom editor.
             */
            // @ts-ignore
            supportsCustomEditor(): boolean
            /**
             * Adds a listener for the value change.
             * When the property editor changes its value
             * it should fire a {@link PropertyChangeEvent}
             * on all registered {@link PropertyChangeListener}s,
             * specifying the {@code null} value for the property name.
             * If the source property is set,
             * it should be used as the source of the event.
             * <p>
             * The same listener object may be added more than once,
             * and will be called as many times as it is added.
             * If {@code listener} is {@code null},
             * no exception is thrown and no action is taken.
             * @param listener  the {#link PropertyChangeListener} to add
             */
            // @ts-ignore
            addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            /**
             * Removes a listener for the value change.
             * <p>
             * If the same listener was added more than once,
             * it will be notified one less time after being removed.
             * If {@code listener} is {@code null}, or was never added,
             * no exception is thrown and no action is taken.
             * @param listener  the {#link PropertyChangeListener} to remove
             */
            // @ts-ignore
            removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            /**
             * Report that we have been modified to any interested listeners.
             */
            // @ts-ignore
            firePropertyChange(): void
        }
    }
}
