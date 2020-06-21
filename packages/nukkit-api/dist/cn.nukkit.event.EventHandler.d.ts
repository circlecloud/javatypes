declare namespace cn {
    namespace nukkit {
        namespace event {
            /**
             * 定义一个事件的处理器的注解。<br>
             * Annotation that defines a handler.
             * <p>一个处理器的重要程度被称作处理器的<b>优先级</b>，优先级高的处理器有更多的决定权。参见：{@link #priority()}<br>
             * The importance of a handler is called its <b>priority</b>, handlers with higher priority speaks louder then
             * lower ones. See: {@link #priority()}</p>
             * <p>处理器可以选择忽略或不忽略被取消的事件，这种特性可以在{@link #ignoreCancelled()}中定义。<br>
             * A handler can choose to ignore a cancelled event or not, that can be defined in {@link #ignoreCancelled()}.</p>
             * @author MagicDroidX(code) # Nukkit Project
             * @author null(javadoc) # Nukkit Project
             * @see cn.nukkit.event.Listener
             * @see cn.nukkit.event.Event
             * @since Nukkit 1.0 | Nukkit API 1.0.0
             */
            // @ts-ignore
            abstract class EventHandler implements java.lang.annotation.Annotation {
            }
        }
    }
}
