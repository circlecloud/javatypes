declare namespace org {
    namespace springframework {
        namespace format {
            namespace annotation {
                /**
                 * Declares that a field or method parameter should be formatted as a date or time.
                 * <p>Supports formatting by style pattern, ISO date time pattern, or custom format pattern string.
                 * Can be applied to {@code java.util.Date}, {@code java.util.Calendar}, {@code Long} (for
                 * millisecond timestamps) as well as JSR-310 <code>java.time</code> and Joda-Time value types.
                 * <p>For style-based formatting, set the {@link #style} attribute to be the style pattern code.
                 * The first character of the code is the date style, and the second character is the time style.
                 * Specify a character of 'S' for short style, 'M' for medium, 'L' for long, and 'F' for full.
                 * A date or time may be omitted by specifying the style character '-'.
                 * <p>For ISO-based formatting, set the {@link #iso} attribute to be the desired {@link ISO} format,
                 * such as {@link ISO#DATE}. For custom formatting, set the {@link #pattern} attribute to be the
                 * DateTime pattern, such as {@code yyyy/MM/dd hh:mm:ss a}.
                 * <p>Each attribute is mutually exclusive, so only set one attribute per annotation instance
                 * (the one most convenient one for your formatting needs).
                 * When the pattern attribute is specified, it takes precedence over both the style and ISO attribute.
                 * When the {@link #iso} attribute is specified, it takes precedence over the style attribute.
                 * When no annotation attributes are specified, the default format applied is style-based
                 * with a style code of 'SS' (short date, short time).
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see java.time.format.DateTimeFormatter
                 * @see org.joda.time.format.DateTimeFormat
                 */
                // @ts-ignore
                abstract class DateTimeFormat implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
