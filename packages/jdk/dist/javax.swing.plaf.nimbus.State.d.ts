declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace nimbus {
                /**
                 * <p>Represents a built in, or custom, state in Nimbus.</p>
                 * <p>Synth provides several built in states, which are:
                 * <ul>
                 * <li>Enabled</li>
                 * <li>Mouse Over</li>
                 * <li>Pressed</li>
                 * <li>Disabled</li>
                 * <li>Focused</li>
                 * <li>Selected</li>
                 * <li>Default</li>
                 * </ul>
                 * <p>However, there are many more states that could be described in a LookAndFeel, and it
                 * would be nice to style components differently based on these different states.
                 * For example, a progress bar could be "indeterminate". It would be very convenient
                 * to allow this to be defined as a "state".</p>
                 * <p>This class, State, is intended to be used for such situations.
                 * Simply implement the abstract #isInState method. It returns true if the given
                 * JComponent is "in this state", false otherwise. This method will be called
                 * <em>many</em> times in <em>performance sensitive loops</em>. It must execute
                 * very quickly.</p>
                 * <p>For example, the following might be an implementation of a custom
                 * "Indeterminate" state for JProgressBars:</p>
                 * <pre><code>
                 * public final class IndeterminateState extends State&lt;JProgressBar&gt; {
                 * public IndeterminateState() {
                 * super("Indeterminate");
                 * }
                 * &#64;Override
                 * protected boolean isInState(JProgressBar c) {
                 * return c.isIndeterminate();
                 * }
                 * }
                 * </code></pre>
                 */
                // @ts-ignore
                abstract class State<T extends javax.swing.JComponent> extends java.lang.Object {
                    /**
                     * <p>Create a new custom State. Specify the name for the state. The name should
                     * be unique within the states set for any one particular component.
                     * The name of the state should coincide with the name used in UIDefaults.</p>
                     * <p>For example, the following would be correct:</p>
                     * <pre><code>
                     * defaults.put("Button.States", "Enabled, Foo, Disabled");
                     * defaults.put("Button.Foo", new FooState("Foo"));
                     * </code></pre>
                     * @param name a simple user friendly name for the state, such as "Indeterminate"
                     *         or "EmbeddedPanel" or "Blurred". It is customary to use camel case,
                     *         with the first letter capitalized.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    public toString(): string
                    /**
                     * <p>Gets whether the specified JComponent is in the custom state represented
                     * by this class. <em>This is an extremely performance sensitive loop.</em>
                     * Please take proper precautions to ensure that it executes quickly.</p>
                     * <p>Nimbus uses this method to help determine what state a JComponent is
                     * in. For example, a custom State could exist for JProgressBar such that
                     * it would return <code>true</code> when the progress bar is indeterminate.
                     * Such an implementation of this method would simply be:</p>
                     * <pre><code> return c.isIndeterminate();</code></pre>
                     * @param c the JComponent to test. This will never be null.
                     * @return true if <code>c</code> is in the custom state represented by
                     *          this <code>State</code> instance
                     */
                    // @ts-ignore
                    abstract isInState(c: T): boolean
                }
            }
        }
    }
}
