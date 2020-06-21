declare namespace java {
    namespace awt {
        namespace font {
            /**
             * The <code>GlyphJustificationInfo</code> class represents information
             * about the justification properties of a glyph.  A glyph is the visual
             * representation of one or more characters.  Many different glyphs can
             * be used to represent a single character or combination of characters.
             * The four justification properties represented by
             * <code>GlyphJustificationInfo</code> are weight, priority, absorb and
             * limit.
             * <p>
             * Weight is the overall 'weight' of the glyph in the line.  Generally it is
             * proportional to the size of the font.  Glyphs with larger weight are
             * allocated a correspondingly larger amount of the change in space.
             * <p>
             * Priority determines the justification phase in which this glyph is used.
             * All glyphs of the same priority are examined before glyphs of the next
             * priority.  If all the change in space can be allocated to these glyphs
             * without exceeding their limits, then glyphs of the next priority are not
             * examined. There are four priorities, kashida, whitespace, interchar,
             * and none.  KASHIDA is the first priority examined. NONE is the last
             * priority examined.
             * <p>
             * Absorb determines whether a glyph absorbs all change in space.  Within a
             * given priority, some glyphs may absorb all the change in space.  If any of
             * these glyphs are present, no glyphs of later priority are examined.
             * <p>
             * Limit determines the maximum or minimum amount by which the glyph can
             * change. Left and right sides of the glyph can have different limits.
             * <p>
             * Each <code>GlyphJustificationInfo</code> represents two sets of
             * metrics, which are <i>growing</i> and <i>shrinking</i>.  Growing
             * metrics are used when the glyphs on a line are to be
             * spread apart to fit a larger width.  Shrinking metrics are used when
             * the glyphs are to be moved together to fit a smaller width.
             */
            // @ts-ignore
            class GlyphJustificationInfo extends java.lang.Object {
                /**
                 * Constructs information about the justification properties of a
                 * glyph.
                 * @param weight the weight of this glyph when allocating space.  Must be non-negative.
                 * @param growAbsorb if <code>true</code> this glyph absorbs
                 *  all extra space at this priority and lower priority levels when it
                 *  grows
                 * @param growPriority the priority level of this glyph when it
                 *  grows
                 * @param growLeftLimit the maximum amount by which the left side of this
                 *  glyph can grow.  Must be non-negative.
                 * @param growRightLimit the maximum amount by which the right side of this
                 *  glyph can grow.  Must be non-negative.
                 * @param shrinkAbsorb if <code>true</code>, this glyph absorbs all
                 *  remaining shrinkage at this and lower priority levels when it
                 *  shrinks
                 * @param shrinkPriority the priority level of this glyph when
                 *  it shrinks
                 * @param shrinkLeftLimit the maximum amount by which the left side of this
                 *  glyph can shrink.  Must be non-negative.
                 * @param shrinkRightLimit the maximum amount by which the right side
                 *  of this glyph can shrink.  Must be non-negative.
                 */
                // @ts-ignore
                constructor(weight: number /*float*/, growAbsorb: boolean, growPriority: number /*int*/, growLeftLimit: number /*float*/, growRightLimit: number /*float*/, shrinkAbsorb: boolean, shrinkPriority: number /*int*/, shrinkLeftLimit: number /*float*/, shrinkRightLimit: number /*float*/)
                /**
                 * The highest justification priority.
                 */
                // @ts-ignore
                public static readonly PRIORITY_KASHIDA: number /*int*/
                /**
                 * The second highest justification priority.
                 */
                // @ts-ignore
                public static readonly PRIORITY_WHITESPACE: number /*int*/
                /**
                 * The second lowest justification priority.
                 */
                // @ts-ignore
                public static readonly PRIORITY_INTERCHAR: number /*int*/
                /**
                 * The lowest justification priority.
                 */
                // @ts-ignore
                public static readonly PRIORITY_NONE: number /*int*/
                /**
                 * The weight of this glyph.
                 */
                // @ts-ignore
                public readonly weight: number /*float*/
                /**
                 * The priority level of this glyph as it is growing.
                 */
                // @ts-ignore
                public readonly growPriority: number /*int*/
                /**
                 * If <code>true</code>, this glyph absorbs all extra
                 * space at this and lower priority levels when it grows.
                 */
                // @ts-ignore
                public readonly growAbsorb: boolean
                /**
                 * The maximum amount by which the left side of this glyph can grow.
                 */
                // @ts-ignore
                public readonly growLeftLimit: number /*float*/
                /**
                 * The maximum amount by which the right side of this glyph can grow.
                 */
                // @ts-ignore
                public readonly growRightLimit: number /*float*/
                /**
                 * The priority level of this glyph as it is shrinking.
                 */
                // @ts-ignore
                public readonly shrinkPriority: number /*int*/
                /**
                 * If <code>true</code>,this glyph absorbs all remaining shrinkage at
                 * this and lower priority levels as it shrinks.
                 */
                // @ts-ignore
                public readonly shrinkAbsorb: boolean
                /**
                 * The maximum amount by which the left side of this glyph can shrink
                 * (a positive number).
                 */
                // @ts-ignore
                public readonly shrinkLeftLimit: number /*float*/
                /**
                 * The maximum amount by which the right side of this glyph can shrink
                 * (a positive number).
                 */
                // @ts-ignore
                public readonly shrinkRightLimit: number /*float*/
            }
        }
    }
}
