declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    namespace eventgen {
                        /**
                         * Used to indicate the absolute position of a property when sorted.
                         * <p>A value of 0 indicates that a property would always be sorted first,
                         * a value of 1 indicates that a property would always be sorted second,
                         * and so on.</p>
                         * <p>If a gap is left in the absolute ordering of properties, the
                         * next-highest-numbered property will be placed next. For example,
                         * properties with the absolute ordering 0, 1, and 3 will still be adjacent to
                         * each other.</p>
                         */
                        // @ts-ignore
                        class AbsoluteSortPosition implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
