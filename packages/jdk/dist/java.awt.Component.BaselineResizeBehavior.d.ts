declare namespace java {
    namespace awt {
        namespace Component {
            /**
             * Enumeration of the common ways the baseline of a component can
             * change as the size changes.  The baseline resize behavior is
             * primarily for layout managers that need to know how the
             * position of the baseline changes as the component size changes.
             * In general the baseline resize behavior will be valid for sizes
             * greater than or equal to the minimum size (the actual minimum
             * size; not a developer specified minimum size).  For sizes
             * smaller than the minimum size the baseline may change in a way
             * other than the baseline resize behavior indicates.  Similarly,
             * as the size approaches <code>Integer.MAX_VALUE</code> and/or
             * <code>Short.MAX_VALUE</code> the baseline may change in a way
             * other than the baseline resize behavior indicates.
             * @see #getBaselineResizeBehavior
             * @see #getBaseline(int,int)
             * @since 1.6
             */
            // @ts-ignore
            class BaselineResizeBehavior extends java.lang.Enum<java.awt.Component.BaselineResizeBehavior> {
                // @ts-ignore
                values(): java.awt.Component.BaselineResizeBehavior[]
                // @ts-ignore
                valueOf(name: string): java.awt.Component.BaselineResizeBehavior
            }
        }
    }
}
