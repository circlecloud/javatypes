declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                /**
                 * Order that {@link Listener}d methods may be registered at.
                 * <p>Event handlers are called the order given in the following table.</p>
                 * <table summary="Order Recommendations">
                 * <tr><td>Order</td>       <td>Read Only</td> <td>Cancellation Allowed</td>
                 * <td>Recommendation</td></tr>
                 * <tr><td>PRE</td>         <td>YES</td>       <td>NO</td>
                 * <td>Initialisation and registration actions</td></tr>
                 * <tr><td>AFTER_PRE</td>   <td>YES</td>       <td>NO</td>
                 * <td>Immediate responses to actions in PRE</td></tr>
                 * <tr><td>FIRST</td>       <td>YES</td>       <td>YES</td>
                 * <td>
                 * Cancellation by protection plugins for informational purposes
                 * </td>
                 * </tr>
                 * <tr><td>EARLY</td>       <td>NO</td>        <td>YES</td>
                 * <td>Standard actions that should happen before other plugins react to
                 * the event</td>
                 * </tr>
                 * <tr><td>DEFAULT</td>     <td>NO</td>        <td>YES</td>
                 * <td>The default action order</td></tr>
                 * <tr><td>LATE</td>        <td>NO</td>        <td>YES</td>
                 * <td>Standard actions that should happen after other plugins react to
                 * the event</td>
                 * </tr>
                 * <tr><td>LAST</td>        <td>YES</td>       <td>YES</td>
                 * <td>Final cancellation by protection plugins</td></tr>
                 * <tr><td>BEFORE_POST</td> <td>YES</td>       <td>NO</td>
                 * <td>Actions that need to respond to cancelled events before POST</td>
                 * </tr>
                 * <tr><td>POST</td>        <td>YES</td>       <td>NO</td>
                 * <td>Actions that need to react to the final and stable effects of
                 * event</td>
                 * </tr>
                 * </table>
                 */
                // @ts-ignore
                class Order extends java.lang.Enum<org.spongepowered.api.event.Order> {
                    // @ts-ignore
                    values(): org.spongepowered.api.event.Order[]
                    // @ts-ignore
                    valueOf(name: string): org.spongepowered.api.event.Order
                }
            }
        }
    }
}
