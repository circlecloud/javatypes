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
                        // @ts-ignore
                        values(): org.springframework.core.annotation.MergedAnnotation.Adapt[]
                        // @ts-ignore
                        valueOf(name: string): org.springframework.core.annotation.MergedAnnotation.Adapt
                        // @ts-ignore
                        isIn(...adaptations: org.springframework.core.annotation.MergedAnnotation.Adapt[]): boolean
                        /**
                         * Factory method to create an {@link Adapt} array from a set of boolean flags.
                         * @param classToString if {#link Adapt#CLASS_TO_STRING} is included
                         * @param annotationsToMap if {#link Adapt#ANNOTATION_TO_MAP} is included
                         * @return a new {#link Adapt} array
                         */
                        // @ts-ignore
                        values(classToString: boolean, annotationsToMap: boolean): org.springframework.core.annotation.MergedAnnotation.Adapt[]
                    }
                }
            }
        }
    }
}