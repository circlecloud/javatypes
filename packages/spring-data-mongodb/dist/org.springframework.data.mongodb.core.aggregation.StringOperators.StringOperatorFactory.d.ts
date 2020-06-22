declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace StringOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class StringOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link StringOperatorFactory} for given {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(fieldReference: java.lang.String | string)
                                /**
                                 * Creates new {@link StringOperatorFactory} for given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression)
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and concats the value
                                 * of the referenced field to it.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public concatValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and concats the result
                                 * of the given {@link AggregationExpression} to it.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public concatValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and concats given
                                 * {@literal value} to it.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public concat(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Concat
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and returns a substring
                                 * starting at a specified index position.
                                 * @param start
                                 * @return 
                                 */
                                // @ts-ignore
                                public substring(start: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.Substr
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and returns a substring
                                 * starting at a specified index position including the specified number of characters.
                                 * @param start
                                 * @param nrOfChars
                                 * @return 
                                 */
                                // @ts-ignore
                                public substring(start: number /*int*/, nrOfChars: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.Substr
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and lowers it.
                                 * @return 
                                 */
                                // @ts-ignore
                                public toLower(): org.springframework.data.mongodb.core.aggregation.StringOperators.ToLower
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and uppers it.
                                 * @return 
                                 */
                                // @ts-ignore
                                public toUpper(): org.springframework.data.mongodb.core.aggregation.StringOperators.ToUpper
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and performs
                                 * case-insensitive comparison to the given {@literal value}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public strCaseCmp(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and performs
                                 * case-insensitive comparison to the referenced {@literal fieldReference}.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public strCaseCmpValueOf(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and performs
                                 * case-insensitive comparison to the result of the given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public strCaseCmpValueOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.StrCaseCmp
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and searches a string
                                 * for an occurrence of a given {@literal substring} and returns the UTF-8 byte index (zero-based) of the first
                                 * occurrence.
                                 * @param substring must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public indexOf(substring: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfBytes
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and searches a string
                                 * for an occurrence of a substring contained in the given {@literal field reference} and returns the UTF-8 byte
                                 * index (zero-based) of the first occurrence.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public indexOf(fieldReference: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfBytes
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and searches a string
                                 * for an occurrence of a substring resulting from the given {@link AggregationExpression} and returns the UTF-8
                                 * byte index (zero-based) of the first occurrence.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public indexOf(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfBytes
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and searches a string
                                 * for an occurrence of a given {@literal substring} and returns the UTF-8 code point index (zero-based) of the
                                 * first occurrence.
                                 * @param substring must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public indexOfCP(substring: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and searches a string
                                 * for an occurrence of a substring contained in the given {@literal field reference} and returns the UTF-8 code
                                 * point index (zero-based) of the first occurrence.
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public indexOfCP(fieldReference: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and searches a string
                                 * for an occurrence of a substring resulting from the given {@link AggregationExpression} and returns the UTF-8
                                 * code point index (zero-based) of the first occurrence.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public indexOfCP(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.IndexOfCP
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated string representation into an array of
                                 * substrings based on the given delimiter.
                                 * @param delimiter must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public split(delimiter: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated string representation into an array of
                                 * substrings based on the delimiter resulting from the referenced field..
                                 * @param fieldReference must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public split(fieldReference: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                                /**
                                 * Creates new {@link AggregationExpression} that divides the associated string representation into an array of
                                 * substrings based on a delimiter resulting from the given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public split(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Split
                                /**
                                 * Creates new {@link AggregationExpression} that returns the number of UTF-8 bytes in the associated string
                                 * representation.
                                 * @return 
                                 */
                                // @ts-ignore
                                public length(): org.springframework.data.mongodb.core.aggregation.StringOperators.StrLenBytes
                                /**
                                 * Creates new {@link AggregationExpression} that returns the number of UTF-8 code points in the associated string
                                 * representation.
                                 * @return 
                                 */
                                // @ts-ignore
                                public lengthCP(): org.springframework.data.mongodb.core.aggregation.StringOperators.StrLenCP
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and returns a substring
                                 * starting at a specified code point index position.
                                 * @param codePointStart
                                 * @return 
                                 */
                                // @ts-ignore
                                public substringCP(codePointStart: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.SubstrCP
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and returns a substring
                                 * starting at a specified code point index position including the specified number of code points.
                                 * @param codePointStart
                                 * @param nrOfCodePoints
                                 * @return 
                                 */
                                // @ts-ignore
                                public substringCP(codePointStart: number /*int*/, nrOfCodePoints: number /*int*/): org.springframework.data.mongodb.core.aggregation.StringOperators.SubstrCP
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims whitespaces
                                 * from the beginning and end. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link Trim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public trim(): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims the given
                                 * character sequence from the beginning and end. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param chars must not be {#literal null}.
                                 * @return new instance of {#link Trim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public trim(chars: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims the character
                                 * sequence resulting from the given {@link AggregationExpression} from the beginning and end. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link Trim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public trim(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.Trim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims whitespaces
                                 * from the beginning. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link LTrim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public ltrim(): org.springframework.data.mongodb.core.aggregation.StringOperators.LTrim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims the given
                                 * character sequence from the beginning. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param chars must not be {#literal null}.
                                 * @return new instance of {#link LTrim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public ltrim(chars: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.LTrim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims the character
                                 * sequence resulting from the given {@link AggregationExpression} from the beginning. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link LTrim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public ltrim(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.LTrim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims whitespaces
                                 * from the end. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link RTrim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public rtrim(): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims the given
                                 * character sequence from the end. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param chars must not be {#literal null}.
                                 * @return new instance of {#link RTrim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public rtrim(chars: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                                /**
                                 * Creates new {@link AggregationExpression} that takes the associated string representation and trims the character
                                 * sequence resulting from the given {@link AggregationExpression} from the end. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @param expression must not be {#literal null}.
                                 * @return new instance of {#link RTrim}.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public rtrim(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.StringOperators.RTrim
                            }
                        }
                    }
                }
            }
        }
    }
}
