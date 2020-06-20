declare namespace javax {
    namespace swing {
        /**
         * For the convenience of layout managers,
         * calculates information about the size and position of components.
         * All size and position calculation methods are class methods
         * that take arrays of SizeRequirements as arguments.
         * The SizeRequirements class supports two types of layout:
         * <blockquote>
         * <dl>
         * <dt> tiled
         * <dd> The components are placed end-to-end,
         * starting either at coordinate 0 (the leftmost or topmost position)
         * or at the coordinate representing the end of the allocated span
         * (the rightmost or bottommost position).
         * <dt> aligned
         * <dd> The components are aligned as specified
         * by each component's X or Y alignment value.
         * </dl>
         * </blockquote>
         * <p>
         * Each SizeRequirements object contains information
         * about either the width (and X alignment)
         * or height (and Y alignment)
         * of a single component or a group of components:
         * <blockquote>
         * <dl>
         * <dt> <code>minimum</code>
         * <dd> The smallest reasonable width/height of the component
         * or component group, in pixels.
         * <dt> <code>preferred</code>
         * <dd> The natural width/height of the component
         * or component group, in pixels.
         * <dt> <code>maximum</code>
         * <dd> The largest reasonable width/height of the component
         * or component group, in pixels.
         * <dt> <code>alignment</code>
         * <dd> The X/Y alignment of the component
         * or component group.
         * </dl>
         * </blockquote>
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see Component#getMinimumSize
         * @see Component#getPreferredSize
         * @see Component#getMaximumSize
         * @see Component#getAlignmentX
         * @see Component#getAlignmentY
         * @author Timothy Prinzing
         */
        // @ts-ignore
        class SizeRequirements extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a SizeRequirements object with the minimum, preferred,
             * and maximum sizes set to zero and an alignment value of 0.5
             * (centered).
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a SizeRequirements object with the specified minimum, preferred,
             * and maximum sizes and the specified alignment.
             * @param min the minimum size &gt;= 0
             * @param pref the preferred size &gt;= 0
             * @param max the maximum size &gt;= 0
             * @param a the alignment &gt;= 0.0f &amp;&amp; &lt;= 1.0f
             */
            // @ts-ignore
            constructor(min: number /*int*/, pref: number /*int*/, max: number /*int*/, a: number /*float*/)
            /**
             * The minimum size required.
             * For a component <code>comp</code>, this should be equal to either
             * <code>comp.getMinimumSize().width</code> or
             * <code>comp.getMinimumSize().height</code>.
             */
            // @ts-ignore
            minimum: number /*int*/
            /**
             * The preferred (natural) size.
             * For a component <code>comp</code>, this should be equal to either
             * <code>comp.getPreferredSize().width</code> or
             * <code>comp.getPreferredSize().height</code>.
             */
            // @ts-ignore
            preferred: number /*int*/
            /**
             * The maximum size allowed.
             * For a component <code>comp</code>, this should be equal to either
             * <code>comp.getMaximumSize().width</code> or
             * <code>comp.getMaximumSize().height</code>.
             */
            // @ts-ignore
            maximum: number /*int*/
            /**
             * The alignment, specified as a value between 0.0 and 1.0,
             * inclusive.
             * To specify centering, the alignment should be 0.5.
             */
            // @ts-ignore
            alignment: number /*float*/
            /**
             * Returns a string describing the minimum, preferred, and maximum
             * size requirements, along with the alignment.
             * @return the string
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Determines the total space necessary to
             * place a set of components end-to-end.  The needs
             * of each component in the set are represented by an entry in the
             * passed-in SizeRequirements array.
             * The returned SizeRequirements object has an alignment of 0.5
             * (centered).  The space requirement is never more than
             * Integer.MAX_VALUE.
             * @param children  the space requirements for a set of components.
             *    The vector may be of zero length, which will result in a
             *    default SizeRequirements object instance being passed back.
             * @return the total space requirements.
             */
            // @ts-ignore
            getTiledSizeRequirements(children: javax.swing.SizeRequirements[]): javax.swing.SizeRequirements
            /**
             * Determines the total space necessary to
             * align a set of components.  The needs
             * of each component in the set are represented by an entry in the
             * passed-in SizeRequirements array.  The total space required will
             * never be more than Integer.MAX_VALUE.
             * @param children  the set of child requirements.  If of zero length,
             *   the returns result will be a default instance of SizeRequirements.
             * @return the total space requirements.
             */
            // @ts-ignore
            getAlignedSizeRequirements(children: javax.swing.SizeRequirements[]): javax.swing.SizeRequirements
            /**
             * Creates a set of offset/span pairs representing how to
             * lay out a set of components end-to-end.
             * This method requires that you specify
             * the total amount of space to be allocated,
             * the size requirements for each component to be placed
             * (specified as an array of SizeRequirements), and
             * the total size requirement of the set of components.
             * You can get the total size requirement
             * by invoking the getTiledSizeRequirements method.  The components
             * will be tiled in the forward direction with offsets increasing from 0.
             * @param allocated the total span to be allocated &gt;= 0.
             * @param total     the total of the children requests.  This argument
             *   is optional and may be null.
             * @param children  the size requirements for each component.
             * @param offsets   the offset from 0 for each child where
             *    the spans were allocated (determines placement of the span).
             * @param spans     the span allocated for each child to make the
             *    total target span.
             */
            // @ts-ignore
            calculateTiledPositions(allocated: number /*int*/, total: javax.swing.SizeRequirements, children: javax.swing.SizeRequirements[], offsets: number /*int*/[], spans: number /*int*/[]): void
            /**
             * Creates a set of offset/span pairs representing how to
             * lay out a set of components end-to-end.
             * This method requires that you specify
             * the total amount of space to be allocated,
             * the size requirements for each component to be placed
             * (specified as an array of SizeRequirements), and
             * the total size requirement of the set of components.
             * You can get the total size requirement
             * by invoking the getTiledSizeRequirements method.
             * This method also requires a flag indicating whether components
             * should be tiled in the forward direction (offsets increasing
             * from 0) or reverse direction (offsets decreasing from the end
             * of the allocated space).  The forward direction represents
             * components tiled from left to right or top to bottom.  The
             * reverse direction represents components tiled from right to left
             * or bottom to top.
             * @param allocated the total span to be allocated &gt;= 0.
             * @param total     the total of the children requests.  This argument
             *   is optional and may be null.
             * @param children  the size requirements for each component.
             * @param offsets   the offset from 0 for each child where
             *    the spans were allocated (determines placement of the span).
             * @param spans     the span allocated for each child to make the
             *    total target span.
             * @param forward   tile with offsets increasing from 0 if true
             *    and with offsets decreasing from the end of the allocated space
             *    if false.
             * @since 1.4
             */
            // @ts-ignore
            calculateTiledPositions(allocated: number /*int*/, total: javax.swing.SizeRequirements, children: javax.swing.SizeRequirements[], offsets: number /*int*/[], spans: number /*int*/[], forward: boolean): void
            /**
             * Creates a bunch of offset/span pairs specifying how to
             * lay out a set of components with the specified alignments.
             * The resulting span allocations will overlap, with each one
             * fitting as well as possible into the given total allocation.
             * This method requires that you specify
             * the total amount of space to be allocated,
             * the size requirements for each component to be placed
             * (specified as an array of SizeRequirements), and
             * the total size requirements of the set of components
             * (only the alignment field of which is actually used).
             * You can get the total size requirement by invoking
             * getAlignedSizeRequirements.
             * Normal alignment will be done with an alignment value of 0.0f
             * representing the left/top edge of a component.
             * @param allocated the total span to be allocated &gt;= 0.
             * @param total     the total of the children requests.
             * @param children  the size requirements for each component.
             * @param offsets   the offset from 0 for each child where
             *    the spans were allocated (determines placement of the span).
             * @param spans     the span allocated for each child to make the
             *    total target span.
             */
            // @ts-ignore
            calculateAlignedPositions(allocated: number /*int*/, total: javax.swing.SizeRequirements, children: javax.swing.SizeRequirements[], offsets: number /*int*/[], spans: number /*int*/[]): void
            /**
             * Creates a set of offset/span pairs specifying how to
             * lay out a set of components with the specified alignments.
             * The resulting span allocations will overlap, with each one
             * fitting as well as possible into the given total allocation.
             * This method requires that you specify
             * the total amount of space to be allocated,
             * the size requirements for each component to be placed
             * (specified as an array of SizeRequirements), and
             * the total size requirements of the set of components
             * (only the alignment field of which is actually used)
             * You can get the total size requirement by invoking
             * getAlignedSizeRequirements.
             * This method also requires a flag indicating whether normal or
             * reverse alignment should be performed.  With normal alignment
             * the value 0.0f represents the left/top edge of the component
             * to be aligned.  With reverse alignment, 0.0f represents the
             * right/bottom edge.
             * @param allocated the total span to be allocated &gt;= 0.
             * @param total     the total of the children requests.
             * @param children  the size requirements for each component.
             * @param offsets   the offset from 0 for each child where
             *    the spans were allocated (determines placement of the span).
             * @param spans     the span allocated for each child to make the
             *    total target span.
             * @param normal    when true, the alignment value 0.0f means
             *    left/top; when false, it means right/bottom.
             * @since 1.4
             */
            // @ts-ignore
            calculateAlignedPositions(allocated: number /*int*/, total: javax.swing.SizeRequirements, children: javax.swing.SizeRequirements[], offsets: number /*int*/[], spans: number /*int*/[], normal: boolean): void
            /**
             * Adjust a specified array of sizes by a given amount.
             * @param delta     an int specifying the size difference
             * @param children  an array of SizeRequirements objects
             * @return an array of ints containing the final size for each item
             */
            // @ts-ignore
            adjustSizes(delta: number /*int*/, children: javax.swing.SizeRequirements[]): int[]
        }
    }
}
