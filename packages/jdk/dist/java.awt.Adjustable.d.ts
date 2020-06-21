declare namespace java {
    namespace awt {
        /**
         * The interface for objects which have an adjustable numeric value
         * contained within a bounded range of values.
         * @author Amy Fowler
         * @author Tim Prinzing
         */
        // @ts-ignore
        interface Adjustable {
            /**
             * Indicates that the <code>Adjustable</code> has horizontal orientation.
             */
            // @ts-ignore
            readonly HORIZONTAL: number /*int*/
            /**
             * Indicates that the <code>Adjustable</code> has vertical orientation.
             */
            // @ts-ignore
            readonly VERTICAL: number /*int*/
            /**
             * Indicates that the <code>Adjustable</code> has no orientation.
             */
            // @ts-ignore
            readonly NO_ORIENTATION: number /*int*/
            /**
             * Gets the orientation of the adjustable object.
             * @return the orientation of the adjustable object;
             *    either <code>HORIZONTAL</code>, <code>VERTICAL</code>,
             *    or <code>NO_ORIENTATION</code>
             */
            // @ts-ignore
            getOrientation(): number /*int*/
            /**
             * Sets the minimum value of the adjustable object.
             * @param min the minimum value
             */
            // @ts-ignore
            setMinimum(min: number /*int*/): void
            /**
             * Gets the minimum value of the adjustable object.
             * @return the minimum value of the adjustable object
             */
            // @ts-ignore
            getMinimum(): number /*int*/
            /**
             * Sets the maximum value of the adjustable object.
             * @param max the maximum value
             */
            // @ts-ignore
            setMaximum(max: number /*int*/): void
            /**
             * Gets the maximum value of the adjustable object.
             * @return the maximum value of the adjustable object
             */
            // @ts-ignore
            getMaximum(): number /*int*/
            /**
             * Sets the unit value increment for the adjustable object.
             * @param u the unit increment
             */
            // @ts-ignore
            setUnitIncrement(u: number /*int*/): void
            /**
             * Gets the unit value increment for the adjustable object.
             * @return the unit value increment for the adjustable object
             */
            // @ts-ignore
            getUnitIncrement(): number /*int*/
            /**
             * Sets the block value increment for the adjustable object.
             * @param b the block increment
             */
            // @ts-ignore
            setBlockIncrement(b: number /*int*/): void
            /**
             * Gets the block value increment for the adjustable object.
             * @return the block value increment for the adjustable object
             */
            // @ts-ignore
            getBlockIncrement(): number /*int*/
            /**
             * Sets the length of the proportional indicator of the
             * adjustable object.
             * @param v the length of the indicator
             */
            // @ts-ignore
            setVisibleAmount(v: number /*int*/): void
            /**
             * Gets the length of the proportional indicator.
             * @return the length of the proportional indicator
             */
            // @ts-ignore
            getVisibleAmount(): number /*int*/
            /**
             * Sets the current value of the adjustable object. If
             * the value supplied is less than <code>minimum</code>
             * or greater than <code>maximum</code> - <code>visibleAmount</code>,
             * then one of those values is substituted, as appropriate.
             * <p>
             * Calling this method does not fire an
             * <code>AdjustmentEvent</code>.
             * @param v the current value, between <code>minimum</code>
             *     and <code>maximum</code> - <code>visibleAmount</code>
             */
            // @ts-ignore
            setValue(v: number /*int*/): void
            /**
             * Gets the current value of the adjustable object.
             * @return the current value of the adjustable object
             */
            // @ts-ignore
            getValue(): number /*int*/
            /**
             * Adds a listener to receive adjustment events when the value of
             * the adjustable object changes.
             * @param l the listener to receive events
             * @see AdjustmentEvent
             */
            // @ts-ignore
            addAdjustmentListener(l: java.awt.event.AdjustmentListener): void
            /**
             * Removes an adjustment listener.
             * @param l the listener being removed
             * @see AdjustmentEvent
             */
            // @ts-ignore
            removeAdjustmentListener(l: java.awt.event.AdjustmentListener): void
        }
    }
}
