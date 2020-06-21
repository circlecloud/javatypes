declare namespace javax {
    namespace swing {
        /**
         * An instance of the <code>Spring</code> class holds three properties that
         * characterize its behavior: the <em>minimum</em>, <em>preferred</em>, and
         * <em>maximum</em> values. Each of these properties may be involved in
         * defining its fourth, <em>value</em>, property based on a series of rules.
         * <p>
         * An instance of the <code>Spring</code> class can be visualized as a
         * mechanical spring that provides a corrective force as the spring is compressed
         * or stretched away from its preferred value. This force is modelled
         * as linear function of the distance from the preferred value, but with
         * two different constants -- one for the compressional force and one for the
         * tensional one. Those constants are specified by the minimum and maximum
         * values of the spring such that a spring at its minimum value produces an
         * equal and opposite force to that which is created when it is at its
         * maximum value. The difference between the <em>preferred</em> and
         * <em>minimum</em> values, therefore, represents the ease with which the
         * spring can be compressed and the difference between its <em>maximum</em>
         * and <em>preferred</em> values, indicates the ease with which the
         * <code>Spring</code> can be extended.
         * See the {@link #sum} method for details.
         * <p>
         * By defining simple arithmetic operations on <code>Spring</code>s,
         * the behavior of a collection of <code>Spring</code>s
         * can be reduced to that of an ordinary (non-compound) <code>Spring</code>. We define
         * the "+", "-", <em>max</em>, and <em>min</em> operators on
         * <code>Spring</code>s so that, in each case, the result is a <code>Spring</code>
         * whose characteristics bear a useful mathematical relationship to its constituent
         * springs.
         * <p>
         * A <code>Spring</code> can be treated as a pair of intervals
         * with a single common point: the preferred value.
         * The following rules define some of the
         * arithmetic operators that can be applied to intervals
         * (<code>[a, b]</code> refers to the interval
         * from <code>a</code>
         * to <code>b</code>,
         * where <code>a &lt;= b</code>).
         * <pre>
         * [a1, b1] + [a2, b2] = [a1 + a2, b1 + b2]
         * -[a, b] = [-b, -a]
         * max([a1, b1], [a2, b2]) = [max(a1, a2), max(b1, b2)]
         * </pre>
         * <p>
         * If we denote <code>Spring</code>s as <code>[a, b, c]</code>,
         * where <code>a &lt;= b &lt;= c</code>, we can define the same
         * arithmetic operators on <code>Spring</code>s:
         * <pre>
         * [a1, b1, c1] + [a2, b2, c2] = [a1 + a2, b1 + b2, c1 + c2]
         * -[a, b, c] = [-c, -b, -a]
         * max([a1, b1, c1], [a2, b2, c2]) = [max(a1, a2), max(b1, b2), max(c1, c2)]
         * </pre>
         * <p>
         * With both intervals and <code>Spring</code>s we can define "-" and <em>min</em>
         * in terms of negation:
         * <pre>
         * X - Y = X + (-Y)
         * min(X, Y) = -max(-X, -Y)
         * </pre>
         * <p>
         * For the static methods in this class that embody the arithmetic
         * operators, we do not actually perform the operation in question as
         * that would snapshot the values of the properties of the method's arguments
         * at the time the static method is called. Instead, the static methods
         * create a new <code>Spring</code> instance containing references to
         * the method's arguments so that the characteristics of the new spring track the
         * potentially changing characteristics of the springs from which it
         * was made. This is a little like the idea of a <em>lazy value</em>
         * in a functional language.
         * <p>
         * If you are implementing a <code>SpringLayout</code> you
         * can find further information and examples in
         * <a
         * href="https://docs.oracle.com/javase/tutorial/uiswing/layout/spring.html">How to Use SpringLayout</a>,
         * a section in <em>The Java Tutorial.</em>
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @see SpringLayout
         * @see SpringLayout.Constraints
         * @author Philip Milne
         * @since 1.4
         */
        // @ts-ignore
        abstract class Spring extends java.lang.Object {
            /**
             * Used by factory methods to create a <code>Spring</code>.
             * @see #constant(int)
             * @see #constant(int, int, int)
             * @see #max
             * @see #minus
             * @see #sum
             * @see SpringLayout.Constraints
             */
            // @ts-ignore
            constructor()
            /**
             * An integer value signifying that a property value has not yet been calculated.
             */
            // @ts-ignore
            public static readonly UNSET: number /*int*/
            /**
             * Returns the <em>minimum</em> value of this <code>Spring</code>.
             * @return the <code>minimumValue</code> property of this <code>Spring</code>
             */
            // @ts-ignore
            public abstract getMinimumValue(): number /*int*/
            /**
             * Returns the <em>preferred</em> value of this <code>Spring</code>.
             * @return the <code>preferredValue</code> of this <code>Spring</code>
             */
            // @ts-ignore
            public abstract getPreferredValue(): number /*int*/
            /**
             * Returns the <em>maximum</em> value of this <code>Spring</code>.
             * @return the <code>maximumValue</code> property of this <code>Spring</code>
             */
            // @ts-ignore
            public abstract getMaximumValue(): number /*int*/
            /**
             * Returns the current <em>value</em> of this <code>Spring</code>.
             * @return the <code>value</code> property of this <code>Spring</code>
             * @see #setValue
             */
            // @ts-ignore
            public abstract getValue(): number /*int*/
            /**
             * Sets the current <em>value</em> of this <code>Spring</code> to <code>value</code>.
             * @param value the new setting of the <code>value</code> property
             * @see #getValue
             */
            // @ts-ignore
            public abstract setValue(value: number /*int*/): void
            /**
             * Returns a strut -- a spring whose <em>minimum</em>, <em>preferred</em>, and
             * <em>maximum</em> values each have the value <code>pref</code>.
             * @param pref the <em>minimum</em>, <em>preferred</em>, and
             *          <em>maximum</em> values of the new spring
             * @return a spring whose <em>minimum</em>, <em>preferred</em>, and
             *          <em>maximum</em> values each have the value <code>pref</code>
             * @see Spring
             */
            // @ts-ignore
            public static constant(pref: number /*int*/): javax.swing.Spring
            /**
             * Returns a spring whose <em>minimum</em>, <em>preferred</em>, and
             * <em>maximum</em> values have the values: <code>min</code>, <code>pref</code>,
             * and <code>max</code> respectively.
             * @param min the <em>minimum</em> value of the new spring
             * @param pref the <em>preferred</em> value of the new spring
             * @param max the <em>maximum</em> value of the new spring
             * @return a spring whose <em>minimum</em>, <em>preferred</em>, and
             *          <em>maximum</em> values have the values: <code>min</code>, <code>pref</code>,
             *          and <code>max</code> respectively
             * @see Spring
             */
            // @ts-ignore
            public static constant(min: number /*int*/, pref: number /*int*/, max: number /*int*/): javax.swing.Spring
            /**
             * Returns <code>-s</code>: a spring running in the opposite direction to <code>s</code>.
             * @return <code>-s</code>: a spring running in the opposite direction to <code>s</code>
             * @see Spring
             */
            // @ts-ignore
            public static minus(s: javax.swing.Spring): javax.swing.Spring
            /**
             * Returns <code>s1+s2</code>: a spring representing <code>s1</code> and <code>s2</code>
             * in series. In a sum, <code>s3</code>, of two springs, <code>s1</code> and <code>s2</code>,
             * the <em>strains</em> of <code>s1</code>, <code>s2</code>, and <code>s3</code> are maintained
             * at the same level (to within the precision implied by their integer <em>value</em>s).
             * The strain of a spring in compression is:
             * <pre>
             * value - pref
             * ------------
             * pref - min
             * </pre>
             * and the strain of a spring in tension is:
             * <pre>
             * value - pref
             * ------------
             * max - pref
             * </pre>
             * When <code>setValue</code> is called on the sum spring, <code>s3</code>, the strain
             * in <code>s3</code> is calculated using one of the formulas above. Once the strain of
             * the sum is known, the <em>value</em>s of <code>s1</code> and <code>s2</code> are
             * then set so that they are have a strain equal to that of the sum. The formulas are
             * evaluated so as to take rounding errors into account and ensure that the sum of
             * the <em>value</em>s of <code>s1</code> and <code>s2</code> is exactly equal to
             * the <em>value</em> of <code>s3</code>.
             * @return <code>s1+s2</code>: a spring representing <code>s1</code> and <code>s2</code> in series
             * @see Spring
             */
            // @ts-ignore
            public static sum(s1: javax.swing.Spring, s2: javax.swing.Spring): javax.swing.Spring
            /**
             * Returns <code>max(s1, s2)</code>: a spring whose value is always greater than (or equal to)
             * the values of both <code>s1</code> and <code>s2</code>.
             * @return <code>max(s1, s2)</code>: a spring whose value is always greater than (or equal to)
             *          the values of both <code>s1</code> and <code>s2</code>
             * @see Spring
             */
            // @ts-ignore
            public static max(s1: javax.swing.Spring, s2: javax.swing.Spring): javax.swing.Spring
            /**
             * Returns a spring whose <em>minimum</em>, <em>preferred</em>, <em>maximum</em>
             * and <em>value</em> properties are each multiples of the properties of the
             * argument spring, <code>s</code>. Minimum and maximum properties are
             * swapped when <code>factor</code> is negative (in accordance with the
             * rules of interval arithmetic).
             * <p>
             * When factor is, for example, 0.5f the result represents 'the mid-point'
             * of its input - an operation that is useful for centering components in
             * a container.
             * @param s the spring to scale
             * @param factor amount to scale by.
             * @return a spring whose properties are those of the input spring <code>s</code>
             *  multiplied by <code>factor</code>
             * @throws NullPointerException if <code>s</code> is null
             * @since 1.5
             */
            // @ts-ignore
            public static scale(s: javax.swing.Spring, factor: number /*float*/): javax.swing.Spring
            /**
             * Returns a spring whose <em>minimum</em>, <em>preferred</em>, <em>maximum</em>
             * and <em>value</em> properties are defined by the widths of the <em>minimumSize</em>,
             * <em>preferredSize</em>, <em>maximumSize</em> and <em>size</em> properties
             * of the supplied component. The returned spring is a 'wrapper' implementation
             * whose methods call the appropriate size methods of the supplied component.
             * The minimum, preferred, maximum and value properties of the returned spring
             * therefore report the current state of the appropriate properties in the
             * component and track them as they change.
             * @param c Component used for calculating size
             * @return a spring whose properties are defined by the horizontal component
             *  of the component's size methods.
             * @throws NullPointerException if <code>c</code> is null
             * @since 1.5
             */
            // @ts-ignore
            public static width(c: java.awt.Component): javax.swing.Spring
            /**
             * Returns a spring whose <em>minimum</em>, <em>preferred</em>, <em>maximum</em>
             * and <em>value</em> properties are defined by the heights of the <em>minimumSize</em>,
             * <em>preferredSize</em>, <em>maximumSize</em> and <em>size</em> properties
             * of the supplied component. The returned spring is a 'wrapper' implementation
             * whose methods call the appropriate size methods of the supplied component.
             * The minimum, preferred, maximum and value properties of the returned spring
             * therefore report the current state of the appropriate properties in the
             * component and track them as they change.
             * @param c Component used for calculating size
             * @return a spring whose properties are defined by the vertical component
             *  of the component's size methods.
             * @throws NullPointerException if <code>c</code> is null
             * @since 1.5
             */
            // @ts-ignore
            public static height(c: java.awt.Component): javax.swing.Spring
        }
    }
}
