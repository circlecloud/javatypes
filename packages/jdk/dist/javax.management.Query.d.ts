declare namespace javax {
    namespace management {
        /**
         * <p>Constructs query object constraints.</p>
         * <p>The MBean Server can be queried for MBeans that meet a particular
         * condition, using its {@link MBeanServer#queryNames queryNames} or
         * {@link MBeanServer#queryMBeans queryMBeans} method.  The {@link QueryExp}
         * parameter to the method can be any implementation of the interface
         * {@code QueryExp}, but it is usually best to obtain the {@code QueryExp}
         * value by calling the static methods in this class.  This is particularly
         * true when querying a remote MBean Server: a custom implementation of the
         * {@code QueryExp} interface might not be present in the remote MBean Server,
         * but the methods in this class return only standard classes that are
         * part of the JMX implementation.</p>
         * <p>As an example, suppose you wanted to find all MBeans where the {@code
         * Enabled} attribute is {@code true} and the {@code Owner} attribute is {@code
         * "Duke"}. Here is how you could construct the appropriate {@code QueryExp} by
         * chaining together method calls:</p>
         * <pre>
         * QueryExp query =
         * Query.and(Query.eq(Query.attr("Enabled"), Query.value(true)),
         * Query.eq(Query.attr("Owner"), Query.value("Duke")));
         * </pre>
         * @since 1.5
         */
        // @ts-ignore
        class Query extends java.lang.Object {
            /**
             * Basic constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * A code representing the {@link Query#gt} query.  This is chiefly
             * of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly GT: number /*int*/
            /**
             * A code representing the {@link Query#lt} query.  This is chiefly
             * of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly LT: number /*int*/
            /**
             * A code representing the {@link Query#geq} query.  This is chiefly
             * of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly GE: number /*int*/
            /**
             * A code representing the {@link Query#leq} query.  This is chiefly
             * of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly LE: number /*int*/
            /**
             * A code representing the {@link Query#eq} query.  This is chiefly
             * of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly EQ: number /*int*/
            /**
             * A code representing the {@link Query#plus} expression.  This
             * is chiefly of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly PLUS: number /*int*/
            /**
             * A code representing the {@link Query#minus} expression.  This
             * is chiefly of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly MINUS: number /*int*/
            /**
             * A code representing the {@link Query#times} expression.  This
             * is chiefly of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly TIMES: number /*int*/
            /**
             * A code representing the {@link Query#div} expression.  This is
             * chiefly of interest for the serialized form of queries.
             */
            // @ts-ignore
            public static readonly DIV: number /*int*/
            /**
             * Returns a query expression that is the conjunction of two other query
             * expressions.
             * @param q1 A query expression.
             * @param q2 Another query expression.
             * @return The conjunction of the two arguments.  The returned object
             *  will be serialized as an instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.AndQueryExp">
             *  javax.management.AndQueryExp</a>.
             */
            // @ts-ignore
            public static and(q1: javax.management.QueryExp, q2: javax.management.QueryExp): javax.management.QueryExp
            /**
             * Returns a query expression that is the disjunction of two other query
             * expressions.
             * @param q1 A query expression.
             * @param q2 Another query expression.
             * @return The disjunction of the two arguments.  The returned object
             *  will be serialized as an instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.OrQueryExp">
             *  javax.management.OrQueryExp</a>.
             */
            // @ts-ignore
            public static or(q1: javax.management.QueryExp, q2: javax.management.QueryExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents a "greater than" constraint on
             * two values.
             * @param v1 A value expression.
             * @param v2 Another value expression.
             * @return A "greater than" constraint on the arguments.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryRelQueryExp">
             *  javax.management.BinaryRelQueryExp</a> with a {#code relOp} equal
             *  to {@link #GT}.
             */
            // @ts-ignore
            public static gt(v1: javax.management.ValueExp, v2: javax.management.ValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents a "greater than or equal
             * to" constraint on two values.
             * @param v1 A value expression.
             * @param v2 Another value expression.
             * @return A "greater than or equal to" constraint on the
             *  arguments.  The returned object will be serialized as an
             *  instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryRelQueryExp">
             *  javax.management.BinaryRelQueryExp</a> with a {#code relOp} equal
             *  to {@link #GE}.
             */
            // @ts-ignore
            public static geq(v1: javax.management.ValueExp, v2: javax.management.ValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents a "less than or equal to"
             * constraint on two values.
             * @param v1 A value expression.
             * @param v2 Another value expression.
             * @return A "less than or equal to" constraint on the arguments.
             *  The returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryRelQueryExp">
             *  javax.management.BinaryRelQueryExp</a> with a {#code relOp} equal
             *  to {@link #LE}.
             */
            // @ts-ignore
            public static leq(v1: javax.management.ValueExp, v2: javax.management.ValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents a "less than" constraint on
             * two values.
             * @param v1 A value expression.
             * @param v2 Another value expression.
             * @return A "less than" constraint on the arguments.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryRelQueryExp">
             *  javax.management.BinaryRelQueryExp</a> with a {#code relOp} equal
             *  to {@link #LT}.
             */
            // @ts-ignore
            public static lt(v1: javax.management.ValueExp, v2: javax.management.ValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents an equality constraint on
             * two values.
             * @param v1 A value expression.
             * @param v2 Another value expression.
             * @return A "equal to" constraint on the arguments.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryRelQueryExp">
             *  javax.management.BinaryRelQueryExp</a> with a {#code relOp} equal
             *  to {@link #EQ}.
             */
            // @ts-ignore
            public static eq(v1: javax.management.ValueExp, v2: javax.management.ValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents the constraint that one
             * value is between two other values.
             * @param v1 A value expression that is "between" v2 and v3.
             * @param v2 Value expression that represents a boundary of the constraint.
             * @param v3 Value expression that represents a boundary of the constraint.
             * @return The constraint that v1 lies between v2 and v3.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.BetweenQueryExp">
             *  javax.management.BetweenQueryExp</a>.
             */
            // @ts-ignore
            public static between(v1: javax.management.ValueExp, v2: javax.management.ValueExp, v3: javax.management.ValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents a matching constraint on
             * a string argument. The matching syntax is consistent with file globbing:
             * supports "<code>?</code>", "<code>*</code>", "<code>[</code>",
             * each of which may be escaped with "<code>\</code>";
             * character classes may use "<code>!</code>" for negation and
             * "<code>-</code>" for range.
             * (<code>*</code> for any character sequence,
             * <code>?</code> for a single arbitrary character,
             * <code>[...]</code> for a character sequence).
             * For example: <code>a*b?c</code> would match a string starting
             * with the character <code>a</code>, followed
             * by any number of characters, followed by a <code>b</code>,
             * any single character, and a <code>c</code>.
             * @param a An attribute expression
             * @param s A string value expression representing a matching constraint
             * @return A query expression that represents the matching
             *  constraint on the string argument.  The returned object will
             *  be serialized as an instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.MatchQueryExp">
             *  javax.management.MatchQueryExp</a>.
             */
            // @ts-ignore
            public static match(a: javax.management.AttributeValueExp, s: javax.management.StringValueExp): javax.management.QueryExp
            /**
             * <p>Returns a new attribute expression.  See {@link AttributeValueExp}
             * for a detailed description of the semantics of the expression.</p>
             * <p>Evaluating this expression for a given
             * <code>objectName</code> includes performing {@link
             * MBeanServer#getAttribute MBeanServer.getAttribute(objectName,
             * name)}.</p>
             * @param name The name of the attribute.
             * @return An attribute expression for the attribute named {#code name}.
             */
            // @ts-ignore
            public static attr(name: java.lang.String | string): javax.management.AttributeValueExp
            /**
             * <p>Returns a new qualified attribute expression.</p>
             * <p>Evaluating this expression for a given
             * <code>objectName</code> includes performing {@link
             * MBeanServer#getObjectInstance
             * MBeanServer.getObjectInstance(objectName)} and {@link
             * MBeanServer#getAttribute MBeanServer.getAttribute(objectName,
             * name)}.</p>
             * @param className The name of the class possessing the attribute.
             * @param name The name of the attribute.
             * @return An attribute expression for the attribute named name.
             *  The returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.QualifiedAttributeValueExp">
             *  javax.management.QualifiedAttributeValueExp</a>.
             */
            // @ts-ignore
            public static attr(className: java.lang.String | string, name: java.lang.String | string): javax.management.AttributeValueExp
            /**
             * <p>Returns a new class attribute expression which can be used in any
             * Query call that expects a ValueExp.</p>
             * <p>Evaluating this expression for a given
             * <code>objectName</code> includes performing {@link
             * MBeanServer#getObjectInstance
             * MBeanServer.getObjectInstance(objectName)}.</p>
             * @return A class attribute expression.  The returned object
             *  will be serialized as an instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.ClassAttributeValueExp">
             *  javax.management.ClassAttributeValueExp</a>.
             */
            // @ts-ignore
            public static classattr(): javax.management.AttributeValueExp
            /**
             * Returns a constraint that is the negation of its argument.
             * @param queryExp The constraint to negate.
             * @return A negated constraint.  The returned object will be
             *  serialized as an instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.NotQueryExp">
             *  javax.management.NotQueryExp</a>.
             */
            // @ts-ignore
            public static not(queryExp: javax.management.QueryExp): javax.management.QueryExp
            /**
             * Returns an expression constraining a value to be one of an explicit list.
             * @param val A value to be constrained.
             * @param valueList An array of ValueExps.
             * @return A QueryExp that represents the constraint.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.InQueryExp">
             *  javax.management.InQueryExp</a>.
             */
            // @ts-ignore
            public static in(val: javax.management.ValueExp, valueList: javax.management.ValueExp[]): javax.management.QueryExp
            /**
             * Returns a new string expression.
             * @param val The string value.
             * @return A ValueExp object containing the string argument.
             */
            // @ts-ignore
            public static value(val: java.lang.String | string): javax.management.StringValueExp
            /**
             * Returns a numeric value expression that can be used in any Query call
             * that expects a ValueExp.
             * @param val An instance of Number.
             * @return A ValueExp object containing the argument.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.NumericValueExp">
             *  javax.management.NumericValueExp</a>.
             */
            // @ts-ignore
            public static value(val: java.lang.Number): javax.management.ValueExp
            /**
             * Returns a numeric value expression that can be used in any Query call
             * that expects a ValueExp.
             * @param val An int value.
             * @return A ValueExp object containing the argument.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.NumericValueExp">
             *  javax.management.NumericValueExp</a>.
             */
            // @ts-ignore
            public static value(val: number /*int*/): javax.management.ValueExp
            /**
             * Returns a numeric value expression that can be used in any Query call
             * that expects a ValueExp.
             * @param val A long value.
             * @return A ValueExp object containing the argument.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.NumericValueExp">
             *  javax.management.NumericValueExp</a>.
             */
            // @ts-ignore
            public static value(val: number /*long*/): javax.management.ValueExp
            /**
             * Returns a numeric value expression that can be used in any Query call
             * that expects a ValueExp.
             * @param val A float value.
             * @return A ValueExp object containing the argument.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.NumericValueExp">
             *  javax.management.NumericValueExp</a>.
             */
            // @ts-ignore
            public static value(val: number /*float*/): javax.management.ValueExp
            /**
             * Returns a numeric value expression that can be used in any Query call
             * that expects a ValueExp.
             * @param val A double value.
             * @return A ValueExp object containing the argument.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.NumericValueExp">
             *  javax.management.NumericValueExp</a>.
             */
            // @ts-ignore
            public static value(val: number /*double*/): javax.management.ValueExp
            /**
             * Returns a boolean value expression that can be used in any Query call
             * that expects a ValueExp.
             * @param val A boolean value.
             * @return A ValueExp object containing the argument.  The
             *  returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.BooleanValueExp">
             *  javax.management.BooleanValueExp</a>.
             */
            // @ts-ignore
            public static value(val: boolean): javax.management.ValueExp
            /**
             * Returns a binary expression representing the sum of two numeric values,
             * or the concatenation of two string values.
             * @param value1 The first '+' operand.
             * @param value2 The second '+' operand.
             * @return A ValueExp representing the sum or concatenation of
             *  the two arguments.  The returned object will be serialized as
             *  an instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryOpValueExp">
             *  javax.management.BinaryOpValueExp</a> with an {#code op} equal to
             *  {@link #PLUS}.
             */
            // @ts-ignore
            public static plus(value1: javax.management.ValueExp, value2: javax.management.ValueExp): javax.management.ValueExp
            /**
             * Returns a binary expression representing the product of two numeric values.
             * @param value1 The first '*' operand.
             * @param value2 The second '*' operand.
             * @return A ValueExp representing the product.  The returned
             *  object will be serialized as an instance of the non-public
             *  class
             *  <a href="../../serialized-form.html#javax.management.BinaryOpValueExp">
             *  javax.management.BinaryOpValueExp</a> with an {#code op} equal to
             *  {@link #TIMES}.
             */
            // @ts-ignore
            public static times(value1: javax.management.ValueExp, value2: javax.management.ValueExp): javax.management.ValueExp
            /**
             * Returns a binary expression representing the difference between two numeric
             * values.
             * @param value1 The first '-' operand.
             * @param value2 The second '-' operand.
             * @return A ValueExp representing the difference between two
             *  arguments.  The returned object will be serialized as an
             *  instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryOpValueExp">
             *  javax.management.BinaryOpValueExp</a> with an {#code op} equal to
             *  {@link #MINUS}.
             */
            // @ts-ignore
            public static minus(value1: javax.management.ValueExp, value2: javax.management.ValueExp): javax.management.ValueExp
            /**
             * Returns a binary expression representing the quotient of two numeric
             * values.
             * @param value1 The first '/' operand.
             * @param value2 The second '/' operand.
             * @return A ValueExp representing the quotient of two arguments.
             *  The returned object will be serialized as an instance of the
             *  non-public class
             *  <a href="../../serialized-form.html#javax.management.BinaryOpValueExp">
             *  javax.management.BinaryOpValueExp</a> with an {#code op} equal to
             *  {@link #DIV}.
             */
            // @ts-ignore
            public static div(value1: javax.management.ValueExp, value2: javax.management.ValueExp): javax.management.ValueExp
            /**
             * Returns a query expression that represents a matching constraint on
             * a string argument. The value must start with the given literal string
             * value.
             * @param a An attribute expression.
             * @param s A string value expression representing the beginning of the
             *  string value.
             * @return The constraint that a matches s.  The returned object
             *  will be serialized as an instance of the non-public class
             * 
             *  <a href="../../serialized-form.html#javax.management.MatchQueryExp">
             *  javax.management.MatchQueryExp</a>.
             */
            // @ts-ignore
            public static initialSubString(a: javax.management.AttributeValueExp, s: javax.management.StringValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents a matching constraint on
             * a string argument. The value must contain the given literal string
             * value.
             * @param a An attribute expression.
             * @param s A string value expression representing the substring.
             * @return The constraint that a matches s.  The returned object
             *  will be serialized as an instance of the non-public class
             * 
             *  <a href="../../serialized-form.html#javax.management.MatchQueryExp">
             *  javax.management.MatchQueryExp</a>.
             */
            // @ts-ignore
            public static anySubString(a: javax.management.AttributeValueExp, s: javax.management.StringValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents a matching constraint on
             * a string argument. The value must end with the given literal string
             * value.
             * @param a An attribute expression.
             * @param s A string value expression representing the end of the string
             *  value.
             * @return The constraint that a matches s.  The returned object
             *  will be serialized as an instance of the non-public class
             * 
             *  <a href="../../serialized-form.html#javax.management.MatchQueryExp">
             *  javax.management.MatchQueryExp</a>.
             */
            // @ts-ignore
            public static finalSubString(a: javax.management.AttributeValueExp, s: javax.management.StringValueExp): javax.management.QueryExp
            /**
             * Returns a query expression that represents an inheritance constraint
             * on an MBean class.
             * <p>Example: to find MBeans that are instances of
             * {@link NotificationBroadcaster}, use
             * {@code Query.isInstanceOf(Query.value(NotificationBroadcaster.class.getName()))}.
             * </p>
             * <p>Evaluating this expression for a given
             * <code>objectName</code> includes performing {@link
             * MBeanServer#isInstanceOf MBeanServer.isInstanceOf(objectName,
             * ((StringValueExp)classNameValue.apply(objectName)).getValue()}.</p>
             * @param classNameValue The {#link StringValueExp} returning the name
             *         of the class of which selected MBeans should be instances.
             * @return a query expression that represents an inheritance
             *  constraint on an MBean class.  The returned object will be
             *  serialized as an instance of the non-public class
             *  <a href="../../serialized-form.html#javax.management.InstanceOfQueryExp">
             *  javax.management.InstanceOfQueryExp</a>.
             * @since 1.6
             */
            // @ts-ignore
            public static isInstanceOf(classNameValue: javax.management.StringValueExp): javax.management.QueryExp
        }
    }
}
