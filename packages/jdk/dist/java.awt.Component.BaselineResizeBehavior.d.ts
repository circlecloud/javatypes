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
                /**
                 * Indicates the baseline remains fixed relative to the
                 * y-origin.  That is, <code>getBaseline</code> returns
                 * the same value regardless of the height or width.  For example, a
                 * <code>JLabel</code> containing non-empty text with a
                 * vertical alignment of <code>TOP</code> should have a
                 * baseline type of <code>CONSTANT_ASCENT</code>.
                 */
                // @ts-ignore
                public static readonly CONSTANT_ASCENT: java.awt.Component.BaselineResizeBehavior
                /**
                 * Indicates the baseline remains fixed relative to the height
                 * and does not change as the width is varied.  That is, for
                 * any height H the difference between H and
                 * <code>getBaseline(w, H)</code> is the same.  For example, a
                 * <code>JLabel</code> containing non-empty text with a
                 * vertical alignment of <code>BOTTOM</code> should have a
                 * baseline type of <code>CONSTANT_DESCENT</code>.
                 */
                // @ts-ignore
                public static readonly CONSTANT_DESCENT: java.awt.Component.BaselineResizeBehavior
                /**
                 * Indicates the baseline remains a fixed distance from
                 * the center of the component.  That is, for any height H the
                 * difference between <code>getBaseline(w, H)</code> and
                 * <code>H / 2</code> is the same (plus or minus one depending upon
                 * rounding error).
                 * <p>
                 * Because of possible rounding errors it is recommended
                 * you ask for the baseline with two consecutive heights and use
                 * the return value to determine if you need to pad calculations
                 * by 1.  The following shows how to calculate the baseline for
                 * any height:
                 * <pre>
                 * Dimension preferredSize = component.getPreferredSize();
                 * int baseline = getBaseline(preferredSize.width,
                 * preferredSize.height);
                 * int nextBaseline = getBaseline(preferredSize.width,
                 * preferredSize.height + 1);
                 * // Amount to add to height when calculating where baseline
                 * // lands for a particular height:
                 * int padding = 0;
                 * // Where the baseline is relative to the mid point
                 * int baselineOffset = baseline - height / 2;
                 * if (preferredSize.height % 2 == 0 &amp;&amp;
                 * baseline != nextBaseline) {
                 * padding = 1;
                 * }
                 * else if (preferredSize.height % 2 == 1 &amp;&amp;
                 * baseline == nextBaseline) {
                 * baselineOffset--;
                 * padding = 1;
                 * }
                 * // The following calculates where the baseline lands for
                 * // the height z:
                 * int calculatedBaseline = (z + padding) / 2 + baselineOffset;
                 * </pre>
                 */
                // @ts-ignore
                public static readonly CENTER_OFFSET: java.awt.Component.BaselineResizeBehavior
                /**
                 * Indicates the baseline resize behavior can not be expressed using
                 * any of the other constants.  This may also indicate the baseline
                 * varies with the width of the component.  This is also returned
                 * by components that do not have a baseline.
                 */
                // @ts-ignore
                public static readonly OTHER: java.awt.Component.BaselineResizeBehavior
                // @ts-ignore
                public static values(): java.awt.Component.BaselineResizeBehavior[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.Component.BaselineResizeBehavior
            }
        }
    }
}
