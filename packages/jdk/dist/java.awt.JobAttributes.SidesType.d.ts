declare namespace java {
    namespace awt {
        namespace JobAttributes {
            /**
             * A type-safe enumeration of possible multi-page impositions. These
             * impositions are in compliance with IPP 1.1.
             * @since 1.3
             */
            // @ts-ignore
            class SidesType extends java.awt.AttributeValue {
                /**
                 * The <code>SidesType</code> instance to use for specifying that
                 * consecutive job pages should be printed upon the same side of
                 * consecutive media sheets.
                 */
                // @ts-ignore
                readonly ONE_SIDED: java.awt.JobAttributes.SidesType
                /**
                 * The <code>SidesType</code> instance to use for specifying that
                 * consecutive job pages should be printed upon front and back sides
                 * of consecutive media sheets, such that the orientation of each pair
                 * of pages on the medium would be correct for the reader as if for
                 * binding on the long edge.
                 */
                // @ts-ignore
                readonly TWO_SIDED_LONG_EDGE: java.awt.JobAttributes.SidesType
                /**
                 * The <code>SidesType</code> instance to use for specifying that
                 * consecutive job pages should be printed upon front and back sides
                 * of consecutive media sheets, such that the orientation of each pair
                 * of pages on the medium would be correct for the reader as if for
                 * binding on the short edge.
                 */
                // @ts-ignore
                readonly TWO_SIDED_SHORT_EDGE: java.awt.JobAttributes.SidesType
            }
        }
    }
}
