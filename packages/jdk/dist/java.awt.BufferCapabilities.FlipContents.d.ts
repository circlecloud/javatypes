declare namespace java {
    namespace awt {
        namespace BufferCapabilities {
            /**
             * A type-safe enumeration of the possible back buffer contents after
             * page-flipping
             * @since 1.4
             */
            // @ts-ignore
            class FlipContents extends java.awt.AttributeValue {
                /**
                 * When flip contents are <code>UNDEFINED</code>, the
                 * contents of the back buffer are undefined after flipping.
                 * @see #isPageFlipping
                 * @see #getFlipContents
                 * @see #BACKGROUND
                 * @see #PRIOR
                 * @see #COPIED
                 */
                // @ts-ignore
                public static readonly UNDEFINED: java.awt.BufferCapabilities.FlipContents
                /**
                 * When flip contents are <code>BACKGROUND</code>, the
                 * contents of the back buffer are cleared with the background color after
                 * flipping.
                 * @see #isPageFlipping
                 * @see #getFlipContents
                 * @see #UNDEFINED
                 * @see #PRIOR
                 * @see #COPIED
                 */
                // @ts-ignore
                public static readonly BACKGROUND: java.awt.BufferCapabilities.FlipContents
                /**
                 * When flip contents are <code>PRIOR</code>, the
                 * contents of the back buffer are the prior contents of the front buffer
                 * (a true page flip).
                 * @see #isPageFlipping
                 * @see #getFlipContents
                 * @see #UNDEFINED
                 * @see #BACKGROUND
                 * @see #COPIED
                 */
                // @ts-ignore
                public static readonly PRIOR: java.awt.BufferCapabilities.FlipContents
                /**
                 * When flip contents are <code>COPIED</code>, the
                 * contents of the back buffer are copied to the front buffer when
                 * flipping.
                 * @see #isPageFlipping
                 * @see #getFlipContents
                 * @see #UNDEFINED
                 * @see #BACKGROUND
                 * @see #PRIOR
                 */
                // @ts-ignore
                public static readonly COPIED: java.awt.BufferCapabilities.FlipContents
            }
        }
    }
}
