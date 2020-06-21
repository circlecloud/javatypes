declare namespace org {
    namespace springframework {
        namespace format {
            namespace annotation {
                namespace DateTimeFormat {
                    /**
                     * Common ISO date time format patterns.
                     */
                    // @ts-ignore
                    class ISO extends java.lang.Enum<org.springframework.format.annotation.DateTimeFormat.ISO> {
                        /**
                         * The most common ISO Date Format {@code yyyy-MM-dd},
                         * e.g. "2000-10-31".
                         */
                        // @ts-ignore
                        readonly DATE: org.springframework.format.annotation.DateTimeFormat.ISO
                        /**
                         * The most common ISO Time Format {@code HH:mm:ss.SSSXXX},
                         * e.g. "01:30:00.000-05:00".
                         */
                        // @ts-ignore
                        readonly TIME: org.springframework.format.annotation.DateTimeFormat.ISO
                        /**
                         * The most common ISO DateTime Format {@code yyyy-MM-dd'T'HH:mm:ss.SSSXXX},
                         * e.g. "2000-10-31T01:30:00.000-05:00".
                         * <p>This is the default if no annotation value is specified.
                         */
                        // @ts-ignore
                        readonly DATE_TIME: org.springframework.format.annotation.DateTimeFormat.ISO
                        /**
                         * Indicates that no ISO-based format pattern should be applied.
                         */
                        // @ts-ignore
                        readonly NONE: org.springframework.format.annotation.DateTimeFormat.ISO
                        // @ts-ignore
                        values(): org.springframework.format.annotation.DateTimeFormat.ISO[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.springframework.format.annotation.DateTimeFormat.ISO
                    }
                }
            }
        }
    }
}
