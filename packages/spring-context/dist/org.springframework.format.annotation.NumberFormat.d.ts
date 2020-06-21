declare namespace org {
    namespace springframework {
        namespace format {
            namespace annotation {
                /**
                 * Declares that a field or method parameter should be formatted as a number.
                 * <p>Supports formatting by style or custom pattern string. Can be applied
                 * to any JDK {@code Number} type such as {@code Double} and {@code Long}.
                 * <p>For style-based formatting, set the {@link #style} attribute to be the
                 * desired {@link Style}. For custom formatting, set the {@link #pattern}
                 * attribute to be the number pattern, such as {@code #, ###.##}.
                 * <p>Each attribute is mutually exclusive, so only set one attribute per
                 * annotation instance (the one most convenient one for your formatting needs).
                 * When the {@link #pattern} attribute is specified, it takes precedence over
                 * the {@link #style} attribute. When no annotation attributes are specified,
                 * the default format applied is style-based for either number of currency,
                 * depending on the annotated field or method parameter type.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see java.text.NumberFormat
                 */
                // @ts-ignore
                abstract class NumberFormat implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
