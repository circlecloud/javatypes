declare namespace javax {
    namespace swing {
        /**
         * A generic implementation of BoundedRangeModel.
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
         * @author Hans Muller
         * @see BoundedRangeModel
         */
        // @ts-ignore
        class DefaultBoundedRangeModel extends java.lang.Object implements javax.swing.BoundedRangeModel, java.io.Serializable {
            /**
             * Initializes all of the properties with default values.
             * Those values are:
             * <ul>
             * <li><code>value</code> = 0
             * <li><code>extent</code> = 0
             * <li><code>minimum</code> = 0
             * <li><code>maximum</code> = 100
             * <li><code>adjusting</code> = false
             * </ul>
             */
            // @ts-ignore
            constructor()
            /**
             * Initializes value, extent, minimum and maximum. Adjusting is false.
             * Throws an <code>IllegalArgumentException</code> if the following
             * constraints aren't satisfied:
             * <pre>
             * min &lt;= value &lt;= value+extent &lt;= max
             * </pre>
             */
            // @ts-ignore
            constructor(value: number /*int*/, extent: number /*int*/, min: number /*int*/, max: number /*int*/)
            /**
             * Only one <code>ChangeEvent</code> is needed per model instance since the
             * event's only (read-only) state is the source property.  The source
             * of events generated here is always "this".
             */
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            /**
             * The listeners waiting for model changes.
             */
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            /**
             * Returns the model's current value.
             * @return the model's current value
             * @see #setValue
             * @see BoundedRangeModel#getValue
             */
            // @ts-ignore
            getValue(): int
            /**
             * Returns the model's extent.
             * @return the model's extent
             * @see #setExtent
             * @see BoundedRangeModel#getExtent
             */
            // @ts-ignore
            getExtent(): int
            /**
             * Returns the model's minimum.
             * @return the model's minimum
             * @see #setMinimum
             * @see BoundedRangeModel#getMinimum
             */
            // @ts-ignore
            getMinimum(): int
            /**
             * Returns the model's maximum.
             * @return the model's maximum
             * @see #setMaximum
             * @see BoundedRangeModel#getMaximum
             */
            // @ts-ignore
            getMaximum(): int
            /**
             * Sets the current value of the model. For a slider, that
             * determines where the knob appears. Ensures that the new
             * value, <I>n</I> falls within the model's constraints:
             * <pre>
             * minimum &lt;= value &lt;= value+extent &lt;= maximum
             * </pre>
             * @see BoundedRangeModel#setValue
             */
            // @ts-ignore
            setValue(n: number /*int*/): void
            /**
             * Sets the extent to <I>n</I> after ensuring that <I>n</I>
             * is greater than or equal to zero and falls within the model's
             * constraints:
             * <pre>
             * minimum &lt;= value &lt;= value+extent &lt;= maximum
             * </pre>
             * @see BoundedRangeModel#setExtent
             */
            // @ts-ignore
            setExtent(n: number /*int*/): void
            /**
             * Sets the minimum to <I>n</I> after ensuring that <I>n</I>
             * that the other three properties obey the model's constraints:
             * <pre>
             * minimum &lt;= value &lt;= value+extent &lt;= maximum
             * </pre>
             * @see #getMinimum
             * @see BoundedRangeModel#setMinimum
             */
            // @ts-ignore
            setMinimum(n: number /*int*/): void
            /**
             * Sets the maximum to <I>n</I> after ensuring that <I>n</I>
             * that the other three properties obey the model's constraints:
             * <pre>
             * minimum &lt;= value &lt;= value+extent &lt;= maximum
             * </pre>
             * @see BoundedRangeModel#setMaximum
             */
            // @ts-ignore
            setMaximum(n: number /*int*/): void
            /**
             * Sets the <code>valueIsAdjusting</code> property.
             * @see #getValueIsAdjusting
             * @see #setValue
             * @see BoundedRangeModel#setValueIsAdjusting
             */
            // @ts-ignore
            setValueIsAdjusting(b: boolean): void
            /**
             * Returns true if the value is in the process of changing
             * as a result of actions being taken by the user.
             * @return the value of the <code>valueIsAdjusting</code> property
             * @see #setValue
             * @see BoundedRangeModel#getValueIsAdjusting
             */
            // @ts-ignore
            getValueIsAdjusting(): boolean
            /**
             * Sets all of the <code>BoundedRangeModel</code> properties after forcing
             * the arguments to obey the usual constraints:
             * <pre>
             * minimum &lt;= value &lt;= value+extent &lt;= maximum
             * </pre>
             * <p>
             * At most, one <code>ChangeEvent</code> is generated.
             * @see BoundedRangeModel#setRangeProperties
             * @see #setValue
             * @see #setExtent
             * @see #setMinimum
             * @see #setMaximum
             * @see #setValueIsAdjusting
             */
            // @ts-ignore
            setRangeProperties(newValue: number /*int*/, newExtent: number /*int*/, newMin: number /*int*/, newMax: number /*int*/, adjusting: boolean): void
            /**
             * Adds a <code>ChangeListener</code>.  The change listeners are run each
             * time any one of the Bounded Range model properties changes.
             * @param l the ChangeListener to add
             * @see #removeChangeListener
             * @see BoundedRangeModel#addChangeListener
             */
            // @ts-ignore
            addChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Removes a <code>ChangeListener</code>.
             * @param l the <code>ChangeListener</code> to remove
             * @see #addChangeListener
             * @see BoundedRangeModel#removeChangeListener
             */
            // @ts-ignore
            removeChangeListener(l: javax.swing.event.ChangeListener): void
            /**
             * Returns an array of all the change listeners
             * registered on this <code>DefaultBoundedRangeModel</code>.
             * @return all of this model's <code>ChangeListener</code>s
             *          or an empty
             *          array if no change listeners are currently registered
             * @see #addChangeListener
             * @see #removeChangeListener
             * @since 1.4
             */
            // @ts-ignore
            getChangeListeners(): javax.swing.event.ChangeListener[]
            /**
             * Runs each <code>ChangeListener</code>'s <code>stateChanged</code> method.
             * @see #setRangeProperties
             * @see EventListenerList
             */
            // @ts-ignore
            fireStateChanged(): void
            /**
             * Returns a string that displays all of the
             * <code>BoundedRangeModel</code> properties.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns an array of all the objects currently registered as
             * <code><em>Foo</em>Listener</code>s
             * upon this model.
             * <code><em>Foo</em>Listener</code>s
             * are registered using the <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a <code>DefaultBoundedRangeModel</code>
             * instance <code>m</code>
             * for its change listeners
             * with the following code:
             * <pre>ChangeListener[] cls = (ChangeListener[])(m.getListeners(ChangeListener.class));</pre>
             * If no such listeners exist,
             * this method returns an empty array.
             * @param listenerType  the type of listeners requested;
             *           this parameter should specify an interface
             *           that descends from <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s
             *           on this model,
             *           or an empty array if no such
             *           listeners have been added
             * @exception ClassCastException if <code>listenerType</code> doesn't
             *           specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @see #getChangeListeners
             * @since 1.3
             */
            // @ts-ignore
            getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
        }
    }
}
