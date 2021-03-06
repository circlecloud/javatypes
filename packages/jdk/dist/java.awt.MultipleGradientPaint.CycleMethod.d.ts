declare namespace java {
    namespace awt {
        namespace MultipleGradientPaint {
            /**
             * The method to use when painting outside the gradient bounds.
             * @since 1.6
             */
            // @ts-ignore
            class CycleMethod extends java.lang.Enum<java.awt.MultipleGradientPaint.CycleMethod> {
                /**
                 * Use the terminal colors to fill the remaining area.
                 */
                // @ts-ignore
                public static readonly NO_CYCLE: java.awt.MultipleGradientPaint.CycleMethod
                /**
                 * Cycle the gradient colors start-to-end, end-to-start
                 * to fill the remaining area.
                 */
                // @ts-ignore
                public static readonly REFLECT: java.awt.MultipleGradientPaint.CycleMethod
                /**
                 * Cycle the gradient colors start-to-end, start-to-end
                 * to fill the remaining area.
                 */
                // @ts-ignore
                public static readonly REPEAT: java.awt.MultipleGradientPaint.CycleMethod
                // @ts-ignore
                public static values(): java.awt.MultipleGradientPaint.CycleMethod[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.MultipleGradientPaint.CycleMethod
            }
        }
    }
}
