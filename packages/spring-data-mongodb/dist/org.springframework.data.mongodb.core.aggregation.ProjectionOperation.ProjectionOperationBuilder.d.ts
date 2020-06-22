declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ProjectionOperation {
                            /**
                             * Builder for {@link ProjectionOperation}s on a field.
                             * @author Oliver Gierke
                             * @author Thomas Darimont
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ProjectionOperationBuilder extends org.springframework.data.mongodb.core.aggregation.ProjectionOperation.AbstractProjectionOperationBuilder {
                                /**
                                 * Creates a new {@link ProjectionOperationBuilder} for the field with the given name on top of the given
                                 * {@link ProjectionOperation}.
                                 * @param name must not be {#literal null} or empty.
                                 * @param operation must not be {#literal null}.
                                 * @param previousProjection the previous operation projection, may be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(name: java.lang.String | string, operation: org.springframework.data.mongodb.core.aggregation.ProjectionOperation, previousProjection: org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder.OperationProjection)
                                /**
                                 * Creates a new {@link ProjectionOperationBuilder} for the field with the given value on top of the given
                                 * {@link ProjectionOperation}.
                                 * @param value
                                 * @param operation
                                 * @param previousProjection
                                 */
                                // @ts-ignore
                                constructor(value: java.lang.Object | any, operation: org.springframework.data.mongodb.core.aggregation.ProjectionOperation, previousProjection: org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder.OperationProjection)
                                /**
                                 * Projects the result of the previous operation onto the current field. Will automatically add an exclusion for
                                 * {@code _id} as what would be held in it by default will now go into the field just projected into.
                                 * @return 
                                 */
                                // @ts-ignore
                                public previousOperation(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                                /**
                                 * Defines a nested field binding for the current field.
                                 * @param fields must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public nested(fields: org.springframework.data.mongodb.core.aggregation.Fields): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                                /**
                                 * Allows to specify an alias for the previous projection operation.
                                 * @param alias
                                 * @return 
                                 */
                                // @ts-ignore
                                public as(alias: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                                // @ts-ignore
                                public applyCondition(cond: org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                                // @ts-ignore
                                public applyCondition(ifNull: org.springframework.data.mongodb.core.aggregation.ConditionalOperators.IfNull): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                                /**
                                 * Generates an {@code $add} expression that adds the given number to the previously mentioned field.
                                 * @param number
                                 * @return 
                                 */
                                // @ts-ignore
                                public plus(number: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $add} expression that adds the value of the given field to the previously mentioned field.
                                 * @param fieldReference
                                 * @return 
                                 */
                                // @ts-ignore
                                public plus(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $subtract} expression that subtracts the given number to the previously mentioned field.
                                 * @param number
                                 * @return 
                                 */
                                // @ts-ignore
                                public minus(number: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $subtract} expression that subtracts the value of the given field to the previously mentioned
                                 * field.
                                 * @param fieldReference
                                 * @return 
                                 */
                                // @ts-ignore
                                public minus(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $subtract} expression that subtracts the result of the given {@link AggregationExpression}
                                 * from the previously mentioned field.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public minus(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $multiply} expression that multiplies the given number with the previously mentioned field.
                                 * @param number
                                 * @return 
                                 */
                                // @ts-ignore
                                public multiply(number: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $multiply} expression that multiplies the value of the given field with the previously
                                 * mentioned field.
                                 * @param fieldReference
                                 * @return 
                                 */
                                // @ts-ignore
                                public multiply(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $multiply} expression that multiplies the previously with the result of the
                                 * {@link AggregationExpression}. mentioned field.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public multiply(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $divide} expression that divides the previously mentioned field by the given number.
                                 * @param number
                                 * @return 
                                 */
                                // @ts-ignore
                                public divide(number: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $divide} expression that divides the value of the given field by the previously mentioned
                                 * field.
                                 * @param fieldReference
                                 * @return 
                                 */
                                // @ts-ignore
                                public divide(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $divide} expression that divides the value of the previously mentioned by the result of the
                                 * {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public divide(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $mod} expression that divides the previously mentioned field by the given number and returns
                                 * the remainder.
                                 * @param number
                                 * @return 
                                 */
                                // @ts-ignore
                                public mod(number: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $mod} expression that divides the value of the given field by the previously mentioned field
                                 * and returns the remainder.
                                 * @param fieldReference
                                 * @return 
                                 */
                                // @ts-ignore
                                public mod(fieldReference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $mod} expression that divides the value of the previously mentioned field by the result of
                                 * the {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public mod(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $size} expression that returns the size of the array held by the given field. <br />
                                 * @return never {#literal null}.
                                 * @since 1.7
                                 */
                                // @ts-ignore
                                public size(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $cmp} expression (compare to) that compares the value of the field to a given value or field.
                                 * @param compareValue compare value or a {#link Field} object.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public cmp(compareValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $eq} expression (equal) that compares the value of the field to a given value or field.
                                 * @param compareValue compare value or a {#link Field} object.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public eq(compareValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $gt} expression (greater than) that compares the value of the field to a given value or field.
                                 * @param compareValue compare value or a {#link Field} object.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public gt(compareValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $gte} expression (greater than equal) that compares the value of the field to a given value or
                                 * field.
                                 * @param compareValue compare value or a {#link Field} object.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public gte(compareValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $lt} expression (less than) that compares the value of the field to a given value or field.
                                 * @param compareValue compare value or a {#link Field} object.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public lt(compareValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $lte} expression (less than equal) that compares the value of the field to a given value or
                                 * field.
                                 * @param compareValue the compare value or a {#link Field} object.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public lte(compareValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $ne} expression (not equal) that compares the value of the field to a given value or field.
                                 * @param compareValue compare value or a {#link Field} object.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public ne(compareValue: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $slice} expression that returns a subset of the array held by the given field. <br />
                                 * If {@literal n} is positive, $slice returns up to the first n elements in the array. <br />
                                 * If {@literal n} is negative, $slice returns up to the last n elements in the array.
                                 * @param count max number of elements.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public slice(count: number /*int*/): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $slice} expression that returns a subset of the array held by the given field. <br />
                                 * @param count max number of elements. Must not be negative.
                                 * @param offset the offset within the array to start from.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public slice(count: number /*int*/, offset: number /*int*/): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $filter} expression that returns a subset of the array held by the given field.
                                 * @param as The variable name for the element in the input array. Must not be {#literal null}.
                                 * @param condition The {#link AggregationExpression} that determines whether to include the element in the
                                 *           resulting array. Must not be {@literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public filter(as: java.lang.String | string, condition: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $setEquals} expression that compares the previously mentioned field to one or more arrays and
                                 * returns {@literal true} if they have the same distinct elements and {@literal false} otherwise.
                                 * @param arrays must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public equalsArrays(...arrays: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $setIntersection} expression that takes array of the previously mentioned field and one or
                                 * more arrays and returns an array that contains the elements that appear in every of those.
                                 * @param arrays must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public intersectsArrays(...arrays: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $setUnion} expression that takes array of the previously mentioned field and one or more
                                 * arrays and returns an array that contains the elements that appear in any of those.
                                 * @param arrays must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public unionArrays(...arrays: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $setDifference} expression that takes array of the previously mentioned field and returns an
                                 * array containing the elements that do not exist in the given {@literal array}.
                                 * @param array must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public differenceToArray(array: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $setIsSubset} expression that takes array of the previously mentioned field and returns
                                 * {@literal true} if it is a subset of the given {@literal array}.
                                 * @param array must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public subsetOfArray(array: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $anyElementTrue} expression that Takes array of the previously mentioned field and returns
                                 * {@literal true} if any of the elements are {@literal true} and {@literal false} otherwise.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public anyElementInArrayTrue(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates an {@code $allElementsTrue} expression that takes array of the previously mentioned field and returns
                                 * {@literal true} if no elements is {@literal false}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public allElementsInArrayTrue(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $abs} expression that takes the number of the previously mentioned field and returns the
                                 * absolute value of it.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public absoluteValue(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $ceil} expression that takes the number of the previously mentioned field and returns the
                                 * smallest integer greater than or equal to the specified number.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public ceil(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $exp} expression that takes the number of the previously mentioned field and raises Euler’s
                                 * number (i.e. e ) on it.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public exp(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $floor} expression that takes the number of the previously mentioned field and returns the
                                 * largest integer less than or equal to it.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public floor(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $ln} expression that takes the number of the previously mentioned field and calculates the
                                 * natural logarithm ln (i.e loge) of it.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public ln(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $log} expression that takes the number of the previously mentioned field and calculates the
                                 * log of the associated number in the specified base.
                                 * @param baseFieldRef must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public log(baseFieldRef: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $log} expression that takes the number of the previously mentioned field and calculates the
                                 * log of the associated number in the specified base.
                                 * @param base must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public log(base: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $log} expression that takes the number of the previously mentioned field and calculates the
                                 * log of the associated number in the specified base.
                                 * @param base must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public log(base: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $log10} expression that takes the number of the previously mentioned field and calculates the
                                 * log base 10.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public log10(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $pow} expression that takes the number of the previously mentioned field and raises it by the
                                 * specified exponent.
                                 * @param exponentFieldRef must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public pow(exponentFieldRef: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $pow} expression that takes the number of the previously mentioned field and raises it by the
                                 * specified exponent.
                                 * @param exponent must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public pow(exponent: java.lang.Number): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $pow} expression that Takes the number of the previously mentioned field and raises it by the
                                 * specified exponent.
                                 * @param exponentExpression must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public pow(exponentExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $sqrt} expression that takes the number of the previously mentioned field and calculates the
                                 * square root.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public sqrt(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Takes the number of the previously mentioned field and truncates it to its integer value.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public trunc(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $concat} expression that takes the string representation of the previously mentioned field and
                                 * concats given values to it.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public concat(...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $substr} expression that Takes the string representation of the previously mentioned field and
                                 * returns a substring starting at a specified index position.
                                 * @param start
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public substring(start: number /*int*/): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $substr} expression that takes the string representation of the previously mentioned field and
                                 * returns a substring starting at a specified index position including the specified number of characters.
                                 * @param start
                                 * @param nrOfChars
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public substring(start: number /*int*/, nrOfChars: number /*int*/): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $toLower} expression that takes the string representation of the previously mentioned field
                                 * and lowers it.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public toLower(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $toUpper} expression that takes the string representation of the previously mentioned field
                                 * and uppers it.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public toUpper(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $strcasecmp} expression that takes the string representation of the previously mentioned field
                                 * and performs case-insensitive comparison to the given {@literal value}.
                                 * @param value must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public strCaseCmp(value: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $strcasecmp} expression that takes the string representation of the previously mentioned field
                                 * and performs case-insensitive comparison to the referenced {@literal fieldRef}.
                                 * @param fieldRef must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public strCaseCmpValueOf(fieldRef: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $strcasecmp} expression that takes the string representation of the previously mentioned field
                                 * and performs case-insensitive comparison to the result of the given {@link AggregationExpression}.
                                 * @param expression must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public strCaseCmp(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $arrayElemAt} expression that takes the string representation of the previously mentioned
                                 * field and returns the element at the specified array {@literal position}.
                                 * @param position
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public arrayElementAt(position: number /*int*/): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $concatArrays} expression that takes the string representation of the previously mentioned
                                 * field and concats it with the arrays from the referenced {@literal fields}.
                                 * @param fields must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public concatArrays(...fields: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $isArray} expression that takes the string representation of the previously mentioned field
                                 * and checks if its an array.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public isArray(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $literal} expression that Takes the value previously and uses it as literal.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public asLiteral(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $dateToString} expression that takes the date representation of the previously mentioned field
                                 * and applies given {@literal format} to it.
                                 * @param format must not be {#literal null}.
                                 * @return 
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public dateAsFormattedString(format: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $dateToString} expression that takes the date representation of the previously mentioned field
                                 * using the server default format. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return 
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public dateAsFormattedString(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $let} expression that binds variables for use in the specified expression, and returns the
                                 * result of the expression.
                                 * @param valueExpression The {#link AggregationExpression} bound to {@literal variableName}.
                                 * @param variableName The variable name to be used in the {#literal in} {@link AggregationExpression}.
                                 * @param in The {#link AggregationExpression} to evaluate.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public let(valueExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression, variableName: java.lang.String | string, input: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Generates a {@code $let} expression that binds variables for use in the specified expression, and returns the
                                 * result of the expression.
                                 * @param variables The bound {#link ExpressionVariable}s.
                                 * @param in The {#link AggregationExpression} to evaluate.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public let(variables: java.util.Collection<org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable> | Array<org.springframework.data.mongodb.core.aggregation.VariableOperators.Let.ExpressionVariable>, input: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                // @ts-ignore
                                public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                                /**
                                 * Adds a generic projection for the current field.
                                 * @param operation the operation key, e.g. {#code $add}.
                                 * @param values the values to be set for the projection operation.
                                 * @return 
                                 */
                                // @ts-ignore
                                public project(operation: java.lang.String | string, ...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the minute from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractMinute(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the hour from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractHour(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the second from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractSecond(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the millisecond from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractMillisecond(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the year from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractYear(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the month from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractMonth(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the week from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractWeek(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the dayOfYear from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractDayOfYear(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the dayOfMonth from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractDayOfMonth(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                                /**
                                 * Extracts the dayOfWeek from a date expression.
                                 * @return 
                                 */
                                // @ts-ignore
                                public extractDayOfWeek(): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
