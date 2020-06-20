declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace nimbus {
                namespace AbstractRegionPainter {
                    /**
                     * A class encapsulating state useful when painting. Generally, instances of this
                     * class are created once, and reused for each paint request without modification.
                     * This class contains values useful when hinting the cache engine, and when decoding
                     * control points and bezier curve anchors.
                     */
                    // @ts-ignore
                    class PaintContext extends java.lang.Object {
                        /**
                         * Creates a new PaintContext which does not attempt to cache or scale any cached
                         * images.
                         * @param insets The stretching insets. May be null. If null, then assumed to be 0, 0, 0, 0.
                         * @param canvasSize The size of the canvas used when encoding the various x/y values. May be null.
                         *                    If null, then it is assumed that there are no encoded values, and any calls
                         *                    to one of the "decode" methods will return the passed in value.
                         * @param inverted Whether to "invert" the meaning of the 9-square grid and stretching insets
                         */
                        // @ts-ignore
                        constructor(insets: java.awt.Insets, canvasSize: java.awt.Dimension, inverted: boolean)
                        /**
                         * Creates a new PaintContext.
                         * @param insets The stretching insets. May be null. If null, then assumed to be 0, 0, 0, 0.
                         * @param canvasSize The size of the canvas used when encoding the various x/y values. May be null.
                         *                    If null, then it is assumed that there are no encoded values, and any calls
                         *                    to one of the "decode" methods will return the passed in value.
                         * @param inverted Whether to "invert" the meaning of the 9-square grid and stretching insets
                         * @param cacheMode A hint as to which caching mode to use. If null, then set to no caching.
                         * @param maxH The maximum scale in the horizontal direction to use before punting and redrawing from scratch.
                         *              For example, if maxH is 2, then we will attempt to scale any cached images up to 2x the canvas
                         *              width before redrawing from scratch. Reasonable maxH values may improve painting performance.
                         *              If set too high, then you may get poor looking graphics at higher zoom levels. Must be &gt;= 1.
                         * @param maxV The maximum scale in the vertical direction to use before punting and redrawing from scratch.
                         *              For example, if maxV is 2, then we will attempt to scale any cached images up to 2x the canvas
                         *              height before redrawing from scratch. Reasonable maxV values may improve painting performance.
                         *              If set too high, then you may get poor looking graphics at higher zoom levels. Must be &gt;= 1.
                         */
                        // @ts-ignore
                        constructor(insets: java.awt.Insets, canvasSize: java.awt.Dimension, inverted: boolean, cacheMode: javax.swing.plaf.nimbus.AbstractRegionPainter.PaintContext.CacheMode, maxH: number /*double*/, maxV: number /*double*/)
                    }
                }
            }
        }
    }
}
