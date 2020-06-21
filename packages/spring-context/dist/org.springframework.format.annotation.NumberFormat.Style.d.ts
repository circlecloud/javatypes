declare namespace org {
    namespace springframework {
        namespace format {
            namespace annotation {
                namespace NumberFormat {
                    /**
                     * Common number format styles.
                     */
                    // @ts-ignore
                    class Style extends java.lang.Enum<org.springframework.format.annotation.NumberFormat.Style> {
                        /**
                         * The default format for the annotated type: typically 'number' but possibly
                         * 'currency' for a money type (e.g. {@code javax.money.MonetaryAmount)}.
                         * @since 4.2
                         */
                        // @ts-ignore
                        readonly DEFAULT: org.springframework.format.annotation.NumberFormat.Style
                        /**
                         * The general-purpose number format for the current locale.
                         */
                        // @ts-ignore
                        readonly NUMBER: org.springframework.format.annotation.NumberFormat.Style
                        /**
                         * The percent format for the current locale.
                         */
                        // @ts-ignore
                        readonly PERCENT: org.springframework.format.annotation.NumberFormat.Style
                        /**
                         * The currency format for the current locale.
                         */
                        // @ts-ignore
                        readonly CURRENCY: org.springframework.format.annotation.NumberFormat.Style
                        // @ts-ignore
                        values(): org.springframework.format.annotation.NumberFormat.Style[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.format.annotation.NumberFormat.Style
                    }
                }
            }
        }
    }
}
