declare namespace javax {
    namespace accessibility {
        /**
         * The AccessibleValue interface should be supported by any object
         * that supports a numerical value (e.g., a scroll bar).  This interface
         * provides the standard mechanism for an assistive technology to determine
         * and set the numerical value as well as get the minimum and maximum values.
         * Applications can determine
         * if an object supports the AccessibleValue interface by first
         * obtaining its AccessibleContext (see
         * {@link Accessible}) and then calling the
         * {@link AccessibleContext#getAccessibleValue} method.
         * If the return value is not null, the object supports this interface.
         * @see Accessible
         * @see Accessible#getAccessibleContext
         * @see AccessibleContext
         * @see AccessibleContext#getAccessibleValue
         * @author Peter Korn
         * @author Hans Muller
         * @author Willie Walker
         */
        // @ts-ignore
        interface AccessibleValue {
            /**
             * Get the value of this object as a Number.  If the value has not been
             * set, the return value will be null.
             * @return value of the object
             * @see #setCurrentAccessibleValue
             */
            // @ts-ignore
            getCurrentAccessibleValue(): java.lang.Number
            /**
             * Set the value of this object as a Number.
             * @param n the number to use for the value
             * @return True if the value was set; else False
             * @see #getCurrentAccessibleValue
             */
            // @ts-ignore
            setCurrentAccessibleValue(n: java.lang.Number): boolean
            /**
             * Get the minimum value of this object as a Number.
             * @return Minimum value of the object; null if this object does not
             *  have a minimum value
             * @see #getMaximumAccessibleValue
             */
            // @ts-ignore
            getMinimumAccessibleValue(): java.lang.Number
            /**
             * Get the maximum value of this object as a Number.
             * @return Maximum value of the object; null if this object does not
             *  have a maximum value
             * @see #getMinimumAccessibleValue
             */
            // @ts-ignore
            getMaximumAccessibleValue(): java.lang.Number
        }
    }
}
