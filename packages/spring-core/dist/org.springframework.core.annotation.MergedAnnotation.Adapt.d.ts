declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                namespace MergedAnnotation {
                    /**
                     * Adaptations that can be applied to attribute values when creating
                     * {@linkplain MergedAnnotation#asMap(Adapt...) Maps} or
                     * {@link MergedAnnotation#asAnnotationAttributes(Adapt...) AnnotationAttributes}.
                     */
                    // @ts-ignore
                    class Adapt extends java.lang.Enum<org.springframework.core.annotation.MergedAnnotation.Adapt> {
                        /**
                         * Adapt class or class array attributes to strings.
                         */
                        // @ts-ignore
                        public static readonly CLASS_TO_STRING: org.springframework.core.annotation.MergedAnnotation.Adapt
                        /**
                         * Adapt nested annotation or annotation arrays to maps rather
                         * than synthesizing the values.
                         */
                        // @ts-ignore
                        public static readonly ANNOTATION_TO_MAP: org.springframework.core.annotation.MergedAnnotation.Adapt
                        // @ts-ignore
                        public static values(): org.springframework.core.annotation.MergedAnnotation.Adapt[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.core.annotation.MergedAnnotation.Adapt
                        // @ts-ignore
                        isIn(...adaptations: org.springframework.core.annotation.MergedAnnotation.Adapt[]): boolean
                        /**
                         * Factory method to create an {@link Adapt} array from a set of boolean flags.
                         * @param classToString if {#link Adapt#CLASS_TO_STRING} is included
                         * @param annotationsToMap if {#link Adapt#ANNOTATION_TO_MAP} is included
                         * @return a new {#link Adapt} array
                         */
                        // @ts-ignore
                        public static values(classToString: boolean, annotationsToMap: boolean): org.springframework.core.annotation.MergedAnnotation.Adapt[]
                    }
                }
            }
        }
    }
}
