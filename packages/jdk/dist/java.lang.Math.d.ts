declare namespace java {
    namespace lang {
        /**
         * The class {@code Math} contains methods for performing basic
         * numeric operations such as the elementary exponential, logarithm,
         * square root, and trigonometric functions.
         * <p>Unlike some of the numeric methods of class
         * {@code StrictMath}, all implementations of the equivalent
         * functions of class {@code Math} are not defined to return the
         * bit-for-bit same results.  This relaxation permits
         * better-performing implementations where strict reproducibility is
         * not required.
         * <p>By default many of the {@code Math} methods simply call
         * the equivalent method in {@code StrictMath} for their
         * implementation.  Code generators are encouraged to use
         * platform-specific native libraries or microprocessor instructions,
         * where available, to provide higher-performance implementations of
         * {@code Math} methods.  Such higher-performance
         * implementations still must conform to the specification for
         * {@code Math}.
         * <p>The quality of implementation specifications concern two
         * properties, accuracy of the returned result and monotonicity of the
         * method.  Accuracy of the floating-point {@code Math} methods is
         * measured in terms of <i>ulps</i>, units in the last place.  For a
         * given floating-point format, an {@linkplain #ulp(double) ulp} of a
         * specific real number value is the distance between the two
         * floating-point values bracketing that numerical value.  When
         * discussing the accuracy of a method as a whole rather than at a
         * specific argument, the number of ulps cited is for the worst-case
         * error at any argument.  If a method always has an error less than
         * 0.5 ulps, the method always returns the floating-point number
         * nearest the exact result; such a method is <i>correctly
         * rounded</i>.  A correctly rounded method is generally the best a
         * floating-point approximation can be; however, it is impractical for
         * many floating-point methods to be correctly rounded.  Instead, for
         * the {@code Math} class, a larger error bound of 1 or 2 ulps is
         * allowed for certain methods.  Informally, with a 1 ulp error bound,
         * when the exact result is a representable number, the exact result
         * should be returned as the computed result; otherwise, either of the
         * two floating-point values which bracket the exact result may be
         * returned.  For exact results large in magnitude, one of the
         * endpoints of the bracket may be infinite.  Besides accuracy at
         * individual arguments, maintaining proper relations between the
         * method at different arguments is also important.  Therefore, most
         * methods with more than 0.5 ulp errors are required to be
         * <i>semi-monotonic</i>: whenever the mathematical function is
         * non-decreasing, so is the floating-point approximation, likewise,
         * whenever the mathematical function is non-increasing, so is the
         * floating-point approximation.  Not all approximations that have 1
         * ulp accuracy will automatically meet the monotonicity requirements.
         * <p>
         * The platform uses signed two's complement integer arithmetic with
         * int and long primitive types.  The developer should choose
         * the primitive type to ensure that arithmetic operations consistently
         * produce correct results, which in some cases means the operations
         * will not overflow the range of values of the computation.
         * The best practice is to choose the primitive type and algorithm to avoid
         * overflow. In cases where the size is {@code int} or {@code long} and
         * overflow errors need to be detected, the methods {@code addExact},
         * {@code subtractExact}, {@code multiplyExact}, and {@code toIntExact}
         * throw an {@code ArithmeticException} when the results overflow.
         * For other arithmetic operations such as divide, absolute value,
         * increment, decrement, and negation overflow occurs only with
         * a specific minimum or maximum value and should be checked against
         * the minimum or maximum as appropriate.
         * @author unascribed
         * @author Joseph D. Darcy
         * @since JDK1.0
         */
        // @ts-ignore
        class Math extends java.lang.Object {
            /**
             * The {@code double} value that is closer than any other to
             * <i>e</i>, the base of the natural logarithms.
             */
            // @ts-ignore
            public static readonly E: number /*double*/
            /**
             * The {@code double} value that is closer than any other to
             * <i>pi</i>, the ratio of the circumference of a circle to its
             * diameter.
             */
            // @ts-ignore
            public static readonly PI: number /*double*/
            /**
             * Returns the trigonometric sine of an angle.  Special cases:
             * <ul><li>If the argument is NaN or an infinity, then the
             * result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   an angle, in radians.
             * @return the sine of the argument.
             */
            // @ts-ignore
            public static sin(a: number /*double*/): number /*double*/
            /**
             * Returns the trigonometric cosine of an angle. Special cases:
             * <ul><li>If the argument is NaN or an infinity, then the
             * result is NaN.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   an angle, in radians.
             * @return the cosine of the argument.
             */
            // @ts-ignore
            public static cos(a: number /*double*/): number /*double*/
            /**
             * Returns the trigonometric tangent of an angle.  Special cases:
             * <ul><li>If the argument is NaN or an infinity, then the result
             * is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   an angle, in radians.
             * @return the tangent of the argument.
             */
            // @ts-ignore
            public static tan(a: number /*double*/): number /*double*/
            /**
             * Returns the arc sine of a value; the returned angle is in the
             * range -<i>pi</i>/2 through <i>pi</i>/2.  Special cases:
             * <ul><li>If the argument is NaN or its absolute value is greater
             * than 1, then the result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   the value whose arc sine is to be returned.
             * @return the arc sine of the argument.
             */
            // @ts-ignore
            public static asin(a: number /*double*/): number /*double*/
            /**
             * Returns the arc cosine of a value; the returned angle is in the
             * range 0.0 through <i>pi</i>.  Special case:
             * <ul><li>If the argument is NaN or its absolute value is greater
             * than 1, then the result is NaN.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   the value whose arc cosine is to be returned.
             * @return the arc cosine of the argument.
             */
            // @ts-ignore
            public static acos(a: number /*double*/): number /*double*/
            /**
             * Returns the arc tangent of a value; the returned angle is in the
             * range -<i>pi</i>/2 through <i>pi</i>/2.  Special cases:
             * <ul><li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   the value whose arc tangent is to be returned.
             * @return the arc tangent of the argument.
             */
            // @ts-ignore
            public static atan(a: number /*double*/): number /*double*/
            /**
             * Converts an angle measured in degrees to an approximately
             * equivalent angle measured in radians.  The conversion from
             * degrees to radians is generally inexact.
             * @param angdeg   an angle, in degrees
             * @return the measurement of the angle {#code angdeg}
             *           in radians.
             * @since 1.2
             */
            // @ts-ignore
            public static toRadians(angdeg: number /*double*/): number /*double*/
            /**
             * Converts an angle measured in radians to an approximately
             * equivalent angle measured in degrees.  The conversion from
             * radians to degrees is generally inexact; users should
             * <i>not</i> expect {@code cos(toRadians(90.0))} to exactly
             * equal {@code 0.0}.
             * @param angrad   an angle, in radians
             * @return the measurement of the angle {#code angrad}
             *           in degrees.
             * @since 1.2
             */
            // @ts-ignore
            public static toDegrees(angrad: number /*double*/): number /*double*/
            /**
             * Returns Euler's number <i>e</i> raised to the power of a
             * {@code double} value.  Special cases:
             * <ul><li>If the argument is NaN, the result is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is negative infinity, then the result is
             * positive zero.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   the exponent to raise <i>e</i> to.
             * @return the value <i>e</i><sup>{#code a}</sup>,
             *           where <i>e</i> is the base of the natural logarithms.
             */
            // @ts-ignore
            public static exp(a: number /*double*/): number /*double*/
            /**
             * Returns the natural logarithm (base <i>e</i>) of a {@code double}
             * value.  Special cases:
             * <ul><li>If the argument is NaN or less than zero, then the result
             * is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is positive zero or negative zero, then the
             * result is negative infinity.</ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   a value
             * @return the value ln&nbsp;{#code a}, the natural logarithm of
             *           {@code a}.
             */
            // @ts-ignore
            public static log(a: number /*double*/): number /*double*/
            /**
             * Returns the base 10 logarithm of a {@code double} value.
             * Special cases:
             * <ul><li>If the argument is NaN or less than zero, then the result
             * is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is positive zero or negative zero, then the
             * result is negative infinity.
             * <li> If the argument is equal to 10<sup><i>n</i></sup> for
             * integer <i>n</i>, then the result is <i>n</i>.
             * </ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   a value
             * @return the base 10 logarithm of  {#code a}.
             * @since 1.5
             */
            // @ts-ignore
            public static log10(a: number /*double*/): number /*double*/
            /**
             * Returns the correctly rounded positive square root of a
             * {@code double} value.
             * Special cases:
             * <ul><li>If the argument is NaN or less than zero, then the result
             * is NaN.
             * <li>If the argument is positive infinity, then the result is positive
             * infinity.
             * <li>If the argument is positive zero or negative zero, then the
             * result is the same as the argument.</ul>
             * Otherwise, the result is the {@code double} value closest to
             * the true mathematical square root of the argument value.
             * @param a   a value.
             * @return the positive square root of {#code a}.
             *           If the argument is NaN or less than zero, the result is NaN.
             */
            // @ts-ignore
            public static sqrt(a: number /*double*/): number /*double*/
            /**
             * Returns the cube root of a {@code double} value.  For
             * positive finite {@code x}, {@code cbrt(-x) ==
             * -cbrt(x)}; that is, the cube root of a negative value is
             * the negative of the cube root of that value's magnitude.
             * Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is infinite, then the result is an infinity
             * with the same sign as the argument.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * @param a   a value.
             * @return the cube root of {#code a}.
             * @since 1.5
             */
            // @ts-ignore
            public static cbrt(a: number /*double*/): number /*double*/
            /**
             * Computes the remainder operation on two arguments as prescribed
             * by the IEEE 754 standard.
             * The remainder value is mathematically equal to
             * <code>f1&nbsp;-&nbsp;f2</code>&nbsp;&times;&nbsp;<i>n</i>,
             * where <i>n</i> is the mathematical integer closest to the exact
             * mathematical value of the quotient {@code f1/f2}, and if two
             * mathematical integers are equally close to {@code f1/f2},
             * then <i>n</i> is the integer that is even. If the remainder is
             * zero, its sign is the same as the sign of the first argument.
             * Special cases:
             * <ul><li>If either argument is NaN, or the first argument is infinite,
             * or the second argument is positive zero or negative zero, then the
             * result is NaN.
             * <li>If the first argument is finite and the second argument is
             * infinite, then the result is the same as the first argument.</ul>
             * @param f1   the dividend.
             * @param f2   the divisor.
             * @return the remainder when {#code f1} is divided by
             *           {@code f2}.
             */
            // @ts-ignore
            public static IEEEremainder(f1: number /*double*/, f2: number /*double*/): number /*double*/
            /**
             * Returns the smallest (closest to negative infinity)
             * {@code double} value that is greater than or equal to the
             * argument and is equal to a mathematical integer. Special cases:
             * <ul><li>If the argument value is already equal to a
             * mathematical integer, then the result is the same as the
             * argument.  <li>If the argument is NaN or an infinity or
             * positive zero or negative zero, then the result is the same as
             * the argument.  <li>If the argument value is less than zero but
             * greater than -1.0, then the result is negative zero.</ul> Note
             * that the value of {@code Math.ceil(x)} is exactly the
             * value of {@code -Math.floor(-x)}.
             * @param a   a value.
             * @return the smallest (closest to negative infinity)
             *           floating-point value that is greater than or equal to
             *           the argument and is equal to a mathematical integer.
             */
            // @ts-ignore
            public static ceil(a: number /*double*/): number /*double*/
            /**
             * Returns the largest (closest to positive infinity)
             * {@code double} value that is less than or equal to the
             * argument and is equal to a mathematical integer. Special cases:
             * <ul><li>If the argument value is already equal to a
             * mathematical integer, then the result is the same as the
             * argument.  <li>If the argument is NaN or an infinity or
             * positive zero or negative zero, then the result is the same as
             * the argument.</ul>
             * @param a   a value.
             * @return the largest (closest to positive infinity)
             *           floating-point value that less than or equal to the argument
             *           and is equal to a mathematical integer.
             */
            // @ts-ignore
            public static floor(a: number /*double*/): number /*double*/
            /**
             * Returns the {@code double} value that is closest in value
             * to the argument and is equal to a mathematical integer. If two
             * {@code double} values that are mathematical integers are
             * equally close, the result is the integer value that is
             * even. Special cases:
             * <ul><li>If the argument value is already equal to a mathematical
             * integer, then the result is the same as the argument.
             * <li>If the argument is NaN or an infinity or positive zero or negative
             * zero, then the result is the same as the argument.</ul>
             * @param a   a {#code double} value.
             * @return the closest floating-point value to {#code a} that is
             *           equal to a mathematical integer.
             */
            // @ts-ignore
            public static rint(a: number /*double*/): number /*double*/
            /**
             * Returns the angle <i>theta</i> from the conversion of rectangular
             * coordinates ({@code x},&nbsp;{@code y}) to polar
             * coordinates (r,&nbsp;<i>theta</i>).
             * This method computes the phase <i>theta</i> by computing an arc tangent
             * of {@code y/x} in the range of -<i>pi</i> to <i>pi</i>. Special
             * cases:
             * <ul><li>If either argument is NaN, then the result is NaN.
             * <li>If the first argument is positive zero and the second argument
             * is positive, or the first argument is positive and finite and the
             * second argument is positive infinity, then the result is positive
             * zero.
             * <li>If the first argument is negative zero and the second argument
             * is positive, or the first argument is negative and finite and the
             * second argument is positive infinity, then the result is negative zero.
             * <li>If the first argument is positive zero and the second argument
             * is negative, or the first argument is positive and finite and the
             * second argument is negative infinity, then the result is the
             * {@code double} value closest to <i>pi</i>.
             * <li>If the first argument is negative zero and the second argument
             * is negative, or the first argument is negative and finite and the
             * second argument is negative infinity, then the result is the
             * {@code double} value closest to -<i>pi</i>.
             * <li>If the first argument is positive and the second argument is
             * positive zero or negative zero, or the first argument is positive
             * infinity and the second argument is finite, then the result is the
             * {@code double} value closest to <i>pi</i>/2.
             * <li>If the first argument is negative and the second argument is
             * positive zero or negative zero, or the first argument is negative
             * infinity and the second argument is finite, then the result is the
             * {@code double} value closest to -<i>pi</i>/2.
             * <li>If both arguments are positive infinity, then the result is the
             * {@code double} value closest to <i>pi</i>/4.
             * <li>If the first argument is positive infinity and the second argument
             * is negative infinity, then the result is the {@code double}
             * value closest to 3*<i>pi</i>/4.
             * <li>If the first argument is negative infinity and the second argument
             * is positive infinity, then the result is the {@code double} value
             * closest to -<i>pi</i>/4.
             * <li>If both arguments are negative infinity, then the result is the
             * {@code double} value closest to -3*<i>pi</i>/4.</ul>
             * <p>The computed result must be within 2 ulps of the exact result.
             * Results must be semi-monotonic.
             * @param y   the ordinate coordinate
             * @param x   the abscissa coordinate
             * @return the <i>theta</i> component of the point
             *           (<i>r</i>,&nbsp;<i>theta</i>)
             *           in polar coordinates that corresponds to the point
             *           (<i>x</i>,&nbsp;<i>y</i>) in Cartesian coordinates.
             */
            // @ts-ignore
            public static atan2(y: number /*double*/, x: number /*double*/): number /*double*/
            /**
             * Returns the value of the first argument raised to the power of the
             * second argument. Special cases:
             * <ul><li>If the second argument is positive or negative zero, then the
             * result is 1.0.
             * <li>If the second argument is 1.0, then the result is the same as the
             * first argument.
             * <li>If the second argument is NaN, then the result is NaN.
             * <li>If the first argument is NaN and the second argument is nonzero,
             * then the result is NaN.
             * <li>If
             * <ul>
             * <li>the absolute value of the first argument is greater than 1
             * and the second argument is positive infinity, or
             * <li>the absolute value of the first argument is less than 1 and
             * the second argument is negative infinity,
             * </ul>
             * then the result is positive infinity.
             * <li>If
             * <ul>
             * <li>the absolute value of the first argument is greater than 1 and
             * the second argument is negative infinity, or
             * <li>the absolute value of the
             * first argument is less than 1 and the second argument is positive
             * infinity,
             * </ul>
             * then the result is positive zero.
             * <li>If the absolute value of the first argument equals 1 and the
             * second argument is infinite, then the result is NaN.
             * <li>If
             * <ul>
             * <li>the first argument is positive zero and the second argument
             * is greater than zero, or
             * <li>the first argument is positive infinity and the second
             * argument is less than zero,
             * </ul>
             * then the result is positive zero.
             * <li>If
             * <ul>
             * <li>the first argument is positive zero and the second argument
             * is less than zero, or
             * <li>the first argument is positive infinity and the second
             * argument is greater than zero,
             * </ul>
             * then the result is positive infinity.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is greater than zero but not a finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is less than zero but not a finite odd integer,
             * </ul>
             * then the result is positive zero.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is a positive finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is a negative finite odd integer,
             * </ul>
             * then the result is negative zero.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is less than zero but not a finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is greater than zero but not a finite odd integer,
             * </ul>
             * then the result is positive infinity.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is a negative finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is a positive finite odd integer,
             * </ul>
             * then the result is negative infinity.
             * <li>If the first argument is finite and less than zero
             * <ul>
             * <li> if the second argument is a finite even integer, the
             * result is equal to the result of raising the absolute value of
             * the first argument to the power of the second argument
             * <li>if the second argument is a finite odd integer, the result
             * is equal to the negative of the result of raising the absolute
             * value of the first argument to the power of the second
             * argument
             * <li>if the second argument is finite and not an integer, then
             * the result is NaN.
             * </ul>
             * <li>If both arguments are integers, then the result is exactly equal
             * to the mathematical result of raising the first argument to the power
             * of the second argument if that result can in fact be represented
             * exactly as a {@code double} value.</ul>
             * <p>(In the foregoing descriptions, a floating-point value is
             * considered to be an integer if and only if it is finite and a
             * fixed point of the method {@link #ceil ceil} or,
             * equivalently, a fixed point of the method {@link #floor
             * floor}. A value is a fixed point of a one-argument
             * method if and only if the result of applying the method to the
             * value is equal to the value.)
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param a   the base.
             * @param b   the exponent.
             * @return the value {#code a}<sup>{@code b}</sup>.
             */
            // @ts-ignore
            public static pow(a: number /*double*/, b: number /*double*/): number /*double*/
            /**
             * Returns the closest {@code int} to the argument, with ties
             * rounding to positive infinity.
             * <p>
             * Special cases:
             * <ul><li>If the argument is NaN, the result is 0.
             * <li>If the argument is negative infinity or any value less than or
             * equal to the value of {@code Integer.MIN_VALUE}, the result is
             * equal to the value of {@code Integer.MIN_VALUE}.
             * <li>If the argument is positive infinity or any value greater than or
             * equal to the value of {@code Integer.MAX_VALUE}, the result is
             * equal to the value of {@code Integer.MAX_VALUE}.</ul>
             * @param a   a floating-point value to be rounded to an integer.
             * @return the value of the argument rounded to the nearest
             *           {#code int} value.
             * @see java.lang.Integer#MAX_VALUE
             * @see java.lang.Integer#MIN_VALUE
             */
            // @ts-ignore
            public static round(a: number /*float*/): number /*int*/
            /**
             * Returns the closest {@code long} to the argument, with ties
             * rounding to positive infinity.
             * <p>Special cases:
             * <ul><li>If the argument is NaN, the result is 0.
             * <li>If the argument is negative infinity or any value less than or
             * equal to the value of {@code Long.MIN_VALUE}, the result is
             * equal to the value of {@code Long.MIN_VALUE}.
             * <li>If the argument is positive infinity or any value greater than or
             * equal to the value of {@code Long.MAX_VALUE}, the result is
             * equal to the value of {@code Long.MAX_VALUE}.</ul>
             * @param a   a floating-point value to be rounded to a
             *           {#code long}.
             * @return the value of the argument rounded to the nearest
             *           {#code long} value.
             * @see java.lang.Long#MAX_VALUE
             * @see java.lang.Long#MIN_VALUE
             */
            // @ts-ignore
            public static round(a: number /*double*/): number /*long*/
            /**
             * Returns a {@code double} value with a positive sign, greater
             * than or equal to {@code 0.0} and less than {@code 1.0}.
             * Returned values are chosen pseudorandomly with (approximately)
             * uniform distribution from that range.
             * <p>When this method is first called, it creates a single new
             * pseudorandom-number generator, exactly as if by the expression
             * <blockquote>{@code new java.util.Random()}</blockquote>
             * This new pseudorandom-number generator is used thereafter for
             * all calls to this method and is used nowhere else.
             * <p>This method is properly synchronized to allow correct use by
             * more than one thread. However, if many threads need to generate
             * pseudorandom numbers at a great rate, it may reduce contention
             * for each thread to have its own pseudorandom-number generator.
             * @return a pseudorandom {#code double} greater than or equal
             *  to {@code 0.0} and less than {@code 1.0}.
             * @see Random#nextDouble()
             */
            // @ts-ignore
            public static random(): number /*double*/
            /**
             * Returns the sum of its arguments,
             * throwing an exception if the result overflows an {@code int}.
             * @param x the first value
             * @param y the second value
             * @return the result
             * @throws ArithmeticException if the result overflows an int
             * @since 1.8
             */
            // @ts-ignore
            public static addExact(x: number /*int*/, y: number /*int*/): number /*int*/
            /**
             * Returns the sum of its arguments,
             * throwing an exception if the result overflows a {@code long}.
             * @param x the first value
             * @param y the second value
             * @return the result
             * @throws ArithmeticException if the result overflows a long
             * @since 1.8
             */
            // @ts-ignore
            public static addExact(x: number /*long*/, y: number /*long*/): number /*long*/
            /**
             * Returns the difference of the arguments,
             * throwing an exception if the result overflows an {@code int}.
             * @param x the first value
             * @param y the second value to subtract from the first
             * @return the result
             * @throws ArithmeticException if the result overflows an int
             * @since 1.8
             */
            // @ts-ignore
            public static subtractExact(x: number /*int*/, y: number /*int*/): number /*int*/
            /**
             * Returns the difference of the arguments,
             * throwing an exception if the result overflows a {@code long}.
             * @param x the first value
             * @param y the second value to subtract from the first
             * @return the result
             * @throws ArithmeticException if the result overflows a long
             * @since 1.8
             */
            // @ts-ignore
            public static subtractExact(x: number /*long*/, y: number /*long*/): number /*long*/
            /**
             * Returns the product of the arguments,
             * throwing an exception if the result overflows an {@code int}.
             * @param x the first value
             * @param y the second value
             * @return the result
             * @throws ArithmeticException if the result overflows an int
             * @since 1.8
             */
            // @ts-ignore
            public static multiplyExact(x: number /*int*/, y: number /*int*/): number /*int*/
            /**
             * Returns the product of the arguments,
             * throwing an exception if the result overflows a {@code long}.
             * @param x the first value
             * @param y the second value
             * @return the result
             * @throws ArithmeticException if the result overflows a long
             * @since 1.8
             */
            // @ts-ignore
            public static multiplyExact(x: number /*long*/, y: number /*long*/): number /*long*/
            /**
             * Returns the argument incremented by one, throwing an exception if the
             * result overflows an {@code int}.
             * @param a the value to increment
             * @return the result
             * @throws ArithmeticException if the result overflows an int
             * @since 1.8
             */
            // @ts-ignore
            public static incrementExact(a: number /*int*/): number /*int*/
            /**
             * Returns the argument incremented by one, throwing an exception if the
             * result overflows a {@code long}.
             * @param a the value to increment
             * @return the result
             * @throws ArithmeticException if the result overflows a long
             * @since 1.8
             */
            // @ts-ignore
            public static incrementExact(a: number /*long*/): number /*long*/
            /**
             * Returns the argument decremented by one, throwing an exception if the
             * result overflows an {@code int}.
             * @param a the value to decrement
             * @return the result
             * @throws ArithmeticException if the result overflows an int
             * @since 1.8
             */
            // @ts-ignore
            public static decrementExact(a: number /*int*/): number /*int*/
            /**
             * Returns the argument decremented by one, throwing an exception if the
             * result overflows a {@code long}.
             * @param a the value to decrement
             * @return the result
             * @throws ArithmeticException if the result overflows a long
             * @since 1.8
             */
            // @ts-ignore
            public static decrementExact(a: number /*long*/): number /*long*/
            /**
             * Returns the negation of the argument, throwing an exception if the
             * result overflows an {@code int}.
             * @param a the value to negate
             * @return the result
             * @throws ArithmeticException if the result overflows an int
             * @since 1.8
             */
            // @ts-ignore
            public static negateExact(a: number /*int*/): number /*int*/
            /**
             * Returns the negation of the argument, throwing an exception if the
             * result overflows a {@code long}.
             * @param a the value to negate
             * @return the result
             * @throws ArithmeticException if the result overflows a long
             * @since 1.8
             */
            // @ts-ignore
            public static negateExact(a: number /*long*/): number /*long*/
            /**
             * Returns the value of the {@code long} argument;
             * throwing an exception if the value overflows an {@code int}.
             * @param value the long value
             * @return the argument as an int
             * @throws ArithmeticException if the {#code argument} overflows an int
             * @since 1.8
             */
            // @ts-ignore
            public static toIntExact(value: number /*long*/): number /*int*/
            /**
             * Returns the largest (closest to positive infinity)
             * {@code int} value that is less than or equal to the algebraic quotient.
             * There is one special case, if the dividend is the
             * {@linkplain Integer#MIN_VALUE Integer.MIN_VALUE} and the divisor is {@code -1},
             * then integer overflow occurs and
             * the result is equal to the {@code Integer.MIN_VALUE}.
             * <p>
             * Normal integer division operates under the round to zero rounding mode
             * (truncation).  This operation instead acts under the round toward
             * negative infinity (floor) rounding mode.
             * The floor rounding mode gives different results than truncation
             * when the exact result is negative.
             * <ul>
             * <li>If the signs of the arguments are the same, the results of
             * {@code floorDiv} and the {@code /} operator are the same.  <br>
             * For example, {@code floorDiv(4, 3) == 1} and {@code (4 / 3) == 1}.</li>
             * <li>If the signs of the arguments are different,  the quotient is negative and
             * {@code floorDiv} returns the integer less than or equal to the quotient
             * and the {@code /} operator returns the integer closest to zero.<br>
             * For example, {@code floorDiv(-4, 3) == -2},
             * whereas {@code (-4 / 3) == -1}.
             * </li>
             * </ul>
             * <p>
             * @param x the dividend
             * @param y the divisor
             * @return the largest (closest to positive infinity)
             *  {#code int} value that is less than or equal to the algebraic quotient.
             * @throws ArithmeticException if the divisor {#code y} is zero
             * @see #floorMod(int, int)
             * @see #floor(double)
             * @since 1.8
             */
            // @ts-ignore
            public static floorDiv(x: number /*int*/, y: number /*int*/): number /*int*/
            /**
             * Returns the largest (closest to positive infinity)
             * {@code long} value that is less than or equal to the algebraic quotient.
             * There is one special case, if the dividend is the
             * {@linkplain Long#MIN_VALUE Long.MIN_VALUE} and the divisor is {@code -1},
             * then integer overflow occurs and
             * the result is equal to the {@code Long.MIN_VALUE}.
             * <p>
             * Normal integer division operates under the round to zero rounding mode
             * (truncation).  This operation instead acts under the round toward
             * negative infinity (floor) rounding mode.
             * The floor rounding mode gives different results than truncation
             * when the exact result is negative.
             * <p>
             * For examples, see {@link #floorDiv(int, int)}.
             * @param x the dividend
             * @param y the divisor
             * @return the largest (closest to positive infinity)
             *  {#code long} value that is less than or equal to the algebraic quotient.
             * @throws ArithmeticException if the divisor {#code y} is zero
             * @see #floorMod(long, long)
             * @see #floor(double)
             * @since 1.8
             */
            // @ts-ignore
            public static floorDiv(x: number /*long*/, y: number /*long*/): number /*long*/
            /**
             * Returns the floor modulus of the {@code int} arguments.
             * <p>
             * The floor modulus is {@code x - (floorDiv(x, y) * y)},
             * has the same sign as the divisor {@code y}, and
             * is in the range of {@code -abs(y) < r < +abs(y)}.
             * <p>
             * The relationship between {@code floorDiv} and {@code floorMod} is such that:
             * <ul>
             * <li>{@code floorDiv(x, y) * y + floorMod(x, y) == x}
             * </ul>
             * <p>
             * The difference in values between {@code floorMod} and
             * the {@code %} operator is due to the difference between
             * {@code floorDiv} that returns the integer less than or equal to the quotient
             * and the {@code /} operator that returns the integer closest to zero.
             * <p>
             * Examples:
             * <ul>
             * <li>If the signs of the arguments are the same, the results
             * of {@code floorMod} and the {@code %} operator are the same.  <br>
             * <ul>
             * <li>{@code floorMod(4, 3) == 1}; &nbsp; and {@code (4 % 3) == 1}</li>
             * </ul>
             * <li>If the signs of the arguments are different, the results differ from the {@code %} operator.<br>
             * <ul>
             * <li>{@code floorMod(+4, -3) == -2}; &nbsp; and {@code (+4 % -3) == +1} </li>
             * <li>{@code floorMod(-4, +3) == +2}; &nbsp; and {@code (-4 % +3) == -1} </li>
             * <li>{@code floorMod(-4, -3) == -1}; &nbsp; and {@code (-4 % -3) == -1 } </li>
             * </ul>
             * </li>
             * </ul>
             * <p>
             * If the signs of arguments are unknown and a positive modulus
             * is needed it can be computed as {@code (floorMod(x, y) + abs(y)) % abs(y)}.
             * @param x the dividend
             * @param y the divisor
             * @return the floor modulus {#code x - (floorDiv(x, y) * y)}
             * @throws ArithmeticException if the divisor {#code y} is zero
             * @see #floorDiv(int, int)
             * @since 1.8
             */
            // @ts-ignore
            public static floorMod(x: number /*int*/, y: number /*int*/): number /*int*/
            /**
             * Returns the floor modulus of the {@code long} arguments.
             * <p>
             * The floor modulus is {@code x - (floorDiv(x, y) * y)},
             * has the same sign as the divisor {@code y}, and
             * is in the range of {@code -abs(y) < r < +abs(y)}.
             * <p>
             * The relationship between {@code floorDiv} and {@code floorMod} is such that:
             * <ul>
             * <li>{@code floorDiv(x, y) * y + floorMod(x, y) == x}
             * </ul>
             * <p>
             * For examples, see {@link #floorMod(int, int)}.
             * @param x the dividend
             * @param y the divisor
             * @return the floor modulus {#code x - (floorDiv(x, y) * y)}
             * @throws ArithmeticException if the divisor {#code y} is zero
             * @see #floorDiv(long, long)
             * @since 1.8
             */
            // @ts-ignore
            public static floorMod(x: number /*long*/, y: number /*long*/): number /*long*/
            /**
             * Returns the absolute value of an {@code int} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * <p>Note that if the argument is equal to the value of
             * {@link Integer#MIN_VALUE}, the most negative representable
             * {@code int} value, the result is that same value, which is
             * negative.
             * @param a   the argument whose absolute value is to be determined
             * @return the absolute value of the argument.
             */
            // @ts-ignore
            public static abs(a: number /*int*/): number /*int*/
            /**
             * Returns the absolute value of a {@code long} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * <p>Note that if the argument is equal to the value of
             * {@link Long#MIN_VALUE}, the most negative representable
             * {@code long} value, the result is that same value, which
             * is negative.
             * @param a   the argument whose absolute value is to be determined
             * @return the absolute value of the argument.
             */
            // @ts-ignore
            public static abs(a: number /*long*/): number /*long*/
            /**
             * Returns the absolute value of a {@code float} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * Special cases:
             * <ul><li>If the argument is positive zero or negative zero, the
             * result is positive zero.
             * <li>If the argument is infinite, the result is positive infinity.
             * <li>If the argument is NaN, the result is NaN.</ul>
             * In other words, the result is the same as the value of the expression:
             * <p>{@code Float.intBitsToFloat(0x7fffffff & Float.floatToIntBits(a))}
             * @param a   the argument whose absolute value is to be determined
             * @return the absolute value of the argument.
             */
            // @ts-ignore
            public static abs(a: number /*float*/): number /*float*/
            /**
             * Returns the absolute value of a {@code double} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * Special cases:
             * <ul><li>If the argument is positive zero or negative zero, the result
             * is positive zero.
             * <li>If the argument is infinite, the result is positive infinity.
             * <li>If the argument is NaN, the result is NaN.</ul>
             * In other words, the result is the same as the value of the expression:
             * <p>{@code Double.longBitsToDouble((Double.doubleToLongBits(a)<<1)>>>1)}
             * @param a   the argument whose absolute value is to be determined
             * @return the absolute value of the argument.
             */
            // @ts-ignore
            public static abs(a: number /*double*/): number /*double*/
            /**
             * Returns the greater of two {@code int} values. That is, the
             * result is the argument closer to the value of
             * {@link Integer#MAX_VALUE}. If the arguments have the same value,
             * the result is that same value.
             * @param a   an argument.
             * @param b   another argument.
             * @return the larger of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static max(a: number /*int*/, b: number /*int*/): number /*int*/
            /**
             * Returns the greater of two {@code long} values. That is, the
             * result is the argument closer to the value of
             * {@link Long#MAX_VALUE}. If the arguments have the same value,
             * the result is that same value.
             * @param a   an argument.
             * @param b   another argument.
             * @return the larger of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static max(a: number /*long*/, b: number /*long*/): number /*long*/
            /**
             * Returns the greater of two {@code float} values.  That is,
             * the result is the argument closer to positive infinity. If the
             * arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero. If one
             * argument is positive zero and the other negative zero, the
             * result is positive zero.
             * @param a   an argument.
             * @param b   another argument.
             * @return the larger of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static max(a: number /*float*/, b: number /*float*/): number /*float*/
            /**
             * Returns the greater of two {@code double} values.  That
             * is, the result is the argument closer to positive infinity. If
             * the arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero. If one
             * argument is positive zero and the other negative zero, the
             * result is positive zero.
             * @param a   an argument.
             * @param b   another argument.
             * @return the larger of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static max(a: number /*double*/, b: number /*double*/): number /*double*/
            /**
             * Returns the smaller of two {@code int} values. That is,
             * the result the argument closer to the value of
             * {@link Integer#MIN_VALUE}.  If the arguments have the same
             * value, the result is that same value.
             * @param a   an argument.
             * @param b   another argument.
             * @return the smaller of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static min(a: number /*int*/, b: number /*int*/): number /*int*/
            /**
             * Returns the smaller of two {@code long} values. That is,
             * the result is the argument closer to the value of
             * {@link Long#MIN_VALUE}. If the arguments have the same
             * value, the result is that same value.
             * @param a   an argument.
             * @param b   another argument.
             * @return the smaller of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static min(a: number /*long*/, b: number /*long*/): number /*long*/
            /**
             * Returns the smaller of two {@code float} values.  That is,
             * the result is the value closer to negative infinity. If the
             * arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero.  If
             * one argument is positive zero and the other is negative zero,
             * the result is negative zero.
             * @param a   an argument.
             * @param b   another argument.
             * @return the smaller of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static min(a: number /*float*/, b: number /*float*/): number /*float*/
            /**
             * Returns the smaller of two {@code double} values.  That
             * is, the result is the value closer to negative infinity. If the
             * arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero. If one
             * argument is positive zero and the other is negative zero, the
             * result is negative zero.
             * @param a   an argument.
             * @param b   another argument.
             * @return the smaller of {#code a} and {@code b}.
             */
            // @ts-ignore
            public static min(a: number /*double*/, b: number /*double*/): number /*double*/
            /**
             * Returns the size of an ulp of the argument.  An ulp, unit in
             * the last place, of a {@code double} value is the positive
             * distance between this floating-point value and the {@code
             * double} value next larger in magnitude.  Note that for non-NaN
             * <i>x</i>, <code>ulp(-<i>x</i>) == ulp(<i>x</i>)</code>.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive or negative infinity, then the
             * result is positive infinity.
             * <li> If the argument is positive or negative zero, then the result is
             * {@code Double.MIN_VALUE}.
             * <li> If the argument is &plusmn;{@code Double.MAX_VALUE}, then
             * the result is equal to 2<sup>971</sup>.
             * </ul>
             * @param d the floating-point value whose ulp is to be returned
             * @return the size of an ulp of the argument
             * @author Joseph D. Darcy
             * @since 1.5
             */
            // @ts-ignore
            public static ulp(d: number /*double*/): number /*double*/
            /**
             * Returns the size of an ulp of the argument.  An ulp, unit in
             * the last place, of a {@code float} value is the positive
             * distance between this floating-point value and the {@code
             * float} value next larger in magnitude.  Note that for non-NaN
             * <i>x</i>, <code>ulp(-<i>x</i>) == ulp(<i>x</i>)</code>.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive or negative infinity, then the
             * result is positive infinity.
             * <li> If the argument is positive or negative zero, then the result is
             * {@code Float.MIN_VALUE}.
             * <li> If the argument is &plusmn;{@code Float.MAX_VALUE}, then
             * the result is equal to 2<sup>104</sup>.
             * </ul>
             * @param f the floating-point value whose ulp is to be returned
             * @return the size of an ulp of the argument
             * @author Joseph D. Darcy
             * @since 1.5
             */
            // @ts-ignore
            public static ulp(f: number /*float*/): number /*float*/
            /**
             * Returns the signum function of the argument; zero if the argument
             * is zero, 1.0 if the argument is greater than zero, -1.0 if the
             * argument is less than zero.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive zero or negative zero, then the
             * result is the same as the argument.
             * </ul>
             * @param d the floating-point value whose signum is to be returned
             * @return the signum function of the argument
             * @author Joseph D. Darcy
             * @since 1.5
             */
            // @ts-ignore
            public static signum(d: number /*double*/): number /*double*/
            /**
             * Returns the signum function of the argument; zero if the argument
             * is zero, 1.0f if the argument is greater than zero, -1.0f if the
             * argument is less than zero.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive zero or negative zero, then the
             * result is the same as the argument.
             * </ul>
             * @param f the floating-point value whose signum is to be returned
             * @return the signum function of the argument
             * @author Joseph D. Darcy
             * @since 1.5
             */
            // @ts-ignore
            public static signum(f: number /*float*/): number /*float*/
            /**
             * Returns the hyperbolic sine of a {@code double} value.
             * The hyperbolic sine of <i>x</i> is defined to be
             * (<i>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></i>)/2
             * where <i>e</i> is {@linkplain Math#E Euler's number}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is infinite, then the result is an infinity
             * with the same sign as the argument.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             * <p>The computed result must be within 2.5 ulps of the exact result.
             * @param x The number whose hyperbolic sine is to be returned.
             * @return The hyperbolic sine of {#code x}.
             * @since 1.5
             */
            // @ts-ignore
            public static sinh(x: number /*double*/): number /*double*/
            /**
             * Returns the hyperbolic cosine of a {@code double} value.
             * The hyperbolic cosine of <i>x</i> is defined to be
             * (<i>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></i>)/2
             * where <i>e</i> is {@linkplain Math#E Euler's number}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is infinite, then the result is positive
             * infinity.
             * <li>If the argument is zero, then the result is {@code 1.0}.
             * </ul>
             * <p>The computed result must be within 2.5 ulps of the exact result.
             * @param x The number whose hyperbolic cosine is to be returned.
             * @return The hyperbolic cosine of {#code x}.
             * @since 1.5
             */
            // @ts-ignore
            public static cosh(x: number /*double*/): number /*double*/
            /**
             * Returns the hyperbolic tangent of a {@code double} value.
             * The hyperbolic tangent of <i>x</i> is defined to be
             * (<i>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></i>)/(<i>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></i>),
             * in other words, {@linkplain Math#sinh
             * sinh(<i>x</i>)}/{@linkplain Math#cosh cosh(<i>x</i>)}.  Note
             * that the absolute value of the exact tanh is always less than
             * 1.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * <li>If the argument is positive infinity, then the result is
             * {@code +1.0}.
             * <li>If the argument is negative infinity, then the result is
             * {@code -1.0}.
             * </ul>
             * <p>The computed result must be within 2.5 ulps of the exact result.
             * The result of {@code tanh} for any finite input must have
             * an absolute value less than or equal to 1.  Note that once the
             * exact result of tanh is within 1/2 of an ulp of the limit value
             * of &plusmn;1, correctly signed &plusmn;{@code 1.0} should
             * be returned.
             * @param x The number whose hyperbolic tangent is to be returned.
             * @return The hyperbolic tangent of {#code x}.
             * @since 1.5
             */
            // @ts-ignore
            public static tanh(x: number /*double*/): number /*double*/
            /**
             * Returns sqrt(<i>x</i><sup>2</sup>&nbsp;+<i>y</i><sup>2</sup>)
             * without intermediate overflow or underflow.
             * <p>Special cases:
             * <ul>
             * <li> If either argument is infinite, then the result
             * is positive infinity.
             * <li> If either argument is NaN and neither argument is infinite,
             * then the result is NaN.
             * </ul>
             * <p>The computed result must be within 1 ulp of the exact
             * result.  If one parameter is held constant, the results must be
             * semi-monotonic in the other parameter.
             * @param x a value
             * @param y a value
             * @return sqrt(<i>x</i><sup>2</sup>&nbsp;+<i>y</i><sup>2</sup>)
             *  without intermediate overflow or underflow
             * @since 1.5
             */
            // @ts-ignore
            public static hypot(x: number /*double*/, y: number /*double*/): number /*double*/
            /**
             * Returns <i>e</i><sup>x</sup>&nbsp;-1.  Note that for values of
             * <i>x</i> near 0, the exact sum of
             * {@code expm1(x)}&nbsp;+&nbsp;1 is much closer to the true
             * result of <i>e</i><sup>x</sup> than {@code exp(x)}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, the result is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is negative infinity, then the result is
             * -1.0.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.  The result of
             * {@code expm1} for any finite input must be greater than or
             * equal to {@code -1.0}.  Note that once the exact result of
             * <i>e</i><sup>{@code x}</sup>&nbsp;-&nbsp;1 is within 1/2
             * ulp of the limit value -1, {@code -1.0} should be
             * returned.
             * @param x   the exponent to raise <i>e</i> to in the computation of
             *               <i>e</i><sup>{#code x}</sup>&nbsp;-1.
             * @return the value <i>e</i><sup>{#code x}</sup>&nbsp;-&nbsp;1.
             * @since 1.5
             */
            // @ts-ignore
            public static expm1(x: number /*double*/): number /*double*/
            /**
             * Returns the natural logarithm of the sum of the argument and 1.
             * Note that for small values {@code x}, the result of
             * {@code log1p(x)} is much closer to the true result of ln(1
             * + {@code x}) than the floating-point evaluation of
             * {@code log(1.0+x)}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN or less than -1, then the result is
             * NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is negative one, then the result is
             * negative infinity.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             * <p>The computed result must be within 1 ulp of the exact result.
             * Results must be semi-monotonic.
             * @param x   a value
             * @return the value ln({#code x}&nbsp;+&nbsp;1), the natural
             *  log of {@code x}&nbsp;+&nbsp;1
             * @since 1.5
             */
            // @ts-ignore
            public static log1p(x: number /*double*/): number /*double*/
            /**
             * Returns the first floating-point argument with the sign of the
             * second floating-point argument.  Note that unlike the {@link
             * StrictMath#copySign(double, double) StrictMath.copySign}
             * method, this method does not require NaN {@code sign}
             * arguments to be treated as positive values; implementations are
             * permitted to treat some NaN arguments as positive and other NaN
             * arguments as negative to allow greater performance.
             * @param magnitude  the parameter providing the magnitude of the result
             * @param sign   the parameter providing the sign of the result
             * @return a value with the magnitude of {#code magnitude}
             *  and the sign of {@code sign}.
             * @since 1.6
             */
            // @ts-ignore
            public static copySign(magnitude: number /*double*/, sign: number /*double*/): number /*double*/
            /**
             * Returns the first floating-point argument with the sign of the
             * second floating-point argument.  Note that unlike the {@link
             * StrictMath#copySign(float, float) StrictMath.copySign}
             * method, this method does not require NaN {@code sign}
             * arguments to be treated as positive values; implementations are
             * permitted to treat some NaN arguments as positive and other NaN
             * arguments as negative to allow greater performance.
             * @param magnitude  the parameter providing the magnitude of the result
             * @param sign   the parameter providing the sign of the result
             * @return a value with the magnitude of {#code magnitude}
             *  and the sign of {@code sign}.
             * @since 1.6
             */
            // @ts-ignore
            public static copySign(magnitude: number /*float*/, sign: number /*float*/): number /*float*/
            /**
             * Returns the unbiased exponent used in the representation of a
             * {@code float}.  Special cases:
             * <ul>
             * <li>If the argument is NaN or infinite, then the result is
             * {@link Float#MAX_EXPONENT} + 1.
             * <li>If the argument is zero or subnormal, then the result is
             * {@link Float#MIN_EXPONENT} -1.
             * </ul>
             * @param f a {#code float} value
             * @return the unbiased exponent of the argument
             * @since 1.6
             */
            // @ts-ignore
            public static getExponent(f: number /*float*/): number /*int*/
            /**
             * Returns the unbiased exponent used in the representation of a
             * {@code double}.  Special cases:
             * <ul>
             * <li>If the argument is NaN or infinite, then the result is
             * {@link Double#MAX_EXPONENT} + 1.
             * <li>If the argument is zero or subnormal, then the result is
             * {@link Double#MIN_EXPONENT} -1.
             * </ul>
             * @param d a {#code double} value
             * @return the unbiased exponent of the argument
             * @since 1.6
             */
            // @ts-ignore
            public static getExponent(d: number /*double*/): number /*int*/
            /**
             * Returns the floating-point number adjacent to the first
             * argument in the direction of the second argument.  If both
             * arguments compare as equal the second argument is returned.
             * <p>
             * Special cases:
             * <ul>
             * <li> If either argument is a NaN, then NaN is returned.
             * <li> If both arguments are signed zeros, {@code direction}
             * is returned unchanged (as implied by the requirement of
             * returning the second argument if the arguments compare as
             * equal).
             * <li> If {@code start} is
             * &plusmn;{@link Double#MIN_VALUE} and {@code direction}
             * has a value such that the result should have a smaller
             * magnitude, then a zero with the same sign as {@code start}
             * is returned.
             * <li> If {@code start} is infinite and
             * {@code direction} has a value such that the result should
             * have a smaller magnitude, {@link Double#MAX_VALUE} with the
             * same sign as {@code start} is returned.
             * <li> If {@code start} is equal to &plusmn;
             * {@link Double#MAX_VALUE} and {@code direction} has a
             * value such that the result should have a larger magnitude, an
             * infinity with same sign as {@code start} is returned.
             * </ul>
             * @param start  starting floating-point value
             * @param direction value indicating which of
             *  {#code start}'s neighbors or {@code start} should
             *  be returned
             * @return The floating-point number adjacent to {#code start} in the
             *  direction of {@code direction}.
             * @since 1.6
             */
            // @ts-ignore
            public static nextAfter(start: number /*double*/, direction: number /*double*/): number /*double*/
            /**
             * Returns the floating-point number adjacent to the first
             * argument in the direction of the second argument.  If both
             * arguments compare as equal a value equivalent to the second argument
             * is returned.
             * <p>
             * Special cases:
             * <ul>
             * <li> If either argument is a NaN, then NaN is returned.
             * <li> If both arguments are signed zeros, a value equivalent
             * to {@code direction} is returned.
             * <li> If {@code start} is
             * &plusmn;{@link Float#MIN_VALUE} and {@code direction}
             * has a value such that the result should have a smaller
             * magnitude, then a zero with the same sign as {@code start}
             * is returned.
             * <li> If {@code start} is infinite and
             * {@code direction} has a value such that the result should
             * have a smaller magnitude, {@link Float#MAX_VALUE} with the
             * same sign as {@code start} is returned.
             * <li> If {@code start} is equal to &plusmn;
             * {@link Float#MAX_VALUE} and {@code direction} has a
             * value such that the result should have a larger magnitude, an
             * infinity with same sign as {@code start} is returned.
             * </ul>
             * @param start  starting floating-point value
             * @param direction value indicating which of
             *  {#code start}'s neighbors or {@code start} should
             *  be returned
             * @return The floating-point number adjacent to {#code start} in the
             *  direction of {@code direction}.
             * @since 1.6
             */
            // @ts-ignore
            public static nextAfter(start: number /*float*/, direction: number /*double*/): number /*float*/
            /**
             * Returns the floating-point value adjacent to {@code d} in
             * the direction of positive infinity.  This method is
             * semantically equivalent to {@code nextAfter(d,
             * Double.POSITIVE_INFINITY)}; however, a {@code nextUp}
             * implementation may run faster than its equivalent
             * {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is positive infinity, the result is
             * positive infinity.
             * <li> If the argument is zero, the result is
             * {@link Double#MIN_VALUE}
             * </ul>
             * @param d starting floating-point value
             * @return The adjacent floating-point value closer to positive
             *  infinity.
             * @since 1.6
             */
            // @ts-ignore
            public static nextUp(d: number /*double*/): number /*double*/
            /**
             * Returns the floating-point value adjacent to {@code f} in
             * the direction of positive infinity.  This method is
             * semantically equivalent to {@code nextAfter(f,
             * Float.POSITIVE_INFINITY)}; however, a {@code nextUp}
             * implementation may run faster than its equivalent
             * {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is positive infinity, the result is
             * positive infinity.
             * <li> If the argument is zero, the result is
             * {@link Float#MIN_VALUE}
             * </ul>
             * @param f starting floating-point value
             * @return The adjacent floating-point value closer to positive
             *  infinity.
             * @since 1.6
             */
            // @ts-ignore
            public static nextUp(f: number /*float*/): number /*float*/
            /**
             * Returns the floating-point value adjacent to {@code d} in
             * the direction of negative infinity.  This method is
             * semantically equivalent to {@code nextAfter(d,
             * Double.NEGATIVE_INFINITY)}; however, a
             * {@code nextDown} implementation may run faster than its
             * equivalent {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is negative infinity, the result is
             * negative infinity.
             * <li> If the argument is zero, the result is
             * {@code -Double.MIN_VALUE}
             * </ul>
             * @param d  starting floating-point value
             * @return The adjacent floating-point value closer to negative
             *  infinity.
             * @since 1.8
             */
            // @ts-ignore
            public static nextDown(d: number /*double*/): number /*double*/
            /**
             * Returns the floating-point value adjacent to {@code f} in
             * the direction of negative infinity.  This method is
             * semantically equivalent to {@code nextAfter(f,
             * Float.NEGATIVE_INFINITY)}; however, a
             * {@code nextDown} implementation may run faster than its
             * equivalent {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is negative infinity, the result is
             * negative infinity.
             * <li> If the argument is zero, the result is
             * {@code -Float.MIN_VALUE}
             * </ul>
             * @param f  starting floating-point value
             * @return The adjacent floating-point value closer to negative
             *  infinity.
             * @since 1.8
             */
            // @ts-ignore
            public static nextDown(f: number /*float*/): number /*float*/
            /**
             * Returns {@code d} &times;
             * 2<sup>{@code scaleFactor}</sup> rounded as if performed
             * by a single correctly rounded floating-point multiply to a
             * member of the double value set.  See the Java
             * Language Specification for a discussion of floating-point
             * value sets.  If the exponent of the result is between {@link
             * Double#MIN_EXPONENT} and {@link Double#MAX_EXPONENT}, the
             * answer is calculated exactly.  If the exponent of the result
             * would be larger than {@code Double.MAX_EXPONENT}, an
             * infinity is returned.  Note that if the result is subnormal,
             * precision may be lost; that is, when {@code scalb(x, n)}
             * is subnormal, {@code scalb(scalb(x, n), -n)} may not equal
             * <i>x</i>.  When the result is non-NaN, the result has the same
             * sign as {@code d}.
             * <p>Special cases:
             * <ul>
             * <li> If the first argument is NaN, NaN is returned.
             * <li> If the first argument is infinite, then an infinity of the
             * same sign is returned.
             * <li> If the first argument is zero, then a zero of the same
             * sign is returned.
             * </ul>
             * @param d number to be scaled by a power of two.
             * @param scaleFactor power of 2 used to scale {#code d}
             * @return {#code d} &times; 2<sup>{@code scaleFactor}</sup>
             * @since 1.6
             */
            // @ts-ignore
            public static scalb(d: number /*double*/, scaleFactor: number /*int*/): number /*double*/
            /**
             * Returns {@code f} &times;
             * 2<sup>{@code scaleFactor}</sup> rounded as if performed
             * by a single correctly rounded floating-point multiply to a
             * member of the float value set.  See the Java
             * Language Specification for a discussion of floating-point
             * value sets.  If the exponent of the result is between {@link
             * Float#MIN_EXPONENT} and {@link Float#MAX_EXPONENT}, the
             * answer is calculated exactly.  If the exponent of the result
             * would be larger than {@code Float.MAX_EXPONENT}, an
             * infinity is returned.  Note that if the result is subnormal,
             * precision may be lost; that is, when {@code scalb(x, n)}
             * is subnormal, {@code scalb(scalb(x, n), -n)} may not equal
             * <i>x</i>.  When the result is non-NaN, the result has the same
             * sign as {@code f}.
             * <p>Special cases:
             * <ul>
             * <li> If the first argument is NaN, NaN is returned.
             * <li> If the first argument is infinite, then an infinity of the
             * same sign is returned.
             * <li> If the first argument is zero, then a zero of the same
             * sign is returned.
             * </ul>
             * @param f number to be scaled by a power of two.
             * @param scaleFactor power of 2 used to scale {#code f}
             * @return {#code f} &times; 2<sup>{@code scaleFactor}</sup>
             * @since 1.6
             */
            // @ts-ignore
            public static scalb(f: number /*float*/, scaleFactor: number /*int*/): number /*float*/
        }
    }
}
